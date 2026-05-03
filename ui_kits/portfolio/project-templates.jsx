/**
 * 6 templates de página de projeto — Diego Furtado Portfolio
 * Exporta: Template1…Template6, ProjectPage
 */
const { useState } = React;

/* ── Utilitários locais ── */
const TBr = ({ color='#1A1A1A', size=12, opacity=0.35 }) => <>
  <div style={{position:'absolute',top:6,left:6,width:size,height:size,borderTop:`1px solid ${color}`,borderLeft:`1px solid ${color}`,opacity,pointerEvents:'none'}}/>
  <div style={{position:'absolute',top:6,right:6,width:size,height:size,borderTop:`1px solid ${color}`,borderRight:`1px solid ${color}`,opacity,pointerEvents:'none'}}/>
  <div style={{position:'absolute',bottom:6,left:6,width:size,height:size,borderBottom:`1px solid ${color}`,borderLeft:`1px solid ${color}`,opacity,pointerEvents:'none'}}/>
  <div style={{position:'absolute',bottom:6,right:6,width:size,height:size,borderBottom:`1px solid ${color}`,borderRight:`1px solid ${color}`,opacity,pointerEvents:'none'}}/>
</>;

const BackBtn = ({ onBack, light=false }) => (
  <button onClick={onBack} style={{background:'none',border:'none',fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.22em',textTransform:'uppercase',color:light?'rgba(255,255,255,0.45)':'rgba(26,26,26,0.38)',cursor:'pointer',display:'block',marginBottom:32,padding:0,transition:'color 120ms'}}
    onMouseEnter={e=>e.target.style.color=light?'rgba(255,255,255,0.85)':'rgba(26,26,26,0.8)'}
    onMouseLeave={e=>e.target.style.color=light?'rgba(255,255,255,0.45)':'rgba(26,26,26,0.38)'}>← Voltar</button>
);

const TPill = ({ tag, color }) => (
  <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',background:`${color}15`,color,border:`1px solid ${color}40`,padding:'4px 10px',display:'inline-block'}}>{tag}</span>
);

const AllTags = ({ project, color }) => {
  const all = [...(project.tools||[]),...(project.tags||[])].filter((v,i,a)=>a.indexOf(v)===i);
  return <div style={{display:'flex',flexWrap:'wrap',gap:6}}>{all.map(t=><TPill key={t} tag={t} color={color}/>)}</div>;
};

const ImagePlaceholder = ({ color, cd, caption, motif='circles' }) => (
  <div style={{background:cd,aspectRatio:'16/9',position:'relative',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:12}}>
    <div style={{position:'absolute',inset:0,opacity:0.06}}>
      <svg width="100%" height="100%" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
        {motif==='circles' && Array.from({length:6},(_,i)=><circle key={i} cx="200" cy="112" r={20+i*24} fill="none" stroke={color} strokeWidth="1"/>)}
        {motif==='squares' && Array.from({length:5},(_,i)=><rect key={i} x={60+i*20} y={30+i*14} width={280-i*40} height={165-i*28} fill="none" stroke={color} strokeWidth="1" transform={`rotate(${i*4} 200 112)`}/>)}
        {motif==='triangles' && Array.from({length:5},(_,i)=>{const s=160-i*28;return<polygon key={i} points={`200,${112-s*0.6} ${200+s*0.6},${112+s*0.4} ${200-s*0.6},${112+s*0.4}`} fill="none" stroke={color} strokeWidth="1"/>;}) }
      </svg>
    </div>
    {caption && <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:`${color}70`,position:'relative',zIndex:1,textAlign:'center',padding:'0 24px'}}>{caption}</span>}
  </div>
);

