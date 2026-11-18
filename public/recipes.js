'use strict';
const Recipes=(()=>{
 const nutrients=['kcal','protein','fat','carbs','fibre','sugar','salt'];
 const methods=['Uncooked / mixed','Boiled / steamed','Grilled','Baked / roasted','Air fried','Pan / stir fried','Deep fried'];
 const oils=[0,0,0,0,0,1,2];
 const bases=[
 ['Cooked chicken breast','chicken|ayam|dada ayam',165,31,0,3.6],['Cooked lean beef','beef|sapi|daging sapi',217,26,0,12],['Cooked prawns','prawns|shrimp|udang',99,24,.2,.3],['Cooked fish','fish|ikan',128,26,0,2.7],['Cooked white rice','rice|nasi|nasi putih',130,2.7,28,.3],['Cooked noodles','noodles|mie|mi|bihun|kwetiau',138,4.5,25,2.1],['Mixed vegetables','vegetables|sayur|mixed veg|veggies',45,2,8,0.5],['Cooked mushrooms','mushrooms|jamur',28,3.6,5.3,.5],['Onion','onions|bawang bombay',40,1.1,9.3,.1],['Cooked beans','beans|kacang merah',127,8.7,22.8,.5],['Coconut milk','santan',197,2,2.8,21],['Wonton wrapper','dumpling wrapper|kulit pangsit',291,9.8,57.9,1.2],['Plain flour','flour|tepung terigu',364,10,76,1],['Soy sauce','kecap asin',53,8,5,0],['Sweet soy sauce','kecap manis',225,2,54,0],['Peanut sauce','saus kacang|bumbu kacang',235,7,15,17],['Sweet chilli sauce','saus sambal|chilli sauce',195,1,46,0],['Cooking oil','oil|minyak|olive oil|minyak goreng',884,0,0,100],['Granulated sugar','sugar|gula|gula pasir',387,0,100,0],['Honey','madu',304,.3,82.4,0],['Water','air putih|es batu|ice',0,0,0,0],['Cucumber','timun|mentimun',15,.7,3.6,.1],['Tomato','tomat',18,.9,3.9,.2],['Lettuce','selada',15,1.4,2.9,.2],['Cheddar cheese','cheese|keju',403,25,1.3,33],['Mayonnaise','mayo|mayones',680,1,.6,75],['Chilli','cabai|cabe|chili',40,1.9,8.8,.4],['Cooked potato','potatoes|kentang',87,1.9,20.1,.1],['Plain milk','milk|susu sapi',61,3.2,4.8,3.3],['Cooked pork','pork|babi',242,27,0,14]
 ].map(([name,aliases,kcal,protein,carbs,fat])=>({name,aliases:aliases.split('|'),kcal,protein,carbs,fat,unit:'100 g',grams:100,brand:'Ingredient reference',estimated:true,source:'Generic ingredient estimate',sourceUrl:'https://fdc.nal.usda.gov/'}));
 function splitTop(text){
  const out=[];let part='',depth=0;
  function add(){const t=part.trim();if(t)out.push(t);part='';}
  for(const ch of text){if(ch==='(')depth++;if(ch===')')depth=Math.max(0,depth-1);if(depth===0&&',;\n+'.includes(ch))add();else part+=ch;}add();return out;
 }
 function methodFor(text){
  if(/deep.?fri|deep.?fried|goreng kering/.test(text))return methods[6];if(/air.?fri/.test(text))return methods[4];if(/fried|goreng|tumis|stir.?fr/.test(text))return methods[5];if(/grill|bakar/.test(text))return methods[2];if(/baked|roast|panggang/.test(text))return methods[3];if(/boil|rebus|steam|kukus/.test(text))return methods[1];return methods[0];
 }
 function separate(text){return splitTop(text.replace(/\s+(?:and|dan|with|dengan)\s+/gi,',')).filter(Boolean);}
 function ingredientList(foods){return [...foods,...bases];}
 function measure(line,f){
  const tt=line.toLowerCase().replace(/½/g,'0.5').replace(/¼/g,'0.25');
  const tea=tt.match(/([\d.]+)\s*(tsp|teaspoons?|sdt|tbsp|tablespoons?|sdm)\b/);
  if(tea&&f.grams&&!(f.unit||'').includes('teaspoon')){const g=/tbsp|tablespoon|sdm/.test(tea[2])?15:5;return +tea[1]*g/f.grams;}
  return Engine.portion(tt,f);
 }
 function components(txt,foods){const all=ingredientList(foods);return separate(txt).map(text=>{const food=(typeof Products!=='undefined'&&Products.auto(text))||Engine.match(text,all);return {text,food,qty:food?measure(text,food):null};});}
 function make(name,parts,method,oil,portions){
   if(!parts.length||parts.some(p=>!p.food||!Number.isFinite(p.qty)||p.qty<=0)||!(portions>0))return null;
   const recipe=parts.map(p=>({name:p.food.name,brand:p.food.brand,qty:p.qty,unit:p.food.unit,source:p.food.source,sourceUrl:p.food.sourceUrl}));
   const food={name,brand:'Your recipe',unit:'prepared portion',grams:null,estimated:true,method,recipe,oil,portions,aliases:[],source:'Ingredient estimate · '+method.toLowerCase(),sourceUrl:'https://fdc.nal.usda.gov/'};
   for(const k of nutrients){
    const allKnown=parts.every(p=>Number.isFinite(p.food[k]));if(!allKnown)continue;
    food[k]=+((parts.reduce((sum,p)=>sum+p.food[k]*p.qty,0)+(k==='kcal'?40*oil:k==='fat'?4.5*oil:0))/portions).toFixed(2);
   }
   return food;
 }
 function nested(text,foods){
   let m=text.match(/^(.+?)\s*\((.+)\)\s*$/);
   if(!m){
     const joined=text.match(/^(.+?)\s+(?:with|dengan)\s+(.+)$/i);
     if(!joined||/^(?:out|no)\b/.test(joined[2]))return null;
     const base=Engine.match(joined[1],ingredientList(foods));if(!base)return null;
     m=[text,text,joined[1]+', '+joined[2]];
   }
   const parts=components(m[2],foods);if(parts.length<2)return null;
   const method=methodFor(text.toLowerCase()),oil=oils[methods.indexOf(method)],name=m[1].trim().replace(/^\d+(?:\.\d+)?\s*[x×]?\s*/,'')||'Mixed dish';
   const food=make(name.charAt(0).toUpperCase()+name.slice(1),parts,method,oil,1);
   if(food){food.ingredientsText=m[2];food.source+=' · '+parts.map(x=>roundQty(x.qty)+' × '+x.food.unit+' '+x.food.name).join(', ');}
   return {food,title:name,ingredients:m[2],qty:Engine.portion(m[1],null)};
 }
 const roundQty=n=>Math.round(n*100)/100;
 return {methods,methodFor,oilFor:method=>oils[methods.indexOf(method)]||0,splitTop,separate,components,make,nested,ingredientList};
})();
let recipeState;
function recipeForm(i){
 editIndex=i;const row=review[i],f=row.food;const inside=row.original.match(/^(.+?)\s*\((.+)\)\s*$/);
 const method=f?.method&&Recipes.methods.includes(f.method)?f.method:Recipes.methodFor(row.original.toLowerCase());
 const ingredientText=f?.ingredientsText||row.ingredients||inside?.[2]||'';
 recipeState={i,oilEdited:false};
 show('Estimate from ingredients','<p class="card-copy">'+esc(row.original)+' · Enter the ingredients in the portion you ate, or divide a batch into servings.</p><form id="recipe-form"><div class="fields">'+field('Name of dish or drink','dish',f?.brand==='Your recipe'?f.name:inside?.[1]||row.original,'required maxlength="110"','text')+sel('Cooking method','method',method,Recipes.methods.map(x=>[x,x]))+'<label class="field span2">What went into it?<textarea name="ingredients" rows="3" required maxlength="1200" placeholder="e.g. 120 g chicken, 150 g rice, 80 g vegetables">'+esc(ingredientText)+'</textarea><small>Include amounts where you know them. Tap a suggestion to replace an unfamiliar ingredient.</small></label>'+field('Added oil in this recipe (tsp)','oil',f?.oil??Recipes.oilFor(method),'min="0" max="100" step=".1" required')+field('Portions this recipe makes','portions',f?.portions||1,'min=".1" max="100" step=".1" required')+'</div><div id="ingredient-feedback" class="recipe-feedback" aria-live="polite"></div><div class="form-footer">'+btn('Back','back-review','outline')+'<button class="btn primary">Use estimate</button></div></form>');recipeFeedback();
}
function recipeFeedback(){
 const form=document.querySelector('#recipe-form');if(!form)return;const d=form.elements;
 const parts=Recipes.components(d.ingredients.value,foodLibrary());
 const food=Recipes.make(d.dish.value.trim(),parts,d.method.value,+d.oil.value,+d.portions.value);
 recipeState.food=food;recipeState.parts=parts;
 const all=Recipes.ingredientList(foodLibrary());
 document.querySelector('#ingredient-feedback').innerHTML=parts.map((p,i)=>p.food?'<p>'+icon('check',13)+' '+esc(p.food.name)+' · '+round1(p.qty)+' × '+esc(p.food.unit)+'</p>':'<label class="field">Closest ingredient for “'+esc(p.text)+'”<select data-recipe-sub="'+i+'"><option value="">Select an ingredient</option>'+all.filter(f=>f.grams>0).slice().sort((a,b)=>a.name.localeCompare(b.name)).map(f=>'<option value="'+esc(f.name)+'">'+esc(f.name)+' · '+esc(f.brand)+'</option>').join('')+'</select></label>').join('')+(food?'<b>≈ '+fmt(food.kcal)+' kcal per portion</b>':'');
}
document.addEventListener('input',e=>{const f=e.target.closest('#recipe-form');if(!f)return;
 if(e.target.name==='oil')recipeState.oilEdited=true;
 if(e.target.name==='method'&&!recipeState.oilEdited)f.elements.oil.value=Recipes.oilFor(e.target.value);
 if(e.target.dataset.recipeSub==null)recipeFeedback();
});
document.addEventListener('change',e=>{if(e.target.dataset.recipeSub==null||!e.target.value)return;const i=+e.target.dataset.recipeSub,form=e.target.closest('form'),parts=recipeState.parts.map(x=>x.text),measure=parts[i].match(/\d+(?:\.\d+)?\s*(?:g|kg|ml|l|tsp|tbsp)\b/i);parts[i]=(measure?measure[0]+' ':'')+e.target.value;form.elements.ingredients.value=parts.join(', ');recipeFeedback();});
document.addEventListener('submit',e=>{const f=e.target;if(f.id!=='recipe-form')return;e.preventDefault();
 recipeFeedback();if(!recipeState.food){document.querySelector('#ingredient-feedback').insertAdjacentHTML('beforeend','<p class="review-error" role="alert">Choose a matching ingredient for every line above.</p>');return;}
 const food=recipeState.food;food.ingredientsText=f.elements.ingredients.value;food.aliases=[food.name];review[editIndex]={original:review[editIndex].original,food,qty:1};showReview();
});
