# =====================================================================
# setup.ps1 — bootstrap do projeto viz-copas-do-mundo
# =====================================================================
#
# O que esse script faz, em ordem:
#   1) Cria a pasta destino em ~/OneDrive/Documentos/GitHub/viz-copas-do-mundo/
#   2) Copia tudo do diretório "outputs" do Claude para essa pasta
#   3) Inicializa repositório git local
#   4) Cria venv Python e instala dependências
#   5) Roda o pipeline: download (Camada 1) → transform → star schema
#   6) Imprime próximos passos (criar repo no GitHub.com e dar push)
#
# COMO USAR:
#   1) Abra o PowerShell (Win + X → "Terminal" ou "PowerShell")
#   2) Se for a 1a vez rodando script PS1:
#        Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
#   3) Navegue até o diretório que contém esse arquivo:
#        cd "C:\Users\dfrei\AppData\Roaming\Claude\local-agent-mode-sessions\57460ee7-ada0-416a-85bd-0c36ad69befc\e5398448-5fae-46cb-b34b-80b75ac51d22\local_b0bbf423-829c-4692-b4d1-7e5289268a07\outputs\viz-copas-do-mundo"
#   4) Execute:
#        .\setup.ps1
#
# =====================================================================

$ErrorActionPreference = "Stop"

# ---------- Configuração ----------
$SourceDir = "C:\Users\dfrei\AppData\Roaming\Claude\local-agent-mode-sessions\57460ee7-ada0-416a-85bd-0c36ad69befc\e5398448-5fae-46cb-b34b-80b75ac51d22\local_b0bbf423-829c-4692-b4d1-7e5289268a07\outputs\viz-copas-do-mundo"
$TargetDir = "$env:USERPROFILE\OneDrive\Documentos\GitHub\viz-copas-do-mundo"

# ---------- Helpers de output ----------
function Write-Step($msg)    { Write-Host "`n>>> $msg" -ForegroundColor Cyan }
function Write-Ok($msg)      { Write-Host "    OK  $msg" -ForegroundColor Green }
function Write-Warn($msg)    { Write-Host "    !!  $msg" -ForegroundColor Yellow }
function Write-ErrAndExit($msg) { Write-Host "    XX  $msg" -ForegroundColor Red; exit 1 }

# =====================================================================
Write-Step "1/6 Validando ambiente"
# =====================================================================

# Confere que estamos rodando da pasta source
if (-not (Test-Path $SourceDir)) {
    Write-ErrAndExit "Source nao encontrado: $SourceDir"
}
Write-Ok "Source: $SourceDir"

# Confere Python
try {
    $pyVersion = (python --version) 2>&1
    Write-Ok "Python detectado: $pyVersion"
} catch {
    Write-ErrAndExit "Python nao encontrado no PATH. Instale Python 3.10+ em https://python.org"
}

# Confere git
try {
    $gitVersion = (git --version) 2>&1
    Write-Ok "Git detectado: $gitVersion"
} catch {
    Write-ErrAndExit "Git nao encontrado. Instale em https://git-scm.com"
}

# =====================================================================
Write-Step "2/6 Copiando projeto para $TargetDir"
# =====================================================================

if (Test-Path $TargetDir) {
    Write-Warn "Pasta destino ja existe."
    $resp = Read-Host "    Sobrescrever conteudo? (s/N)"
    if ($resp -ne "s" -and $resp -ne "S") {
        Write-ErrAndExit "Cancelado pelo usuario."
    }
}

New-Item -ItemType Directory -Force -Path $TargetDir | Out-Null
# Copia tudo exceto o proprio setup.ps1 (que vai junto, mas mantemos no source para referencia)
Copy-Item -Path "$SourceDir\*" -Destination $TargetDir -Recurse -Force
Write-Ok "Arquivos copiados."

# =====================================================================
Write-Step "3/6 Inicializando git local"
# =====================================================================