/* ══════════════════════════════════════════════════
   T1 — DASHBOARD SPLIT
   Painel escuro com métricas à esquerda + conteúdo à direita
   Ideal para: Power BI, Tableau
══════════════════════════════════════════════════ */
const Template1 = ({ project, category, onBack }) => {
  const c=category.color, cd=category.colorDark;
  return (
    <div style={{display:'grid',gridTemplateColumns:'36% 64%',minHeight:'100vh'}}>
      {/* LEFT — dark metrics panel */}
      <div style={{background:cd,padding:'80px 40px 48px',display:'flex',flexDirection:'column',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',right:-60,bottom:-60,opacity:0.07}}>
          <svg width="320" height="320" viewBox="0 0 320 320">{Array.from({length:7},(_,i)=><circle key={i} cx="160" cy="160" r={18+i*22} fill="none" stroke={c} strokeWidth="1"/>)}</svg>
        </div>
        <BackBtn onBack={onBack} light/>
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:16}}>
          <div style={{width:8,height:8,background:c}}/>
          <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.28em',textTransform:'uppercase',color:c}}>{category.label}</span>
        </div>
        <h1 style={{fontFamily:'var(--D)',fontSize:'clamp(30px,3vw,44px)',letterSpacing:'0.04em',textTransform:'uppercase',color:'#fff',lineHeight:1.05,marginBottom:8}}>{project.title}</h1>
        <p style={{fontFamily:'var(--M)',fontSize:10,fontStyle:'italic',color:'rgba(255,255,255,0.35)',lineHeight:1.6,marginBottom:'auto'}}>{project.subtitle}</p>

        <div style={{borderTop:`1px solid rgba(255,255,255,0.07)`,paddingTop:28,marginTop:32,display:'flex',flexDirection:'column',gap:18}}>
          {project.results.map((r,i)=>(
            <div key={i} style={{display:'flex',alignItems:'baseline',gap:10}}>
              <span style={{fontFamily:'var(--D)',fontSize:40,color:c,lineHeight:1}}>{r.value}</span>
              <span style={{fontFamily:'var(--M)',fontSize:9,color:'rgba(255,255,255,0.38)',letterSpacing:'0.12em',textTransform:'uppercase',maxWidth:130,lineHeight:1.4}}>{r.label}</span>
            </div>
          ))}
        </div>
        <div style={{fontFamily:'var(--M)',fontSize:9,color:'rgba(255,255,255,0.2)',letterSpacing:'0.15em',textTransform:'uppercase',marginTop:24}}>{project.year}</div>
      </div>

      {/* RIGHT — content */}
      <div style={{background:'var(--cream)',padding:'80px 48px 56px',display:'flex',flexDirection:'column',gap:28,overflowY:'auto'}}>
        {project.embedUrl
          ? <iframe src={project.embedUrl} style={{border:'none',width:'100%',aspectRatio:'16/9',display:'block'}} title={project.title}/>
          : <ImagePlaceholder color={c} cd={cd} caption={project.imageCaption} motif={project.interest==='esportes'?'squares':project.interest==='entretenimento'?'triangles':'circles'}/>
        }
        <div>
          {project.desc.split('\n').map((p,i)=>p&&<p key={i} style={{fontFamily:'var(--M)',fontSize:12,lineHeight:1.95,color:'rgba(26,26,26,0.65)',marginBottom:14}}>{p}</p>)}
        </div>
        <div style={{paddingTop:20,borderTop:'1px solid rgba(26,26,26,0.08)',marginTop:'auto'}}>
          <AllTags project={project} color={c}/>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   T2 — TERMINAL DARK
   Fundo escuro, estética de editor de código
   Ideal para: Python, SQL
══════════════════════════════════════════════════ */
const Template2 = ({ project, category, onBack }) => {
  const c=category.color;
  const lines=(project.codeSnippet||'').split('\n');
  return (
    <div style={{background:'#0D1117',minHeight:'100vh',padding:'80px 0 80px'}}>
      <div style={{maxWidth:900,margin:'0 auto',padding:'0 48px'}}>
        <BackBtn onBack={onBack} light/>
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
          <div style={{width:8,height:8,background:c}}/>
          <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.3em',textTransform:'uppercase',color:`${c}99`}}>{category.label}</span>
          <span style={{fontFamily:'var(--M)',fontSize:9,color:'rgba(255,255,255,0.18)',marginLeft:8,letterSpacing:'0.1em'}}>{project.year}</span>
        </div>
        <h1 style={{fontFamily:'var(--D)',fontSize:'clamp(48px,6vw,80px)',letterSpacing:'0.04em',textTransform:'uppercase',color:'#fff',lineHeight:1,marginBottom:8}}>{project.title}</h1>
        <p style={{fontFamily:'var(--M)',fontSize:11,color:'rgba(255,255,255,0.3)',marginBottom:40,letterSpacing:'0.05em',fontStyle:'italic'}}>{project.subtitle}</p>

        {/* Terminal window */}
        {lines.length > 1 && (
          <div style={{background:'#161b22',border:'1px solid rgba(255,255,255,0.07)',marginBottom:28}}>
            <div style={{background:'#21262d',padding:'10px 16px',display:'flex',alignItems:'center',gap:8,borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
              {['#e0003d','#ffee00','#3fb950'].map(col=><div key={col} style={{width:10,height:10,borderRadius:'50%',background:col}}/>)}
              <span style={{fontFamily:'var(--M)',fontSize:9,color:'rgba(255,255,255,0.25)',marginLeft:8}}>pipeline.py</span>
            </div>
            <div style={{padding:'20px 24px',overflowX:'auto'}}>
              {lines.map((line,i)=>{
                const isComment=line.trim().startsWith('#');
                const isImport=line.startsWith('import')||line.startsWith('from');
                const isDef=line.startsWith('def ')||line.startsWith('class ');
                const isStr=line.includes("'") || line.includes('"');
                const col=isComment?'#8b949e':isImport?'#ff7b72':isDef?c:isStr?'#a5d6ff':'#e6edf3';
                return <div key={i} style={{fontFamily:'var(--M)',fontSize:11,lineHeight:1.85,color:col,whiteSpace:'pre'}}>{line}</div>;
              })}
            </div>
          </div>
        )}

        {/* Output */}
        <div style={{background:'#0a0c10',border:'1px solid rgba(255,255,255,0.05)',padding:'20px 24px',marginBottom:32}}>
          <div style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.22em',textTransform:'uppercase',color:'rgba(255,255,255,0.2)',marginBottom:16}}>$ resultados</div>
          {project.results.map((r,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:14,marginBottom:10}}>
              <span style={{color:'#3fb950',fontFamily:'var(--M)',fontSize:12}}>✓</span>
              <span style={{fontFamily:'var(--D)',fontSize:24,color:c,lineHeight:1}}>{r.value}</span>
              <span style={{fontFamily:'var(--M)',fontSize:10,color:'rgba(255,255,255,0.38)',letterSpacing:'0.08em'}}>{r.label}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div style={{marginBottom:32}}>
          {project.desc.split('\n').map((p,i)=>p&&(
            <p key={i} style={{fontFamily:'var(--M)',fontSize:12,lineHeight:1.95,color:'rgba(255,255,255,0.45)',marginBottom:14}}>
              <span style={{color:'rgba(255,255,255,0.18)'}}># </span>{p}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div style={{paddingTop:20,borderTop:'1px solid rgba(255,255,255,0.06)'}}>
          <AllTags project={project} color={c}/>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   T3 — EDITORIAL
   Layout acadêmico, ensaístico, com citação em destaque
   Ideal para: Pesquisa, ensaios
══════════════════════════════════════════════════ */
const Template3 = ({ project, category, onBack }) => {
  const c=category.color;
  const paras=project.desc.split('\n').filter(Boolean);
  const pullQuote=paras.find(p=>p.length>70)||paras[0]||'';
  const bodyParas=paras.filter(p=>p!==pullQuote);
  return (
    <div style={{background:'var(--cream)',minHeight:'100vh'}}>
      {/* Running header */}
      <div style={{padding:'80px 80px 24px',borderBottom:'1px solid rgba(26,26,26,0.1)'}}>
        <BackBtn onBack={onBack}/>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:8,height:8,background:c}}/>
            <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.3em',textTransform:'uppercase',color:c}}>{category.label}</span>
          </div>
          <span style={{fontFamily:'var(--M)',fontSize:9,color:'rgba(26,26,26,0.3)',letterSpacing:'0.2em',textTransform:'uppercase'}}>{project.year}</span>
        </div>
      </div>

      {/* Giant title */}
      <div style={{padding:'48px 80px 0'}}>
        <h1 style={{fontFamily:'var(--D)',fontSize:'clamp(52px,7vw,96px)',letterSpacing:'0.03em',textTransform:'uppercase',color:'var(--ink)',lineHeight:0.93,marginBottom:12}}>{project.title}</h1>
        <p style={{fontFamily:'var(--M)',fontSize:12,fontStyle:'italic',color:'rgba(26,26,26,0.4)',marginBottom:40}}>{project.subtitle}</p>
        <div style={{height:3,background:c,width:72,marginBottom:52}}/>
      </div>

      {/* Two-column body */}
      <div style={{padding:'0 80px 80px',display:'grid',gridTemplateColumns:'1fr 280px',gap:64}}>
        <div>
          {bodyParas.slice(0,2).map((p,i)=>(
            <p key={i} style={{fontFamily:'var(--M)',fontSize:12,lineHeight:2.05,color:'rgba(26,26,26,0.68)',marginBottom:20}}>{p}</p>
          ))}
          {/* Pull quote */}
          <div style={{borderLeft:`3px solid ${c}`,padding:'18px 28px',margin:'32px 0',background:'var(--cream-dk)',position:'relative'}}>
            <TBr color={c} size={8} opacity={0.25}/>
            <p style={{fontFamily:'var(--M)',fontSize:14,fontStyle:'italic',fontWeight:600,color:'var(--ink)',lineHeight:1.65}}>"{pullQuote}"</p>
          </div>
          {bodyParas.slice(2).map((p,i)=>(
            <p key={i} style={{fontFamily:'var(--M)',fontSize:12,lineHeight:2.05,color:'rgba(26,26,26,0.68)',marginBottom:20}}>{p}</p>
          ))}
          <div style={{marginTop:32,paddingTop:20,borderTop:'1px solid rgba(26,26,26,0.1)'}}>
            <AllTags project={project} color={c}/>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div style={{position:'sticky',top:80}}>
            <div style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.25em',textTransform:'uppercase',color:'rgba(26,26,26,0.3)',marginBottom:20}}>Resultados</div>
            {project.results.map((r,i)=>(
              <div key={i} style={{marginBottom:24,paddingBottom:24,borderBottom:'1px solid rgba(26,26,26,0.08)'}}>
                <div style={{fontFamily:'var(--D)',fontSize:40,color:c,lineHeight:1}}>{r.value}</div>
                <div style={{fontFamily:'var(--M)',fontSize:9,color:'rgba(26,26,26,0.45)',letterSpacing:'0.12em',textTransform:'uppercase',marginTop:4,lineHeight:1.5}}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   T4 — MAGAZINE
   Hero full-bleed colorido, tipografia impactante
   Ideal para: projetos visuais, highlights
══════════════════════════════════════════════════ */
const Template4 = ({ project, category, onBack }) => {
  const c=category.color, cd=category.colorDark;
  return (
    <div style={{background:'var(--cream)',minHeight:'100vh'}}>
      {/* Hero */}
      <div style={{background:cd,minHeight:'48vh',position:'relative',overflow:'hidden',display:'flex',flexDirection:'column',justifyContent:'flex-end',padding:'48px 56px'}}>
        <div style={{position:'absolute',inset:0,opacity:0.06}}>
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1200 540">
            {Array.from({length:16},(_,i)=><line key={i} x1={i*80} y1={0} x2={i*80+160} y2={540} stroke={c} strokeWidth="1"/>)}
          </svg>
        </div>
        <div style={{position:'absolute',right:80,top:'50%',transform:'translateY(-50%)',opacity:0.1}}>
          <svg width="280" height="280" viewBox="0 0 280 280">{Array.from({length:5},(_,i)=><circle key={i} cx="140" cy="140" r={24+i*26} fill="none" stroke={c} strokeWidth="1"/>)}</svg>
        </div>
        <div style={{position:'relative',zIndex:1}}>
          <BackBtn onBack={onBack} light/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
            <div style={{width:36,height:1,background:c}}/>
            <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.32em',textTransform:'uppercase',color:c}}>{category.label}</span>
          </div>
          <h1 style={{fontFamily:'var(--D)',fontSize:'clamp(52px,7vw,88px)',letterSpacing:'0.03em',textTransform:'uppercase',color:'#fff',lineHeight:0.93,maxWidth:720}}>{project.title}</h1>
        </div>
      </div>

      {/* Subtitle overlap bar */}
      <div style={{background:c,padding:'12px 56px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span style={{fontFamily:'var(--M)',fontSize:10,fontWeight:700,fontStyle:'italic',color:cd,letterSpacing:'0.05em'}}>{project.subtitle}</span>
        <span style={{fontFamily:'var(--M)',fontSize:9,color:`${cd}88`,letterSpacing:'0.18em',textTransform:'uppercase'}}>{project.year}</span>
      </div>

      {/* Two-column body */}
      <div style={{padding:'52px 56px',display:'grid',gridTemplateColumns:'3fr 2fr',gap:56}}>
        <div>
          {project.desc.split('\n').map((p,i)=>p&&<p key={i} style={{fontFamily:'var(--M)',fontSize:12,lineHeight:1.95,color:'rgba(26,26,26,0.65)',marginBottom:16}}>{p}</p>)}
        </div>
        <div>
          {/* Metrics block */}
          <div style={{background:cd,padding:28,marginBottom:24,position:'relative'}}>
            <TBr color={c} size={10} opacity={0.3}/>
            <div style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.25em',textTransform:'uppercase',color:`${c}88`,marginBottom:18}}>Impacto</div>
            {project.results.map((r,i)=>(
              <div key={i} style={{display:'flex',alignItems:'baseline',gap:12,marginBottom:18}}>
                <span style={{fontFamily:'var(--D)',fontSize:38,color:c,lineHeight:1}}>{r.value}</span>
                <span style={{fontFamily:'var(--M)',fontSize:9,color:'rgba(255,255,255,0.4)',letterSpacing:'0.1em',textTransform:'uppercase',maxWidth:160,lineHeight:1.4}}>{r.label}</span>
              </div>
            ))}
          </div>
          <AllTags project={project} color={c}/>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   T5 — EXPERIMENTAL
   Assimétrico, camadas, tipografia off-grid
   Ideal para: Experimentos, projetos com IA/NLP
══════════════════════════════════════════════════ */
const Template5 = ({ project, category, onBack }) => {
  const c=category.color, cd=category.colorDark;
  return (
    <div style={{background:'var(--cream)',minHeight:'100vh',position:'relative',overflow:'hidden'}}>
      {/* Giant bg motif */}
      <div style={{position:'absolute',right:-100,top:-100,opacity:0.045,pointerEvents:'none'}}>
        <svg width="680" height="680" viewBox="0 0 680 680">
          {Array.from({length:9},(_,i)=><circle key={i} cx="340" cy="340" r={36+i*34} fill="none" stroke={c} strokeWidth="1"/>)}
          {Array.from({length:7},(_,i)=><rect key={`r${i}`} x={60+i*32} y={60+i*32} width={560-i*64} height={560-i*64} fill="none" stroke={c} strokeWidth="0.6" transform={`rotate(${i*6} 340 340)`}/>)}
        </svg>
      </div>

      <div style={{padding:'80px 48px 64px',position:'relative',zIndex:1}}>
        <BackBtn onBack={onBack}/>

        {/* Horizontal rule with category */}
        <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:56}}>
          <div style={{height:1,width:40,background:c,flexShrink:0}}/>
          <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.35em',textTransform:'uppercase',color:c,whiteSpace:'nowrap'}}>{category.label}</span>
          <div style={{height:1,flex:1,background:`${c}20`}}/>
          <span style={{fontFamily:'var(--M)',fontSize:9,color:'rgba(26,26,26,0.28)',letterSpacing:'0.15em',whiteSpace:'nowrap'}}>{project.year}</span>
        </div>

        {/* Off-grid title */}
        <div style={{textAlign:'right',marginBottom:56}}>
          <h1 style={{fontFamily:'var(--D)',fontSize:'clamp(52px,7vw,96px)',letterSpacing:'0.03em',textTransform:'uppercase',color:'var(--ink)',lineHeight:0.9,display:'inline-block',borderRight:`5px solid ${c}`,paddingRight:20}}>{project.title}</h1>
          <p style={{fontFamily:'var(--M)',fontSize:11,fontStyle:'italic',color:'rgba(26,26,26,0.38)',marginTop:14}}>{project.subtitle}</p>
        </div>

        {/* Two contrasting panels */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:3,marginBottom:28}}>
          <div style={{background:'var(--white)',padding:36,borderLeft:`3px solid ${c}`}}>
            {project.desc.split('\n').map((p,i)=>p&&<p key={i} style={{fontFamily:'var(--M)',fontSize:12,lineHeight:1.95,color:'rgba(26,26,26,0.65)',marginBottom:14}}>{p}</p>)}
          </div>
          <div style={{background:cd,padding:36,display:'flex',flexDirection:'column',gap:0}}>
            {project.results.map((r,i)=>(
              <div key={i} style={{paddingBottom:24,marginBottom:i<project.results.length-1?24:0,borderBottom:i<project.results.length-1?'1px solid rgba(255,255,255,0.06)':'none'}}>
                <div style={{fontFamily:'var(--D)',fontSize:48,color:c,lineHeight:1}}>{r.value}</div>
                <div style={{fontFamily:'var(--M)',fontSize:10,color:'rgba(255,255,255,0.35)',letterSpacing:'0.15em',textTransform:'uppercase',marginTop:4,lineHeight:1.4}}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{paddingTop:20,borderTop:'1px solid rgba(26,26,26,0.08)'}}>
          <AllTags project={project} color={c}/>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   T6 — CASE STUDY
   Estruturado em fases, orientado a processo
   Ideal para: projetos sistemáticos, relatórios
══════════════════════════════════════════════════ */
const Template6 = ({ project, category, onBack }) => {
  const c=category.color, cd=category.colorDark;
  const paras=project.desc.split('\n').filter(Boolean);
  const phases=[
    {num:'01',label:'Contexto',render:()=><p style={{fontFamily:'var(--M)',fontSize:12,lineHeight:1.95,color:'rgba(26,26,26,0.65)',maxWidth:680}}>{paras[0]||''}</p>},
    {num:'02',label:'Desenvolvimento',render:()=><p style={{fontFamily:'var(--M)',fontSize:12,lineHeight:1.95,color:'rgba(26,26,26,0.65)',maxWidth:680}}>{paras.slice(1).join(' ')}</p>},
    {num:'03',label:'Resultados',render:()=>(
      <div style={{display:'grid',gridTemplateColumns:`repeat(${Math.min(project.results.length,3)},1fr)`,gap:12}}>
        {project.results.map((r,i)=>(
          <div key={i} style={{background:'var(--cream-dk)',padding:20,borderTop:`3px solid ${c}`,position:'relative'}}>
            <div style={{fontFamily:'var(--D)',fontSize:44,color:c,lineHeight:1,marginBottom:4}}>{r.value}</div>
            <div style={{fontFamily:'var(--M)',fontSize:9,color:'rgba(26,26,26,0.45)',letterSpacing:'0.12em',textTransform:'uppercase',lineHeight:1.5}}>{r.label}</div>
          </div>
        ))}
      </div>
    )},
    {num:'04',label:'Ferramentas & Tags',render:()=><AllTags project={project} color={c}/>},
  ];
  return (
    <div style={{background:'var(--cream)',minHeight:'100vh'}}>
      {/* Header */}
      <div style={{background:cd,padding:'80px 48px 44px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',right:48,top:'50%',transform:'translateY(-50%)',opacity:0.07}}>
          <svg width="220" height="220" viewBox="0 0 220 220">{Array.from({length:6},(_,i)=><rect key={i} x={12+i*16} y={12+i*16} width={196-i*32} height={196-i*32} fill="none" stroke={c} strokeWidth="1" transform={`rotate(${i*7} 110 110)`}/>)}</svg>
        </div>
        <BackBtn onBack={onBack} light/>
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:14}}>
          <div style={{width:8,height:8,background:c}}/>
          <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.3em',textTransform:'uppercase',color:c}}>{category.label} · Case Study</span>
        </div>
        <h1 style={{fontFamily:'var(--D)',fontSize:'clamp(38px,5vw,64px)',letterSpacing:'0.04em',textTransform:'uppercase',color:'#fff',lineHeight:1,position:'relative',zIndex:1,maxWidth:700}}>{project.title}</h1>
        <p style={{fontFamily:'var(--M)',fontSize:11,fontStyle:'italic',color:'rgba(255,255,255,0.35)',marginTop:10,position:'relative',zIndex:1}}>{project.subtitle} · {project.year}</p>
      </div>

      {/* Phases */}
      <div style={{padding:'0 48px 80px'}}>
        {phases.map((phase,i)=>(
          <div key={i} style={{display:'grid',gridTemplateColumns:'110px 1fr',borderBottom:'1px solid rgba(26,26,26,0.08)',paddingTop:40,paddingBottom:40}}>
            <div style={{paddingRight:24}}>
              <div style={{fontFamily:'var(--D)',fontSize:36,color:c,lineHeight:1}}>{phase.num}</div>
              <div style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(26,26,26,0.38)',marginTop:4,lineHeight:1.4}}>{phase.label}</div>
              <div style={{width:28,height:2,background:c,marginTop:10}}/>
            </div>
            <div style={{paddingTop:4}}>{phase.render()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Router de templates ── */
const ProjectPage = ({ projectId, onBack, lang='pt' }) => {
  const data=window.PROJECTS_DATA;
  if(!data) return null;
  const project=data.projects.find(p=>p.id===projectId);
  if(!project) return <div style={{padding:80,fontFamily:'var(--M)',color:'var(--ink)'}}>Projeto não encontrado.</div>;
  const interestData=(data.interests||{})[project.interest]||{};
  const category={
    color: interestData.color||'#1B2585',
    colorDark: interestData.colorDark||'#0C0D2A',
    colorSoft: interestData.colorSoft||'#C5CCEB',
    label: lang==='en'?(interestData.en||interestData.pt||project.interest):(interestData.pt||interestData.en||project.interest)
  };
  const TComp={1:Template1,2:Template2,3:Template3,4:Template4,5:Template5,6:Template6}[project.template]||Template1;
  return <TComp project={project} category={category} onBack={onBack}/>;
};

Object.assign(window, { Template1, Template2, Template3, Template4, Template5, Template6, ProjectPage });
