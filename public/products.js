'use strict';
const Products=(()=>{
 const lookup=new Map(),byBarcode=new Map();let list=[],pending=null;
 const stop=new Set('a of the and pcs pieces piece slices slice pack packet a can cans bottle bottled serving servings small large medium bar 1 2 3 4 5 6 7 8 9 10 today ml gr kg gram grams g'.split(' '));
 function tokens(s){return [...new Set(Engine.norm(s).split(' ').filter(t=>t.length>1&&!stop.has(t)&&!/^\d+(?:g|ml|kg)?$/.test(t)))];}
 function init(rows){
   list=[];lookup.clear();byBarcode.clear();
   for(const row of rows){if(!row[1]||!Number.isFinite(row[4]))continue;const idx=list.length;const terms=tokens(row[1]+' '+row[2]);list.push({row,terms});byBarcode.set(String(row[0]),idx);
    for(const word of terms){if(!lookup.has(word))lookup.set(word,[]);lookup.get(word).push(idx);}
   }
 }
 async function ready(){
   if(!pending)pending=fetch('packaged-index.json',{cache:'force-cache'}).then(r=>{if(!r.ok)throw Error();return r.json();}).then(d=>init(d.rows)).catch(()=>{pending=null;});
   return pending;
 }
 function item(row){
   const [code,name,brand,market,kcal,protein,carbs,fat,size,label]=row;
   const amount=Number(size)>0&&['ml','g'].includes(label)?Number(size):100,base=amount/100;
   const f={name,brand:brand||'Packaged food',unit:size&&label?amount+' '+label+' labelled serving':'100 g / ml reference',grams:amount,code,market,source:'Open Food Facts · '+market+' label',sourceUrl:'https://world.openfoodfacts.org/product/'+encodeURIComponent(code),estimated:false,aliases:[]};
   for(const [k,v] of Object.entries({kcal,protein,carbs,fat}))if(Number.isFinite(v))f[k]=Math.round(v*base*100)/100;
   f.needsServing=!size;return f;
 }
 function ranked(raw){
  if(byBarcode.has(raw.trim()))return [{f:item(list[byBarcode.get(raw.trim())].row),score:10,coverage:1}];
  const q=tokens(raw);if(!q.length)return [];
  const counts=new Map();for(const word of q)for(const i of lookup.get(word)||[])counts.set(i,(counts.get(i)||0)+1);
  const out=[];for(const [i,n] of counts){const {row,terms}=list[i],coverage=n/q.length,precision=n/Math.max(1,terms.length);
    out.push({i,coverage,score:coverage*.64+precision*.36});}
  out.sort((a,b)=>b.score-a.score||b.coverage-a.coverage);
  return out.slice(0,6).map(x=>({...x,f:item(list[x.i].row)}));
 }
 function auto(text){const matches=ranked(text.replace(/\b\d+(?:[.,]\d+)?\s*(?:kg|g|grams?|ml|l|litres?)\b/gi,' '));const m=matches[0];return m&&(m.score>=9||tokens(text).length>=2&&m.coverage===1&&m.score>=.82&&(!matches[1]||matches[1].score<m.score-.045||matches[1].f.name===m.f.name))?m.f:null;}
 return {ready,ranked,auto,init};
})();
