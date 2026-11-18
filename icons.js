const icons = {
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/>',
 food:'<path d="M5 3v6a3 3 0 0 0 6 0V3M8 3v18M18 21V3c-3 3-4 7-3 10h3"/>',
 move:'<path d="m3 15 4-4 4 2 5-8 5 2M3 20h18"/>',
 dumbbell:'<path d="m7 7 10 10M4 12l8-8M12 20l8-8M2 10l8-8M14 22l8-8"/>',
 calendar:'<rect x="3.5" y="5" width="17" height="16" rx="3"/><path d="M7.5 3v4M16.5 3v4M4 10h16M8 14h1M12 14h1M8 17h1"/>',
 user:'<circle cx="12" cy="8" r="3.3"/><path d="M5 20v-1a7 7 0 0 1 14 0v1"/>',
 settings:'<path d="M4 7h10m4 0h2M4 17h2m4 0h10"/><circle cx="16" cy="7" r="2.5"/><circle cx="8" cy="17" r="2.5"/>',
 down:'<path d="m6 9 6 6 6-6"/>',right:'<path d="m9 5 7 7-7 7"/>',left:'<path d="m15 5-7 7 7 7"/>',
 flame:'<path d="M13 2c2 6-3 6-2 10 2-1 3-3 4-5 3 3 5 6 4 10a7.3 7.3 0 0 1-14-2c0-4 3-7 4-9 0 3 .5 4 1 4 0-4 3-5 3-8Z"/>',
 spark:'<path d="m11 4 1.9 5.3L18 11l-5.1 1.8L11 18l-1.8-5.2L4 11l5.2-1.7L11 4ZM19 2l.9 2.1L22 5l-2.1.9L19 8l-.9-2.1L16 5l2.1-.9L19 2Z"/>',
 bolt:'<path d="m13.5 2-9 12H11l-.5 8 9-13H13l.5-7Z"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',check:'<path d="m4 12 5 5L20 6"/>',x:'<path d="m6 6 12 12M18 6 6 18"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 layers:'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5"/>',
 book:'<path d="M4 4h7c1 0 2 .5 2 2v15c0-2-2-3-4-3H4V4Zm9 2c0-1.5 1-2 2-2h5v14h-4c-2 0-3 1-3 3"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v.2"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
 edit:'<path d="m4 16 11-11 4 4L8 20l-5 1 1-5Zm9-9 4 4"/>',trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7"/>',
 trend:'<path d="m3 16 6-6 4 4 8-9M16 5h5v5"/>',search:'<circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/>',
 pie:'<path d="M11 3a9 9 0 1 0 10 10H11V3Z"/><path d="M15 3a7 7 0 0 1 6 6h-6V3Z"/>',
 leaf:'<path d="M20 3c0 10-2 16-10 16a6 6 0 0 1-6-6C4 5 13 7 20 3ZM4 21l11-11"/>',
 shoe:'<path d="m3 14 4-1 2-7 4 3 1 4 6 3 1 3H3v-5Zm7-2 3 1m0 0 2-1"/>',
 drop:'<path d="M12 2C10 6 5 10 5 15a7 7 0 0 0 14 0c0-5-5-9-7-13Z"/>',
 keyboard:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M5 9h1m2 0h1m2 0h1m2 0h1m2 0h1M5 12h1m2 0h1m2 0h1m2 0h1m2 0h1m-11 3h9"/>',
 shield:'<path d="m12 2 8 3v6c0 5-3 8-8 11-5-3-8-6-8-11V5l8-3Z"/><path d="m8 12 3 3 5-6"/>',
 };
function icon(name,size=20){return '<svg aria-hidden="true" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+(icons[name]||'')+'</svg>';}
function knot(progress=1,logo=false) {
 const n=Math.max(0,Math.min(1,progress)), track=logo?'currentColor':'#44483e', hot=logo?'currentColor':'#e4f65a', bg=logo?'var(--logo-bg,#1b1c1a)':'#222420';
 const a='M 65 25 H 95 Q 115 25 115 45 V 49 Q 115 69 95 69 H 35 Q 15 69 15 49 V 45 Q 15 25 35 25 Z';
 const b='M 43 17 Q 43 0 60 0 H 65 Q 82 0 82 17 V 79 Q 82 97 65 97 H 60 Q 43 97 43 79 Z';
 const p=(d,c,w,more='')=>'<path d="'+d+'" fill="none" stroke="'+c+'" stroke-width="'+w+'" stroke-linecap="round" stroke-linejoin="round" '+more+'/>';
 const strand=(d,c)=>p(d,bg,14)+p(d,c,9);
 const cross=(x,y,c)=>p('M '+(x-7)+' '+y+' h 14',bg,14)+p('M '+(x-9)+' '+y+' h 18',c,9);
 const weave=c=>strand(a,c)+strand(b,c)+cross(82,25,c)+cross(43,69,c);
 const id='knot-'+Math.random().toString(36).slice(2,10);
 const shape=c=>'<g transform="rotate(-45 65 49)">'+weave(c)+'</g>';
 const fill='<clipPath id="'+id+'"><rect class="knot-level" x="-18" y="'+(115-132*n)+'" width="166" height="'+(132*n)+'"/></clipPath>';
 return '<svg viewBox="-4 -18 138 138" aria-hidden="true" class="'+(logo?'brand-knot':'activity-knot')+'">'+(logo?shape(hot):'<defs>'+fill+'</defs>'+shape(track)+'<g clip-path="url(#'+id+')">'+shape(hot)+'</g>')+'</svg>';
}
function gauge(portion,exceeded=false) {
 const progress=Math.max(0,Math.min(portion,1)), pct=Math.round(portion*100);
 let ticks='';
 for(let i=0;i<84;i++){
  const t=(i*360/84-90)*Math.PI/180, major=i%7===0, active=i<Math.round(progress*84), end=87, begin=major?72:76;
  ticks+='<line x1="'+(96+begin*Math.cos(t)).toFixed(2)+'" y1="'+(96+begin*Math.sin(t)).toFixed(2)+'" x2="'+(96+end*Math.cos(t)).toFixed(2)+'" y2="'+(96+end*Math.sin(t)).toFixed(2)+'" stroke="'+(active?'#191c13':'#b5bf55')+'" stroke-width="'+(major?3.8:2.85)+'"/>';
 }
 return '<div class="gauge"><svg viewBox="0 0 192 192" aria-hidden="true">'+ticks+'<circle cx="96" cy="96" r="64" fill="none" stroke="#a9b34e" stroke-width="1" stroke-dasharray="1 5"/></svg><div class="gauge-centre">'+icon('flame',25)+'<strong>'+pct+'<small>%</small></strong><span>OF TARGET</span></div></div>';
}
