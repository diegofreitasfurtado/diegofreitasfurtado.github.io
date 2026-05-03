/**
 * 4 templates de página de conteúdo — Diego Furtado Portfolio
 * Baseados nos templates de projeto, adaptados para leitura.
 * Exporta: ContentTemplate1…ContentTemplate4, ContentPage
 */

/* ── Helpers locais ── */
const CBr = ({ color='#1A1A1A', size=12, opacity=0.3 }) => <>
  <div style={{position:'absolute',top:6,left:6,width:size,height:size,borderTop:`1px solid ${color}`,borderLeft:`1px solid ${color}`,opacity,pointerEvents:'none'}}/>
  <div style={{position:'absolute',top:6,right:6,width:size,height:size,borderTop:`1px solid ${color}`,borderRight:`1px solid ${color}`,opacity,pointerEvents:'none'}}/>
  <div style={{position:'absolute',bottom:6,left:6,width:size,height:size,borderBottom:`1px solid ${color}`,borderLeft:`1px solid ${color}`,opacity,pointerEvents:'none'}}/>
  <div style={{position:'absolute',bottom:6,right:6,width:size,height:size,borderBottom:`1px solid ${color}`,borderRight:`1px solid ${color}`,opacity,pointerEvents:'none'}}/>
</>;

const CBackBtn = ({ onBack, light=false }) => (
  <button onClick={onBack}
    style={{background:'none',border:'none',fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.22em',textTransform:'uppercase',color:light?'rgba(255,255,255,0.45)':'rgba(26,26,26,0.38)',cursor:'pointer',display:'block',marginBottom:32,padding:0,transition:'color 120ms'}}
    onMouseEnter={e=>e.target.style.color=light?'rgba(255,255,255,0.85)':'rgba(26,26,26,0.8)'}
    onMouseLeave={e=>e.target.style.color=light?'rgba(255,255,255,0.45)':'rgba(26,26,26,0.38)'}>
    ← Conteúdo
  </button>
);

const CPill = ({ tag, color }) => (
  <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',background:`${color}15`,color,border:`1px solid ${color}40`,padding:'4px 10px',display:'inline-block'}}>
    {tag}
  </span>
);

const CAllTags = ({ content, color }) => {
  const all = (content.tags||[]).filter((v,i,a)=>a.indexOf(v)===i);
  return <div style={{display:'flex',flexWrap:'wrap',gap:6}}>{all.map(t=><CPill key={t} tag={t} color={color}/>)}</div>;
};

const CMeta = ({ content, color, light=false }) => {
  const dim = light ? 'rgba(255,255,255,0.32)' : 'rgba(26,26,26,0.32)';
  return (
    <div style={{display:'flex',gap:16,alignItems:'center'}}>
      <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color}}>{content.date}</span>
      <span style={{fontFamily:'var(--M)',fontSize:9,color:dim,letterSpacing:'0.1em'}}>{content.readTime} leitura</span>
    </div>
  );
};

