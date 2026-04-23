'use client';

import { useState, useEffect, useRef } from 'react';

export default function RosarioChateau() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const STEP = 4000;

  function goTo(n: number) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrent(n);
    timerRef.current = setTimeout(() => goTo((n + 1) % 4), STEP);
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(1), STEP);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const stages = [
    {
      tag: 'Paso 1 — Vos',
      tagColor: '#4A8A6A',
      title: 'Mandás la lista como siempre',
      desc: 'Le escribís al número del sistema por WhatsApp con los nombres y tipos de entrada. Nada nuevo que aprender.',
      content: (
        <div style={{background:'#18181C', border:'0.5px solid #2A2A2E', borderRadius:'14px', padding:'10px 12px', maxWidth:'260px'}}>
          <div style={{display:'flex', alignItems:'center', gap:'7px', marginBottom:'8px', paddingBottom:'7px', borderBottom:'0.5px solid #222226'}}>
            <div style={{width:'26px', height:'26px', borderRadius:'50%', background:'#1A3D2E', color:'#6BAF8A', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'9px', fontWeight:500}}>RC</div>
            <div>
              <div style={{fontSize:'11px', color:'#C8C4BC', letterSpacing:'0.02em'}}>Rosario Chateau — sistema</div>
              <div style={{fontSize:'9px', color:'#666', marginTop:'1px'}}>sistema activo</div>
            </div>
          </div>
          <div style={{background:'#1A3D2E', color:'#9ECFB4', borderRadius:'10px', borderBottomRightRadius:'3px', padding:'7px 10px', fontSize:'11px', lineHeight:1.6}}>
            Lista sabado VIP<br/>- Lucia Fernandez free<br/>- Tomas Acosta consumible<br/>- Abril Moreno vip<br/>- Franco Rios ultra
            <div style={{fontSize:'8px', opacity:0.4, marginTop:'3px', textAlign:'right'}}>23:14</div>
          </div>
        </div>
      )
    },
    {
      tag: 'Paso 2 — Sistema',
      tagColor: '#534AB7',
      title: 'Lee y carga todo solo',
      desc: 'La IA lee el mensaje, entiende los nombres y tipos de entrada, y confirma que todo quedó registrado.',
      content: (
        <div style={{background:'#18181C', border:'0.5px solid #2A2A2E', borderRadius:'14px', padding:'10px 12px', maxWidth:'260px'}}>
          <div style={{display:'flex', alignItems:'center', gap:'7px', marginBottom:'8px', paddingBottom:'7px', borderBottom:'0.5px solid #222226'}}>
            <div style={{width:'26px', height:'26px', borderRadius:'50%', background:'#1E1C3A', color:'#7F77DD', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'9px', fontWeight:500}}>RC</div>
            <div>
              <div style={{fontSize:'11px', color:'#C8C4BC', letterSpacing:'0.02em'}}>Rosario Chateau — sistema</div>
              <div style={{fontSize:'9px', color:'#666', marginTop:'1px'}}>sistema activo</div>
            </div>
          </div>
          <div style={{background:'#1E1E22', color:'#9A9690', borderRadius:'10px', borderBottomLeftRadius:'3px', padding:'7px 10px', fontSize:'11px', lineHeight:1.6, border:'0.5px solid #2A2A2E'}}>
            Lista cargada correctamente.<br/>4 invitados registrados para el evento del sabado.
            <div style={{fontSize:'8px', opacity:0.4, marginTop:'3px'}}>23:14</div>
          </div>
        </div>
      )
    },
    {
      tag: 'Paso 3 — La puerta',
      tagColor: '#8A5A3A',
      title: 'La recepcionista confirma el ingreso',
      desc: 'En la tablet aparecen todos los nombres. Busca, confirma, y queda registrado con hora exacta.',
      content: (
        <div style={{background:'#18181C', border:'0.5px solid #2A2A2E', borderRadius:'12px', padding:'10px 12px', maxWidth:'280px'}}>
          <div style={{fontSize:'9px', color:'#666', marginBottom:'7px', textTransform:'uppercase', letterSpacing:'0.1em'}}>Ingreso VIP — sabado</div>
          {[
            {name:'Lucia Fernandez', tipo:'free', badge:'ingresó 01:14', ok:true},
            {name:'Tomas Acosta', tipo:'consumible', badge:'ingresó 01:11', ok:true},
            {name:'Abril Moreno', tipo:'vip', badge:'esperando', ok:false},
            {name:'Franco Rios', tipo:'ultra', badge:'esperando', ok:false},
          ].map((r, i) => (
            <div key={i} style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'6px 0', borderBottom: i < 3 ? '0.5px solid #1E1E22' : 'none', fontSize:'11px'}}>
              <span style={{color:'#C8C4BC'}}>{r.name}</span>
              <span style={{color:'#666', marginRight:'8px'}}>{r.tipo}</span>
              <span style={{background: r.ok ? '#1A3D2E' : '#1A1A1E', color: r.ok ? '#6BAF8A' : '#555', fontSize:'9px', padding:'2px 7px', borderRadius:'20px', border: r.ok ? 'none' : '0.5px solid #2A2A2E'}}>{r.badge}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      tag: 'Paso 4 — Vos, dueño',
      tagColor: '#5A8ABF',
      title: 'Ves todo en tiempo real desde el celular',
      desc: 'Sin estar en la puerta. Cuántos ingresaron, quién fue el último y a qué hora.',
      content: (
        <div style={{background:'#18181C', border:'0.5px solid #2A2A2E', borderRadius:'12px', padding:'10px 12px', maxWidth:'280px'}}>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'6px', marginBottom:'12px'}}>
            {[{val:'187',lbl:'ingresados'},{val:'312',lbl:'en lista'},{val:'01:14',lbl:'último ingreso'}].map((c,i) => (
              <div key={i} style={{background:'#111114', border:'0.5px solid #222226', borderRadius:'8px', padding:'8px', textAlign:'center'}}>
                <div style={{fontSize: i===2 ? '12px' : '16px', fontWeight:400, color:'#E8E6E0', paddingTop: i===2 ? '3px' : '0'}}>{c.val}</div>
                <div style={{fontSize:'8px', color:'#666', marginTop:'2px', letterSpacing:'0.06em'}}>{c.lbl}</div>
              </div>
            ))}
          </div>
          <div style={{fontSize:'9px', color:'#555', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'6px'}}>por RRPP</div>
          {[{name:'Sebastian G.',pct:72},{name:'Mati R.',pct:58},{name:'Luca D.',pct:41}].map((r,i) => (
            <div key={i}>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'10px', color:'#888', marginBottom:'4px'}}>
                <span>{r.name}</span><span>{r.pct}</span>
              </div>
              <div style={{height:'2px', background:'#222226', borderRadius:'2px', marginBottom:'8px'}}>
                <div style={{height:'2px', borderRadius:'2px', background:'#4A8A6A', width:`${r.pct}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  const icons = [
    { bg: '#111A14', content: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="3" width="18" height="22" rx="3" fill="#2A5C3A" opacity="0.4"/>
        <rect x="8" y="7" width="12" height="1.5" rx="0.75" fill="#6BAF8A"/>
        <rect x="8" y="11" width="9" height="1.5" rx="0.75" fill="#6BAF8A" opacity="0.5"/>
        <rect x="8" y="15" width="10" height="1.5" rx="0.75" fill="#6BAF8A" opacity="0.3"/>
        <circle cx="20" cy="20" r="5" fill="#2A5C3A"/>
        <path d="M17.5 20l1.5 1.5 3-2.8" stroke="#9ECFB4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), label: 'Vos / RRPP' },
    { bg: '#12111A', content: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="6" fill="#3A3470" opacity="0.5"/>
        <circle cx="14" cy="14" r="3" fill="#7F77DD"/>
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="#534AB7" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ), label: 'Sistema IA' },
    { bg: '#1A1210', content: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="14" rx="3" fill="#5C2A1A" opacity="0.4"/>
        <rect x="6" y="10" width="16" height="1.5" rx="0.75" fill="#C47A5A" opacity="0.6"/>
        <rect x="6" y="13" width="11" height="1.5" rx="0.75" fill="#C47A5A" opacity="0.35"/>
        <rect x="6" y="16" width="8" height="1.5" rx="0.75" fill="#C47A5A" opacity="0.2"/>
        <circle cx="22" cy="8" r="4" fill="#5C2A1A"/>
        <path d="M20 8l1.3 1.3L24 7" stroke="#C47A5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), label: 'Recepción' },
    { bg: '#10141A', content: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="7" y="4" width="14" height="20" rx="3" fill="#1A3050" opacity="0.5"/>
        <rect x="10" y="8" width="8" height="1.5" rx="0.75" fill="#5A8ABF" opacity="0.6"/>
        <rect x="10" y="11" width="6" height="1.5" rx="0.75" fill="#5A8ABF" opacity="0.35"/>
        <rect x="10" y="14" width="7" height="1.5" rx="0.75" fill="#5A8ABF" opacity="0.25"/>
        <circle cx="20" cy="20" r="5" fill="#1A3050"/>
        <path d="M17.5 20l1.5 1.5 3-2.8" stroke="#5A8ABF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), label: 'Vos, dueño' },
  ];

  const dotColors = ['#4A8A6A','#534AB7','#8A5A3A','#5A8ABF'];

  return (
    <div style={{background:'#0D0D0F', padding:'2.5rem 1.5rem 2rem', maxWidth:'640px', margin:'0 auto', minHeight:'100vh', fontFamily:"'Georgia', serif"}}>
      <div style={{textAlign:'center', marginBottom:'2.5rem'}}>
        <div style={{fontSize:'10px', letterSpacing:'0.2em', color:'#666', textTransform:'uppercase'}}>SYNCRO</div>
        <div style={{fontSize:'18px', fontWeight:400, color:'#E8E6E0', marginTop:'8px', letterSpacing:'0.04em', lineHeight:1.4}}>
          Sistema de ingreso VIP<br/>para Rosario Chateau
        </div>
      </div>

      <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'2rem'}}>
        {icons.map((icon, i) => (
          <div key={i} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', flexShrink:0}}>
            <div
              onClick={() => goTo(i)}
              style={{
                width:'58px', height:'58px', borderRadius:'14px',
                display:'flex', alignItems:'center', justifyContent:'center',
                background: icon.bg,
                border: current === i ? '0.5px solid rgba(255,255,255,0.22)' : '0.5px solid rgba(255,255,255,0.08)',
                transform: current === i ? 'scale(1.1)' : 'scale(1)',
                transition:'transform 0.4s cubic-bezier(.34,1.56,.64,1), border-color 0.3s',
                cursor:'pointer'
              }}
            >
              {icon.content}
            </div>
            <div style={{fontSize:'10px', color: current === i ? '#C8C4BC' : '#555', textAlign:'center', maxWidth:'64px', lineHeight:1.3, letterSpacing:'0.04em', transition:'color 0.3s'}}>
              {icon.label}
            </div>
            {i < 3 && (
              <div style={{position:'absolute', display:'none'}}></div>
            )}
          </div>
        )).reduce((acc: React.ReactNode[], el, i) => {
          acc.push(el);
          if (i < 3) acc.push(
            <div key={`conn-${i}`} style={{width:'44px', flexShrink:0, height:'58px', display:'flex', alignItems:'center'}}>
              <div style={{width:'100%', height:'0.5px', background: current > i ? dotColors[i] : '#2A2A2E', transition:'background 0.6s'}}></div>
            </div>
          );
          return acc;
        }, [])}
      </div>

      <div style={{border:'0.5px solid #222226', borderRadius:'16px', padding:'1.5rem', background:'#111114', minHeight:'230px'}}>
        <div style={{fontSize:'9px', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:'10px', color: stages[current].tagColor}}>
          {stages[current].tag}
        </div>
        <div style={{fontSize:'15px', fontWeight:400, color:'#E8E6E0', marginBottom:'6px', letterSpacing:'0.02em'}}>
          {stages[current].title}
        </div>
        <div style={{fontSize:'12px', color:'#888', lineHeight:1.7, marginBottom:'16px', letterSpacing:'0.01em'}}>
          {stages[current].desc}
        </div>
        {stages[current].content}
      </div>

      <div style={{display:'flex', gap:'8px', justifyContent:'center', marginTop:'1.5rem'}}>
        {[0,1,2,3].map(i => (
          <div
            key={i}
            onClick={() => goTo(i)}
            style={{
              width:'5px', height:'5px', borderRadius:'50%',
              background: current === i ? '#6BAF8A' : '#2A2A2E',
              transform: current === i ? 'scale(1.3)' : 'scale(1)',
              transition:'background 0.4s, transform 0.3s',
              cursor:'pointer'
            }}
          />
        ))}
      </div>

      <div style={{textAlign:'center', marginTop:'1.75rem', paddingTop:'1.25rem', borderTop:'0.5px solid #1A1A1E'}}>
        <div style={{fontSize:'10px', color:'#333', letterSpacing:'0.16em', textTransform:'uppercase'}}>syncro.lat</div>
      </div>
    </div>
  );
}
