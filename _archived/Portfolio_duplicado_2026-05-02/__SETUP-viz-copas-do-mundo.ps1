# =====================================================================
# __SETUP-viz-copas-do-mundo.ps1
# =====================================================================
# Bootstrap one-shot do projeto Viz Copas do Mundo.
#
# O QUE FAZ:
#   1) Descompacta __SETUP-viz-copas-do-mundo.zip (que esta junto deste arquivo)
#   2) Cria a pasta destino ~/OneDrive/Documentos/GitHub/viz-copas-do-mundo/
#   3) Move o conteudo para la
#   4) Inicializa git local
#   5) Cria venv Python e instala dependencias
#   6) Roda pipeline: download Camada 1 -> transform -> star schema CSVs
#   7) Faz primeiro commit
#   8) Te diz quais arquivos voce pode apagar do Portfolio
#
# COMO USAR:
#   1) Abra PowerShell (Win+X -> Terminal)
#   2) Se primeira vez rodando .ps1:
#        Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
#   3) Navegue ate a pasta do portfolio:
#        cd "C:\Users\dfrei\OneDrive\Documentos\GitHub\portfolio\Portfólio"
#   4) Execute:
#        .\__SETUP-viz-copas-do-mundo.ps1
# =====================================================================

$ErrorActionPreference = "Stop"

# ---------- Configuracao ----------
$ScriptDir   = $PSScriptRoot
$SourceZip   = Join-Path $ScriptDir "__SETUP-viz-copas-do-mundo.zip"
$TargetDir   = "$env:USERPROFILE\OneDrive\Documentos\GitHub\viz-copas-do-mundo"
$TempExtract = Join-Path $env:TEMP "viz-copas-extract-$(Get-Random)"

# ---------- Helpers ----------
function Write-Step($msg)       { Write-Host "`n>>> $msg" -ForegroundColor Cyan }
function Write-Ok($msg)         { Write-Host "    OK  $msg" -ForegroundColor Green }
function Write-Warn($msg)       { Write-Host "    !!  $msg" -ForegroundColor Yellow }
function Write-ErrAndExit($msg) { Write-Host "    XX  $msg" -ForegroundColor Red; exit 1 }

# =====================================================================
Write-Step "1/7 Validando ambiente"
# =====================================================================

if (-not (Test-Path $SourceZip)) {
    Write-ErrAndExit "ZIP nao encontrado: $SourceZip"
}
Write-Ok "ZIP fonte: $SourceZip"

try {
    $pyVersion = (python --version) 2>&1
    Write-Ok "Python: $pyVersion"
} catch {
    Write-ErrAndExit "Python nao encontrado no PATH. Instale Python 3.10+ em https://python.org"
}

try {
    $gitVersion = (git --version) 2>&1
    Write-Ok "Git: $gitVersion"
} catch {
    Write-ErrAndExit "Git nao encontrado. Instale em https://git-scm.com"
}

# =====================================================================
Write-Step "2/7 Descompactando projeto"
# =====================================================================

if (Test-Path $TargetDir) {
    Write-Warn "Pasta destino ja existe: $TargetDir"
    $resp = Read-Host "    Sobrescrever? (s/N)"
    if ($resp -ne "s" -and $resp -ne "S") { Write-ErrAndExit "Cancelado." }
    Remove-Item -Recurse -Force $TargetDir
}

New-Item -ItemType Directory -Force -Path $TempExtract | Out-Null
Expand-Archive -Path $SourceZip -DestinationPath $TempExtract -Force
Write-Ok "Descompactado em $TempExtract"

$ExtractedRoot = Join-Path $TempExtract "viz-copas-do-mundo"
if (-not (Test-Path $ExtractedRoot)) {
    $ExtractedRoot = (Get-ChildItem $TempExtract -Directory | Select-Object -First 1).FullName
}
if (-not (Test-Path $ExtractedRoot)) { Write-ErrAndExit "Nao consegui localizar pasta do projeto no ZIP." }

Move-Item -Path $ExtractedRoot -Destination $TargetDir
Remove-Item -Recurse -Force $TempExtract
Write-Ok "Projeto em $TargetDir"

