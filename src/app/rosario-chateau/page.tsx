export default function RosarioChateau() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .scene {
          background: #0D0D0F;
          padding: 2.5rem 1.5rem 2rem;
          max-width: 640px;
          margin: 0 auto;
          min-height: 100vh;
          font-family: 'Georgia', serif;
        }
        .brand { text-align: center; margin-bottom: 2.5rem; }
        .brand-sub { font-size: 10px; letter-spacing: 0.2em; color: #666; text-transform: uppercase; }
        .brand-title { font-size: 18px; font-weight: 400; color: #E8E6E0; margin-top: 8px; letter-spacing: 0.04em; line-height: 1.4; }
        .flow { display: flex; align-items: center; justify-content: center; gap: 0; margin-bottom: 2rem; }
        .node { display: flex; flex-direction: column; align-items: center; gap: 8px; flex-shrink: 0; }
        .node-icon { width: 58px; height: 58px; border-radius: 14px; display: flex; align-items: center; justify-content: center; border: 0.5px solid rgba(255,255,255,0.08); transition: transform 0.4s cubic-bezier(.34,1.56,.64,1), border-color 0.3s; }
        .node-icon.lit { border-color: rgba(255,255,255,0.22); }
        .node-label { font-size: 10px; color: #555; text-align: center; max-width: 64px; line-height: 1.3; letter-spacing: 0.04em; transition: color 0.3s; }
        .node-label.lit { color: #C8C4BC; }
        .connector { width: 44px; flex-shrink: 0; display: flex; align-items: center; height: 58px; position: relative; }
        .connector-line { width: 100%; height: 0.5px; background: #2A2A2E; position: relative; overflow: visible; }
        .dot { width: 7px; height: 7px; border-radius: 50%; position: absolute; top: -3px; left: -3px; opacity: 0; }
        .stage-panel { border: 0.5px solid #222226; border-radius: 16px; padding: 1.5rem; background: #111114; min-height: 230px; }
        .stage { display: none; }
        .stage.active { display: block; }
        .stage-tag { font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 10px; }
        .stage-title { font-size: 15px; font-weight: 400; color: #E8E6E0; margin-bottom: 6px; letter-spacing: 0.02em; }
        .stage-desc { font-size: 12px; color: #888; line-height: 1.7; margin-bottom: 16px; letter-spacing: 0.01em; }
        .phone-frame { background: #18181C; border: 0.5px solid #2A2A2E; border-radius: 14px; padding: 10px 12px; max-width: 260px; }
        .ph-header { display: flex; align-items: center; gap: 7px; margin-bottom: 8px; padding-bottom: 7px; border-bottom: 0.5px solid #222226; }
        .ph-av { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 500; }
        .ph-name { font-size: 11px; color: #C8C4BC; letter-spacing: 0.02em; }
        .ph-status { font-size: 9px; color: #666; margin-top: 1px; }
        .bubble { border-radius: 10px; padding: 7px 10px; font-size: 11px; line-height: 1.6; margin-bottom: 5px; letter-spacing: 0.01em; }
        .bubble-out { background: #1A3D2E; color: #9ECFB4; border-bottom-right-radius: 3px; }
        .bubble-in { background: #1E1E22; color: #9A9690; border-bottom-left-radius: 3px; border: 0.5px solid #2A2A2E; }
        .bubble-time { font-size: 8px; opacity: 0.4; margin-top: 3px; text-align: right; }
        .tablet-frame { background: #18181C; border: 0.5px solid #2A2A2E; border-radius: 12px; padding: 10px 12px; max-width: 280px; }
        .tab-header { font-size: 9px; color: #444; margin-bottom: 7px; text-transform: uppercase; letter-spacing: 0.1em; }
        .tab-row { display: flex; align-items: center; justify-content: space-between; padding: 6px 0; border-bottom: 0.5px solid #1E1E22; font-size: 11px; }
        .tab-row:last-child { border-bottom: none; }
        .tab-name { color: #C8C4BC; }
        .tab-tipo { color: #666; margin-right: 8px; }
        .badge-ok { background: #1A3D2E; color: #6BAF8A; font-size: 9px; padding: 2px 7px; border-radius: 20px; letter-spacing: 0.03em; }
        .badge-wait { background: #1A1A1E; color: #444; font-size: 9px; padding: 2px 7px; border-radius: 20px; border: 0.5px solid #2A2A2E; }
        .dash-frame { background: #18181C; border: 0.5px solid #2A2A2E; border-radius: 12px; padding: 10px 12px; max-width: 280px; }
        .dash-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 6px; margin-bottom: 12px; }
        .dash-card { background: #111114; border: 0.5px solid #222226; border-radius: 8px; padding: 8px; text-align: center; }
        .dash-val { font-size: 16px; font-weight: 400; color: #E8E6E0; }
        .dash-lbl { font-size: 8px; color: #666; margin-top: 2px; letter-spacing: 0.06em; }
        .dash-bar-row { display: flex; justify-content: space-between; font-size: 10px; color: #888; margin-bottom: 4px; }
        .dash-bar-bg { height: 2px; background: #222226; border-radius: 2px; margin-bottom: 8px; }
        .dash-bar-fg { height: 2px; border-radius: 2px; background: #4A8A6A; }
        .progress-dots { display: flex; gap: 8px; justify-content: center; margin-top: 1.5rem; }
        .pdot { width: 5px; height: 5px; border-radius: 50%; background: #2A2A2E; transition: background 0.4s, transform 0.3s; cursor: pointer; }
        .pdot.active { background: #6BAF8A; transform: scale(1.3); }
        .anim-appear { opacity: 0; transform: translateY(8px); transition: opacity 0.5s ease, transform 0.5s ease; }
        .anim-appear.show { opacity: 1; transform: translateY(0); }
        .footer { text-align: center; margin-top: 1.75rem; padding-top: 1.25rem; border-top: 0.5px solid #1A1A1E; }
        .footer-text { font-size: 10px; color: #333; letter-spacing: 0.16em; text-transform: uppercase; }
      `}</style>

      <div className="scene">
        <div className="brand">
          <div className="brand-sub">SYNCRO</div>
          <div className="brand-title">Sistema de ingreso VIP<br/>para Rosario Chateau</div>
        </div>

        <div className="flow">
          <div className="node">
            <div className="node-icon" id="icon0" style={{background:'#111A14'}}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="5" y="3" width="18" height="22" rx="3" fill="#2A5C3A" opacity="0.4"/>
                <rect x="8" y="7" width="12" height="1.5" rx="0.75" fill="#6BAF8A"/>
                <rect x="8" y="11" width="9" height="1.5" rx="0.75" fill="#6BAF8A" opacity="0.5"/>
                <rect x="8" y="15" width="10" height="1.5" rx="0.75" fill="#6BAF8A" opacity="0.3"/>
                <circle cx="20" cy="20" r="5" fill="#2A5C3A"/>
                <path d="M17.5 20l1.5 1.5 3-2.8" stroke="#9ECFB4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="node-label" id="label0">Vos / RRPP</div>
          </div>
          <div className="connector"><div className="connector-line"><div className="dot" id="dot0" style={{background:'#4A8A6A'}}></div></div></div>
          <div className="node">
            <div className="node-icon" id="icon1" style={{background:'#12111A'}}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="6" fill="#3A3470" opacity="0.5"/>
                <circle cx="14" cy="14" r="3" fill="#7F77DD"/>
                <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="#534AB7" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </div>
            <div className="node-label" id="label1">Sistema IA</div>
          </div>
          <div className="connector"><div className="connector-line"><div className="dot" id="dot1" style={{background:'#534AB7'}}></div></div></div>
          <div className="node">
            <div className="node-icon" id="icon2" style={{background:'#1A1210'}}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="7" width="22" height="14" rx="3" fill="#5C2A1A" opacity="0.4"/>
                <rect x="6" y="10" width="16" height="1.5" rx="0.75" fill="#C47A5A" opacity="0.6"/>
                <rect x="6" y="13" width="11" height="1.5" rx="0.75" fill="#C47A5A" opacity="0.35"/>
                <rect x="6" y="16" width="8" height="1.5" rx="0.75" fill="#C47A5A" opacity="0.2"/>
                <circle cx="22" cy="8" r="4" fill="#5C2A1A"/>
                <path d="M20 8l1.3 1.3L24 7" stroke="#C47A5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="node-label" id="label2">Recepción</div>
          </div>
          <div className="connector"><div className="connector-line"><div className="dot" id="dot2" style={{background:'#8A5A3A'}}></div></div></div>
          <div className="node">
            <div className="node-icon" id="icon3" style={{background:'#10141A'}}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="7" y="4" width="14" height="20" rx="3" fill="#1A3050" opacity="0.5"/>
                <rect x="10" y="8" width="8" height="1.5" rx="0.75" fill="#5A8ABF" opacity="0.6"/>
                <rect x="10" y="11" width="6" height="1.5" rx="0.75" fill="#5A8ABF" opacity="0.35"/>
                <rect x="10" y="14" width="7" height="1.5" rx="0.75" fill="#5A8ABF" opacity="0.25"/>
                <circle cx="20" cy="20" r="5" fill="#1A3050"/>
                <path d="M17.5 20l1.5 1.5 3-2.8" stroke="#5A8ABF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="node-label" id="label3">Vos, dueño</div>
          </div>
        </div>

        <div className="stage-panel">
          <div className="stage active" id="stage0">
            <div className="stage-tag" style={{color:'#4A8A6A'}}>Paso 1 — Vos</div>
            <div className="stage-title">Mandás la lista como siempre</div>
            <div className="stage-desc">Le escribís al número del sistema por WhatsApp con los nombres y tipos de entrada. Nada nuevo que aprender.</div>
            <div className="phone-frame anim-appear" id="s0a">
              <div className="ph-header">
                <div className="ph-av" style={{background:'#1A3D2E', color:'#6BAF8A'}}>RC</div>
                <div><div className="ph-name">Rosario Chateau — sistema</div><div className="ph-status">sistema activo</div></div>
              </div>
              <div className="bubble bubble-out" id="s0b1" style={{opacity:0, transition:'opacity 0.5s'}}>
                Lista sabado VIP<br/>- Lucia Fernandez free<br/>- Tomas Acosta consumible<br/>- Abril Moreno vip<br/>- Franco Rios ultra
                <div className="bubble-time">23:14</div>
              </div>
            </div>
          </div>

          <div className="stage" id="stage1">
            <div className="stage-tag" style={{color:'#534AB7'}}>Paso 2 — Sistema</div>
            <div className="stage-title">Lee y carga todo solo</div>
            <div className="stage-desc">La IA lee el mensaje, entiende los nombres y tipos de entrada, y confirma que todo quedó registrado.</div>
            <div className="phone-frame anim-appear" id="s1a">
              <div className="ph-header">
                <div className="ph-av" style={{background:'#1E1C3A', color:'#7F77DD'}}>RC</div>
                <div><div className="ph-name">Rosario Chateau — sistema</div><div className="ph-status">sistema activo</div></div>
              </div>
              <div className="bubble bubble-in" id="s1b" style={{opacity:0, transition:'opacity 0.5s'}}>
                Lista cargada correctamente.<br/>4 invitados registrados para el evento del sabado.
                <div className="bubble-time" style={{textAlign:'left'}}>23:14</div>
              </div>
            </div>
          </div>

          <div className="stage" id="stage2">
            <div className="stage-tag" style={{color:'#8A5A3A'}}>Paso 3 — La puerta</div>
            <div className="stage-title">La recepcionista confirma el ingreso</div>
            <div className="stage-desc">En la tablet aparecen todos los nombres. Busca, confirma, y queda registrado con hora exacta.</div>
            <div className="tablet-frame anim-appear" id="s2a">
              <div className="tab-header">Ingreso VIP — sabado</div>
              <div className="tab-row s2r" style={{opacity:0, transition:'opacity 0.4s'}}><span className="tab-name">Lucia Fernandez</span><span className="tab-tipo">free</span><span className="badge-ok">ingresó 01:14</span></div>
              <div className="tab-row s2r" style={{opacity:0, transition:'opacity 0.4s'}}><span className="tab-name">Tomas Acosta</span><span className="tab-tipo">consumible</span><span className="badge-ok">ingresó 01:11</span></div>
              <div className="tab-row s2r" style={{opacity:0, transition:'opacity 0.4s'}}><span className="tab-name">Abril Moreno</span><span className="tab-tipo">vip</span><span className="badge-wait">esperando</span></div>
              <div className="tab-row s2r" style={{opacity:0, transition:'opacity 0.4s'}}><span className="tab-name">Franco Rios</span><span className="tab-tipo">ultra</span><span className="badge-wait">esperando</span></div>
            </div>
          </div>

          <div className="stage" id="stage3">
            <div className="stage-tag" style={{color:'#5A8ABF'}}>Paso 4 — Vos, dueño</div>
            <div className="stage-title">Ves todo en tiempo real desde el celular</div>
            <div className="stage-desc">Sin estar en la puerta. Cuántos ingresaron, quién fue el último y a qué hora.</div>
            <div className="dash-frame anim-appear" id="s3a">
              <div className="dash-grid">
                <div className="dash-card s3c" style={{opacity:0, transition:'opacity 0.4s'}}><div className="dash-val">187</div><div className="dash-lbl">ingresados</div></div>
                <div className="dash-card s3c" style={{opacity:0, transition:'opacity 0.4s'}}><div className="dash-val">312</div><div className="dash-lbl">en lista</div></div>
                <div className="dash-card s3c" style={{opacity:0, transition:'opacity 0.4s'}}><div className="dash-val" style={{fontSize:'12px', paddingTop:'3px'}}>01:14</div><div className="dash-lbl">último ingreso</div></div>
              </div>
              <div className="s3bars" style={{opacity:0, transition:'opacity 0.5s'}}>
                <div style={{fontSize:'9px', color:'#333', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'6px'}}>por RRPP</div>
                <div className="dash-bar-row"><span>Sebastian G.</span><span>72</span></div>
                <div className="dash-bar-bg"><div className="dash-bar-fg" style={{width:'72%'}}></div></div>
                <div className="dash-bar-row"><span>Mati R.</span><span>58</span></div>
                <div className="dash-bar-bg"><div className="dash-bar-fg" style={{width:'58%'}}></div></div>
                <div className="dash-bar-row"><span>Luca D.</span><span>41</span></div>
                <div className="dash-bar-bg"><div className="dash-bar-fg" style={{width:'41%'}}></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="progress-dots">
          <div className="pdot active" id="pdot0"></div>
          <div className="pdot" id="pdot1"></div>
          <div className="pdot" id="pdot2"></div>
          <div className="pdot" id="pdot3"></div>
        </div>

        <div className="footer">
          <div className="footer-text">syncro.lat</div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
        let current = 0;
        let timer;
        const STEP = 4000;

        function goTo(n) {
          clearTimeout(timer);
          showStage(n);
          timer = setTimeout(() => goTo((n+1)%4), STEP);
        }

        function showStage(n) {
          for (let i = 0; i < 4; i++) {
            const s = document.getElementById('stage'+i);
            s.classList.remove('active');
            s.style.display = 'none';
            document.getElementById('pdot'+i).classList.remove('active');
            const ic = document.getElementById('icon'+i);
            ic.style.transform = 'scale(1)';
            ic.classList.remove('lit');
            document.getElementById('label'+i).classList.remove('lit');
          }
          current = n;
          const st = document.getElementById('stage'+n);
          st.style.display = 'block';
          document.getElementById('pdot'+n).classList.add('active');
          const ic = document.getElementById('icon'+n);
          ic.style.transform = 'scale(1.1)';
          ic.classList.add('lit');
          document.getElementById('label'+n).classList.add('lit');
          animateDot(n);
          animateContent(n);
        }

        function animateDot(n) {
          if (n >= 3) return;
          const dot = document.getElementById('dot'+n);
          dot.style.transition = 'none';
          dot.style.left = '-3px';
          dot.style.opacity = '0';
          setTimeout(() => {
            dot.style.opacity = '1';
            dot.style.transition = 'left 1.4s cubic-bezier(.4,0,.2,1), opacity 0.3s';
            dot.style.left = 'calc(100% - 3px)';
            setTimeout(() => { dot.style.opacity = '0'; }, 1300);
          }, 300);
        }

        function animateContent(n) {
          if (n === 0) {
            const a = document.getElementById('s0a');
            a.classList.remove('show'); void a.offsetWidth;
            setTimeout(() => a.classList.add('show'), 80);
            const b = document.getElementById('s0b1');
            b.style.opacity = '0';
            setTimeout(() => { b.style.opacity = '1'; }, 600);
          }
          if (n === 1) {
            const a = document.getElementById('s1a');
            a.classList.remove('show'); void a.offsetWidth;
            setTimeout(() => a.classList.add('show'), 80);
            const b = document.getElementById('s1b');
            b.style.opacity = '0';
            setTimeout(() => { b.style.opacity = '1'; }, 700);
          }
          if (n === 2) {
            const a = document.getElementById('s2a');
            a.classList.remove('show'); void a.offsetWidth;
            setTimeout(() => a.classList.add('show'), 80);
            document.querySelectorAll('.s2r').forEach((r,i) => {
              r.style.opacity = '0';
              setTimeout(() => { r.style.opacity = '1'; }, 350 + i*220);
            });
          }
          if (n === 3) {
            const a = document.getElementById('s3a');
            a.classList.remove('show'); void a.offsetWidth;
            setTimeout(() => a.classList.add('show'), 80);
            document.querySelectorAll('.s3c').forEach((c,i) => {
              c.style.opacity = '0';
              setTimeout(() => { c.style.opacity = '1'; }, 250 + i*180);
            });
            const bars = document.querySelector('.s3bars');
            bars.style.opacity = '0';
            setTimeout(() => { bars.style.opacity = '1'; }, 850);
          }
        }

        document.querySelectorAll('.pdot').forEach((dot, i) => {
          dot.addEventListener('click', () => goTo(i));
        });

        showStage(0);
        timer = setTimeout(() => goTo(1), STEP);
      `}} />
    </>
  );
}