const CKeyPoints = ({ items, color, light=false }) => {
  if(!items||items.length===0) return null;
  const textCol = light ? 'rgba(255,255,255,0.45)' : 'rgba(26,26,26,0.55)';
  const labelCol = light ? 'rgba(255,255,255,0.22)' : 'rgba(26,26,26,0.28)';
  return (
    <div>
      <div style={{fontFamily:'var(--M)',fontSize:8,fontWeight:700,letterSpacing:'0.25em',textTransform:'uppercase',color:labelCol,marginBottom:14}}>Destaques</div>
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        {items.map((kp,i)=>(
          <div key={i} style={{display:'flex',gap:10,alignItems:'flex-start'}}>
            <div style={{width:4,height:4,background:color,flexShrink:0,marginTop:5}}/>
            <span style={{fontFamily:'var(--M)',fontSize:10,color:textCol,lineHeight:1.65}}>{kp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CRelated = ({ ids, color }) => {
  const data = window.PROJECTS_DATA;
  if(!data||!ids||ids.length===0) return null;
  const projects = ids.map(id=>(data.projects||[]).find(p=>p.id===id)).filter(Boolean);
  if(projects.length===0) return null;
  return (
    <div style={{marginTop:36,paddingTop:20,borderTop:'1px solid rgba(26,26,26,0.08)'}}>
      <div style={{fontFamily:'var(--M)',fontSize:8,fontWeight:700,letterSpacing:'0.25em',textTransform:'uppercase',color:'rgba(26,26,26,0.28)',marginBottom:12}}>Projetos Relacionados</div>
      <div style={{display:'flex',flexDirection:'column',gap:7}}>
        {projects.map(p=>{
          const intData=(data.interests||{})[p.interest]||{};
          const pColor=intData.color||color;
          return (
            <div key={p.id} style={{padding:'10px 14px',border:`1px solid ${pColor}30`,borderLeft:`3px solid ${pColor}`,background:`${pColor}06`}}>
              <div style={{fontFamily:'var(--M)',fontSize:8,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:pColor,marginBottom:3}}>{intData.pt||p.interest}</div>
              <div style={{fontFamily:'var(--D)',fontSize:15,letterSpacing:'0.04em',textTransform:'uppercase',color:'var(--ink)',lineHeight:1.1}}>{p.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════
   CT1 — EDITORIAL SPLIT
   ← baseado no Template1 (Dashboard Split) dos projetos
   Painel escuro à esq. com metadados + corpo à direita.
   Ideal para: process write-ups, artigos detalhados.
══════════════════════════════════════════════════════════ */
const ContentTemplate1 = ({ content, category, onBack, lang }) => {
  const c=category.color, cd=category.colorDark;
  const title  = lang==='en' ? (content.titleEn||content.title)      : content.title;
  const sub    = lang==='en' ? (content.subtitleEn||content.subtitle) : content.subtitle;
  const body   = lang==='en' ? (content.bodyEn||content.body||'')     : (content.body||'');

  return (
    <div style={{display:'grid',gridTemplateColumns:'32% 68%',minHeight:'100vh'}}>

      {/* LEFT — dark meta panel */}
      <div style={{background:cd,padding:'80px 36px 52px',display:'flex',flexDirection:'column',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',right:-60,bottom:-60,opacity:0.07}}>
          <svg width="280" height="280" viewBox="0 0 280 280">
            {Array.from({length:6},(_,i)=><circle key={i} cx="140" cy="140" r={16+i*20} fill="none" stroke={c} strokeWidth="1"/>)}
          </svg>
        </div>
        <CBackBtn onBack={onBack} light/>
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:14}}>
          <div style={{width:8,height:8,background:c}}/>
          <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.28em',textTransform:'uppercase',color:c}}>{category.label}</span>
        </div>
        <CMeta content={content} color={c} light/>

        <div style={{height:1,background:'rgba(255,255,255,0.06)',margin:'24px 0'}}/>

        <div style={{flex:1}}>
          <CKeyPoints items={content.keyPoints} color={c} light/>
        </div>

        <div style={{paddingTop:24,marginTop:'auto'}}>
          <CAllTags content={content} color={c}/>
        </div>
      </div>

      {/* RIGHT — article body */}
      <div style={{background:'var(--cream)',padding:'80px 52px 64px',overflowY:'auto'}}>
        <h1 style={{fontFamily:'var(--D)',fontSize:'clamp(32px,4vw,52px)',letterSpacing:'0.04em',textTransform:'uppercase',color:'var(--ink)',lineHeight:1.04,marginBottom:12}}>
          {title}
        </h1>
        <p style={{fontFamily:'var(--M)',fontSize:11,fontStyle:'italic',color:'rgba(26,26,26,0.42)',lineHeight:1.7,marginBottom:36,maxWidth:540}}>
          {sub}
        </p>
        <div style={{height:3,background:c,width:48,marginBottom:40}}/>
        {body.split('\n').filter(Boolean).map((p,i)=>(
          <p key={i} style={{fontFamily:'var(--M)',fontSize:12,lineHeight:2.0,color:'rgba(26,26,26,0.68)',marginBottom:18}}>{p}</p>
        ))}
        <CRelated ids={content.relatedProjects} color={c}/>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════
   CT2 — LONG READ
   ← baseado no Template3 (Editorial) dos projetos
   Académico, duas colunas, pull quote integrado.
   Ideal para: ensaios, teses, artigos longos.
══════════════════════════════════════════════════════════ */
const ContentTemplate2 = ({ content, category, onBack, lang }) => {
  const c=category.color;
  const title  = lang==='en' ? (content.titleEn||content.title)      : content.title;
  const sub    = lang==='en' ? (content.subtitleEn||content.subtitle) : content.subtitle;
  const body   = lang==='en' ? (content.bodyEn||content.body||'')     : (content.body||'');
  const pullQ  = lang==='en' ? (content.pullQuoteEn||content.pullQuote||'') : (content.pullQuote||'');
  const paras  = body.split('\n').filter(Boolean);
  const half   = Math.ceil(paras.length/2);

  return (
    <div style={{background:'var(--cream)',minHeight:'100vh'}}>

      {/* Running header */}
      <div style={{padding:'80px 80px 24px',borderBottom:'1px solid rgba(26,26,26,0.09)'}}>
        <CBackBtn onBack={onBack}/>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:8,height:8,background:c}}/>
            <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.3em',textTransform:'uppercase',color:c}}>{category.label}</span>
          </div>
          <CMeta content={content} color={c}/>
        </div>
      </div>

      {/* Giant title */}
      <div style={{padding:'48px 80px 0'}}>
        <h1 style={{fontFamily:'var(--D)',fontSize:'clamp(48px,6vw,88px)',letterSpacing:'0.03em',textTransform:'uppercase',color:'var(--ink)',lineHeight:0.92,marginBottom:14}}>
          {title}
        </h1>
        <p style={{fontFamily:'var(--M)',fontSize:12,fontStyle:'italic',color:'rgba(26,26,26,0.4)',marginBottom:36}}>{sub}</p>
        <div style={{height:3,background:c,width:64,marginBottom:52}}/>
      </div>

      {/* Two-column body */}
      <div style={{padding:'0 80px 80px',display:'grid',gridTemplateColumns:'1fr 260px',gap:60}}>
        <div>
          {paras.slice(0,half).map((p,i)=>(
            <p key={i} style={{fontFamily:'var(--M)',fontSize:13,lineHeight:2.0,color:'rgba(26,26,26,0.68)',marginBottom:22}}>{p}</p>
          ))}
          {pullQ && (
            <div style={{borderLeft:`3px solid ${c}`,padding:'16px 24px',margin:'32px 0',background:'var(--cream-dk)',position:'relative'}}>
              <CBr color={c} size={8} opacity={0.2}/>
              <p style={{fontFamily:'var(--M)',fontSize:14,fontStyle:'italic',fontWeight:600,color:'var(--ink)',lineHeight:1.65}}>"{pullQ}"</p>
            </div>
          )}
          {paras.slice(half).map((p,i)=>(
            <p key={i} style={{fontFamily:'var(--M)',fontSize:13,lineHeight:2.0,color:'rgba(26,26,26,0.68)',marginBottom:22}}>{p}</p>
          ))}
          <div style={{marginTop:32,paddingTop:20,borderTop:'1px solid rgba(26,26,26,0.09)'}}>
            <CAllTags content={content} color={c}/>
          </div>
        </div>

        {/* Sidebar sticky */}
        <div style={{position:'sticky',top:80,alignSelf:'start'}}>
          <CKeyPoints items={content.keyPoints} color={c}/>
          <CRelated ids={content.relatedProjects} color={c}/>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════
   CT3 — MAGAZINE
   ← baseado no Template4 (Magazine) dos projetos
   Hero full-bleed, barra de subtítulo, corpo + sidebar.
   Ideal para: features editoriais, destaques.
══════════════════════════════════════════════════════════ */
const ContentTemplate3 = ({ content, category, onBack, lang }) => {
  const c=category.color, cd=category.colorDark;
  const title  = lang==='en' ? (content.titleEn||content.title)      : content.title;
  const sub    = lang==='en' ? (content.subtitleEn||content.subtitle) : content.subtitle;
  const body   = lang==='en' ? (content.bodyEn||content.body||'')     : (content.body||'');

  return (
    <div style={{background:'var(--cream)',minHeight:'100vh'}}>

      {/* Hero */}
      <div style={{background:cd,minHeight:'46vh',position:'relative',overflow:'hidden',display:'flex',flexDirection:'column',justifyContent:'flex-end',padding:'48px 56px'}}>
        <div style={{position:'absolute',inset:0,opacity:0.05}}>
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1200 500">
            {Array.from({length:14},(_,i)=><line key={i} x1={i*90} y1={0} x2={i*90+140} y2={500} stroke={c} strokeWidth="1"/>)}
          </svg>
        </div>
        <div style={{position:'absolute',right:80,top:'50%',transform:'translateY(-50%)',opacity:0.1}}>
          <svg width="260" height="260" viewBox="0 0 260 260">
            {Array.from({length:5},(_,i)=><circle key={i} cx="130" cy="130" r={22+i*24} fill="none" stroke={c} strokeWidth="1"/>)}
          </svg>
        </div>
        <div style={{position:'relative',zIndex:1}}>
          <CBackBtn onBack={onBack} light/>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16}}>
            <div style={{width:32,height:1,background:c}}/>
            <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.32em',textTransform:'uppercase',color:c}}>{category.label}</span>
          </div>
          <h1 style={{fontFamily:'var(--D)',fontSize:'clamp(48px,6.5vw,84px)',letterSpacing:'0.03em',textTransform:'uppercase',color:'#fff',lineHeight:0.93,maxWidth:740}}>
            {title}
          </h1>
        </div>
      </div>

      {/* Subtitle bar */}
      <div style={{background:c,padding:'12px 56px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span style={{fontFamily:'var(--M)',fontSize:10,fontWeight:700,fontStyle:'italic',color:cd,letterSpacing:'0.05em'}}>{sub}</span>
        <CMeta content={content} color={cd}/>
      </div>

      {/* Body + sidebar */}
      <div style={{padding:'52px 56px',display:'grid',gridTemplateColumns:'3fr 2fr',gap:52}}>
        <div>
          {body.split('\n').filter(Boolean).map((p,i)=>(
            <p key={i} style={{fontFamily:'var(--M)',fontSize:12,lineHeight:1.95,color:'rgba(26,26,26,0.65)',marginBottom:18}}>{p}</p>
          ))}
          <div style={{marginTop:28,paddingTop:18,borderTop:'1px solid rgba(26,26,26,0.08)'}}>
            <CAllTags content={content} color={c}/>
          </div>
        </div>
        <div>
          {(content.keyPoints||[]).length>0 && (
            <div style={{background:cd,padding:24,marginBottom:20,position:'relative'}}>
              <CBr color={c} size={10} opacity={0.25}/>
              <CKeyPoints items={content.keyPoints} color={c} light/>
            </div>
          )}
          <CRelated ids={content.relatedProjects} color={c}/>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════
   CT4 — OPINION / TESE
   ← baseado no Template5 (Experimental) dos projetos
   Assimétrico, pull quote como âncora visual central.
   Ideal para: teses, opiniões, LinkedIn-style.
══════════════════════════════════════════════════════════ */
const ContentTemplate4 = ({ content, category, onBack, lang }) => {
  const c=category.color, cd=category.colorDark;
  const title  = lang==='en' ? (content.titleEn||content.title)      : content.title;
  const sub    = lang==='en' ? (content.subtitleEn||content.subtitle) : content.subtitle;
  const body   = lang==='en' ? (content.bodyEn||content.body||'')     : (content.body||'');
  const pullQ  = lang==='en' ? (content.pullQuoteEn||content.pullQuote||'') : (content.pullQuote||'');

  return (
    <div style={{background:'var(--cream)',minHeight:'100vh',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',right:-120,top:-120,opacity:0.04,pointerEvents:'none'}}>
        <svg width="620" height="620" viewBox="0 0 620 620">
          {Array.from({length:8},(_,i)=><circle key={i} cx="310" cy="310" r={30+i*34} fill="none" stroke={c} strokeWidth="1"/>)}
          {Array.from({length:5},(_,i)=><rect key={`r${i}`} x={60+i*26} y={60+i*26} width={500-i*52} height={500-i*52} fill="none" stroke={c} strokeWidth="0.6" transform={`rotate(${i*5} 310 310)`}/>)}
        </svg>
      </div>

      <div style={{padding:'80px 52px 64px',position:'relative',zIndex:1}}>
        <CBackBtn onBack={onBack}/>

        {/* Category + meta */}
        <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:52}}>
          <div style={{height:1,width:36,background:c,flexShrink:0}}/>
          <span style={{fontFamily:'var(--M)',fontSize:9,fontWeight:700,letterSpacing:'0.35em',textTransform:'uppercase',color:c,whiteSpace:'nowrap'}}>{category.label}</span>
          <div style={{height:1,flex:1,background:`${c}20`}}/>
          <CMeta content={content} color={c}/>
        </div>

        {/* Right-aligned title */}
        <div style={{textAlign:'right',marginBottom:48}}>
          <h1 style={{fontFamily:'var(--D)',fontSize:'clamp(48px,6.5vw,92px)',letterSpacing:'0.03em',textTransform:'uppercase',color:'var(--ink)',lineHeight:0.9,display:'inline-block',borderRight:`4px solid ${c}`,paddingRight:20}}>
            {title}
          </h1>
          <p style={{fontFamily:'var(--M)',fontSize:11,fontStyle:'italic',color:'rgba(26,26,26,0.38)',marginTop:12}}>{sub}</p>
        </div>

        {/* Pull quote */}
        {pullQ && (
          <div style={{background:cd,padding:'26px 36px',marginBottom:36,position:'relative'}}>
            <CBr color={c} size={12} opacity={0.2}/>
            <p style={{fontFamily:'var(--D)',fontSize:'clamp(18px,2.4vw,28px)',letterSpacing:'0.04em',textTransform:'uppercase',color:c,lineHeight:1.25}}>"{pullQ}"</p>
          </div>
        )}

        {/* Two panels */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:4,marginBottom:28}}>
          <div style={{background:'var(--white)',padding:36,borderLeft:`3px solid ${c}`}}>
            {body.split('\n').filter(Boolean).map((p,i)=>(
              <p key={i} style={{fontFamily:'var(--M)',fontSize:12,lineHeight:1.95,color:'rgba(26,26,26,0.65)',marginBottom:16}}>{p}</p>
            ))}
          </div>
          <div style={{background:cd,padding:36,display:'flex',flexDirection:'column'}}>
            <CKeyPoints items={content.keyPoints} color={c} light/>
            <div style={{marginTop:'auto',paddingTop:24}}>
              <CRelated ids={content.relatedProjects} color={c}/>
            </div>
          </div>
        </div>

        <div style={{paddingTop:20,borderTop:'1px solid rgba(26,26,26,0.08)'}}>
          <CAllTags content={content} color={c}/>
        </div>
      </div>
    </div>
  );
};

/* ── Router de templates de conteúdo ── */
const ContentPage = ({ contentId, onBack, lang='pt' }) => {
  const data = window.PROJECTS_DATA;
  if(!data) return null;
  const content = (data.content||[]).find(c=>c.id===contentId);
  if(!content) return <div style={{padding:80,fontFamily:'var(--M)',color:'var(--ink)'}}>Conteúdo não encontrado.</div>;
  const interestData = (data.interests||{})[content.interest]||{};
  const category = {
    color:     interestData.color     || '#1B2585',
    colorDark: interestData.colorDark || '#0C0D2A',
    colorSoft: interestData.colorSoft || '#C5CCEB',
    label: lang==='en' ? (interestData.en||interestData.pt||content.interest) : (interestData.pt||interestData.en||content.interest)
  };
  const TMap = {1:ContentTemplate1, 2:ContentTemplate2, 3:ContentTemplate3, 4:ContentTemplate4};
  const TComp = TMap[content.template] || ContentTemplate1;
  return <TComp content={content} category={category} onBack={onBack} lang={lang}/>;
};

Object.assign(window, { ContentTemplate1, ContentTemplate2, ContentTemplate3, ContentTemplate4, ContentPage });
