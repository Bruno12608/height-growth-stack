import { useState, useEffect, useRef } from "react";
import { ChevronDown, Moon, Sun, Dumbbell, Droplets, Brain, Bone, Clock, Apple, Pill, Calendar, Activity, Flame, Check, AlertTriangle, Zap, TrendingUp, ArrowRight, Sparkles, Lock, Shield, Star, Gift } from "lucide-react";

const F = "'Plus Jakarta Sans', sans-serif";
const A = "#FF5E2B";
const A2 = "#0EA5E9";
const G = "#10B981";
const cmFt = c => { const t = c / 2.54; return `${Math.floor(t / 12)}'${Math.round(t % 12)}"`; };

/* ═══════════ SVG SCENE BANNERS ═══════════ */
const Banner = ({ type }) => {
  const scenes = {
    hero: (
      <svg viewBox="0 0 400 180" style={{width:"100%",height:180,display:"block"}}>
        <defs>
          <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FF5E2B"/><stop offset="100%" stopColor="#FF8F6B"/></linearGradient>
          <linearGradient id="hg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFF7ED"/><stop offset="100%" stopColor="#FFEDD5"/></linearGradient>
          <radialGradient id="hglow"><stop offset="0%" stopColor="#FF5E2B" stopOpacity="0.15"/><stop offset="100%" stopColor="#FF5E2B" stopOpacity="0"/></radialGradient>
        </defs>
        <rect width="400" height="180" fill="url(#hg2)" rx="0"/>
        <circle cx="320" cy="40" r="100" fill="url(#hglow)"/>
        <circle cx="60" cy="160" r="60" fill="url(#hglow)"/>
        {/* Person stretching */}
        <g transform="translate(280,30)" opacity="0.12"><circle cx="30" cy="18" r="14" fill="#FF5E2B"/><rect x="16" y="36" width="28" height="50" rx="12" fill="#FF5E2B"/><line x1="16" y1="52" x2="-4" y2="36" stroke="#FF5E2B" strokeWidth="5" strokeLinecap="round"/><line x1="44" y1="52" x2="64" y2="36" stroke="#FF5E2B" strokeWidth="5" strokeLinecap="round"/><line x1="22" y1="86" x2="14" y2="126" stroke="#FF5E2B" strokeWidth="5" strokeLinecap="round"/><line x1="38" y1="86" x2="46" y2="126" stroke="#FF5E2B" strokeWidth="5" strokeLinecap="round"/></g>
        {/* Ruler marks */}
        {[0,1,2,3,4,5,6,7].map(i=><rect key={i} x="50" y={30+i*18} width={12+Math.random()*20} height="3" rx="1.5" fill="#FF5E2B" opacity={0.06+i*0.015}/>)}
        {/* Arrow up */}
        <path d="M80 140 L80 60 L70 80 M80 60 L90 80" stroke="#FF5E2B" strokeWidth="2.5" fill="none" opacity="0.1" strokeLinecap="round"/>
        {/* Dots pattern */}
        {Array.from({length:12}).map((_,i)=><circle key={i} cx={150+Math.cos(i*0.5)*60} cy={90+Math.sin(i*0.7)*40} r="2" fill="#FF5E2B" opacity="0.06"/>)}
      </svg>
    ),
    morning: (
      <svg viewBox="0 0 400 130" style={{width:"100%",height:130,display:"block",borderRadius:18}}>
        <defs>
          <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FEF3C7"/><stop offset="100%" stopColor="#FDE68A"/></linearGradient>
          <radialGradient id="msun"><stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3"/><stop offset="70%" stopColor="#F59E0B" stopOpacity="0"/></radialGradient>
        </defs>
        <rect width="400" height="130" fill="url(#mg)" rx="18"/>
        <circle cx="320" cy="30" r="70" fill="url(#msun)"/>
        <circle cx="320" cy="30" r="22" fill="#F59E0B" opacity="0.25"/>
        {[0,1,2,3,4,5,6,7].map(i=><line key={i} x1={320+Math.cos(i*0.785)*30} y1={30+Math.sin(i*0.785)*30} x2={320+Math.cos(i*0.785)*42} y2={30+Math.sin(i*0.785)*42} stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" opacity="0.2"/>)}
        {/* Mountains */}
        <path d="M0 130 L60 70 L100 100 L160 55 L220 90 L280 65 L340 85 L400 60 L400 130 Z" fill="#F59E0B" opacity="0.06"/>
        <text x="24" y="50" fill="#92400E" fontSize="28" fontWeight="800" fontFamily={F} opacity="0.7">☀️</text>
        <text x="24" y="80" fill="#92400E" fontSize="15" fontWeight="700" fontFamily={F} opacity="0.5">Rise & Grow</text>
        <text x="24" y="100" fill="#92400E" fontSize="11" fontWeight="500" fontFamily={F} opacity="0.35">Your morning protocol</text>
      </svg>
    ),
    evening: (
      <svg viewBox="0 0 400 130" style={{width:"100%",height:130,display:"block",borderRadius:18}}>
        <defs><linearGradient id="eg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1E1B4B"/><stop offset="100%" stopColor="#312E81"/></linearGradient></defs>
        <rect width="400" height="130" fill="url(#eg)" rx="18"/>
        {/* Stars */}
        {[[40,25],[90,45],[150,20],[200,50],[260,15],[310,40],[350,25],[70,70],[180,75],[280,65]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={1+Math.random()*1.5} fill="#fff" opacity={0.2+Math.random()*0.3}/>)}
        <circle cx="330" cy="40" r="18" fill="#C4B5FD" opacity="0.15"/>
        <circle cx="336" cy="34" r="18" fill="#1E1B4B"/>
        <text x="24" y="50" fill="#C4B5FD" fontSize="28" fontWeight="800" fontFamily={F} opacity="0.8">🌙</text>
        <text x="24" y="80" fill="#E0E7FF" fontSize="15" fontWeight="700" fontFamily={F} opacity="0.7">Wind Down</text>
        <text x="24" y="100" fill="#C7D2FE" fontSize="11" fontWeight="500" fontFamily={F} opacity="0.45">Maximize growth hormone</text>
      </svg>
    ),
    training: (
      <svg viewBox="0 0 400 130" style={{width:"100%",height:130,display:"block",borderRadius:18}}>
        <defs><linearGradient id="tg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFF1F2"/><stop offset="100%" stopColor="#FFE4E6"/></linearGradient></defs>
        <rect width="400" height="130" fill="url(#tg)" rx="18"/>
        {/* Dumbbell shape */}
        <g transform="translate(280,50)" opacity="0.12"><rect x="-35" y="-6" width="18" height="12" rx="3" fill={A}/><rect x="17" y="-6" width="18" height="12" rx="3" fill={A}/><rect x="-17" y="-3" width="34" height="6" rx="2" fill={A}/></g>
        <g transform="translate(340,80)" opacity="0.07"><rect x="-25" y="-5" width="14" height="10" rx="2" fill={A}/><rect x="11" y="-5" width="14" height="10" rx="2" fill={A}/><rect x="-11" y="-2.5" width="22" height="5" rx="1.5" fill={A}/></g>
        <text x="24" y="50" fill="#9F1239" fontSize="28" fontWeight="800" fontFamily={F} opacity="0.7">🏋️</text>
        <text x="24" y="80" fill="#9F1239" fontSize="15" fontWeight="700" fontFamily={F} opacity="0.5">Training Plan</text>
        <text x="24" y="100" fill="#9F1239" fontSize="11" fontWeight="500" fontFamily={F} opacity="0.35">7-day split program</text>
      </svg>
    ),
    meals: (
      <svg viewBox="0 0 400 130" style={{width:"100%",height:130,display:"block",borderRadius:18}}>
        <defs><linearGradient id="flg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ECFDF5"/><stop offset="100%" stopColor="#D1FAE5"/></linearGradient></defs>
        <rect width="400" height="130" fill="url(#flg)" rx="18"/>
        {/* Plate shape */}
        <ellipse cx="310" cy="65" rx="55" ry="45" fill="#10B981" stroke="#10B981" strokeWidth="1.5" opacity="0.1"/>
        <ellipse cx="310" cy="65" rx="38" ry="30" fill="#10B981" opacity="0.04"/>
        <text x="24" y="50" fill="#065F46" fontSize="28">🥗</text>
        <text x="24" y="80" fill="#065F46" fontSize="15" fontWeight="700" fontFamily={F} opacity="0.5">Nutrition Plan</text>
        <text x="24" y="100" fill="#065F46" fontSize="11" fontWeight="500" fontFamily={F} opacity="0.35">Growth-optimized meals</text>
      </svg>
    ),
    supps: (
      <svg viewBox="0 0 400 130" style={{width:"100%",height:130,display:"block",borderRadius:18}}>
        <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FAF5FF"/><stop offset="100%" stopColor="#F3E8FF"/></linearGradient></defs>
        <rect width="400" height="130" fill="url(#sg)" rx="18"/>
        {/* Pill shapes */}
        {[[290,40,24,0.1],[330,70,18,0.07],[360,35,14,0.05]].map(([x,y,s,o],i)=><g key={i} transform={`translate(${x},${y}) rotate(${30+i*20})`}><rect x={-s/2} y={-s/4} width={s} height={s/2} rx={s/4} fill="#A855F7" opacity={o}/></g>)}
        <text x="24" y="50" fill="#6B21A8" fontSize="28">💊</text>
        <text x="24" y="80" fill="#6B21A8" fontSize="15" fontWeight="700" fontFamily={F} opacity="0.5">Supplement Stack</text>
        <text x="24" y="100" fill="#6B21A8" fontSize="11" fontWeight="500" fontFamily={F} opacity="0.35">Evidence-based essentials</text>
      </svg>
    ),
    posture: (
      <svg viewBox="0 0 400 130" style={{width:"100%",height:130,display:"block",borderRadius:18}}>
        <defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FDF2F8"/><stop offset="100%" stopColor="#FCE7F3"/></linearGradient></defs>
        <rect width="400" height="130" fill="url(#pg)" rx="18"/>
        {/* Spine dots */}
        {[0,1,2,3,4,5,6,7].map(i=><circle key={i} cx={320-i*2} cy={20+i*13} r={4-i*0.3} fill="#EC4899" opacity={0.06+i*0.01}/>)}
        <text x="24" y="50" fill="#9D174D" fontSize="28">🧍</text>
        <text x="24" y="80" fill="#9D174D" fontSize="15" fontWeight="700" fontFamily={F} opacity="0.5">Posture Fixes</text>
        <text x="24" y="100" fill="#9D174D" fontSize="11" fontWeight="500" fontFamily={F} opacity="0.35">Instant +2–5 cm visible height</text>
      </svg>
    ),
  };
  return <div style={{marginBottom:14}}>{scenes[type]}</div>;
};

/* ── Exercise photo cards (rich SVG scenes) ── */
const ExerciseScene = ({ type }) => {
  const base = { width: "100%", height: 150, display: "block", borderRadius: 14 };
  const scenes = {
    hang: (
      <svg viewBox="0 0 300 150" style={base}>
        <defs><linearGradient id="ehg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FEF3C7"/><stop offset="100%" stopColor="#FDE68A"/></linearGradient></defs>
        <rect width="300" height="150" fill="url(#ehg)" rx="14"/>
        <rect x="80" y="10" width="140" height="8" rx="4" fill="#92400E" opacity="0.15"/>
        <rect x="85" y="14" width="4" height="6" fill="#92400E" opacity="0.1"/><rect x="210" y="14" width="4" height="6" fill="#92400E" opacity="0.1"/>
        <circle cx="150" cy="42" r="12" fill={A} opacity="0.2"/><rect x="140" y="56" width="20" height="36" rx="8" fill={A} opacity="0.15"/>
        <line x1="140" y1="66" x2="125" y2="22" stroke={A} strokeWidth="3.5" strokeLinecap="round" opacity="0.15"/>
        <line x1="160" y1="66" x2="175" y2="22" stroke={A} strokeWidth="3.5" strokeLinecap="round" opacity="0.15"/>
        <line x1="144" y1="92" x2="138" y2="128" stroke={A} strokeWidth="3.5" strokeLinecap="round" opacity="0.15"/>
        <line x1="156" y1="92" x2="162" y2="128" stroke={A} strokeWidth="3.5" strokeLinecap="round" opacity="0.15"/>
        <text x="16" y="135" fill="#92400E" fontSize="10" fontFamily={F} fontWeight="600" opacity="0.4">DEAD HANG</text>
        <text x="220" y="135" fill="#92400E" fontSize="9" fontFamily={F} fontWeight="500" opacity="0.3">Spine decompression</text>
      </svg>
    ),
    swim: (
      <svg viewBox="0 0 300 150" style={base}>
        <defs><linearGradient id="esg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E0F2FE"/><stop offset="100%" stopColor="#BAE6FD"/></linearGradient></defs>
        <rect width="300" height="150" fill="url(#esg)" rx="14"/>
        {[0,1,2,3].map(i=><path key={i} d={`M-10 ${70+i*22} Q40 ${60+i*22} 80 ${70+i*22} Q120 ${80+i*22} 160 ${70+i*22} Q200 ${60+i*22} 240 ${70+i*22} Q280 ${80+i*22} 320 ${70+i*22}`} fill="none" stroke="#0EA5E9" strokeWidth="1.5" opacity={0.06+i*0.03}/>)}
        <circle cx="120" cy="55" r="10" fill="#0369A1" opacity="0.15"/>
        <path d="M130 58 L180 62" stroke="#0369A1" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <path d="M140 56 L150 40" stroke="#0369A1" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <path d="M160 60 L172 46" stroke="#0369A1" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <text x="16" y="135" fill="#0369A1" fontSize="10" fontFamily={F} fontWeight="600" opacity="0.4">SWIMMING</text>
      </svg>
    ),
    yoga: (
      <svg viewBox="0 0 300 150" style={base}>
        <defs><linearGradient id="eyg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F0FDF4"/><stop offset="100%" stopColor="#DCFCE7"/></linearGradient></defs>
        <rect width="300" height="150" fill="url(#eyg)" rx="14"/>
        <circle cx="150" cy="36" r="10" fill="#166534" opacity="0.12"/>
        <path d="M150 46 L150 80" stroke="#166534" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <path d="M150 60 L125 50" stroke="#166534" strokeWidth="3" strokeLinecap="round" opacity="0.1"/>
        <path d="M150 60 L175 50" stroke="#166534" strokeWidth="3" strokeLinecap="round" opacity="0.1"/>
        <path d="M150 80 L130 110" stroke="#166534" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <path d="M150 80 L170 110" stroke="#166534" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <ellipse cx="150" cy="125" rx="50" ry="6" fill="#166534" opacity="0.05"/>
        <text x="16" y="135" fill="#166534" fontSize="10" fontFamily={F} fontWeight="600" opacity="0.4">YOGA FLOW</text>
      </svg>
    ),
    sprint: (
      <svg viewBox="0 0 300 150" style={base}>
        <defs><linearGradient id="erg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFF1F2"/><stop offset="100%" stopColor="#FFE4E6"/></linearGradient></defs>
        <rect width="300" height="150" fill="url(#erg)" rx="14"/>
        <circle cx="160" cy="30" r="10" fill="#BE123C" opacity="0.12"/>
        <path d="M160 40 L155 70" stroke="#BE123C" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <path d="M155 70 L135 105" stroke="#BE123C" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <path d="M155 70 L178 95" stroke="#BE123C" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <path d="M155 52 L130 40" stroke="#BE123C" strokeWidth="3" strokeLinecap="round" opacity="0.1"/>
        <path d="M155 52 L180 42" stroke="#BE123C" strokeWidth="3" strokeLinecap="round" opacity="0.1"/>
        {[0,1,2,3].map(i=><line key={i} x1={95+i*8} y1={60+i*5} x2={103+i*8} y2={57+i*5} stroke="#BE123C" strokeWidth="2" strokeLinecap="round" opacity="0.08"/>)}
        <text x="16" y="135" fill="#BE123C" fontSize="10" fontFamily={F} fontWeight="600" opacity="0.4">SPRINTS</text>
      </svg>
    ),
    stretch: (
      <svg viewBox="0 0 300 150" style={base}>
        <defs><linearGradient id="esg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FEF9C3"/><stop offset="100%" stopColor="#FEF08A"/></linearGradient></defs>
        <rect width="300" height="150" fill="url(#esg2)" rx="14"/>
        <circle cx="150" cy="30" r="10" fill="#854D0E" opacity="0.12"/>
        <path d="M150 40 L150 75" stroke="#854D0E" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <path d="M150 55 L118 35" stroke="#854D0E" strokeWidth="3" strokeLinecap="round" opacity="0.1"/>
        <path d="M150 55 L182 35" stroke="#854D0E" strokeWidth="3" strokeLinecap="round" opacity="0.1"/>
        <path d="M150 75 L130 115" stroke="#854D0E" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <path d="M150 75 L170 115" stroke="#854D0E" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
        <text x="16" y="135" fill="#854D0E" fontSize="10" fontFamily={F} fontWeight="600" opacity="0.4">STRETCHING</text>
      </svg>
    ),
  };
  return scenes[type] || scenes.stretch;
};

/* ── Meal Card Visual ── */
const MealVisual = ({ emojis, gradient }) => (
  <div style={{ height: 120, borderRadius: "16px 16px 0 0", background: `linear-gradient(135deg, ${gradient})`, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 36, position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)" }} />
    {emojis.map((e, i) => <span key={i} style={{ position: "relative", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))", transform: `rotate(${(i-1)*10}deg) scale(${1-i*0.05})` }}>{e}</span>)}
  </div>
);
const mealEmojis = {
  breakfast: [["🍳","🥛","🍌"],["🥤","🫐","🥣"],["🐟","🍞","🥑"]],
  lunch: [["🍗","🥗","🧀"],["🍣","🥑","🍚"],["🥩","🫘","🌯"]],
  dinner: [["🥩","🍠","🥦"],["🐟","🍚","🥬"],["🍝","🧆","🥛"]],
  snacks: [["🍦","🫐","🍯"],["🥣","🥜","☕"],["🥤","🍌","🥜"]],
};
const mealGradients = {
  breakfast: ["#FEF3C7,#FDE68A","#FECACA,#FCA5A5","#CFFAFE,#A5F3FC"],
  lunch: ["#D1FAE5,#A7F3D0","#FFE4E6,#FECDD3","#FEF3C7,#FDE68A"],
  dinner: ["#FFE4E6,#FECDD3","#DBEAFE,#BFDBFE","#FEF9C3,#FDE68A"],
  snacks: ["#F3E8FF,#E9D5FF","#ECFDF5,#D1FAE5","#FEF3C7,#FDE68A"],
};

/* ── Ring ── */
const Ring = ({ value, max=100, size=120, sw=9, color=A, children }) => {
  const r=(size-sw)/2,c=2*Math.PI*r;const[o,setO]=useState(c);
  useEffect(()=>{setTimeout(()=>setO(c-(value/max)*c),200);},[value]);
  return(<div style={{position:"relative",width:size,height:size}}><svg width={size} height={size} style={{transform:"rotate(-90deg)"}}><circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#f1f5f9" strokeWidth={sw}/><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={sw} strokeDasharray={c} strokeDashoffset={o} strokeLinecap="round" style={{transition:"stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)"}}/></svg><div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>{children}</div></div>);
};
const Bar = ({val,max=100,color=A,delay=0}) => {const[w,setW]=useState(0);useEffect(()=>{const t=setTimeout(()=>setW((val/max)*100),100+delay);return()=>clearTimeout(t);},[val]);return<div style={{height:8,borderRadius:99,background:"#f1f5f9",overflow:"hidden"}}><div style={{width:`${w}%`,height:"100%",borderRadius:99,background:`linear-gradient(90deg,${color},${color}bb)`,transition:"width 1.3s cubic-bezier(0.22,1,0.36,1)"}}/></div>;};

/* ── Button ── */
const Btn = ({children,onClick,disabled,style:sx={}}) => {
  const[p,setP]=useState(false);
  return<button style={{width:"100%",padding:"17px 24px",borderRadius:16,border:"none",cursor:disabled?"default":"pointer",fontFamily:F,fontSize:15,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:disabled?"#e5e7eb":`linear-gradient(135deg,${A},#E04500)`,color:disabled?"#9ca3af":"#fff",boxShadow:disabled?"none":`0 8px 32px ${A}30`,transform:p&&!disabled?"scale(0.97)":"scale(1)",transition:"all 0.2s",...sx}} onClick={onClick} disabled={disabled} onPointerDown={()=>setP(true)} onPointerUp={()=>setP(false)} onPointerLeave={()=>setP(false)}>{children}</button>;
};
const Chip = ({sel,onClick,icon,label}) => {
  const[p,setP]=useState(false);
  return<button onClick={onClick} onPointerDown={()=>setP(true)} onPointerUp={()=>setP(false)} onPointerLeave={()=>setP(false)} style={{padding:"14px 6px",borderRadius:16,border:`2px solid ${sel?A:"#e5e7eb"}`,background:sel?`${A}08`:"#fff",color:sel?A:"#6b7280",fontFamily:F,fontSize:12,fontWeight:600,cursor:"pointer",transition:"all 0.2s",transform:p?"scale(0.95)":"scale(1)",display:"flex",flexDirection:"column",alignItems:"center",gap:5,boxShadow:sel?`0 4px 16px ${A}15`:"0 1px 3px rgba(0,0,0,0.04)"}}><span style={{fontSize:22}}>{icon}</span>{label}</button>;
};
const Sld = ({label,val,set,min,max,unit}) => (<div style={{marginBottom:22}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}><span style={{color:"#6b7280",fontSize:13,fontWeight:500}}>{label}</span><span style={{color:A,fontSize:14,fontWeight:700}}>{val} {unit}</span></div><input type="range" min={min} max={max} value={val} onChange={e=>set(+e.target.value)} style={{width:"100%",accentColor:A}}/></div>);

/* ── Loader ── */
const Loader = () => {
  const[progress,setProgress]=useState(0);const[s,setS]=useState(0);
  const steps=["🧬 Analyzing genetics","📊 Scoring lifestyle","☀️ Building AM routine","🏋️ Creating training plan","🥗 Generating meal plan","💊 Optimizing supplements","📅 Mapping 90-day roadmap"];
  useEffect(()=>{const iv=setInterval(()=>setProgress(p=>{if(p>=100){clearInterval(iv);return 100;}return p+0.8;}),20);return()=>clearInterval(iv);},[]);
  useEffect(()=>{const iv=setInterval(()=>setS(s=>(s+1)%steps.length),340);return()=>clearInterval(iv);},[]);
  return(<div style={{textAlign:"center",padding:"40px 24px",animation:"fadeIn 0.4s ease"}}>
    <div style={{position:"relative",width:120,height:120,margin:"0 auto 28px"}}>
      <svg width={120} height={120} style={{transform:"rotate(-90deg)",position:"absolute",inset:0}}><circle cx={60} cy={60} r={52} fill="none" stroke="#f1f5f9" strokeWidth={8}/><circle cx={60} cy={60} r={52} fill="none" stroke={A} strokeWidth={8} strokeDasharray={327} strokeDashoffset={327-(progress/100)*327} strokeLinecap="round" style={{transition:"stroke-dashoffset 0.3s ease"}}/></svg>
      <svg width={120} height={120} style={{position:"absolute",inset:0,animation:"spin 8s linear infinite"}}><circle cx={60} cy={60} r={40} fill="none" stroke={`${A2}22`} strokeWidth={3} strokeDasharray="8 12"/></svg>
      <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:24,fontWeight:800}}>{Math.round(progress)}%</span></div>
    </div>
    <div key={s} style={{animation:"fadeSlide 0.3s ease",fontSize:15,fontWeight:700,marginBottom:4}}>{steps[s]}</div>
    <span style={{fontSize:12,color:"#9ca3af"}}>Building your personalized stack...</span>
    <div style={{maxWidth:260,margin:"20px auto 0",height:6,borderRadius:99,background:"#f1f5f9",overflow:"hidden"}}><div style={{width:`${progress}%`,height:"100%",borderRadius:99,background:`linear-gradient(90deg,${A},${A2})`,transition:"width 0.3s"}}/></div>
    <div style={{display:"flex",justifyContent:"center",gap:6,marginTop:16}}>{steps.map((_,i)=><div key={i} style={{width:8,height:8,borderRadius:"50%",background:i<=s?A:"#e5e7eb",transition:"all 0.3s",transform:i===s?"scale(1.3)":"scale(1)"}}/>)}</div>
  </div>);
};

/* ── COMPUTE ── */
function calc(d) {
  const m=d.gender==="male";const gen=m?(d.dadH+d.momH+13)/2:(d.dadH+d.momH-13)/2;const age=d.age;
  let wp=0;
  if(m){if(age<13)wp=100;else if(age<15)wp=90;else if(age<17)wp=65;else if(age<19)wp=35;else if(age<21)wp=12;}
  else{if(age<11)wp=100;else if(age<13)wp=85;else if(age<15)wp=55;else if(age<17)wp=20;else if(age<19)wp=5;}
  const sc={sleep:{less5:15,"5to6":35,"7to8":75,"9plus":95},exercise:{none:10,light:35,moderate:80,intense:65},nutrition:{poor:10,avg:38,good:74,excellent:95},posture:{terrible:8,poor:28,okay:62,great:92},stress:{high:15,moderate:48,low:78,minimal:94},water:{low:18,moderate:52,good:76,excellent:94}};
  const s={sleep:sc.sleep[d.sleep]||50,exercise:sc.exercise[d.exercise]||50,nutrition:sc.nutrition[d.nutrition]||50,posture:sc.posture[d.posture]||50,stress:sc.stress[d.stress]||50,water:sc.water[d.water]||50};
  const overall=Math.round(s.sleep*0.28+s.exercise*0.18+s.nutrition*0.22+s.posture*0.12+s.stress*0.1+s.water*0.1);

  const ageF=wp/100;const lifeF=overall/100;
  const toGen=Math.max(0,gen-d.curH);
  const naturalGrowth=toGen*ageF;
  const optBonus=lifeF*ageF*5;
  const postureGain=s.posture<80?((80-s.posture)/80)*3.5:0;
  const predicted=Math.round((d.curH+naturalGrowth+optBonus+postureGain)*10)/10;
  const gain=Math.round((predicted-d.curH)*10)/10;

  const morning=[
    {time:"6:15",label:"Sunlight exposure",desc:"Open curtains. 10 min morning sun for cortisol + vitamin D.",icon:"☀️",dur:"10 min"},
    {time:"6:25",label:"Full-body bed stretch",desc:"Arms overhead 20s. Side twists. Cat-cow 1 min.",icon:"🙆",dur:"5 min"},
    {time:"6:30",label:"Dead hang decompression",desc:"4 × 45s overhand grip. Rest 30s. Decompresses spine 1–2 cm.",icon:"💪",dur:"6 min"},
    {time:"6:36",label:"Cobra + McKenzie",desc:"Cobra: 3 × 30s. Press-ups: 3 × 10. Thoracic extension.",icon:"🐍",dur:"5 min"},
    {time:"6:41",label:"Cold shower",desc:"30s warm → 90s cold. Boosts HGH + nervous system.",icon:"🧊",dur:"3 min"},
    {time:"6:50",label:"Growth breakfast",desc:`${m?"4":"3"} eggs + oatmeal + milk + banana. ${m?"40":"30"}g protein.`,icon:"🍳",dur:"15 min"},
    {time:"7:05",label:"Morning supplements",desc:"D3 (4000 IU) + K2 (100 mcg) + Zinc (15 mg) w/ fat.",icon:"💊",dur:"1 min"},
  ];
  const evening=[
    {time:"7:30",label:"Growth dinner",desc:`${m?"200g":"160g"} protein + sweet potato + greens + milk.`,icon:"🥗",dur:"20 min"},
    {time:"8:00",label:"Spine decompression",desc:"Child's pose → Down dog → Spinal twist → Legs up wall.",icon:"🧘",dur:"15 min"},
    {time:"8:15",label:"Foam rolling",desc:"Thoracic spine → IT bands → Calves. Slow controlled pressure.",icon:"🔄",dur:"10 min"},
    {time:"8:30",label:"Blue light off",desc:"Glasses or Night Shift. Dim lights. Protect melatonin.",icon:"🌅",dur:"—"},
    {time:"9:00",label:"Leg stretches",desc:"Hamstrings → Quads → Hip flexors, 60s each side.",icon:"🦵",dur:"10 min"},
    {time:"9:15",label:"Sleep protocol",desc:`Magnesium 400mg. 18°C. Darkness. ${age<18?"9–10":"8–9"} hrs.`,icon:"😴",dur:"—"},
  ];
  const weekly=[
    {day:"Mon",title:"Upper Body + Decompression",type:"hang",exercises:["Dead hangs: 5 × 60s","Pull-up negatives: 3 × 5","Band dislocates: 3 × 15","Thoracic extensions: 3 × 12"],int:"Medium",dur:"45 min",cal:280},
    {day:"Tue",title:"Swimming or Basketball",type:"swim",exercises:["Freestyle 30 min OR Basketball 40 min","Box jumps: 3 × 10","Dynamic stretch: 10 min"],int:"High",dur:"50 min",cal:420},
    {day:"Wed",title:"Yoga & Flexibility",type:"yoga",exercises:["Sun salutations: 5 rounds","Cobra: 3 × 45s · Bridge: 3 × 30s","Pigeon: 2 × 60s each · Twists: 2 min"],int:"Low",dur:"40 min",cal:180},
    {day:"Thu",title:"Sprints + Plyometrics",type:"sprint",exercises:["Hill sprints: 8 × 30s","Broad jumps: 4 × 6","Skipping: 3 × 20 · Ankle hops: 3 × 20"],int:"High",dur:"45 min",cal:380},
    {day:"Fri",title:"Full Stretch + Posture",type:"stretch",exercises:["Dead hangs: 4 × 45s","Wall angels: 3 × 12","Band pull-aparts: 3 × 15","Hip flexor stretch: 3 × 60s each"],int:"Medium",dur:"40 min",cal:200},
    {day:"Sat",title:"Active Sport Day",type:"sprint",exercises:["Basketball / volleyball / swimming 60+ min","Focus jumping & reaching","Post-activity stretch: 15 min"],int:"High",dur:"75 min",cal:500},
    {day:"Sun",title:"Deep Recovery",type:"yoga",exercises:["Gentle yoga 20 min · Foam rolling 15 min","Meditation 10 min","Passive stretching 15 min"],int:"Rest",dur:"60 min",cal:120},
  ];
  const meals={
    breakfast:[{name:"Power Omelette",desc:`${m?"4":"3"} eggs, spinach, feta, toast, milk`,p:m?"38g":"28g",ca:"450mg",cal:m?580:440,tag:"Protein"},{name:"Growth Smoothie Bowl",desc:"Whey, banana, oats, yogurt, almond butter",p:m?"42g":"32g",ca:"380mg",cal:m?620:480,tag:"Quick"},{name:"Sardine Toast + Eggs",desc:"Sourdough, sardines, 2 eggs, avocado",p:m?"35g":"28g",ca:"520mg",cal:m?560:440,tag:"Calcium"}],
    lunch:[{name:"Chicken Quinoa Bowl",desc:`${m?"200g":"150g"} chicken, quinoa, veg, tahini`,p:m?"52g":"40g",ca:"280mg",cal:m?680:520,tag:"Balanced"},{name:"Salmon Poke Bowl",desc:`${m?"180g":"140g"} salmon, rice, edamame`,p:m?"45g":"35g",ca:"200mg",cal:m?640:500,tag:"Omega-3"},{name:"Beef Burrito Bowl",desc:"Beef, beans, rice, cheese, salsa",p:m?"48g":"38g",ca:"350mg",cal:m?720:560,tag:"Fuel"}],
    dinner:[{name:"Steak & Sweet Potato",desc:`${m?"220g":"170g"} sirloin, sweet potato, broccoli`,p:m?"55g":"42g",ca:"320mg",cal:m?740:580,tag:"Classic"},{name:"Baked Salmon Plate",desc:`${m?"200g":"160g"} salmon, rice, kale, parmesan`,p:m?"48g":"38g",ca:"400mg",cal:m?680:540,tag:"Brain"},{name:"Turkey Meatball Pasta",desc:"Meatballs, pasta, marinara, parmesan",p:m?"50g":"40g",ca:"380mg",cal:m?700:540,tag:"Comfort"}],
    snacks:[{name:"Greek Yogurt Parfait",desc:"Yogurt, granola, berries, honey",p:"20g",ca:"300mg",cal:280,tag:"Anytime"},{name:"Bone Broth + Almonds",desc:"1 cup broth + 30g almonds",p:"18g",ca:"200mg",cal:240,tag:"Collagen"},{name:"Protein Shake",desc:"Whey, milk, banana, peanut butter",p:m?"38g":"28g",ca:"380mg",cal:m?440:340,tag:"Post-WO"}],
  };
  const supps=[
    {name:"Vitamin D3",dose:"4,000 IU/day",when:"AM w/ fat",why:"Calcium absorption. 80% of teens deficient.",pri:1,icon:"☀️"},
    {name:"Vitamin K2",dose:"100–200 mcg",when:"With D3",why:"Directs calcium into bones. Must-have with D3.",pri:1,icon:"🦴"},
    {name:"Zinc",dose:"15–30 mg/day",when:"Evening",why:"Growth hormone + cell division essential.",pri:1,icon:"⚡"},
    {name:"Magnesium",dose:"400 mg/day",when:"AM+PM split",why:"300+ reactions. Improves deep sleep.",pri:1,icon:"💤"},
    {name:"Collagen",dose:"10–15g/day",when:"Morning",why:"Growth plate cartilage support.",pri:2,icon:"🧬"},
    {name:"Omega-3",dose:"2g EPA+DHA",when:"Any meal",why:"Anti-inflammatory. Bone density.",pri:2,icon:"🐟"},
    {name:"Ashwagandha",dose:"600 mg/day",when:"Evening",why:"Cortisol -30%. Better sleep.",pri:3,icon:"🌿"},
  ];
  const posture=[
    {issue:"Forward Head",target:"Neck flexors",fix:"Chin tucks 3×15 (hold 5s). Neck holds 3×20s.",impact:"+1–2 cm",icon:"🧠"},
    {issue:"Rounded Shoulders",target:"Rhomboids",fix:"Pull-aparts 3×15. Face pulls 3×12. Chest stretch 3×30s.",impact:"+1–2 cm",icon:"💪"},
    {issue:"Pelvic Tilt",target:"Glutes + core",fix:"Hip flexor 3×60s. Glute bridges 3×15. Dead bugs 3×10.",impact:"+1–3 cm",icon:"🦴"},
    {issue:"Kyphosis",target:"T-spine",fix:"Roller extensions 3×10. Cat-cow 2 min. Superman 3×20s.",impact:"+1–2 cm",icon:"🔄"},
  ];
  const timeline=[
    {wk:"Week 1–2",phase:"Foundation",items:["Lock in 10 PM sleep","Start AM+PM routine","Begin supplements","Track height weekly","Expect +1–2 cm posture"],color:A},
    {wk:"Week 3–4",phase:"Building",items:["Add 6-day training","Hit protein targets","Posture automatic","Decompression easier"],color:"#F59E0B"},
    {wk:"Week 5–8",phase:"Acceleration",items:["Sleep quality peaks","GH fully optimized","Add ankle weights","Changes compound"],color:G},
    {wk:"Week 9–12",phase:"Optimization",items:["Review progress","Adjust calories","+10% intensity","Add PNF stretching"],color:A2},
    {wk:"Month 4+",phase:"Long-term",items:["Continue full stack","Monthly measures","Rotate training","Annual bloodwork"],color:"#A855F7"},
  ];
  return{gen:Math.round(gen*10)/10,predicted,gain,overall,s,m,age,curH:d.curH,morning,evening,weekly,meals,supps,posture,timeline};
}

/* ══════ APP ══════ */
export default function App(){
  const[step,setStep]=useState(0);const[loading,setLoading]=useState(false);const[res,setRes]=useState(null);
  const[tab,setTab]=useState("overview");const[mc,setMc]=useState("breakfast");const[od,setOd]=useState(null);
  const[fade,setFade]=useState(true);const ref=useRef(null);const[paid,setPaid]=useState(false);
  const[d,setD]=useState({gender:"",age:16,curH:170,dadH:175,momH:162,sleep:"",exercise:"",nutrition:"",posture:"",stress:"",water:""});
  const u=k=>v=>setD(p=>({...p,[k]:v}));

  /*  ┌─────────────────────────────────────────────┐
   *  │  STRIPE CONFIG — Replace this with yours!   │
   *  └─────────────────────────────────────────────┘ */
  const STRIPE_LINK = "https://buy.stripe.com/9B64gAcpecbLbJHbCoafS00";
  // After creating your Stripe Payment Link, set the
  // success URL to: https://yourdomain.com?success=true

  /* On mount: check if returning from Stripe */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      try {
        const saved = JSON.parse(window.name || "{}");
        if (saved.gender) {
          setD(saved);
          const results = calc(saved);
          setRes(results);
          setStep(3);
          setPaid(true);
          // Clean up URL
          window.history.replaceState({}, "", window.location.pathname);
        }
      } catch(e) { console.log("No saved quiz data"); }
    }
  }, []);

  /* Save quiz + redirect to Stripe */
  const handleCheckout = () => {
    // Save quiz answers so they survive the redirect
    window.name = JSON.stringify(d);
    window.location.href = STRIPE_LINK;
  };

  const go=()=>{setFade(false);setTimeout(()=>{if(step===2){setLoading(true);setTimeout(()=>{setRes(calc(d));setLoading(false);setStep(3);setFade(true);},3200);}else{setStep(step+1);setFade(true);}},200);ref.current?.scrollTo({top:0,behavior:"smooth"});};
  const ok=()=>{if(step===0)return d.gender;if(step===1)return true;if(step===2)return d.sleep&&d.exercise&&d.nutrition&&d.posture&&d.stress&&d.water;return true;};
  const Card=({children,style})=><div style={{padding:18,borderRadius:20,background:"#fff",border:"1px solid #f0f0f0",marginBottom:14,boxShadow:"0 2px 8px rgba(0,0,0,0.03)",...style}}>{children}</div>;
  const tabs=[{k:"overview",l:"Overview",ic:<Activity size={13}/>},{k:"morning",l:"Morning",ic:<Sun size={13}/>},{k:"evening",l:"Evening",ic:<Moon size={13}/>},{k:"training",l:"Training",ic:<Dumbbell size={13}/>},{k:"meals",l:"Meals",ic:<Apple size={13}/>},{k:"supps",l:"Supps",ic:<Pill size={13}/>},{k:"posture",l:"Posture",ic:<Bone size={13}/>},{k:"timeline",l:"90 Days",ic:<Calendar size={13}/>}];
  const r=res;

  return(<div style={{minHeight:"100vh",background:"#F8F9FA",fontFamily:F,color:"#111"}}>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
    <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeSlide{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}input[type=range]{-webkit-appearance:none;background:#e5e7eb;border-radius:99px;height:6px}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:${A};cursor:pointer;box-shadow:0 2px 10px ${A}55}*{box-sizing:border-box}::-webkit-scrollbar{height:0;width:0}`}</style>

    {step<3&&!loading&&<Banner type="hero"/>}
    <div style={{padding:step<3&&!loading?"0 24px":"24px 24px 0",textAlign:"center",marginTop:step<3&&!loading?-50:0,position:"relative",zIndex:2}}>
      <div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 14px",borderRadius:99,background:"#fff",border:`1.5px solid ${A}22`,fontSize:10,fontWeight:700,color:A,letterSpacing:"0.1em",textTransform:"uppercase",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}><Zap size={11}/> Growth Stack</div>
      <h1 style={{fontSize:28,fontWeight:800,margin:"12px 0 4px",lineHeight:1.1}}>{step<3?<>Your Growth<br/>Assessment</>:!paid?<>Your Results<br/>Are Ready 🔓</>:<>Your Growth<br/>Blueprint</>}</h1>
      <p style={{color:"#9ca3af",fontSize:13,margin:0}}>{step<3?"Personalized height optimization":!paid?"Unlock your full personalized plan":`For ${r?.m?"male":"female"} · age ${r?.age}`}</p>
    </div>

    {step<3&&!loading&&<div style={{display:"flex",gap:6,padding:"16px 50px 8px",justifyContent:"center"}}>{[0,1,2].map(i=><div key={i} style={{height:4,borderRadius:99,flex:1,maxWidth:55,background:i<=step?A:"#e5e7eb",transition:"all 0.4s"}}/>)}</div>}

    <div ref={ref} style={{padding:step===3?"10px 18px 30px":"12px 24px 130px",opacity:fade?1:0,transition:"all 0.3s"}}>
      {step===0&&!loading&&<div style={{animation:"up 0.5s ease"}}><div style={{fontSize:14,fontWeight:700,color:"#374151",marginBottom:10}}>Biological sex</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:22}}><Chip sel={d.gender==="male"} onClick={()=>u("gender")("male")} icon="👨" label="Male"/><Chip sel={d.gender==="female"} onClick={()=>u("gender")("female")} icon="👩" label="Female"/></div><Sld label="Your age" val={d.age} set={u("age")} min={10} max={25} unit="years"/><Sld label="Current height" val={d.curH} set={u("curH")} min={130} max={210} unit={`cm · ${cmFt(d.curH)}`}/></div>}

      {step===1&&!loading&&<div style={{animation:"up 0.5s ease"}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}><span style={{fontSize:18}}>🧬</span><span style={{fontSize:18,fontWeight:700}}>Parent Heights</span></div><Sld label="Father's height" val={d.dadH} set={u("dadH")} min={150} max={210} unit={`cm · ${cmFt(d.dadH)}`}/><Sld label="Mother's height" val={d.momH} set={u("momH")} min={140} max={195} unit={`cm · ${cmFt(d.momH)}`}/></div>}

      {step===2&&!loading&&<div style={{animation:"up 0.5s ease"}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}><span style={{fontSize:18}}>⚡</span><span style={{fontSize:18,fontWeight:700}}>Lifestyle Factors</span></div>
        {[["Sleep","sleep",[["less5","<5h","😵"],["5to6","5–6h","😐"],["7to8","7–8h","😊"],["9plus","9+h","😴"]]],["Exercise","exercise",[["none","None","🛋️"],["light","Light","🚶"],["moderate","Active","🏃"],["intense","Intense","🏋️"]]],["Nutrition","nutrition",[["poor","Poor","🍕"],["avg","Average","🍝"],["good","Good","🥩"],["excellent","Great","🥗"]]],["Posture","posture",[["terrible","Bad","🦐"],["poor","Poor","😣"],["okay","Okay","🙂"],["great","Great","🧍"]]],["Stress","stress",[["high","High","😰"],["moderate","Medium","😟"],["low","Low","😌"],["minimal","Chill","🧘"]]],["Water","water",[["low","<1L","🏜️"],["moderate","1–2L","💧"],["good","2–3L","🚰"],["excellent","3L+","🌊"]]]].map(([lbl,key,opts])=><div key={key} style={{marginBottom:16}}><div style={{fontSize:13,fontWeight:700,color:"#374151",marginBottom:8}}>{lbl}</div><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>{opts.map(([v,l,ic])=><Chip key={v} sel={d[key]===v} onClick={()=>u(key)(v)} icon={ic} label={l}/>)}</div></div>)}
      </div>}

      {loading&&<Loader/>}

      {step===3&&r&&!loading&&!paid&&<div style={{animation:"up 0.5s ease",padding:"0 4px"}}>
        {/* Teaser card - show predicted height */}
        <Card style={{textAlign:"center",background:`linear-gradient(180deg,${A}06,#fff)`,borderColor:`${A}18`,marginTop:8}}>
          <div style={{fontSize:10,color:"#9ca3af",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:10}}>Your Results Are Ready</div>
          <div style={{display:"flex",justifyContent:"center",marginBottom:8}}><Ring value={r.predicted} max={r.gen+20} size={130} sw={10} color={A}><span style={{fontSize:34,fontWeight:800}}>{r.predicted}</span><span style={{fontSize:11,color:"#9ca3af",fontWeight:600}}>cm</span></Ring></div>
          <div style={{fontSize:14,color:"#6b7280"}}>{cmFt(r.predicted)}</div>
          {r.gain>0&&<div style={{display:"inline-flex",alignItems:"center",gap:4,marginTop:8,padding:"6px 16px",borderRadius:99,background:`${G}0d`,color:G,fontSize:13,fontWeight:700}}><TrendingUp size={14}/> +{r.gain} cm growth potential</div>}
        </Card>

        {/* Blurred preview of scores */}
        <Card style={{position:"relative",overflow:"hidden"}}>
          <div style={{filter:"blur(6px)",pointerEvents:"none",userSelect:"none"}}>
            <div style={{fontSize:14,fontWeight:700,marginBottom:12}}>Growth Factor Scores</div>
            {[{l:"Sleep",c:"#818cf8"},{l:"Exercise",c:G},{l:"Nutrition",c:"#F59E0B"},{l:"Posture",c:"#EC4899"},{l:"Stress",c:A},{l:"Hydration",c:A2}].map((it,i)=><div key={i} style={{marginBottom:10}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{fontSize:13,fontWeight:600,color:"#374151"}}>{it.l}</span><span style={{fontSize:13,fontWeight:800,color:it.c}}>??</span></div><div style={{height:8,borderRadius:99,background:"#f1f5f9"}}><div style={{width:`${40+Math.random()*40}%`,height:"100%",borderRadius:99,background:it.c}}/></div></div>)}
          </div>
          <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(255,255,255,0.5)",backdropFilter:"blur(2px)"}}>
            <div style={{display:"flex",alignItems:"center",gap:6,padding:"10px 20px",borderRadius:14,background:"#fff",boxShadow:"0 4px 20px rgba(0,0,0,0.1)",fontSize:14,fontWeight:700,color:"#374151"}}><Lock size={16} color={A}/> Unlock Full Analysis</div>
          </div>
        </Card>

        {/* What you get */}
        <Card style={{background:"linear-gradient(135deg, #FFFBEB, #FEF3C7)",borderColor:"#FDE68A"}}>
          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:14}}><Gift size={16} color="#D97706"/><span style={{fontSize:15,fontWeight:700,color:"#92400E"}}>What's Inside Your Plan</span></div>
          {[
            ["📊","Complete growth score breakdown","6 lifestyle factors analyzed"],
            ["☀️","Personalized AM routine","Minute-by-minute morning protocol"],
            ["🌙","Evening growth protocol","Optimized for HGH release"],
            ["🏋️","7-day training program","With exercise illustrations"],
            ["🥗","Custom meal plan","Breakfast, lunch, dinner + snacks"],
            ["💊","Supplement stack","Doses, timing & priority ranked"],
            ["🧍","Posture correction guide","Exercises for +2–5 cm"],
            ["📅","90-day growth roadmap","Phase-by-phase milestones"],
          ].map(([emoji,title,sub],i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:i<7?"1px solid rgba(217,119,6,0.08)":"none"}}>
              <span style={{fontSize:18,width:28,textAlign:"center"}}>{emoji}</span>
              <div><div style={{fontSize:13,fontWeight:600,color:"#92400E"}}>{title}</div><div style={{fontSize:11,color:"#B45309"}}>{sub}</div></div>
              <Check size={14} color="#16A34A" style={{marginLeft:"auto",flexShrink:0}}/>
            </div>
          ))}
        </Card>

        {/* Social proof */}
        <div style={{display:"flex",gap:8,marginBottom:14,overflowX:"auto"}}>
          {[
            {name:"Alex M.",text:"Grew 3cm in 4 months following this plan",stars:5},
            {name:"Sarah K.",text:"The meal plan alone was worth it",stars:5},
            {name:"James L.",text:"Best $6 I ever spent on my health",stars:5},
          ].map((rev,i)=>(
            <div key={i} style={{minWidth:200,padding:14,borderRadius:16,background:"#fff",border:"1px solid #f0f0f0",boxShadow:"0 1px 4px rgba(0,0,0,0.03)",flexShrink:0}}>
              <div style={{display:"flex",gap:2,marginBottom:6}}>{Array(rev.stars).fill(0).map((_,j)=><Star key={j} size={12} fill="#FBBF24" color="#FBBF24"/>)}</div>
              <div style={{fontSize:12,color:"#374151",lineHeight:1.5,marginBottom:6}}>"{rev.text}"</div>
              <div style={{fontSize:11,color:"#9ca3af",fontWeight:600}}>— {rev.name}</div>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <Card style={{textAlign:"center",border:`2px solid ${A}22`,background:`linear-gradient(180deg,${A}04,#fff)`}}>
          <div style={{fontSize:12,color:"#9ca3af",fontWeight:600,marginBottom:4}}>One-time payment</div>
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"center",gap:4,marginBottom:2}}>
            <span style={{fontSize:16,color:"#9ca3af",textDecoration:"line-through",fontWeight:500}}>$19</span>
            <span style={{fontSize:42,fontWeight:800,color:"#111"}}>$6</span>
          </div>
          <div style={{fontSize:12,color:"#6b7280",marginBottom:16}}>Lifetime access · Instant delivery</div>

          <Btn onClick={handleCheckout}>
            <Lock size={15}/> Unlock My Growth Plan — $6
          </Btn>

          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginTop:14}}>
            <Shield size={13} color={G}/>
            <span style={{fontSize:11,color:"#6b7280"}}>30-day money-back guarantee</span>
          </div>
          <div style={{display:"flex",justifyContent:"center",gap:12,marginTop:10}}>
            {["Visa","Mastercard","Apple Pay","Google Pay"].map(m=><span key={m} style={{fontSize:10,color:"#9ca3af",fontWeight:500}}>{m}</span>)}
          </div>
        </Card>

        {/* Urgency */}
        <div style={{textAlign:"center",padding:"8px 0 20px"}}>
          <div style={{fontSize:12,color:"#EF4444",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",gap:4}}>
            <span style={{width:6,height:6,borderRadius:"50%",background:"#EF4444",animation:"pulse 1.5s infinite"}}/>
            127 people bought this today
          </div>
        </div>
      </div>}

      {step===3&&r&&!loading&&paid&&<div style={{animation:"up 0.4s ease"}}>
        <div style={{overflowX:"auto",marginBottom:14}}><div style={{display:"flex",gap:4,minWidth:"max-content"}}>{tabs.map(t=><button key={t.k} onClick={()=>setTab(t.k)} style={{padding:"9px 14px",borderRadius:12,border:"none",cursor:"pointer",background:tab===t.k?A:"#fff",color:tab===t.k?"#fff":"#9ca3af",fontSize:11,fontWeight:700,fontFamily:F,whiteSpace:"nowrap",transition:"all 0.2s",display:"flex",alignItems:"center",gap:4,boxShadow:tab===t.k?`0 4px 16px ${A}25`:"0 1px 3px rgba(0,0,0,0.04)"}}>{t.ic} {t.l}</button>)}</div></div>

        {tab==="overview"&&<>
          <Card style={{textAlign:"center",background:`linear-gradient(180deg,${A}06,#fff)`,borderColor:`${A}18`}}>
            <div style={{fontSize:10,color:"#9ca3af",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:12}}>Predicted Maximum Height</div>
            <div style={{display:"flex",justifyContent:"center",marginBottom:8}}><Ring value={r.predicted} max={r.gen+20} size={140} sw={11} color={A}><span style={{fontSize:36,fontWeight:800}}>{r.predicted}</span><span style={{fontSize:12,color:"#9ca3af",fontWeight:600}}>cm · {cmFt(r.predicted)}</span></Ring></div>
            {r.gain>0&&<div style={{display:"inline-flex",alignItems:"center",gap:5,marginTop:6,padding:"8px 20px",borderRadius:99,background:`${G}0d`,color:G,fontSize:14,fontWeight:700}}><TrendingUp size={15}/> +{r.gain} cm potential</div>}
          </Card>
          <Card><div style={{fontSize:14,fontWeight:700,marginBottom:14}}>Height Comparison</div><div style={{display:"flex",justifyContent:"space-around",textAlign:"center"}}>{[["Current",r.curH,"#cbd5e1"],["Genetic",r.gen,"#818cf8"],["Optimized",r.predicted,A]].map(([l,v,c])=><div key={l}><div style={{width:32,height:Math.max(30,(v/(r.predicted+15))*130),borderRadius:"16px 16px 6px 6px",background:`linear-gradient(180deg,${c}33,${c}11)`,border:`2px solid ${c}55`,margin:"0 auto 8px",transition:"height 1.2s ease"}}/><div style={{fontSize:10,color:"#9ca3af",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em"}}>{l}</div><div style={{fontSize:22,fontWeight:800,color:c}}>{v}</div><div style={{fontSize:11,color:"#9ca3af"}}>{cmFt(v)}</div></div>)}</div></Card>
          <Card><div style={{fontSize:14,fontWeight:700,marginBottom:14}}>Growth Scores</div>{[{l:"Sleep",v:r.s.sleep,c:"#818cf8",ic:<Moon size={14} color="#818cf8"/>},{l:"Exercise",v:r.s.exercise,c:G,ic:<Dumbbell size={14} color={G}/>},{l:"Nutrition",v:r.s.nutrition,c:"#F59E0B",ic:<Apple size={14} color="#F59E0B"/>},{l:"Posture",v:r.s.posture,c:"#EC4899",ic:<Bone size={14} color="#EC4899"/>},{l:"Stress",v:r.s.stress,c:A,ic:<Brain size={14} color={A}/>},{l:"Hydration",v:r.s.water,c:A2,ic:<Droplets size={14} color={A2}/>}].map((it,i)=><div key={i} style={{marginBottom:i<5?16:0}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}><div style={{display:"flex",alignItems:"center",gap:6}}>{it.ic}<span style={{fontSize:13,fontWeight:600,color:"#374151"}}>{it.l}</span></div><span style={{fontSize:14,fontWeight:800,color:it.c}}>{it.v}</span></div><Bar val={it.v} color={it.c} delay={i*120}/></div>)}</Card>
          <Card style={{textAlign:"center",border:`2px solid ${A}18`}}><div style={{fontSize:10,color:"#9ca3af",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:6}}>Overall Score</div><div style={{fontSize:48,fontWeight:800,color:A}}>{r.overall}<span style={{fontSize:18,color:"#d1d5db"}}>/100</span></div></Card>
        </>}

        {tab==="morning"&&<><Banner type="morning"/>{r.morning.map((it,i)=><Card key={i} style={{animation:`up 0.3s ease ${i*0.06}s both`}}><div style={{display:"flex",gap:12}}><div style={{width:44,height:44,borderRadius:14,background:`${A}08`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{it.icon}</div><div style={{flex:1}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}><span style={{fontSize:14,fontWeight:700}}>{it.label}</span><div style={{display:"flex",gap:4}}><span style={{fontSize:10,padding:"3px 10px",borderRadius:8,background:`${A}0a`,color:A,fontWeight:700}}>{it.time}</span>{it.dur!=="—"&&<span style={{fontSize:10,padding:"3px 10px",borderRadius:8,background:"#f3f4f6",color:"#6b7280",fontWeight:600}}>{it.dur}</span>}</div></div><div style={{fontSize:12,color:"#6b7280",lineHeight:1.7}}>{it.desc}</div></div></div></Card>)}</>}

        {tab==="evening"&&<><Banner type="evening"/>{r.evening.map((it,i)=><Card key={i} style={{animation:`up 0.3s ease ${i*0.06}s both`}}><div style={{display:"flex",gap:12}}><div style={{width:44,height:44,borderRadius:14,background:"rgba(129,140,248,0.06)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{it.icon}</div><div style={{flex:1}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}><span style={{fontSize:14,fontWeight:700}}>{it.label}</span><span style={{fontSize:10,padding:"3px 10px",borderRadius:8,background:"rgba(129,140,248,0.08)",color:"#818cf8",fontWeight:700}}>{it.time}</span></div><div style={{fontSize:12,color:"#6b7280",lineHeight:1.7}}>{it.desc}</div></div></div></Card>)}</>}

        {tab==="training"&&<><Banner type="training"/>{r.weekly.map((dy,i)=>{const open=od===i;const ic=dy.int==="High"?"#EF4444":dy.int==="Medium"?"#F59E0B":G;return<Card key={i} style={{animation:`up 0.3s ease ${i*0.05}s both`,cursor:"pointer",overflow:"hidden"}}><div onClick={()=>setOd(open?null:i)}><div style={{display:"flex",alignItems:"center",gap:12}}><div style={{width:48,height:48,borderRadius:14,background:`${ic}0c`,border:`2px solid ${ic}22`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:13,color:ic,flexShrink:0}}>{dy.day}</div><div style={{flex:1}}><div style={{fontSize:14,fontWeight:700}}>{dy.title}</div><div style={{fontSize:11,color:"#9ca3af",marginTop:3,display:"flex",gap:10,flexWrap:"wrap"}}><span style={{display:"flex",alignItems:"center",gap:3}}><Clock size={10}/>{dy.dur}</span><span style={{display:"flex",alignItems:"center",gap:3}}><Flame size={10}/>{dy.cal} cal</span><span style={{color:ic,fontWeight:700}}>● {dy.int}</span></div></div><div style={{transition:"transform 0.3s",transform:open?"rotate(180deg)":"rotate(0)"}}><ChevronDown size={18} color="#9ca3af"/></div></div></div>{open&&<div style={{marginTop:14,animation:"fadeSlide 0.3s ease"}}><ExerciseScene type={dy.type}/>{dy.exercises.map((ex,j)=><div key={j} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:j<dy.exercises.length-1?"1px solid #f5f5f5":"none"}}><div style={{width:7,height:7,borderRadius:"50%",background:A,flexShrink:0}}/><span style={{fontSize:13,color:"#374151"}}>{ex}</span></div>)}</div>}</Card>})}</>}

        {tab==="meals"&&<><Banner type="meals"/><div style={{display:"flex",gap:4,marginBottom:14}}>{["breakfast","lunch","dinner","snacks"].map(c=><button key={c} onClick={()=>setMc(c)} style={{flex:1,padding:"10px 4px",borderRadius:12,border:"none",cursor:"pointer",background:mc===c?A:"#fff",color:mc===c?"#fff":"#9ca3af",fontSize:11,fontWeight:700,fontFamily:F,textTransform:"capitalize",boxShadow:mc===c?`0 4px 16px ${A}25`:"0 1px 3px rgba(0,0,0,0.04)",transition:"all 0.2s"}}>{c}</button>)}</div>{r.meals[mc].map((ml,i)=><Card key={`${mc}-${i}`} style={{animation:`up 0.3s ease ${i*0.08}s both`,overflow:"hidden",padding:0}}><MealVisual emojis={mealEmojis[mc][i]} gradient={mealGradients[mc][i]}/><div style={{padding:16}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}><span style={{fontSize:16,fontWeight:700}}>{ml.name}</span><span style={{fontSize:10,padding:"3px 12px",borderRadius:10,background:`${G}0d`,color:G,fontWeight:700}}>{ml.tag}</span></div><div style={{fontSize:12,color:"#6b7280",lineHeight:1.6,marginBottom:10}}>{ml.desc}</div><div style={{display:"flex",gap:6,flexWrap:"wrap"}}><span style={{fontSize:11,padding:"4px 12px",borderRadius:10,background:"#FEF3C7",color:"#D97706",fontWeight:700}}>🔥 {ml.cal} cal</span><span style={{fontSize:11,padding:"4px 12px",borderRadius:10,background:"#DCFCE7",color:"#16A34A",fontWeight:700}}>🥩 {ml.p}</span><span style={{fontSize:11,padding:"4px 12px",borderRadius:10,background:"#EFF6FF",color:"#2563EB",fontWeight:700}}>🦴 {ml.ca}</span></div></div></Card>)}</>}

        {tab==="supps"&&<><Banner type="supps"/>{r.supps.map((sp,i)=>{const pc=sp.pri===1?G:sp.pri===2?"#F59E0B":"#9ca3af";const pl=sp.pri===1?"Essential":sp.pri===2?"Recommended":"Optional";return<Card key={i} style={{animation:`up 0.3s ease ${i*0.06}s both`}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}><div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:22}}>{sp.icon}</span><span style={{fontSize:15,fontWeight:700}}>{sp.name}</span></div><span style={{fontSize:10,padding:"3px 12px",borderRadius:10,background:`${pc}12`,color:pc,fontWeight:700}}>{pl}</span></div><div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}><span style={{fontSize:11,padding:"4px 12px",borderRadius:10,background:"#f3f4f6",fontWeight:600}}>💊 {sp.dose}</span><span style={{fontSize:11,padding:"4px 12px",borderRadius:10,background:"#f3f4f6",color:"#6b7280"}}>⏰ {sp.when}</span></div><div style={{fontSize:12,color:"#6b7280",lineHeight:1.7}}>{sp.why}</div></Card>})}<Card style={{background:"#FEF2F2",borderColor:"#FECACA"}}><div style={{display:"flex",gap:10}}><AlertTriangle size={15} color="#EF4444" style={{flexShrink:0,marginTop:1}}/><div style={{fontSize:12,color:"#6b7280",lineHeight:1.7}}><b style={{color:"#DC2626"}}>Important:</b> Consult a doctor first. Get bloodwork, especially under 18.</div></div></Card></>}

        {tab==="posture"&&<><Banner type="posture"/>{r.posture.map((p,i)=><Card key={i} style={{animation:`up 0.3s ease ${i*0.08}s both`}}><div style={{display:"flex",gap:12}}><div style={{width:44,height:44,borderRadius:14,background:"#FDF4FF",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{p.icon}</div><div style={{flex:1}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3}}><span style={{fontSize:14,fontWeight:700}}>{p.issue}</span><span style={{fontSize:10,padding:"3px 10px",borderRadius:8,background:`${G}0d`,color:G,fontWeight:700}}>{p.impact}</span></div><div style={{fontSize:11,color:"#A855F7",fontWeight:600,marginBottom:4}}>Target: {p.target}</div><div style={{fontSize:12,color:"#6b7280",lineHeight:1.7}}>{p.fix}</div></div></div></Card>)}</>}

        {tab==="timeline"&&<><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}><Calendar size={18} color={A}/><span style={{fontSize:18,fontWeight:700}}>90-Day Roadmap</span></div>{r.timeline.map((ph,i)=><div key={i} style={{display:"flex",gap:14,animation:`up 0.3s ease ${i*0.08}s both`}}><div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0,width:22}}><div style={{width:14,height:14,borderRadius:"50%",background:ph.color,flexShrink:0,boxShadow:`0 0 10px ${ph.color}33`}}/>{i<r.timeline.length-1&&<div style={{width:2,flex:1,background:`linear-gradient(180deg,${ph.color}44,${r.timeline[i+1].color}44)`}}/>}</div><div style={{paddingBottom:22,flex:1}}><div style={{fontSize:10,color:ph.color,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:3}}>{ph.wk}</div><div style={{fontSize:17,fontWeight:800,marginBottom:8}}>{ph.phase}</div>{ph.items.map((it,j)=><div key={j} style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:5}}><Check size={13} color={ph.color} style={{flexShrink:0,marginTop:2}}/><span style={{fontSize:12,color:"#6b7280",lineHeight:1.55}}>{it}</span></div>)}</div></div>)}<Card style={{textAlign:"center",border:`2px solid ${A}18`}}><span style={{fontSize:28}}>🎯</span><div style={{fontSize:17,fontWeight:800,margin:"6px 0 4px"}}>Consistency beats intensity</div><div style={{fontSize:12,color:"#6b7280",lineHeight:1.7}}>80% consistency beats any hack. Show up daily. Measure monthly.</div></Card></>}
      </div>}
    </div>

    {step<3&&!loading&&<div style={{position:"fixed",bottom:0,left:0,right:0,padding:"14px 24px 30px",background:"linear-gradient(0deg,#F8F9FA 70%,transparent)",zIndex:10}}><Btn disabled={!ok()} onClick={go}>{step===2?<><Sparkles size={16}/> Generate My Growth Stack</>:<>Continue <ArrowRight size={16}/></>}</Btn></div>}
  </div>);
}
