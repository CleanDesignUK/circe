// Additional restaurant and packaged-food references. Amounts refer to the stated serving.
(() => {
  const additions = [];
  function add(brand, name, aliases, unit, grams, kcal, protein, carbs, fat, source, sourceUrl, estimated, extra = {}) {
    additions.push({brand, name, aliases, unit, grams, kcal, protein, carbs, fat, source, sourceUrl, estimated, ...extra});
  }
  const wonton = 'https://www.bcchildrens.ca/media/5736/download';
  add('Solaria', 'Boiled wonton (without dipping sauce)', ['wonton','wontons','pangsit rebus','boiled wonton','steamed wonton','pangsit kuah','wonton tanpa saus','wontons without sauce'], 'piece, assumed boiled', null, 19, 1, 2, 1,
    'Comparable boiled wonton, BC Children’s Hospital food guide. Assumes one small piece without sauce; choose fried if crisp.', wonton, true, {method:'Boiled',requiresMethodCheck:true});
  add('Solaria', 'Crispy fried wonton (without dipping sauce)', ['fried wonton','fried wontons','crispy wonton','crispy mini wonton','crispy mini wontons','crispy wontons','pangsit goreng','wonton goreng','deep fried wonton'], 'fried piece', null, 56, 2, 4, 4,
    'Comparable deep-fried wonton, BC Children’s Hospital food guide. Per piece without dipping sauce.', wonton, true, {method:'Deep-fried'});
  add('Solaria', 'Cap cay', ['capcai','capcay','cap cay','cap cai','cap chai','cap chay','cap choy','chap chye','capcay ayam','cap cay ayam'], '100 g', 100, 67, 1.58, 9.67, 2.59,
    'Solaria reference in FatSecret Indonesia. Oil, vegetables and gravy vary.', 'https://www.fatsecret.co.id/kalori-gizi/solaria/cap-cay/100g', true, {method:'Stir-fried vegetables with gravy'});
  add('Solaria', 'Cap cay kuah', ['capcai kuah','capcay kuah','cap cay kuah','capcay soup'], '100 g', 100, 54, 1.3, 7.7, 2.1,
    'Recipe estimate: 80 g of the Solaria cap cay reference plus 20 g clear broth per 100 g.', 'https://www.fatsecret.co.id/kalori-gizi/solaria/cap-cay/100g', true, {method:'Simmered with broth'});
  add('Solaria', 'Cap cay goreng', ['capcai goreng','capcay goreng','cap cay goreng','stir fried capcay'], '100 g', 100, 85, 1.58, 9.67, 4.59,
    'Recipe estimate: Solaria cap cay reference with an assumed extra 2 g cooking oil per 100 g.', 'https://www.fatsecret.co.id/kalori-gizi/solaria/cap-cay/100g', true, {method:'Stir-fried'});
  add('Arummi', 'Cashew milk (Classic reference)', ['arummi less fat milk','arummi low fat milk','arummi reduced fat','arummi less fat cashew milk','arummi cashew milk','arummi milk','arummi classic','susu mede arummi','susu arummi'], '170 ml', 170, 80, 2, 9, 4,
    'Arummi cashew milk reference in FatSecret Indonesia. The exact Less Fat carton label is unconfirmed.', 'https://www.fatsecret.co.id/kalori-gizi/arummi/cashew-milk/1-porsi', true, {method:'Ready to drink'});
  add('Arummi', 'Barista cashew milk', ['arummi barista','arummi barista milk','cashew milk barista','barista arummi','arummi barista cashew milk'], '170 ml', 170, 80, 2, 9, 4, 'Arummi Barista community label, Indonesia.', 'https://www.fatsecret.co.id/kalori-gizi/search?q=Arummi+Cashew+Milk', true);
  add('Arummi', 'Chocolate cashew milk', ['arummi choco','arummi cokelat','arummi coklat','arummi chocolate','chocolate cashew milk'], 'carton (200 ml)', 200, 110, 2, 16, 4, 'Arummi chocolate community label, Indonesia.', 'https://www.fatsecret.co.id/kalori-gizi/search?q=Arummi+Cashew+Milk', true);
  add('Matchamu', 'Pure matcha powder', ['pure matcha matchamu','matchamu pure','matchamu matcha powder','matchamu pure matcha','bubuk matcha murni','pure matcha powder'], 'teaspoon (2 g)', 2, 10, 0, 1, 0,
    'Matchamu Pure Matcha community label. Assumes one teaspoon of powder before milk or syrup.', 'https://www.fatsecret.co.id/kalori-gizi/matchamu/pure-matcha/1-sdt', true);
  // Indonesian restaurant, grocery and drink references from product listings.
  // Quantities are converted to the serving stated here when a label uses a different unit.
  const idRows = [
    ['Solaria','Kwetiau goreng',['kwetiaw goreng','kwetiau goreng','fried flat rice noodles solaria'],'plate (assumed 250 g)',250,525,17.5,65,22.5,'Solaria Kwetiau Goreng','Stir-fried'],
    ['Solaria','Bihun goreng ayam',['bihun ayam goreng','fried chicken vermicelli'],'portion (150 g)',150,455,17.73,54.79,17.04,'Solaria Bihun Goreng Ayam','Stir-fried'],
    ['Solaria','Fu yung hai',['fuyunghai','fu yong hai','foo yung hai'],'portion (assumed 150 g)',150,196.5,11.3,5.42,14.57,'Solaria Fuyunghai','Fried'],
    ['HokBen','Shrimp roll',['shrimp roll hokben','ebi shrimp roll'],'reference serving',null,54,2.6,3.6,3.2,'HokBen Shrimp Roll','Fried'],
    ['HokBen','Simple Set Teriyaki 2',['simple set 2','simple set teriyaki dua'],'set',null,711,28.8,83,28.8,'HokBen Simple Set Teriyaki 2','Mixed preparation'],
    ['Mie Gacoan','Mie Iblis',['mie iblis','mi iblis','mie gacoan iblis'],'portion',null,661,16.7,79,30.9,'Mie Gacoan Mie Iblis','Stir-fried'],
    ['Mie Gacoan','Udang keju',['udang keju gacoan','cheese prawn gacoan'],'portion (72 g)',72,230,11,12,15,'Mie Gacoan Udang Keju','Fried'],
    ['J.CO','Alcapone doughnut',['alcapone','jco alcapone','al capone donut','alcapone donut'],'doughnut (assumed 50 g)',50,260,6,20,17,'J.CO Alcapone','Fried'],
    ['Janji Jiwa','Es kopi susu',['es kopi susu janji jiwa','kopi susu janji jiwa'],'glass (assumed 200 ml)',200,150,5,23,4.5,'Janji Jiwa Es Kopi Susu','Iced'],
    ['Ultra Milk','UHT full cream',['ultramilk full cream','susu ultra full cream','ultra milk full cream'],'carton (250 ml)',250,150,8,12,8,'Ultra Milk Susu UHT Full Cream'],
    ['Greenfields','UHT full cream milk',['greenfields full cream','greenfields susu full cream'],'carton (200 ml)',200,130,6,9,7,'Greenfields UHT Full Cream'],
    ['Greenfields','Plain yoghurt without sugar',['greenfields plain no sugar','greenfields yoghurt plain','yogurt plain no sugar greenfields'],'pot (120 g)',120,80,4,6,4.5,'Greenfields Yogurt Plain No Sugar'],
    ['Cimory','UHT full cream',['cimory full cream','susu cimory full cream'],'carton (125 ml)',125,80,4,7,4,'Cimory Susu UHT Full Cream'],
    ['Cimory','Strawberry drinking yoghurt',['cimory yogurt drink strawberry','cimory yoghurt drink strawberry','yogurt stroberi cimory'],'70 ml',70,50,0,10,0,'Cimory Yogurt Drink Strawberry'],
    ['Cimory','Original squeeze yoghurt',['cimory squeeze original','squeeze yogurt original','squeeze yoghurt original'],'70 ml',70,70,2,12,2,'Cimory Squeeze Yogurt Original'],
    ['Ultra Jaya','Teh Kotak original',['teh kotak','teh kotak original','tehkotak original'],'carton (200 ml)',200,70,0,17,0,'Ultra Jaya Teh Kotak'],
    ['Ultra Jaya','Teh Kotak less sugar',['teh kotak less sugar','tehkotak less sugar','teh kotak rendah gula'],'carton (300 ml)',300,70,0,19,0,'Ultra Jaya Teh Kotak Less Sugar'],
    ['Ultra Jaya','Teh Kotak lemon',['teh kotak rasa lemon','teh kotak lemon'],'carton (200 ml)',200,100,0,23,0,'Ultra Jaya Teh Kotak Rasa Lemon'],
    ['Mayora','Teh Pucuk Harum less sugar',['teh pucuk less sugar','pucuk harum less sugar','pucuk rendah gula'],'bottle (240 ml)',240,45,0,12,0,'Teh Pucuk Harum Less Sugar'],
    ['Indomie','Ayam bawang noodles',['indomie ayam bawang','mi ayam bawang','indomie chicken onion'],'packet (69 g dry)',69,310,6,43,13,'Indomie Ayam Bawang','Boiled with included seasoning'],
    ['Indomie','Soto Lamongan noodles',['indomie soto lamongan','mie soto lamongan','indomie lamongan'],'packet (80 g dry)',80,360,10,48,14,'Indomie Soto Lamongan','Boiled with included seasoning'],
    ['Indomie','Soto spesial noodles',['indomie soto spesial','indomie soto special','soto spesial'],'packet (75 g dry)',75,330,7,44,14,'Indomie Soto Spesial','Boiled with included seasoning'],
    ['Indomie','Mi goreng rendang jumbo',['indomie rendang jumbo','mi goreng rendang jumbo','mie goreng rendang jumbo'],'packet (115 g dry)',115,530,12,68,23,'Indomie Mie Goreng Rendang Jumbo','Boiled with included seasoning'],
    ['Sari Roti','Roti tawar gandum',['sari roti gandum','sari roti whole wheat','roti gandum sari roti'],'slice (35 g)',35,95,3,16.5,1.75,'Sari Roti Roti Tawar Gandum','Baked'],
    ['Sari Roti','Roti isi keju',['sari roti isi keju','sari roti cheese bun'],'pack (65 g)',65,200,6,30,7,'Sari Roti Roti Isi Keju','Baked'],
    ['Sari Roti','Roti sobek coklat',['sari roti sobek cokelat','roti sobek coklat','sari roti chocolate tear bread'],'portion (107 g)',107,350,8,57,10,'Sari Roti Roti Sobek Coklat','Baked'],
    ['Good Day','Cappuccino sachet',['kopi goodday cappuccino','goodday cappuccino','good day capuccino'],'sachet (25 g dry)',25,110,1,21,2.5,'Good Day Cappuccino'],
    ['Silver Queen','Cashew milk chocolate',['silverqueen cashew','silverqueen cokelat mede','silver queen cashew','silverqueen kacang mede'],'portion (20 g)',20,110,2,10,7,'Silver Queen Cashew Milk Chocolate'],
    ['ABC','White mocca instant coffee',['abc white mocca','kopi abc white mocca'],'sachet (27 g dry)',27,120,1,23,2.5,'ABC White Mocca'],
    ['Kopi Luwak','White Koffie Tarik Malaka',['luwak white koffie tarik malaka','white koffi tarik malaka','luwak malaka'],'sachet (25 g dry)',25,110,1,17,4,'Kopi Luwak White Koffie Tarik Malaka']
  ];
  for (const [brand,name,aliases,unit,grams,kcal,protein,carbs,fat,query,method] of idRows) {
    add(brand,name,aliases,unit,grams,kcal,protein,carbs,fat,'Community nutrition reference for Indonesia. Check the package or restaurant portion.', 'https://www.fatsecret.co.id/kalori-gizi/search?q='+encodeURIComponent(query),true,method?{method}:{});
  }

  const nd = [
    ['Chicken Butterfly',['nandos chicken butterfly','butterflied chicken nandos'],332,59.4,0.2,10.1,1.3],
    ['Grilled chicken pitta',['nandos chicken pitta','grilled chicken pita'],508,36.4,50.2,19.1,1.9],
    ['Regular PERi-salted chips',['peri salted chips','peri peri chips','perisalted chips'],498,4.7,71.7,23,2.7],
    ['Regular plain chips',['nandos chips','plain chips nandos'],496,4.6,71.4,23,2.2],
    ['Regular spicy rice',['spicy rice nandos','nandos rice'],246,3.8,42.2,6,1.7],
    ['Large spicy rice',['nandos large spicy rice','spicy rice large'],492,7.5,84.3,12,3.3],
    ['Regular garlic bread',['nandos garlic bread','garlic bread nandos'],372,5.9,51.9,16.1,1],
    ['Regular creamy mash',['nandos creamy mash','nandos mash'],308,2.8,25.4,22,1.2],
    ['Regular coleslaw',['nandos coleslaw','coleslaw nandos'],233,1.2,8.1,21.2,0.8],
    ['Regular macho peas',['nandos peas','macho peas'],155,7.1,17.9,8.3,1.2],
    ['Regular corn on the cob',['nandos corn on the cob','nandos corn'],142,3.5,15.8,7.5,0.2],
    ['Grilled halloumi cheese',['grilled halloumi nandos','nandos halloumi side'],267,11.9,1.3,23.8,1.1]
  ];
  for(const [name,aliases,kcal,protein,carbs,fat,salt] of nd)
    add('Nando’s',name,aliases,'UK menu portion',null,kcal,protein,carbs,fat,'UK menu reference, standard portion and recipe.', 'https://foraging.tempolife.app/restaurant-menus/nandos-uk',true,{salt});

  const drinks = [
    ['Pepsi','Pepsi Max',['pepsi max','sugar free pepsi','pepsi maximum taste'],1,0,'https://www.pepsi.co.uk/products/pepsi-max'],
    ['Pepsi','Pepsi Classic (UK)',['pepsi original','regular pepsi','pepsi classic','pepsi cola'],61,15,'https://www.pepsi.co.uk/products/pepsi'],
    ['Coca-Cola','Diet Coke',['diet coke','coca cola light','coke light'],1.3,0,'https://www.coca-cola.com/gb/en/brands/diet-coke'],
    ['Fanta','Fanta Orange (UK)',['fanta orange','orange fanta','fanta jeruk'],62.7,14.85,'https://www.coca-cola.com/gb/en/brands/fanta'],
    ['Sprite','Sprite original (UK)',['sprite original','sprite regular','sprite lemon lime'],62.7,14.52,'https://www.coca-cola.com/gb/en/brands/sprite']
  ];
  for(const [brand,name,aliases,kcal,carbs,url] of drinks)
    add(brand,name,aliases,'can (330 ml)',330,kcal,0,carbs,0,'Manufacturer UK label per 330 ml. Regional recipes can differ.',url,false,{method:'Ready to drink'});

  globalThis.CIRCE_FOODS.push(...additions);
})();
