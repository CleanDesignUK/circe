'use strict';
const Engine = (() => {
  const words = { one:1,two:2,three:3,four:4,five:5,six:6,half:0.5,satu:1,dua:2,tiga:3,empat:4,lima:5,setengah:0.5 };
  const numberWords = new RegExp('\\b('+Object.keys(words).join('|')+')\\b','gi');
  const norm=s=>String(s||'').toLowerCase().normalize('NFKD').replace(/[’']/g,'').replace(/[^a-z0-9\s]/g,' ').replace(/\beggs\b/g,'egg').replace(/\bbananas\b/g,'banana').replace(/\brice\s+bowl\b/g,'ricebowl').replace(/\bsalad\s+stop\b/g,'saladstop').replace(/\s+/g,' ').trim();
  function split(text){
    let s=text.trim().replace(/\b(sweet|fish|mac|salt|cheese|ham|sausage|black|peanut butter)\s+(?:and|&)\s+(sour|chips|cheese|pepper|onion|egg|white|jelly)\b/gi,'$1 ‿ $2');
    s=s.replace(/\b(?:and|dan)\b(?=\s+(?:\d|half|one|two|three|a\s|an\s|some\s))/gi,',');
    return s.split(/[,;\n+]+|\s+\band\b\s+|\s+\bdan\b\s+/i).map(t=>t.replace(/‿/g,'and').replace(/^\s*(today|hari ini|i (ate|had)|i drank|for (breakfast|lunch|dinner)|saya makan)\b\s*[:,-]?\s*/i,'').trim()).filter(Boolean);
  }
  function match(text,catalogue){
    const input=' '+norm(text)+' ', tokens=new Set(input.trim().split(' ')); let best=null, bestScore=0;
    const namedBrands=[...new Set(catalogue.map(f=>norm(f.brand)))].filter(b=>b.length>2&&!['whole food','indonesian cooking','drinks'].includes(b)&&input.includes(' '+b+' '));
    for(const food of catalogue){
      if(namedBrands.length&&!namedBrands.includes(norm(food.brand)))continue;
      const names=[food.name,...food.aliases||[]];
      for(const name of names){
        const alias=norm(name); if(!alias) continue;
        const list=alias.split(' '), full=input.includes(' '+alias+' '), hasAll=list.every(t=>tokens.has(t));
        if(!full&&!hasAll)continue;
        let score=list.length*12 + Math.min(12,alias.length/3)+(full?4:0);
        const brand=norm(food.brand);
        if(brand.length>2 && input.includes(brand))score+=10;
        if(score>bestScore){best=food;bestScore=score;}
      }
    }
    return best;
  }
  function portion(text,food){
    const str=text.toLowerCase().replace(/½/g,'0.5').replace(/¼/g,'0.25').replace(/¾/g,'0.75').replace(/(\d+)\s*\/\s*(\d+)/g,(_,a,b)=>b>0?String(a/b):'').replace(numberWords,w=>String(words[w.toLowerCase()]));
    const measure=str.match(/(\d+(?:\.\d+)?)\s*(kg|grams?|grammes?|g|ml|litres?|liters?|l)\b/i);
    if(measure && food?.grams){
      const multiplier=/^(kg|l|litres?|liters?)$/i.test(measure[2])?1000:1;
      const packageCount=str.match(/(\d+(?:\.\d+)?)\s*[x×]\s*\d/i);
      return +(Number(measure[1])*multiplier/food.grams*(packageCount?+packageCount[1]:1)).toFixed(3);
    }
    if(measure)return 1;
    const qty=str.match(/(?:^|\s|x)(\d+(?:\.\d+)?)(?=\s|$|x|×)/);
    return qty?+qty[1]:1;
  }
  const EXAMPLE='Today boiled egg 2, banana bread walnut 1 slice SaladStop, Solaria ricebowl 1 mix sweet and sour, Monster drink 1, Heineken 1 small can, zero cola 1';
  function parse(text,foods){
    return split(text).map(original=>{
      const food=match(original,foods);
      const measured=/\d\s*(kg|grams?|g|ml|litres?|l)\b/i.test(original);
      return {original,food,qty:portion(original,food),needsPortion:!!(food&&measured&&!food.grams)};
    });
  }
  const activities = [
    ['Walking',3.8,'Outdoor'],['Brisk walking',4.8,'Outdoor'],['Leisure walking',2.8,'Outdoor'],['Running',8.5,'Outdoor'],['Jogging',7.5,'Outdoor'],['Hiking',6,'Outdoor'],['Stair climbing',6.8,'Outdoor'],['Cycling',6.8,'Cycling'],['Leisure cycling',4,'Cycling'],['Mountain biking',8.5,'Cycling'],['Indoor cycling',6.8,'Cycling'],['Spin class',9,'Cycling'],['Treadmill walk',3.8,'Gym'],['Treadmill run',8.5,'Gym'],['Elliptical trainer',5,'Gym'],['Rowing machine',5,'Gym'],['Strength training',3.5,'Gym'],['Circuit training',5,'Gym'],['HIIT',7,'Gym'],['Skipping rope',11,'Gym'],['Swimming laps',5.8,'Water'],['Breaststroke',5.3,'Water'],['Water aerobics',5.5,'Water'],['Yoga',2.3,'Mind & body'],['Pilates',2.8,'Mind & body'],['Stretching',2.3,'Mind & body'],['Dancing',5,'Sport'],['Badminton',5.5,'Sport'],['Tennis',6.8,'Sport'],['Football',7,'Sport'],['Basketball',6.5,'Sport'],['Paddleboarding',6,'Water']
  ];
  function target(p){
    if(!p)return null;
    if(p.custom)return Math.round(p.custom);
    if(!(p.weight>0&&p.height>0&&p.age>=18&&['female','male'].includes(p.sex)))return null;
    const rest=10*p.weight+6.25*p.height-5*p.age+(p.sex==='male'?5:-161);
    return Math.max(0,Math.round(rest*Number(p.activity)+Number(p.goal)));
  }
  function activeKcal(met,minutes,weight){return weight>0?Math.round(Math.max(0,met-1)*weight*minutes/60):null;}
  function dateKey(d=new Date()){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
  const asDate=k=>new Date(k+'T12:00:00');
  const offset=(k,n)=>{let d=asDate(k);d.setDate(d.getDate()+n);return dateKey(d);};
  return {norm,split,match,portion,parse,EXAMPLE,activities,target,activeKcal,dateKey,asDate,offset};
})();