Push-Location $TargetDir
try {
    if (Test-Path ".git") {
        Write-Warn "Repo git ja existe nesse diretorio. Pulando init."
    } else {
        git init -b main | Out-Null
        Write-Ok "git init -b main"
    }

    # Configurar identidade (usa global se existir, senao pede)
    $userName = git config user.name
    $userEmail = git config user.email
    if (-not $userName -or -not $userEmail) {
        Write-Warn "git user.name/email nao configurados globalmente."
        $name = Read-Host "    Seu nome (ex: Diego Furtado)"
        $email = Read-Host "    Seu email (ex: diegoiribarrem@gmail.com)"
        git config user.name $name
        git config user.email $email
        Write-Ok "Identidade configurada localmente para esse repo."
    } else {
        Write-Ok "git user: $userName <$userEmail>"
    }
} finally {
    Pop-Location
}

# =====================================================================
Write-Step "4/6 Criando venv e instalando dependencias"
# =====================================================================

Push-Location $TargetDir
try {
    if (Test-Path "venv") {
        Write-Warn "venv ja existe. Pulando criacao."
    } else {
        python -m venv venv
        Write-Ok "venv criado."
    }

    # Ativa o venv
    & ".\venv\Scripts\Activate.ps1"
    Write-Ok "venv ativado."

    # Instala
    python -m pip install --upgrade pip --quiet
    pip install -r scripts\requirements.txt --quiet
    Write-Ok "Dependencias instaladas."
} finally {
    Pop-Location
}

# =====================================================================
Write-Step "5/6 Rodando pipeline (download + transform)"
# =====================================================================

Push-Location $TargetDir
try {
    & ".\venv\Scripts\Activate.ps1"

    Write-Host "`n--- Download Camada 1 ---" -ForegroundColor Magenta
    python scripts\01_download_layer1.py

    Write-Host "`n--- Transform Camada 1 ---" -ForegroundColor Magenta
    python scripts\02_transform_layer1.py

    Write-Ok "Pipeline executado com sucesso."
} catch {
    Write-Warn "Pipeline falhou: $_"
    Write-Warn "Voce pode rodar manualmente os scripts em scripts\ depois de investigar."
} finally {
    Pop-Location
}

# =====================================================================
Write-Step "6/6 Primeiro commit"
# =====================================================================

Push-Location $TargetDir
try {
    git add .
    $hasChanges = (git status --porcelain).Length -gt 0
    if ($hasChanges) {
        git commit -m "Initial commit: scaffolding + Camada 1 (martj42 1930-2022)" --quiet
        Write-Ok "Primeiro commit feito."
    } else {
        Write-Warn "Nenhuma mudanca para commitar."
    }
} finally {
    Pop-Location
}

# =====================================================================
Write-Step "PRONTO! Proximos passos manuais"
# =====================================================================

Write-Host @"

   Projeto montado em: $TargetDir

   PROXIMOS PASSOS:

   1. Crie o repositorio remoto no GitHub.com:
      - Acesse https://github.com/new
      - Nome sugerido: viz-copas-do-mundo
      - Visibilidade: Public (e parte do portfolio)
      - NAO inicialize com README, .gitignore ou LICENSE (ja temos locais)

   2. Conecte o local ao remoto e faca push:
      cd "$TargetDir"
      git remote add origin https://github.com/<seu-usuario>/viz-copas-do-mundo.git
      git push -u origin main

   3. Abra o Tableau Public Desktop:
      - File -> Open -> aponte para data\processed\dim_match.csv (Tableau detecta star schema)
      - Adicione as outras tabelas via Data Source page
      - Salve em tableau\copas-do-mundo.twb

   4. Quando o dashboard estiver pronto:
      - File -> Save to Tableau Public As... (publica no public.tableau.com)
      - Cole a URL no README na linha 'Dashboard live'
      - Faca novo commit + push

"@ -ForegroundColor White

Write-Host "Bom trabalho." -ForegroundColor Cyan
