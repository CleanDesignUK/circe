'use strict';
function weightStats(p){
 if(!p?.weight||!p.goalWeight)return null;
 const start=p.startWeight||p.weight, target=p.goalWeight;
 const direction=Math.sign(target-start),change=(p.weight-start)*direction;
 return {start,target,current:p.weight,remaining:Math.max(0,direction?(target-p.weight)*direction:Math.abs(target-p.weight)),progress:direction?Math.max(0,Math.min(100,100*change/Math.abs(target-start))):(p.weight===target?100:0)};
}
function weightCard(){
 const p=profile(),stats=weightStats(p);
 if(!stats)return '<section class="card card-inner goal-card"><div class="card-header"><div class="card-title"><span class="iconbox citron">'+icon('target',19)+'</span><h2>Goal weight</h2></div>'+smallBtn('Set goal','profile','plus')+'</div><p class="card-copy">Add your current and goal weights to see your progress.</p></section>';
 const label=stats.remaining===0?'Goal reached':round1(stats.remaining)+' kg to goal';
 return '<section class="card card-inner goal-card"><div class="card-header"><div class="card-title"><span class="iconbox citron">'+icon('target',19)+'</span><h2>Goal weight</h2></div>'+smallBtn('Weigh in','weigh','plus')+'</div><div class="weight-numbers"><strong>'+round1(stats.current)+' <small>kg</small></strong><span>Goal <b>'+round1(stats.target)+' kg</b></span></div><div class="bar" style="--fill:'+stats.progress+'%;--col:#a4b126"><i></i></div><div class="weight-caption"><span>Started at '+round1(stats.start)+' kg</span><b>'+label+'</b></div></section>';
}
function weighForm(){
 const p=profile();if(!p?.goalWeight){go('profile');return;}
 show('Record your weight','<form id="weigh-form"><p class="card-copy">Today’s weigh-in updates your progress towards '+round1(p.goalWeight)+' kg.</p>'+field('Weight today (kg)','kg',p.weight,'min="25" max="450" required step="0.1"')+'<div class="form-footer"><button class="btn primary">Save weigh-in</button></div></form>');
}
function monthDay(k){
 const s=summary(k), hasFood=s.foods.length>0, pct=Math.min(1,s.minutes/s.move);
 const classes=['cal-day',k===day?'chosen':'',k===TODAY?'today':'',k.slice(0,7)!==month?'out':''].join(' ');
 return '<button class="'+classes+'" data-day="'+k+'" aria-label="'+esc(nice(k)+', '+s.minutes+' active minutes of '+s.move+(hasFood?', food logged':''))+'"><span>'+Number(k.slice(-2))+'</span>'+(s.minutes?'<span class="day-knot">'+knot(pct)+'</span>':'<span class="day-blank">'+(hasFood?'•':'')+'</span>')+'</button>';
}
function workoutSaved(){
 const s=summary(),complete=s.minutes>=s.move;
 show(complete?'Movement goal complete':'Workout logged','<div class="knot-result '+(complete?'goal-met':'')+'">'+knot(s.minutes/s.move)+'<strong>'+s.minutes+' / '+s.move+' min</strong><p>'+esc(nice(day))+'</p></div><div class="form-footer">'+btn('View calendar','saved-calendar','outline','calendar')+btn('View dashboard','saved-overview','primary','grid')+'</div>');
}
