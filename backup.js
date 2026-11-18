'use strict';
function exportDiary(){
 const data={format:'circe-diary',version:1,entries:Object.values(records)};
 const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
 const link=document.createElement('a');link.href=url;link.download='circe-diary-'+Engine.dateKey()+'.json';link.click();
 setTimeout(()=>URL.revokeObjectURL(url),15000);
}
function importDiary(){
 const input=document.createElement('input');input.type='file';input.accept='.json,application/json';
 input.onchange=async()=>{
   try{
     const file=input.files[0];if(!file)return;if(file.size>20_000_000)throw Error();
     const data=JSON.parse(await file.text());
     if(data.format!=='circe-diary'||data.version!==1||!Array.isArray(data.entries)||data.entries.length>40000)throw Error();
     const valid=data.entries.every(r=>r&&typeof r==='object'&&typeof r.id==='string'&&/^[a-zA-Z0-9_-]{1,80}$/.test(r.id)&&!Object.hasOwn(Object.prototype,r.id)&&Number.isSafeInteger(r.rev)&&r.rev>0&&(
       (r.kind==='profile'&&r.id==='profile'&&r.data&&typeof r.data==='object')||(r.kind==='started'&&r.id==='started')||
       (/^\d{4}-\d{2}-\d{2}$/.test(r.date)&&(r.kind==='workout'&&Number.isFinite(r.minutes)&&r.minutes>0||r.kind==='food'&&r.food&&typeof r.food.name==='string'&&Number.isFinite(r.food.kcal)&&Number.isFinite(r.qty)&&r.qty>0||r.kind==='weight'&&Number.isFinite(r.kg)&&r.kg>0))));
     if(!valid)throw Error();
     const changes=data.entries.filter(r=>!records[r.id]||r.rev>records[r.id].rev);
     if(!changes.length){notice('Your diary already includes these entries.');return;}
     show('Import diary backup','<p class="note">'+changes.length+' new or updated records will be merged into this diary. Existing entries with newer changes are kept.</p><div class="form-footer">'+btn('Cancel','close','outline')+'<button id="confirm-import" class="btn primary">Import backup</button></div>');
     document.querySelector('#confirm-import').addEventListener('click',()=>{commit(changes);dlg.close();render();notice('Diary backup imported.');},{once:true});
   }catch{notice('Choose a valid CIRCE diary backup.');}
 };
 input.click();
}