# =====================================================================
Write-Step "3/7 Inicializando git local"
# =====================================================================

Push-Location $TargetDir
try {
    if (Test-Path ".git") {
        Write-Warn "Repo git ja existe. Pulando init."
    } else {
        git init -b main | Out-Null
        Write-Ok "git init -b main"
    }

    $userName  = git config user.name
    $userEmail = git config user.email
    if (-not $userName -or -not $userEmail) {
        Write-Warn "git user.name/email nao configurados globalmente."
        $name  = Read-Host "    Seu nome (ex: Diego Furtado)"
        $email = Read-Host "    Seu email (ex: diegoiribarrem@gmail.com)"
        git config user.name $name
        git config user.email $email
        Write-Ok "Identidade configurada localmente."
    } else {
        Write-Ok "git user: $userName <$userEmail>"
    }
} finally { Pop-Location }

# =====================================================================
Write-Step "4/7 Criando venv e instalando dependencias"
# =====================================================================

Push-Location $TargetDir
try {
    if (-not (Test-Path "venv")) {
        python -m venv venv
        Write-Ok "venv criado"
    } else {
        Write-Warn "venv ja existe, pulando"
    }
    & ".\venv\Scripts\Activate.ps1"
    python -m pip install --upgrade pip --quiet
    pip install -r scripts\requirements.txt --quiet
    Write-Ok "Dependencias instaladas"
} finally { Pop-Location }

# =====================================================================
Write-Step "5/7 Pipeline: download Camada 1"
# =====================================================================

Push-Location $TargetDir
try {
    & ".\venv\Scripts\Activate.ps1"
    python scripts\01_download_layer1.py
    Write-Ok "Download concluido"
} catch {
    Write-Warn "Download falhou: $_"
    Write-Warn "Cheque sua internet e rode manualmente: python scripts\01_download_layer1.py"
} finally { Pop-Location }

# =====================================================================
Write-Step "6/7 Pipeline: transformacao em star schema"
# =====================================================================

Push-Location $TargetDir
try {
    & ".\venv\Scripts\Activate.ps1"
    python scripts\02_transform_layer1.py
    Write-Ok "Star schema gerado em data\processed\"
} catch {
    Write-Warn "Transform falhou: $_"
} finally { Pop-Location }

# =====================================================================
Write-Step "7/7 Primeiro commit"
# =====================================================================

Push-Location $TargetDir
try {
    git add .
    $hasChanges = (git status --porcelain).Length -gt 0
    if ($hasChanges) {
        git commit -m "Initial commit: scaffolding + Camada 1 (martj42 1930-2022)" --quiet
        Write-Ok "Commit feito"
    }
} finally { Pop-Location }

# =====================================================================
Write-Host @"

   ============================================================
   PRONTO! Projeto montado em:
   $TargetDir
   ============================================================

   PROXIMOS PASSOS MANUAIS:

   [A] Limpar Portfolio (apague esses 2 arquivos):
       - $($ScriptDir)\__SETUP-viz-copas-do-mundo.ps1
       - $($ScriptDir)\__SETUP-viz-copas-do-mundo.zip

   [B] Criar repo no GitHub.com:
       1. Acesse https://github.com/new
       2. Nome: viz-copas-do-mundo
       3. Visibilidade: Public
       4. NAO marque Initialize with README/gitignore/license

   [C] Conectar e fazer push:
       cd "$TargetDir"
       git remote add origin https://github.com/<seu-usuario>/viz-copas-do-mundo.git
       git push -u origin main

   [D] Tableau Public:
       1. Baixe Tableau Public Desktop em https://public.tableau.com
       2. Cadastre conta (qualquer email funciona)
       3. Em Tableau: Connect -> Text File -> data\processed\dim_match.csv
       4. Adicione as outras tabelas pela Data Source page
       5. Quando pronto: File -> Save to Tableau Public As...

   [E] Edite README.md e cole a URL do dashboard publicado.
       git add README.md && git commit -m "Add live dashboard URL" && git push

"@ -ForegroundColor White

Write-Host "Boa sorte com o portfolio!" -ForegroundColor Cyan
