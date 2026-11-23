/* The Liquid Method: script.js (drink data, illustrations, Mixology Lab, app). No libraries needed. */
var LM_IMGS=['americano','apple-espresso-martini-mocktail','banana-iced-latte','banana-latte','berry-garden-fizz','black-sugar-latte','blueberry-coconut','caramel-popcorn-iced-coffee','chamomile-honey-cloud','charcoal-latte','cherry-coke-mocktail','citrus-coffee','cocoa-coffee','coconut-hibiscus-breeze','coconut-matcha-cloud','cover','cucumber-mint-cooler','date-cinnamon-latte','dirty-chai-latte','elderflower-bliss','ginger-spice-latte','golden-pineapple-breeze','golden-turmeric-latte','grapefruit-americano','lavender-lemonade','lavender-matcha-latte','lychee-jasmine-hibiscus-tea','mango-green-tea-lemonade','mango-matcha-latte','muskmelon-honey-lime-refresher','passion-fruit-sunshine','peach-ginger-fizz','pink-citrus-spritz','pistachio-cold-brew','pistachio-cold-foam-latte','pumpkin-spice-latte','purple-grape-garden-fizz','raspberry-coconut-latte','red-velvet-latte','rose-guava-cooler','rose-latte','rosemary-pomegranate-mocktail','salted-honey-latte','salted-matcha','smoked-apple-mocktail','spicy-dragon-fruit','strawberry-basil-smash','strawberry-coffee-latte','strawberry-foam-matcha-latte','ube-latte','ube-matcha','vanilla-daydream-cold-brew','watermelon-mint-cooler'];
/* Drinks, part 1: Mocktails (19), Milk (5), Matcha (7). All alcohol-free.
   D(id, name, category, tags, moods(c=comforting x=sophisticated), story, ingredients "label|amount;...", method, art) */
var DRINKS = [];
function D(id, name, cat, tags, moods, story, ing, how, art) {
  var ings = ing.split(';').map(function (s) { var p = s.split('|'); return { n: p[0], a: p[1] || '' }; });
  DRINKS.push({ id: id, name: name, cat: cat, tags: tags.split(','), moods: moods, story: story, ing: ings, how: how, art: art,
    milk: /milk of your choice/i.test(ing) });
}

/* ---------- MOCKTAILS ---------- */
D('lychee-jasmine-hibiscus-tea', 'Lychee Jasmine Hibiscus Tea', 'mocktails', 'Floral,Fruity,Refreshing', 'x',
  'Cool jasmine tea and lychee, with a hibiscus blush that fades from rose to gold.',
  'Jasmine tea, chilled|120 ml;Lychee syrup|40 ml;Hibiscus tea, strong|30 ml;Lychee, peeled|2 pcs;Ice|as you like',
  'Fill the glass with ice and lychee, add the jasmine tea and syrup, then pour the hibiscus slowly over the back of a spoon.',
  { g: 'tulip', L: [['#e8c878', .6], ['#e48f8c', .4]], ice: 1, gar: ['flower', 'mint'] });
D('watermelon-mint-cooler', 'Watermelon Mint Cooler', 'mocktails', 'Fruity,Refreshing,Sparkling', '',
  'Pressed watermelon, a lot of mint and a squeeze of lime. Summer in a glass.',
  'Watermelon juice, fresh|120 ml;Lime juice|15 ml;Honey syrup|10 ml;Mint leaves|8;Sparkling water|60 ml;Ice|as you like',
  'Muddle the mint with the syrup, add ice, juice and lime, then top with sparkling water.',
  { g: 'ribbed', L: [['#ef8a9a', .5], ['#f4a3ae', .5]], ice: 1, b: 1, gar: ['mint', 'watermelon'] });
D('cherry-coke-mocktail', 'Cherry Coke', 'mocktails', 'Fruity,Sweet,Sparkling', '',
  'The soda fountain classic, grown up with tart cherry and a drop of vanilla.',
  'Cola|120 ml;Tart cherry juice|40 ml;Lime juice|10 ml;Vanilla syrup|5 ml;Cherries|3;Ice|as you like',
  'Build over ice, stir once, and finish with cherries and a mint leaf.',
  { g: 'rocks', L: [['#3a1019', .5], ['#5b1522', .5]], ice: 1, b: 1, gar: ['cherry', 'mint'] });
D('rose-guava-cooler', 'Rose Guava Cooler', 'mocktails', 'Floral,Fruity,Sparkling,Refreshing', 'x',
  'Soft pink guava lifted by rose and lime, with lychee hiding at the bottom.',
  'Rose syrup|15 ml;Guava juice|90 ml;Lime juice|15 ml;Lychee, halved|3 pcs;Soda water|60 ml;Edible rose|1;Ice|as you like',
  'Stir syrup, guava and lime over ice, add the lychee, top with soda and float an edible rose.',
  { g: 'tumbler', L: [['#f0a58f', .7], ['#f3b9a5', .3]], ice: 1, b: 1, gar: ['rose', 'lime'] });
D('spicy-dragon-fruit', 'Spicy Dragon Fruit', 'mocktails', 'Fruity,Spicy,Citrus,Refreshing', 'x',
  'Magenta dragon fruit, lime and a slow jalapeño heat, with a chilli-sugar rim.',
  'Dragon fruit purée|60 ml;Fresh lime juice|25 ml;Orange juice|20 ml;Simple syrup|15 ml;Jalapeño slices|2 to 3;Chilli-sugar rim|1 tsp;Ice|as you like',
  'Muddle the jalapeño gently, shake everything with ice and strain into a rimmed glass over fresh ice.',
  { g: 'coupe', L: [['#c81e5a', 1]], ice: 1, gar: ['dragon', 'lime'] });
D('mango-green-tea-lemonade', 'Mango Green Tea Lemonade', 'mocktails', 'Fruity,Citrus,Refreshing,Sweet', '',
  'Iced green tea, ripe mango and fresh lemon. Bright, golden and easy to drink.',
  'Green tea, brewed strong and chilled|120 ml;Mango purée|50 ml;Lemon juice|25 ml;Honey or agave|15 ml;Mint|1 sprig;Ice|as you like',
  'Stir the purée, lemon and honey into the tea over ice and top with a mint sprig.',
  { g: 'ribbed', L: [['#f2b23e', .5], ['#f5c75a', .5]], ice: 1, gar: ['mint', 'lime'] });
D('cucumber-mint-cooler', 'Cucumber & Mint Cooler', 'mocktails', 'Refreshing,Sparkling,Citrus', '',
  'Crisp, clean and revitalising. The quietest drink in the archive.',
  'Cucumber, muddled|4 slices;Mint leaves|8;Lime juice|20 ml;Agave syrup|15 ml;Soda water|120 ml;Ice|as you like',
  'Muddle cucumber and mint with the agave, add lime and ice, then top with soda.',
  { g: 'rocks', L: [['#cfe3a0', .6], ['#e2efc2', .4]], ice: 1, b: 1, gar: ['cucumber', 'mint'] });
D('pink-citrus-spritz', 'Pink Citrus Spritz', 'mocktails', 'Citrus,Refreshing,Sparkling,Bitter', 'x',
  'Pink grapefruit with a hint of rosemary. Zesty, bright and uplifting.',
  'Pink grapefruit juice|90 ml;Agave syrup|10 ml;Rosemary|1 sprig;Soda water|90 ml;Ice|as you like',
  'Bruise the rosemary in the glass, add ice, grapefruit and agave, and top with soda.',
  { g: 'tumbler', L: [['#f4907a', .5], ['#f7a898', .5]], ice: 1, b: 1, gar: ['grapefruit', 'rosemary'] });
D('passion-fruit-sunshine', 'Passion Fruit Sunshine', 'mocktails', 'Fruity,Sweet,Refreshing', '',
  'Tropical, bright and happy. Passion fruit, orange and pineapple with a little fizz.',
  'Passion fruit pulp|2 tbsp;Orange juice|60 ml;Pineapple juice|60 ml;Agave syrup|10 ml;Soda water|splash;Mint|1 sprig;Ice|as you like',
  'Shake pulp, juices and agave with ice, pour over fresh ice and finish with soda.',
  { g: 'rocks', L: [['#f1b03a', .6], ['#f6c94f', .4]], ice: 1, b: 1, gar: ['passion', 'mint'] });
D('berry-garden-fizz', 'Berry Garden Fizz', 'mocktails', 'Fruity,Refreshing,Sparkling', '',
  'Mixed berries, lime and mint. Fruity, fresh and joyful.',
  'Mixed berries, muddled|40 g;Lime juice|20 ml;Mint|6 leaves;Agave syrup|10 ml;Soda water|120 ml;Ice|as you like',
  'Muddle berries with mint and agave, add lime and ice, top with soda water.',
  { g: 'ribbed', L: [['#6b1f3a', .4], ['#8a2c4a', .6]], ice: 1, b: 1, gar: ['blueberry', 'mint'] });
D('strawberry-basil-smash', 'Strawberry & Basil Smash', 'mocktails', 'Fruity,Refreshing,Sweet', '',
  'Strawberries crushed with basil over a lot of ice. Sweet first, herbal after.',
  'Strawberries, muddled|5;Basil leaves|6;Lemon juice|20 ml;Simple syrup|15 ml;Crushed ice|to fill;Sparkling water|splash',
  'Smash the strawberries and basil with syrup, add lemon and crushed ice, finish with a splash of sparkling water.',
  { g: 'highball', L: [['#ee6e6a', .5], ['#f4857c', .5]], ice: 1, b: 1, gar: ['strawberry', 'basil'] });
D('elderflower-bliss', 'Elderflower Bliss', 'mocktails', 'Floral,Citrus,Sparkling,Refreshing', 'x',
  'Pale, elegant and quietly floral. Elderflower with lemon and mint.',
  'Elderflower cordial|30 ml;Lemon juice|20 ml;Soda water|120 ml;Mint|1 sprig;Elderflower blossoms|a few;Ice|as you like',
  'Stir cordial and lemon over ice, top with soda and dress with mint and blossoms.',
  { g: 'tulip', L: [['#f3e2a4', .6], ['#f6edc0', .4]], ice: 1, b: 1, gar: ['lemon', 'mint', 'flower'] });
D('lavender-lemonade', 'Lavender Lemonade', 'mocktails', 'Floral,Citrus,Refreshing,Sweet', 'x',
  'Calming, floral and delicate. A lilac lemonade that tastes like a quiet afternoon.',
  'Lavender syrup|25 ml;Lemon juice|40 ml;Cold water or soda|120 ml;Dried lavender|1 sprig;Ice|as you like',
  'Shake syrup and lemon with ice, pour into a glass over fresh ice and top with water or soda.',
  { g: 'ribbed', L: [['#b9a7d4', .6], ['#cdbfe2', .4]], ice: 1, b: 1, gar: ['lemon', 'lavender'] });
D('peach-ginger-fizz', 'Peach & Ginger Fizz', 'mocktails', 'Fruity,Spicy,Sparkling', '',
  'Sparkling peach with a slow ginger warmth underneath.',
  'Peach purée|60 ml;Fresh ginger syrup|20 ml;Lemon juice|15 ml;Sparkling water|100 ml;Peach slices|2;Ice|as you like',
  'Stir purée, ginger syrup and lemon over ice, top with sparkling water and tuck in the peach slices.',
  { g: 'tumbler', L: [['#f4a64a', .6], ['#f7bb62', .4]], ice: 1, b: 1, gar: ['peach'] });
D('blueberry-coconut', 'Blueberry Coconut', 'mocktails', 'Fruity,Creamy,Sweet,Citrus', '',
  'A pink blueberry and coconut sipper with lime, served in the style of a margarita.',
  'Blueberries, muddled|40 g;Coconut water|80 ml;Coconut cream|30 ml;Lime juice|25 ml;Agave syrup|10 ml;Blueberry skewer|1;Ice|as you like',
  'Shake everything with ice, strain over fresh ice and finish with a skewer of blueberries.',
  { g: 'stemless', L: [['#e9a4be', .5], ['#f1bccf', .5]], ice: 1, gar: ['blueberry', 'lime'] });
D('coconut-hibiscus-breeze', 'Coconut Hibiscus Breeze Mocktail', 'mocktails', 'Floral,Creamy,Refreshing', 'x',
  'A ruby hibiscus base under a cloud of coconut milk.',
  'Hibiscus tea, strong|60 ml;Pomegranate syrup|15 ml;Coconut milk|100 ml;Edible flower|1;Ice|as you like',
  'Stir the hibiscus and syrup into the glass over ice, then pour the coconut milk on top so it sits in a layer.',
  { g: 'tumbler', L: [['#b3183f', .3, 'Hibiscus'], ['#f3efe8', .7, 'Coconut milk']], ice: 1, gar: ['flower', 'lime'] });
D('smoked-apple-mocktail', 'Smoked Apple Mocktail', 'mocktails', 'Spicy,Sweet,Sparkling,Earthy', 'cx',
  'Spiced apple, a torched cinnamon stick and tonic. Autumn without the alcohol.',
  'Apple cider, unfiltered|120 ml;Tonic water|60 ml;Lemon juice|10 ml;Maple syrup|10 ml;Cinnamon stick, lightly torched|1;Rosemary|1 sprig;Ice|as you like',
  'Stir cider, lemon and maple over ice, top with tonic, then garnish with the torched cinnamon and rosemary.',
  { g: 'ribbed', L: [['#e9a23a', .5], ['#f0b44c', .5]], ice: 1, b: 1, gar: ['cinnamon', 'rosemary'] });
D('rosemary-pomegranate-mocktail', 'Rosemary Pomegranate Mocktail', 'mocktails', 'Fruity,Earthy,Refreshing', 'x',
  'Deep garnet pomegranate, resinous rosemary and a squeeze of lime.',
  'Pomegranate juice|100 ml;Lime juice|15 ml;Rosemary syrup|15 ml;Soda water|60 ml;Pomegranate seeds|1 tbsp;Rosemary|1 sprig;Ice|as you like',
  'Stir juice, lime and rosemary syrup over ice, top with soda and scatter the seeds.',
  { g: 'tumbler', L: [['#6a1230', .5], ['#8a1d3d', .5]], ice: 1, b: 1, gar: ['pomegranate', 'rosemary'] });
D('muskmelon-honey-lime-refresher', 'Muskmelon Honey Lime Refresher', 'mocktails', 'Fruity,Citrus,Refreshing,Sparkling', '',
  'Sweet muskmelon, honey and lime with melon balls floating in the glass.',
  'Muskmelon juice|100 ml;Honey syrup|15 ml;Lime juice|20 ml;Muskmelon balls|4;Mint leaves|6;Sparkling water|60 ml;Ice|as you like',
  'Stir juice, honey and lime over ice, add the melon balls and mint, and top with sparkling water.',
  { g: 'ribbed', L: [['#f6b36a', .55], ['#f9c58a', .45]], ice: 1, b: 1, gar: ['melon', 'mint', 'lime', 'flower'] });

/* ---------- MILK (milk of your choice: dairy, oat, almond, soy, coconut) ---------- */
D('golden-turmeric-latte', 'Golden Turmeric Latte', 'milk', 'Spicy,Earthy,Creamy,Sweet', 'c',
  'Warm turmeric, ginger and a little black pepper in steamed milk.',
  'Turmeric|1 tsp;Ginger|1/4 tsp;Black pepper|1 pinch;Cinnamon|1/4 tsp;Honey|1 tsp;Milk of your choice|240 ml',
  'Warm the milk with the spices, whisk until frothy and sweeten with honey.',
  { g: 'mug', L: [['#e9b02c', .8]], f: '#f1c75a', gar: ['cocoa'] });
D('ube-latte', 'Ube Latte', 'milk', 'Sweet,Creamy,Earthy', 'c',
  'Purple yam, vanilla and milk. Soft, nutty and a little dreamy.',
  'Ube powder or extract|1 tbsp;Milk of your choice|200 ml;Vanilla|1/2 tsp;Honey or syrup|10 ml;Ice|as you like',
  'Whisk the ube with a splash of warm milk, add the rest of the milk over ice and swirl.',
  { g: 'tumbler', L: [['#f1e8f5', .15], ['#a98bd0', .6]], ice: 1, f: '#c4aee0', gar: [] });
D('charcoal-latte', 'Charcoal Latte', 'milk', 'Earthy,Creamy', 'x',
  'A grey, smoky-looking latte with vanilla and honey. More striking than it tastes.',
  'Activated charcoal powder|1/2 tsp;Milk of your choice|200 ml;Vanilla syrup|15 ml;Honey|1 tsp;Ice|as you like',
  'Whisk the charcoal into a little milk, add syrup and honey, then pour the rest of the milk over ice.',
  { g: 'highball', L: [['#d9d4cc', .3], ['#6d6a66', .5]], ice: 1, f: '#4a4745', gar: [] });
D('red-velvet-latte', 'Red Velvet Latte', 'coffee', 'Sweet,Creamy', 'c',
  'Espresso, beetroot, cocoa and vanilla. The cake in latte form, with a cloud of cream.',
  'Espresso|1 shot (30 ml);Beetroot powder|1 tsp;Cocoa powder|1 tsp;Vanilla syrup|20 ml;Milk of your choice|180 ml;Whipped cream|2 tbsp;Thyme|1 sprig',
  'Whisk the beetroot and cocoa into warm milk with the vanilla, pour into a glass over the espresso and top with cream.',
  { g: 'wavy', L: [['#8a1f35', .3, 'Red velvet'], ['#f1d4d4', .3, 'Milk'], ['#3b2014', .15, 'Espresso']], f: '#fbf6f1', gar: ['thyme'] });
D('ginger-spice-latte', 'Ginger Spice Latte', 'coffee', 'Spicy,Creamy,Sweet,Earthy', 'c',
  'Espresso with fresh ginger, cinnamon, cardamom and clove in warm milk.',
  'Espresso|1 shot (30 ml);Fresh ginger|1 thumb;Cinnamon|1/2 tsp;Cardamom|1 pod;Clove|1;Maple syrup|15 ml;Milk of your choice|220 ml',
  'Simmer the spices in the milk for five minutes, strain, sweeten with maple and froth. Pour over the espresso.',
  { g: 'mug', L: [['#c9a06a', .8]], f: '#efe0c8', gar: ['cocoa'] });

/* ---------- MATCHA ---------- */
D('coconut-matcha-cloud', 'Coconut Matcha Cloud', 'matcha', 'Earthy,Creamy,Refreshing', 'x',
  'Clear coconut water, topped with a green whipped matcha cloud.',
  'Matcha, ceremonial|2 g;Water, 70 °C|40 ml;Coconut water|150 ml;Coconut cream|3 tbsp;Ice|as you like',
  'Fill the glass with ice and coconut water, whip the matcha with the coconut cream and spoon it on top.',
  { g: 'slim', L: [['#e6eedf', .7], ['#6f8b3d', .3]], ice: 1, f: '#8aa54f', gar: ['matcha'] });
D('ube-matcha', 'Ube Matcha', 'matcha', 'Earthy,Creamy,Sweet,Floral', 'x',
  'A purple ube cloud floating over bright green matcha, finished with lavender.',
  'Ube cream|3 tbsp;Milk of your choice|150 ml;Matcha, ceremonial|2 g;Water, 70 °C|40 ml;Dried lavender|1 sprig;Ice|as you like',
  'Whisk the matcha, pour over ice, add the milk, then spoon the ube cream on top.',
  { g: 'can', L: [['#7f9a4a', .4, 'Matcha'], ['#b9a2dc', .45, 'Ube milk']], ice: 1, f: '#cdbbec', gar: ['lavender'] });
D('salted-matcha', 'Salted Matcha', 'matcha', 'Earthy,Creamy,Bitter', 'x',
  'Green matcha topped with a salted cream. Savoury, soft and a little addictive.',
  'Matcha, ceremonial|2 g;Water, 70 °C|40 ml;Milk of your choice|150 ml;Sea salt cream|3 tbsp;Ice|as you like',
  'Whisk the matcha with the water, pour over ice and milk, and finish with the salted cream.',
  { g: 'highball', L: [['#5f8a2e', .45, 'Matcha'], ['#f1f4e6', .4, 'Milk']], ice: 1, f: '#f8f5ea', gar: [] });
D('mango-matcha-latte', 'Mango Matcha Latte', 'matcha', 'Fruity,Sweet,Creamy,Earthy', '',
  'Mango at the bottom, milk in the middle, green matcha on top. Café vibes at home.',
  'Mango purée|50 ml;Milk of your choice|140 ml;Matcha, ceremonial|2 g;Water, 70 °C|40 ml;Mango cubes|a few;Ice|as you like',
  'Spoon the mango into the glass, add ice and milk, then pour the whisked matcha slowly over the top.',
  { g: 'highball', L: [['#f1b23a', .25, 'Mango'], ['#f1ecd8', .35, 'Milk'], ['#6f9a3a', .3, 'Matcha']], ice: 1, gar: ['mango'] });
D('lavender-matcha-latte', 'Lavender Matcha Latte', 'matcha', 'Floral,Creamy,Earthy', 'x',
  'Floral lavender over ice, with matcha and milk layered above.',
  'Lavender syrup|20 ml;Milk of your choice|150 ml;Matcha, ceremonial|2 g;Water, 70 °C|40 ml;Dried lavender|1 sprig;Ice|as you like',
  'Pour the lavender syrup into the glass, add ice and milk, then top with the whisked matcha.',
  { g: 'tumbler', L: [['#b79ad8', .2, 'Lavender'], ['#f2f0ea', .35, 'Milk'], ['#6f9a3a', .3, 'Matcha']], ice: 1, gar: ['lavender'] });
D('strawberry-foam-matcha-latte', 'Strawberry Foam Matcha Latte', 'matcha', 'Fruity,Creamy,Sweet,Earthy', '',
  'Iced matcha latte under a pink strawberry cold foam.',
  'Matcha, ceremonial|2 g;Water, 70 °C|40 ml;Milk of your choice|160 ml;Strawberry cold foam (purée, cream, milk)|3 tbsp;Ice|as you like',
  'Whisk the matcha over ice and milk, then whip the foam and spoon it on top.',
  { g: 'ribbed', L: [['#7fa044', .65, 'Matcha milk']], ice: 1, f: '#e8a3a8', gar: [] });
/* Drinks, part 2: Coffee (19). Amounts for banana iced latte, pistachio cold foam latte and raspberry coconut latte
   come from the recipe screenshots; all others are inferred from the drink name. */
/* ---------- COFFEE ---------- */
D('vanilla-daydream-cold-brew', 'Vanilla Daydream Cold Brew', 'coffee', 'Creamy,Sweet,Bitter', 'c',
  'Slow cold brew swirled with vanilla milk. Soft, dreamy and not too sweet.',
  'Cold brew|120 ml;Vanilla syrup|15 ml;Milk of your choice|60 ml;Vanilla bean|a pinch;Ice|as you like',
  'Stir the vanilla into the milk, pour over ice and cold brew and watch it swirl.',
  { g: 'ribbed', L: [['#e6d3b5', .3], ['#8b5a3a', .6]], ice: 1, s: 1, gar: [] });
D('apple-espresso-martini-mocktail', 'Apple Espresso Martini Mocktail', 'coffee', 'Bitter,Sweet,Fruity', 'x',
  'A foamy, alcohol-free espresso martini with apple and a little cinnamon.',
  'Espresso, freshly brewed|60 ml;Apple juice, cloudy|40 ml;Cinnamon syrup|15 ml;Vanilla extract|1 drop;Coffee beans|3;Apple slice|1;Ice|for shaking',
  'Shake hard with ice and double-strain into a chilled coupe. Float the beans and an apple slice on the foam.',
  { g: 'coupe', L: [['#3b2014', .7], ['#7a4a2e', .3]], f: '#c9a27c', gar: ['beans', 'apple'] });
D('americano', 'Americano', 'coffee', 'Bitter,Earthy', 'x',
  'Plain, honest and exactly as strong as you make it. Served over ice.',
  'Espresso, double|60 ml;Cold water|120 ml;Ice|as you like',
  'Fill a glass with ice, add water, and pour the espresso over the top.',
  { g: 'rocks', L: [['#4a2616', 1]], ice: 1, gar: [] });
D('black-sugar-latte', 'Black Sugar Latte', 'coffee', 'Sweet,Creamy,Earthy', 'c',
  'Dark, caramel-like black sugar syrup streaking the glass under milk and espresso.',
  'Black sugar syrup|20 ml;Milk of your choice|150 ml;Espresso, double|60 ml;Cinnamon|a pinch;Ice|as you like',
  'Coat the inside of the glass with syrup, add ice and milk, then pour the espresso over the top.',
  { g: 'rocks', L: [['#4a2a18', .15, 'Black sugar'], ['#efe2cc', .5, 'Milk'], ['#3b2014', .35, 'Espresso']], ice: 1, gar: ['cocoa'] });
D('rose-latte', 'Rose Latte', 'coffee', 'Floral,Sweet,Creamy', 'x',
  'A pink rose milk layer under dark espresso.',
  'Rose syrup|20 ml;Milk of your choice|150 ml;Espresso, double|60 ml;Dried rose petals|a few;Ice|as you like',
  'Stir the syrup into the milk, pour over ice and pour the espresso on top.',
  { g: 'tumbler', L: [['#e9a9b4', .2, 'Rose'], ['#f2dfd6', .4, 'Milk'], ['#4a2a18', .4, 'Espresso']], ice: 1, gar: ['rose'] });
D('banana-latte', 'Banana Latte', 'coffee', 'Creamy,Sweet,Fruity', 'c',
  'Ripe banana blended into the milk, with espresso poured on top.',
  'Ripe banana, mashed|1/2;Milk of your choice|180 ml;Espresso, double|60 ml;Honey|1 tsp;Ice|as you like',
  'Blend the banana with the milk and honey, pour over ice and add the espresso.',
  { g: 'can', L: [['#e9d3a0', .6], ['#c9a171', .4]], ice: 1, gar: ['banana'] });
D('banana-iced-latte', 'Banana Iced Latte', 'coffee', 'Creamy,Sweet,Fruity', 'c',
  'Smashed banana, milk and double espresso under a banana cold foam.',
  'Banana, smashed|1/4;Milk of your choice|4 oz (120 ml);Espresso|double shot;Whipping cream, for foam|2 tbsp;Milk, for foam|2 tbsp;Banana, smashed, for foam|1 tbsp',
  'Smash the banana at the bottom of the glass, add ice and milk, pour the espresso over, and top with the cold foam.',
  { g: 'rocks', L: [['#e8c88f', .12, 'Banana'], ['#f1e6d2', .4, 'Milk'], ['#6a3d22', .3, 'Espresso']], ice: 1, f: '#f0d9a0', gar: ['banana'] });
D('pistachio-cold-foam-latte', 'Pistachio Cold Foam Latte', 'coffee', 'Creamy,Sweet,Earthy', 'x',
  'Pistachio cream stirred through milk, double espresso, and a pale green cold foam.',
  'Pistachio cream|1 tbsp;Milk of your choice|3 oz (90 ml);Espresso|double shot;Whipping cream, for foam|2 tbsp;Milk, for foam|2 tbsp;Pistachio cream, for foam|1 tbsp',
  'Stir the pistachio cream into the milk over ice, add the espresso, then whip and spoon on the foam.',
  { g: 'rocks', L: [['#efe3cb', .4, 'Pistachio milk'], ['#5a3320', .3, 'Espresso']], ice: 1, f: '#b8c46a', gar: ['pistachio'] });
D('raspberry-coconut-latte', 'Raspberry Coconut Latte', 'coffee', 'Fruity,Creamy,Sweet', '',
  'Muddled raspberries, coconut milk and double espresso under a coffee cold foam.',
  'Muddled raspberries|a handful;Coconut milk|3 oz (90 ml);Espresso|double shot;Coffee cold foam|whipping cream and milk, whipped',
  'Muddle the raspberries in the glass, add ice and coconut milk, pour the espresso over and top with the coffee foam.',
  { g: 'rocks', L: [['#cf2f4f', .12, 'Raspberry'], ['#f6f0e6', .4, 'Coconut milk'], ['#6a3d22', .3, 'Espresso']], ice: 1, f: '#c8a074', gar: ['raspberry'] });
D('pistachio-cold-brew', 'Pistachio Cold Brew', 'coffee', 'Creamy,Earthy,Bitter,Sweet', 'x',
  'Black cold brew with a thick pistachio cream cold foam poured on top.',
  'Cold brew|150 ml;Pistachio cream cold foam|60 ml;Crushed pistachios|1 tsp;Ice|as you like',
  'Pour the cold brew over ice and spoon the pistachio foam on top. Finish with crushed pistachios.',
  { g: 'highball', L: [['#3b2014', .7], ['#d8d58a', .3]], ice: 1, s: 1, gar: ['pistachio'] });
D('strawberry-coffee-latte', 'Strawberry Coffee Latte', 'coffee', 'Fruity,Creamy,Sweet,Bitter', '',
  'Strawberry purée, milk and espresso, finished with a coffee foam.',
  'Strawberry purée|40 ml;Milk of your choice|150 ml;Espresso|60 ml;Coffee cold foam|3 tbsp;Ice|as you like',
  'Spoon the purée into the glass, add ice and milk, then add the espresso and the foam.',
  { g: 'tumbler', L: [['#b3243f', .18, 'Strawberry'], ['#f6efe6', .4, 'Milk'], ['#4a2616', .25, 'Espresso']], ice: 1, f: '#c8a074', gar: [] });
D('cocoa-coffee', 'Cocoa Coffee', 'coffee', 'Sweet,Creamy,Bitter', 'c',
  'Dark chocolate dripping down the glass, with cocoa, milk and espresso inside.',
  'Cocoa powder|1 tbsp;Espresso, hot|60 ml;Milk of your choice|180 ml;Chocolate sauce|1 tbsp;Ice|as you like',
  'Drizzle the chocolate sauce inside the glass, whisk the cocoa into the hot espresso, then pour over ice and milk.',
  { g: 'wavy', L: [['#5a3320', .15], ['#efe2cc', .5], ['#3b2014', .35]], ice: 1, gar: ['cocoa'] });
D('pumpkin-spice-latte', 'Pumpkin Spice Latte', 'coffee', 'Spicy,Sweet,Creamy,Earthy', 'c',
  'Pumpkin, warm spice and maple, topped with a dried orange slice.',
  'Pumpkin purée|2 tbsp;Pumpkin spice|1/2 tsp;Maple syrup|15 ml;Milk of your choice|180 ml;Espresso, double|60 ml;Dried orange slice|1;Ice|as you like',
  'Whisk the pumpkin, spice and maple into the milk, pour over ice, add the espresso and the orange slice.',
  { g: 'ribbed', L: [['#e8a24a', .4, 'Pumpkin milk'], ['#f3d9a8', .3, 'Milk'], ['#6a3d22', .3, 'Espresso']], ice: 1, f: '#f0c27a', gar: ['orangeDried'] });
D('date-cinnamon-latte', 'Date Cinnamon Latte', 'coffee', 'Sweet,Spicy,Creamy,Earthy', 'c',
  'Dark date syrup, cinnamon and milk, with coffee ice cubes that keep it strong.',
  'Date syrup|20 ml;Cinnamon|1/2 tsp;Milk of your choice|150 ml;Espresso, double|60 ml;Coffee ice cubes|3',
  'Spoon the date syrup into the glass, add coffee ice, milk and espresso, and dust with cinnamon.',
  { g: 'ribbed', L: [['#3b2014', .15, 'Date syrup'], ['#efe0c8', .45, 'Milk'], ['#6a3d22', .3, 'Espresso']], ice: 1, f: '#e8cfa4', gar: ['cocoa'] });
D('citrus-coffee', 'Citrus Coffee', 'coffee', 'Citrus,Bitter,Refreshing', 'x',
  'Espresso over orange juice and tonic, with a dried citrus wheel floating on the foam.',
  'Espresso, double|60 ml;Orange juice|90 ml;Tonic water|30 ml;Dried citrus wheel|1;Ice|as you like',
  'Fill the glass with ice, add orange juice and tonic, then pour the espresso gently over the top.',
  { g: 'tumbler', L: [['#f2a03a', .4, 'Orange'], ['#3b2014', .4, 'Espresso']], ice: 1, f: '#d9b995', gar: ['orangeDried'] });
D('dirty-chai-latte', 'Dirty Chai Latte', 'coffee', 'Spicy,Creamy,Sweet,Earthy', 'c',
  'Bold and comforting. Spiced chai with a shot of espresso hidden in the milk.',
  'Chai concentrate|60 ml;Milk of your choice|150 ml;Espresso shot|30 ml;Cinnamon|a pinch',
  'Pour the chai and milk into the glass (iced or steamed), add the espresso and dust with cinnamon.',
  { g: 'tumbler', L: [['#d9b98a', .5], ['#efe2cc', .25], ['#4a2a18', .25]], f: '#e8cfa4', gar: ['cocoa'] });
D('grapefruit-americano', 'Grapefruit Americano', 'coffee', 'Citrus,Bitter,Refreshing', 'x',
  'Pink grapefruit juice and ice, with espresso poured over the top.',
  'Pink grapefruit juice|120 ml;Espresso, double|60 ml;Ice|as you like',
  'Pour the grapefruit juice over ice and float the espresso on top.',
  { g: 'highball', L: [['#f4a08a', .6, 'Grapefruit'], ['#3b2014', .4, 'Espresso']], ice: 1, gar: [] });
D('caramel-popcorn-iced-coffee', 'Caramel Popcorn Iced Coffee', 'coffee', 'Sweet,Creamy,Bitter', 'c',
  'Iced coffee with caramel on the glass, whipped cream and a handful of caramel popcorn.',
  'Cold brew|150 ml;Caramel sauce|20 ml;Milk of your choice|60 ml;Whipped cream|2 tbsp;Caramel popcorn|small handful;Ice|as you like',
  'Drizzle caramel inside the glass, add ice, coffee and milk, then pile on cream and popcorn.',
  { g: 'tumbler', L: [['#c9964f', .2, 'Caramel'], ['#e0c9a2', .3, 'Milk'], ['#5a3320', .3, 'Coffee']], ice: 1, f: '#fbf3e4', gar: ['popcorn'] });
D('salted-honey-latte', 'Salted Honey Latte', 'coffee', 'Sweet,Creamy', 'c',
  'Honey, a pinch of sea salt and espresso, finished with a piece of honeycomb.',
  'Honey|15 ml;Sea salt|1 pinch;Milk of your choice|180 ml;Espresso, double|60 ml;Honeycomb|1 piece;Ice|as you like',
  'Stir the honey and salt into the espresso, pour over ice and milk and rest the honeycomb on top.',
  { g: 'wavy', L: [['#e6cfa0', .7], ['#b88a52', .3]], ice: 1, gar: ['honeycomb'] });
/* Drinks, part 3: the drinks added to the final list. All alcohol-free. */
D('mango-green-tea-mocktail', 'Mango Green Tea Mocktail', 'mocktails', 'Fruity,Sweet,Refreshing,Sparkling', '',
  'Chilled green tea, sweet mango and a splash of sparkling water. Light, fizzy and golden.',
  'Green tea, brewed and chilled|100 ml;Mango purée|50 ml;Lime juice|15 ml;Honey or agave|10 ml;Sparkling water|60 ml;Mint|1 sprig;Ice|as you like',
  'Stir the purée, lime and honey into the tea over ice, then top with sparkling water and mint.',
  { g: 'tumbler', L: [['#f2b23e', .45], ['#e3d46a', .55]], ice: 1, b: 1, gar: ['mint', 'mango'] });
D('golden-pineapple-breeze', 'Golden Pineapple Breeze', 'mocktails', 'Fruity,Citrus,Refreshing,Sparkling', '',
  'Pineapple, lime and a little ginger over ice. Sunny, tangy and very easy to like.',
  'Pineapple juice|100 ml;Lime juice|20 ml;Ginger syrup|15 ml;Sparkling water|60 ml;Pineapple wedge|1;Mint|1 sprig;Ice|as you like',
  'Shake the pineapple, lime and ginger with ice, strain over fresh ice and top with sparkling water.',
  { g: 'highball', L: [['#f6c73f', .6], ['#f8dc7a', .4]], ice: 1, b: 1, gar: ['mint', 'lime'] });
D('purple-grape-garden-fizz', 'Purple Grape Garden Fizz', 'mocktails', 'Fruity,Sparkling,Refreshing,Sweet', 'x',
  'Purple grape, lemon and fresh mint, finished with soda. Juicy, cool and a little elegant.',
  'Purple grape juice|90 ml;Lemon juice|20 ml;Honey syrup|10 ml;Mint|6 leaves;Grapes, halved|4;Soda water|100 ml;Ice|as you like',
  'Muddle the mint and grapes with honey, add lemon, grape juice and ice, and top with soda.',
  { g: 'tulip', L: [['#7a3f8f', .5], ['#a56bb0', .5]], ice: 1, b: 1, gar: ['mint', 'blueberry'] });
D('chamomile-honey-cloud', 'Chamomile Honey Cloud', 'milk', 'Floral,Creamy,Sweet', 'c',
  'Warm chamomile tea under a soft honey milk cloud. Calm, golden and made for slow evenings.',
  'Chamomile tea, strongly brewed|150 ml;Milk of your choice|80 ml;Honey|15 ml;Vanilla extract|1/2 tsp;Dried chamomile flowers|a pinch',
  'Steep the tea, froth the milk with honey and vanilla, pour it over the tea and finish with chamomile flowers.',
  { g: 'mug', L: [['#e8c777', .6], ['#f1deb0', .4]], f: '#f7ecd2', gar: ['flower'] });
/* Procedural watercolour illustration: side-view glasses, top-down "plates", coffee stains, botanicals. */
var ART = (function () {
  var uid = 0;
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { var a = seed >>> 0; return function () { a = (a + 0x6D2B79F5) | 0; var t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function f(n) { return Math.round(n * 10) / 10; }

  /* glass shapes: tw top width, bw bottom width, h height, k belly, stem/handle/rib flags */
  var GL = {
    rocks:    { tw: 132, bw: 116, h: 122, k: 0 },
    tumbler:  { tw: 114, bw: 94, h: 162, k: 0 },
    highball: { tw: 90, bw: 80, h: 205, k: 0 },
    slim:     { tw: 78, bw: 72, h: 218, k: 0 },
    ribbed:   { tw: 106, bw: 90, h: 178, k: 0, rib: 1 },
    can:      { tw: 102, bw: 102, h: 172, k: 6, rib: 0 },
    wavy:     { tw: 96, bw: 96, h: 168, k: 20, rib: 0 },
    stemless: { tw: 122, bw: 76, h: 124, k: 10 },
    tulip:    { tw: 96, bw: 58, h: 138, k: 28, stem: 1 },
    mug:      { tw: 110, bw: 98, h: 124, k: 0, handle: 1 },
    coupe:    { tw: 156, bw: 0, h: 82, k: 0, stem: 2 },
    pour:     { tw: 124, bw: 106, h: 236, k: 0 }
  };
  function shape(name) {
    var p = GL[name] || GL.tumbler, o = { p: p, name: name };
    var base = 274; if (p.stem === 1) base = 262; if (p.stem === 2) base = 266;
    var bot, top;
    if (p.stem === 2) { top = 124; bot = top + p.h; }
    else if (p.stem === 1) { bot = base - 44; top = bot - p.h; }
    else { bot = base - 2; top = bot - p.h; }
    o.top = top; o.bot = bot; o.hw = p.tw / 2; o.bw = p.bw / 2; o.cx = 100;
    var cx = 100, hw = o.hw, bw = o.bw, k = p.k, h = p.h, d;
    if (p.stem === 2) {
      d = 'M' + (cx - hw) + ' ' + top + ' L' + (cx + hw) + ' ' + top + ' C' + (cx + hw) + ' ' + (top + h * .72) + ' ' + (cx + 22) + ' ' + bot + ' ' + cx + ' ' + bot +
        ' C' + (cx - 22) + ' ' + bot + ' ' + (cx - hw) + ' ' + (top + h * .72) + ' ' + (cx - hw) + ' ' + top + 'Z';
    } else {
      d = 'M' + (cx - hw) + ' ' + top + ' L' + (cx + hw) + ' ' + top +
        ' C' + (cx + hw + k) + ' ' + f(top + h * .45) + ' ' + (cx + bw + k) + ' ' + f(top + h * .82) + ' ' + (cx + bw) + ' ' + (bot - 7) +
        ' Q' + (cx + bw) + ' ' + bot + ' ' + (cx + bw - 7) + ' ' + bot + ' L' + (cx - bw + 7) + ' ' + bot +
        ' Q' + (cx - bw) + ' ' + bot + ' ' + (cx - bw) + ' ' + (bot - 7) +
        ' C' + (cx - bw - k) + ' ' + f(top + h * .82) + ' ' + (cx - hw - k) + ' ' + f(top + h * .45) + ' ' + (cx - hw) + ' ' + top + 'Z';
    }
    o.d = d; return o;
  }
  function widthAt(s, y) { var t = (y - s.top) / (s.bot - s.top); var bw = s.p.stem === 2 ? 14 : s.bw; return (s.hw + (bw - s.hw) * Math.pow(t, s.p.stem === 2 ? 1.6 : 1) + (s.p.k || 0) * Math.sin(Math.PI * t) * .8); }

  /* ---------- garnishes ---------- */
  var C = { lime: ['#8fae45', '#d6e79c'], lemon: ['#e6c53a', '#f6e7a0'], orange: ['#ee8a2a', '#f8c46a'], grapefruit: ['#ec7a6a', '#f8b3a5'], orangeDried: ['#c9842f', '#e8bd75'] };
  function wheel(x, y, rot, c) {
    var s = '<g transform="translate(' + x + ' ' + y + ') rotate(' + rot + ')"><circle r="20" fill="' + c[0] + '"/><circle r="17.5" fill="#fbf4dc"/><circle r="15.5" fill="' + c[1] + '"/>';
    for (var i = 0; i < 9; i++) { var a = i * Math.PI * 2 / 9 + .2; s += '<path d="M0 0L' + f(Math.cos(a) * 15.5) + ' ' + f(Math.sin(a) * 15.5) + '" stroke="#fbf4dc" stroke-width="1.6"/>'; }
    return s + '<circle r="15.5" fill="url(#sheen)"/><circle r="2.6" fill="#fbf4dc"/><circle cx="-6" cy="-6" r="3" fill="#fff" opacity=".35"/></g>';
  }
  function leaf(x, y, rot, rx, ry, col) { return '<g transform="translate(' + x + ' ' + y + ') rotate(' + rot + ')"><ellipse rx="' + rx + '" ry="' + ry + '" fill="' + col + '" stroke="#48683a" stroke-width=".8"/><ellipse rx="' + rx + '" ry="' + ry + '" fill="url(#lshade)"/><path d="M' + (-rx) + ' 0H' + rx + '" stroke="#d9e8b8" stroke-width=".7" opacity=".7"/><path d="M' + (-rx * .4) + ' 0l' + (rx * .3) + ' ' + (-ry * .6) + 'M' + (rx * .1) + ' 0l' + (rx * .3) + ' ' + (ry * .6) + '" stroke="#d9e8b8" stroke-width=".5" opacity=".6"/></g>'; }
  function sprig(x, y, big, col) {
    col = col || '#6f9a4a'; var r = big ? 1.25 : 1;
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + r + ')"><path d="M0 0C2 -18 6 -30 10 -46" stroke="#48683a" stroke-width="1.6" fill="none"/>' +
      leaf(3, -22, -40, 9, 5, col) + leaf(9, -34, 35, 9, 5, col) + leaf(11, -47, -8, 9, 5, col) + leaf(0, -12, 50, 8, 4.5, col) + '</g>';
  }
  function rosemary(x, y) {
    var s = '<g transform="translate(' + x + ' ' + y + ')" stroke="#58733f" fill="none" stroke-linecap="round"><path d="M0 0C3 -20 6 -34 12 -56" stroke-width="1.6"/>';
    for (var i = 0; i < 9; i++) { var t = i / 9, px = 12 * t * 1.05, py = -56 * t; s += '<path d="M' + f(px) + ' ' + f(py) + 'l-9 -5M' + f(px) + ' ' + f(py) + 'l9 -6" stroke-width="1.2"/>'; }
    return s + '</g>';
  }
  function lavender(x, y) {
    var s = '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 0C1 -20 3 -36 6 -58" stroke="#6c7a4a" stroke-width="1.4" fill="none"/>';
    for (var i = 0; i < 8; i++) { var py = -26 - i * 4.2, px = 3 + i * .4; s += '<ellipse cx="' + f(px - 3) + '" cy="' + f(py) + '" rx="2.6" ry="1.8" fill="#8f78b8"/><ellipse cx="' + f(px + 3) + '" cy="' + f(py - 2) + '" rx="2.6" ry="1.8" fill="#a48dc8"/>'; }
    return s + '</g>';
  }
  function flower(x, y, s) {
    s = s || 1; var o = '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">';
    for (var i = 0; i < 5; i++) { var a = i * 2 * Math.PI / 5 - 1.2; o += '<circle cx="' + f(Math.cos(a) * 6.5) + '" cy="' + f(Math.sin(a) * 6.5) + '" r="6" fill="#fdfaf3" stroke="#d9cfba" stroke-width=".7"/>'; }
    return o + '<circle r="3" fill="#e8c24a"/></g>';
  }
  function rose(x, y) { return '<g transform="translate(' + x + ' ' + y + ')"><circle r="10" fill="#a8304c"/><circle r="7" fill="#bd4560"/><path d="M-4 -1a4 4 0 0 1 8 0a3 3 0 0 1 -6 2" stroke="#7d1f38" fill="none" stroke-width="1"/><circle r="2" fill="#7d1f38"/></g>'; }
  function cinnamon(x, y, burnt) { return '<g transform="translate(' + x + ' ' + y + ') rotate(26)"><rect x="-4" y="-54" width="8" height="62" rx="3" fill="#9a5a35"/><rect x="-4" y="-54" width="8" height="10" rx="3" fill="' + (burnt ? '#2b1a12' : '#7d4526') + '"/><path d="M-1 -40V4" stroke="#6e3c20" stroke-width=".8"/></g>'; }
  function cherry(x, y) { return '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 0C-4 -16 -2 -26 4 -34M10 2C12 -14 10 -24 4 -34" stroke="#4c6a34" fill="none" stroke-width="1.2"/><circle cx="0" cy="3" r="9" fill="#7a1022"/><circle cx="11" cy="5" r="9" fill="#8e1a2c"/><circle cx="-3" cy="0" r="2.4" fill="#fff" opacity=".35"/></g>'; }
  function strawberry(x, y) {
    var s = '<g transform="translate(' + x + ' ' + y + ') rotate(-18)"><path d="M0 16C-17 4 -17 -10 0 -13C17 -10 17 4 0 16Z" fill="#d8333f"/>';
    [[-6, -3], [4, -4], [-2, 4], [7, 3], [-8, 5]].forEach(function (p) { s += '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="1" ry="1.6" fill="#f6d89a"/>'; });
    return s + leaf(-5, -14, -30, 7, 3.5, '#5a8a3c') + leaf(5, -14, 30, 7, 3.5, '#5a8a3c') + '</g>';
  }
  function blueberry(x, y) { var s = '<g transform="translate(' + x + ' ' + y + ')">'; [[-9, 4], [4, 2], [-2, -9], [12, -8]].forEach(function (p) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="8" fill="#34386e"/><circle cx="' + (p[0] - 2) + '" cy="' + (p[1] - 2) + '" r="2" fill="#8d92c9" opacity=".6"/><path d="M' + (p[0] - 2) + ' ' + (p[1] + 1) + 'l1.5 -1.5 1.5 1.5' + '" stroke="#1b1d44" fill="none" stroke-width=".8"/>'; }); return s + '</g>'; }
  function raspberry(x, y) { var s = '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 14C-14 6 -14 -8 0 -12C14 -8 14 6 0 14Z" fill="#c92c50"/>'; for (var i = 0; i < 9; i++) s += '<circle cx="' + f(Math.cos(i * 2.1) * 6) + '" cy="' + f(Math.sin(i * 2.1) * 8 - 1) + '" r="2.8" fill="#e04a6a" stroke="#a31e40" stroke-width=".5"/>'; return s + leaf(0, -13, 0, 7, 3, '#5a8a3c') + '</g>'; }
  function passion(x, y) { var s = '<g transform="translate(' + x + ' ' + y + ') rotate(-20)"><circle r="17" fill="#6a2a4a"/><circle r="14" fill="#f2d98a"/><circle r="10" fill="#f2b83a"/>'; for (var i = 0; i < 12; i++) s += '<ellipse cx="' + f(Math.cos(i * 2.4) * 6 * (i % 3 + 1) / 2) + '" cy="' + f(Math.sin(i * 2.4) * 6 * (i % 3 + 1) / 2) + '" rx="1.3" ry="2" fill="#2e2018"/>'; return s + '</g>'; }
  function watermelon(x, y) { return '<g transform="translate(' + x + ' ' + y + ') rotate(-24)"><path d="M-22 -4A24 24 0 0 0 22 -4Z" fill="#7aa04a"/><path d="M-19 -4A21 21 0 0 0 19 -4Z" fill="#f4e6c4"/><path d="M-17 -4A19 19 0 0 0 17 -4Z" fill="#ef6a7c"/><ellipse cx="-6" cy="4" rx="1" ry="1.8" fill="#2e2018"/><ellipse cx="5" cy="6" rx="1" ry="1.8" fill="#2e2018"/><ellipse cx="0" cy="11" rx="1" ry="1.8" fill="#2e2018"/></g>'; }
  function peach(x, y) { return '<g transform="translate(' + x + ' ' + y + ') rotate(-24)"><path d="M0 -20C22 -20 22 6 0 16C-22 6 -22 -20 0 -20Z" fill="#e9893c"/><path d="M0 -16C17 -16 17 4 0 12C-17 4 -17 -16 0 -16Z" fill="#f8cf8c"/><ellipse cy="-4" rx="3" ry="5" fill="#d9603a" opacity=".7"/></g>'; }
  function apple(x, y) { return '<g transform="translate(' + x + ' ' + y + ') rotate(-20)"><path d="M-18 0A18 18 0 0 0 18 0Z" fill="#b5392f"/><path d="M-15 0A15 15 0 0 0 15 0Z" fill="#f5ecc8"/><ellipse cx="-3" cy="5" rx="1" ry="2" fill="#6a3d22"/><ellipse cx="3" cy="5" rx="1" ry="2" fill="#6a3d22"/></g>'; }
  function cucumber(x, y) { return '<g transform="translate(' + x + ' ' + y + ') rotate(-20)"><circle r="18" fill="#6a9540"/><circle r="15" fill="#d9e8b0"/>' + [0, 1, 2, 3, 4, 5].map(function (i) { return '<ellipse cx="' + f(Math.cos(i * 1.05) * 7) + '" cy="' + f(Math.sin(i * 1.05) * 7) + '" rx="1.4" ry="2.4" fill="#b7cd86" transform="rotate(' + (i * 60) + ' ' + f(Math.cos(i * 1.05) * 7) + ' ' + f(Math.sin(i * 1.05) * 7) + ')"/>'; }).join('') + '</g>'; }
  function banana(x, y) { return '<g transform="translate(' + x + ' ' + y + ')"><circle cx="-6" cy="2" r="12" fill="#f1d68a"/><circle cx="-6" cy="2" r="8" fill="#f7e6ab"/><circle cx="8" cy="-4" r="12" fill="#efcf7c"/><circle cx="8" cy="-4" r="8" fill="#f7e6ab"/><circle cx="8" cy="-4" r="2" fill="#c9a24a"/></g>'; }
  function dragon(x, y) { var s = '<g transform="translate(' + x + ' ' + y + ') rotate(-20)"><circle r="16" fill="#d8317e"/><circle r="13" fill="#fbe5ee"/>'; for (var i = 0; i < 16; i++) s += '<circle cx="' + f(Math.cos(i * 2.4) * (3 + i % 4 * 2.2)) + '" cy="' + f(Math.sin(i * 2.4) * (3 + i % 4 * 2.2)) + '" r=".9" fill="#1d1613"/>'; return s + '</g>'; }
  function honeycomb(x, y) { var s = '<g transform="translate(' + x + ' ' + y + ') rotate(-15)"><path d="M-16 -4L-8 -16H8L16 -4L8 10H-8Z" fill="#e5b13f" stroke="#b9862a" stroke-width="1"/>'; [[-6, -4], [5, -4], [0, 4]].forEach(function (p) { s += '<path d="M' + (p[0] - 4) + ' ' + p[1] + 'l2 -4h4l2 4l-2 4h-4Z" fill="#f3d07a" stroke="#c99a35" stroke-width=".6"/>'; }); return s + '</g>'; }
  function mango(x, y) { return '<g transform="translate(' + x + ' ' + y + ')"><rect x="-16" y="-4" width="14" height="14" rx="2" fill="#f3b23a" transform="rotate(-12 -9 3)"/><rect x="0" y="-12" width="14" height="14" rx="2" fill="#f7c24f" transform="rotate(14 7 -5)"/><rect x="-6" y="-20" width="13" height="13" rx="2" fill="#efa92f" transform="rotate(-4)"/></g>'; }
  function melonBalls(x, y) { return '<g transform="translate(' + x + ' ' + y + ')">' + [[-14, 4], [4, 6], [-4, -8], [16, -4]].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="12" fill="#f6a95a" stroke="#d98a3c" stroke-width=".8"/><circle cx="' + (p[0] - 4) + '" cy="' + (p[1] - 4) + '" r="3" fill="#fff" opacity=".28"/>'; }).join('') + '</g>'; }
  function beans(x, y) { return '<g transform="translate(' + x + ' ' + y + ')">' + [[-10, 2, 20], [6, 0, -30], [-1, -10, 60]].map(function (p) { return '<g transform="translate(' + p[0] + ' ' + p[1] + ') rotate(' + p[2] + ')"><ellipse rx="8" ry="5" fill="#4a2616"/><path d="M-7 0Q0 -3 7 0" stroke="#24120a" fill="none" stroke-width="1.2"/></g>'; }).join('') + '</g>'; }
  function popcorn(x, y) { var s = '<g transform="translate(' + x + ' ' + y + ')">'; [[-16, 0], [-4, -6], [8, 0], [-8, 6], [16, 6], [2, 8], [-1, -16], [10, -10]].forEach(function (p, i) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (7 + i % 3) + '" fill="#f7e2b0" stroke="#d6a95e" stroke-width=".9"/><circle cx="' + (p[0] + 2) + '" cy="' + (p[1] - 2) + '" r="2" fill="#c9893a" opacity=".55"/>'; }); return s + '</g>'; }
  function dots(x, y, rx, col, n, seed, r) { var R = rng(seed), s = ''; for (var i = 0; i < n; i++) { var a = R() * 6.283, d = Math.sqrt(R()) * rx; s += '<circle cx="' + f(x + Math.cos(a) * d) + '" cy="' + f(y + Math.sin(a) * d * .24) + '" r="' + f((r || 1) * (.5 + R())) + '" fill="' + col + '" opacity="' + f(.55 + R() * .4) + '"/>'; } return s; }
  var RIM = { lime: 1, lemon: 1, orange: 1, grapefruit: 1, orangeDried: 1 };

  function garnish(list, s, sy, seed) {
    var out = '', slots = [[s.cx + s.hw * .5, s.top - 2], [s.cx - s.hw * .38, s.top - 6], [s.cx + s.hw * .02, s.top - 6], [s.cx - s.hw * .62, s.top - 2]], si = 0, surf = '';
    (list || []).forEach(function (k) {
      var p = slots[si % 4];
      if (k === 'cocoa') { surf += dots(s.cx, sy, s.hw * .62, '#4a2a18', 70, seed, 1.1); return; }
      if (k === 'matcha') { surf += dots(s.cx, sy, s.hw * .6, '#6f8b3d', 60, seed + 1, 1.2); return; }
      if (k === 'pistachio') { surf += dots(s.cx, sy, s.hw * .5, '#8aa84a', 40, seed + 2, 1.5); return; }
      if (k === 'pomegranate') { surf += dots(s.cx, sy, s.hw * .55, '#a31a3c', 28, seed + 3, 2.6); return; }
      if (k === 'popcorn') { out += popcorn(s.cx, sy - 8); return; }
      if (k === 'melon') { out += melonBalls(s.cx - 6, sy - 6); return; }
      if (k === 'beans') { out += beans(s.cx - 4, sy - 2); return; }
      if (k === 'mango') { out += mango(s.cx + 4, sy - 8); return; }
      if (k === 'thyme') { out += sprig(s.cx + 4, sy, 0, '#7fa05a'); return; }
      si++;
      if (RIM[k]) out += wheel(p[0], p[1] + 4, -20 + si * 14, C[k]);
      else if (k === 'mint') out += sprig(p[0], p[1], 0);
      else if (k === 'basil') out += sprig(p[0], p[1], 1, '#5f9340');
      else if (k === 'rosemary') out += rosemary(p[0], p[1]);
      else if (k === 'lavender') out += lavender(p[0], p[1]);
      else if (k === 'flower') out += flower(p[0], p[1] - 4);
      else if (k === 'rose') out += rose(p[0], p[1] - 2);
      else if (k === 'cinnamon') out += cinnamon(p[0], p[1] + 6, 1);
      else if (k === 'cherry') out += cherry(p[0], p[1] + 2);
      else if (k === 'strawberry') out += strawberry(p[0], p[1] - 2);
      else if (k === 'blueberry') out += blueberry(p[0], p[1] - 4);
      else if (k === 'raspberry') out += raspberry(p[0], p[1] - 4);
      else if (k === 'passion') out += passion(p[0], p[1] - 2);
      else if (k === 'watermelon') out += watermelon(p[0], p[1] + 2);
      else if (k === 'peach') out += peach(p[0], p[1] - 2);
      else if (k === 'apple') out += apple(p[0], p[1] - 2);
      else if (k === 'cucumber') out += cucumber(p[0], p[1] + 2);
      else if (k === 'banana') out += banana(p[0] - 6, p[1] - 4);
      else if (k === 'dragon') out += dragon(p[0], p[1] - 2);
      else if (k === 'honeycomb') out += honeycomb(p[0], p[1] - 2);
    });
    return surf + out;
  }

  /* ---------- side-view glass (realistic: gradients, thick base, ice, condensation; light watercolour wobble) ---------- */
  function mix(hex, t, to) {
    var h = hex.replace('#', ''); if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16);
    function m(c) { return Math.round(c + (to - c) * t); }
    return 'rgb(' + m(r) + ',' + m(g) + ',' + m(b) + ')';
  }
  function tex(top, bot) {
    var y = f(top), h = f(bot - top + 14);
    return '<rect x="0" y="' + y + '" width="200" height="' + h + '" fill="#000" filter="url(#liqd)" opacity=".24"/><rect x="0" y="' + y + '" width="200" height="' + h + '" fill="#fff" filter="url(#liql)" opacity=".3"/>';
  }
  function glassDefs(id, s) {
    var kk = s.p.k || 0, L0 = 100 - s.hw - kk, L1 = 100 + s.hw + kk;
    return '<clipPath id="' + id + '"><path d="' + s.d + '"/></clipPath>' +
      '<linearGradient id="' + id + 'H" gradientUnits="userSpaceOnUse" x1="' + L0 + '" y1="0" x2="' + L1 + '" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".3"/><stop offset=".16" stop-color="#000" stop-opacity=".02"/><stop offset=".5" stop-color="#fff" stop-opacity=".16"/><stop offset=".86" stop-color="#000" stop-opacity=".04"/><stop offset="1" stop-color="#000" stop-opacity=".32"/></linearGradient>' +
      '<linearGradient id="' + id + 'B" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity=".18"/></linearGradient>' +
      '<linearGradient id="' + id + 'S" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset=".7" stop-color="#fff" stop-opacity=".25"/><stop offset="1" stop-color="#fff" stop-opacity=".05"/></linearGradient>' +
      '<linearGradient id="' + id + 'I" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".72"/><stop offset=".5" stop-color="#e6f4f6" stop-opacity=".22"/><stop offset="1" stop-color="#cfe8ee" stop-opacity=".42"/></linearGradient>';
  }
  function cube(x, y, w, rot, id, cls, delay) {
    return '<g' + (cls ? ' class="' + cls + '" style="animation-delay:-' + delay + 's"' : '') + '><g transform="rotate(' + rot + ' ' + f(x + w / 2) + ' ' + f(y + w / 2) + ')"><rect x="' + f(x) + '" y="' + f(y) + '" width="' + f(w) + '" height="' + f(w) + '" rx="5" fill="url(#' + id + 'I)" stroke="#fff" stroke-opacity=".9" stroke-width="1.1"/><rect x="' + f(x + 4) + '" y="' + f(y + 4) + '" width="' + f(w - 8) + '" height="' + f(w - 8) + '" rx="3" fill="none" stroke="#fff" stroke-opacity=".38"/><path d="M' + f(x + 5) + ' ' + f(y + 6) + 'L' + f(x + w * .45) + ' ' + f(y + 5) + '" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".9"/><circle cx="' + f(x + w * .66) + '" cy="' + f(y + w * .62) + '" r="1.3" fill="#fff" opacity=".85"/><circle cx="' + f(x + w * .58) + '" cy="' + f(y + w * .7) + '" r=".8" fill="#fff" opacity=".7"/><path d="M' + f(x + w * .2) + ' ' + f(y + w * .85) + 'L' + f(x + w * .5) + ' ' + f(y + w * .55) + '" stroke="#fff" stroke-opacity=".45" stroke-width=".8"/></g></g>';
  }
  function glassFinish(s, id, flat, topCol) {
    var cx = 100, o = '';
    if (flat) {
      o += '<rect x="0" y="' + (s.bot - 13) + '" width="200" height="14" fill="url(#' + id + 'B)"/><line x1="0" x2="200" y1="' + (s.bot - 13) + '" y2="' + (s.bot - 13) + '" stroke="#fff" stroke-opacity=".6"/>' +
        '<ellipse cx="' + cx + '" cy="' + (s.bot - 6) + '" rx="' + f(s.bw * .6) + '" ry="3.2" fill="' + topCol + '" opacity=".45"/><ellipse cx="' + cx + '" cy="' + (s.bot - 1) + '" rx="' + f(s.bw - 3) + '" ry="3" fill="none" stroke="#fff" stroke-opacity=".45"/>';
      if (s.name === 'rocks') for (var i = -3; i <= 3; i++) o += '<line x1="' + f(cx + i * s.bw / 3.2) + '" y1="' + (s.bot - 13) + '" x2="' + f(cx + i * s.bw / 4.6) + '" y2="' + (s.bot - 1) + '" stroke="#fff" stroke-opacity=".5"/>';
    }
    o += '<path d="' + s.d + '" fill="none" stroke="#fff" stroke-opacity=".38" stroke-width="7"/>';
    return o;
  }
  function highlights(s, id) {
    var y0 = s.top + 12, y1 = s.bot - 18, pts = [], pts2 = [];
    for (var i = 0; i <= 4; i++) { var t = i / 4, y = y0 + (y1 - y0) * t, w = widthAt(s, y); pts.push([100 - w + 6, y]); pts2.push([100 - w + 13, y]); }
    var d = 'M' + pts.map(function (p) { return f(p[0]) + ' ' + f(p[1]); }).join('L') + 'L' + pts2.reverse().map(function (p) { return f(p[0]) + ' ' + f(p[1]); }).join('L') + 'Z';
    var y2 = s.top + 20, y3 = s.bot - 40, wr = widthAt(s, y2), wr2 = widthAt(s, y3);
    return '<path d="' + d + '" fill="url(#' + id + 'S)"/><path d="M' + f(100 + wr - 6) + ' ' + y2 + 'L' + f(100 + wr2 - 6) + ' ' + y3 + '" stroke="#fff" stroke-opacity=".4" stroke-width="2" stroke-linecap="round"/>';
  }
  function rimOf(s) {
    var ry = f(Math.max(5, s.hw * .09));
    return '<ellipse cx="100" cy="' + s.top + '" rx="' + s.hw + '" ry="' + ry + '" fill="#fff" fill-opacity=".1" stroke="#3a2a22" stroke-opacity=".42" stroke-width="1.2"/><ellipse cx="100" cy="' + s.top + '" rx="' + f(s.hw - 2.4) + '" ry="' + f(ry - 1.2) + '" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2"/>';
  }

  function glass(d) {
    var a = d.art, s = shape(a.g), id = 'g' + (++uid), R = rng(hash(d.id)), p = s.p, cx = 100, flat = !p.stem;
    var fill = p.handle ? .9 : (p.stem === 2 ? .94 : .86);
    var liqBot = flat ? s.bot - 12 : s.bot, fillTop = liqBot - (liqBot - s.top) * fill, fh = liqBot - fillTop;
    var layers = a.L, foam = a.f, total = layers.reduce(function (t, l) { return t + l[1]; }, 0) + (foam ? .16 : 0);
    var defs = glassDefs(id, s), y = liqBot, g = '';
    layers.forEach(function (l, i) {
      var h = l[1] / total * fh, y0 = (i === layers.length - 1 && !foam) ? fillTop : y - h;
      defs += '<linearGradient id="' + id + 'L' + i + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + mix(l[0], .14, 255) + '"/><stop offset="1" stop-color="' + mix(l[0], .16, 0) + '"/></linearGradient>';
      g += '<rect x="0" y="' + f(y0) + '" width="200" height="' + f(y - y0 + (i === 0 ? 16 : 2)) + '" fill="url(#' + id + 'L' + i + ')"/>';
      y = y0;
    });
    var surfW = widthAt(s, fillTop), ry = Math.max(5, surfW * .11), tc = foam || layers[layers.length - 1][0];
    if (foam) {
      defs += '<linearGradient id="' + id + 'F" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + mix(foam, .3, 255) + '"/><stop offset="1" stop-color="' + foam + '"/></linearGradient>';
      g += '<rect x="0" y="' + f(fillTop) + '" width="200" height="' + f(y - fillTop + 3) + '" fill="url(#' + id + 'F)"/>';
      for (var q = 0; q < 18; q++) g += '<circle cx="' + f(cx - surfW + R() * surfW * 2) + '" cy="' + f(fillTop + 3 + R() * 12) + '" r="' + f(.6 + R() * 1.5) + '" fill="#fff" opacity=".42"/>';
    }
    var surface = '<ellipse cx="' + cx + '" cy="' + f(fillTop) + '" rx="' + f(surfW) + '" ry="' + f(ry) + '" fill="' + mix(tc, .2, 255) + '"/><ellipse cx="' + cx + '" cy="' + f(fillTop) + '" rx="' + f(surfW * .8) + '" ry="' + f(ry * .6) + '" fill="#fff" opacity=".2"/><path d="M' + f(cx - surfW + 3) + ' ' + f(fillTop + 1) + 'A' + f(surfW - 3) + ' ' + f(ry - 1) + ' 0 0 0 ' + f(cx + surfW - 3) + ' ' + f(fillTop + 1) + '" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.4"/>';
    var ice = '';
    if (a.ice) {
      var n = Math.max(3, Math.round(fh / 34));
      for (var i = 0; i < n; i++) {
        var iy = fillTop + 8 + (i / n) * (fh - 34) + R() * 12, w = 24 + R() * 10, ix = cx + (R() - .5) * (widthAt(s, iy) * 1.1 - w);
        ice += cube(ix - w / 2, iy, w, f(R() * 40 - 20), id);
      }
      if (n > 3) ice += cube(cx - 13, fillTop - 14, 26, 12, id);
    }
    var bub = '';
    if (a.b) for (var j = 0; j < 16; j++) {
      var bx = cx + (R() - .5) * ((s.bw || 20) * 1.5), r = 1.2 + R() * 2.1;
      bub += '<circle class="bub" cx="' + f(bx) + '" cy="' + f(liqBot - 6 - R() * 20) + '" r="' + f(r) + '" fill="#fff" style="--h:' + Math.round(fh * .85) + 'px;animation-delay:-' + f(R() * 6) + 's;animation-duration:' + f(3.5 + R() * 3.5) + 's"/>';
    }
    var drops = '';
    if (a.ice) for (var k = 0; k < 11; k++) { var dy = s.top + 18 + R() * (s.bot - s.top - 44), dx = cx + (R() * 2 - 1) * (widthAt(s, dy) - 5); drops += '<ellipse cx="' + f(dx) + '" cy="' + f(dy) + '" rx=".9" ry="1.6" fill="#fff" fill-opacity=".6"/><circle cx="' + f(dx - .2) + '" cy="' + f(dy - .6) + '" r=".45" fill="#fff"/>'; }
    var straw = a.s ? '<path d="M' + (cx + 10) + ' ' + f(fillTop + 60) + ' L' + (cx + 32) + ' ' + (s.top - 36) + '" stroke="#3a2a22" stroke-width="5.5" stroke-linecap="round" opacity=".9"/><path d="M' + (cx + 9) + ' ' + f(fillTop + 60) + ' L' + (cx + 31) + ' ' + (s.top - 36) + '" stroke="#fff" stroke-opacity=".25" stroke-width="1.4" stroke-linecap="round"/>' : '';
    var ribs = '';
    if (p.rib) for (var r = -3; r <= 3; r++) ribs += '<path d="M' + f(cx + r * s.hw / 3.4) + ' ' + (s.top + 8) + ' L' + f(cx + r * s.bw / 3.4) + ' ' + (s.bot - 14) + '" stroke="#fff" stroke-opacity=".5" stroke-width="1.8"/><path d="M' + f(cx + r * s.hw / 3.4 + 2.2) + ' ' + (s.top + 8) + ' L' + f(cx + r * s.bw / 3.4 + 2.2) + ' ' + (s.bot - 14) + '" stroke="#3a2a22" stroke-opacity=".12" stroke-width="1"/>';
    var extras = '';
    if (p.stem) {
      var foot = p.stem === 2 ? 266 : 262;
      extras += '<path d="M' + (cx - 3.4) + ' ' + s.bot + ' L' + (cx - 2.6) + ' ' + (foot - 2) + ' M' + (cx + 3.4) + ' ' + s.bot + ' L' + (cx + 2.6) + ' ' + (foot - 2) + '" stroke="#3a2a22" stroke-opacity=".45" stroke-width="1.3" fill="none"/><rect x="' + (cx - 3) + '" y="' + s.bot + '" width="6" height="' + (foot - s.bot - 2) + '" fill="#fff" fill-opacity=".35"/><ellipse cx="' + cx + '" cy="' + foot + '" rx="40" ry="5" fill="#fff" fill-opacity=".4" stroke="#3a2a22" stroke-opacity=".45" stroke-width="1.2"/>';
    }
    if (p.handle) extras += '<path d="M' + (cx + s.hw - 2) + ' ' + (s.top + 22) + ' C' + (cx + s.hw + 38) + ' ' + (s.top + 18) + ' ' + (cx + s.hw + 38) + ' ' + (s.bot - 24) + ' ' + (cx + s.bw - 2) + ' ' + (s.bot - 26) + '" fill="none" stroke="#3a2a22" stroke-opacity=".42" stroke-width="7"/><path d="M' + (cx + s.hw - 2) + ' ' + (s.top + 22) + ' C' + (cx + s.hw + 38) + ' ' + (s.top + 18) + ' ' + (cx + s.hw + 38) + ' ' + (s.bot - 24) + ' ' + (cx + s.bw - 2) + ' ' + (s.bot - 26) + '" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3.4"/>';
    var shY = p.stem ? (p.stem === 2 ? 268 : 264) : s.bot + 2;
    var shadow = '<ellipse cx="' + (cx + 30) + '" cy="' + (shY + 2) + '" rx="' + (p.stem ? 40 : f(s.bw + 8)) + '" ry="4.5" fill="' + layers[0][0] + '" opacity=".38" filter="url(#blur4)"/><ellipse cx="' + (cx + 10) + '" cy="' + shY + '" rx="' + (p.stem ? 54 : f(s.bw + 22)) + '" ry="7" fill="#3b2414" opacity=".3" filter="url(#blur4)"/>';
    return '<svg class="glass' + (a.b ? ' fizz' : '') + '" viewBox="0 0 200 300" role="img" aria-label="' + d.name + ', illustrated" preserveAspectRatio="xMidYMax meet"><defs>' + defs + '</defs>' + shadow +
      '<g filter="url(#wc)">' + extras +
      '<g clip-path="url(#' + id + ')"><rect x="0" y="' + s.top + '" width="200" height="' + (s.bot - s.top + 2) + '" fill="#e9eded" opacity=".5"/><g filter="url(#soft)">' + g + '</g>' + tex(fillTop, liqBot) + '<rect x="0" y="' + f(fillTop) + '" width="200" height="' + f(liqBot - fillTop + 14) + '" fill="url(#' + id + 'H)"/>' + surface + ice + bub + glassFinish(s, id, flat, layers[0][0]) + '</g>' +
      straw + drops + ribs + highlights(s, id) + '<path d="' + s.d + '" fill="none" stroke="#3a2a22" stroke-opacity=".38" stroke-width="1.2"/>' + rimOf(s) + garnish(a.gar, s, fillTop, hash(d.id)) + '</g></svg>';
  }

  /* ---------- the cover's animated pouring glass ---------- */
  function pour(d) {
    var s = shape('pour'), id = 'pr', cx = 100, liqBot = s.bot - 12, fh = (liqBot - s.top) * .88, fillTop = liqBot - fh, foamH = fh * .15, band = (fh - foamH) / 3;
    var L = d.art.L, col = function (i) { return L[Math.min(i, L.length - 1)][0]; }, fc = d.art.f || col(2);
    var defs = glassDefs(id, s) + '<linearGradient id="prV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset="1" stop-color="#000" stop-opacity=".14"/></linearGradient>';
    var g = '', i, WAVE = 'M-100 0Q-75 -5 -50 0T0 0T50 0T100 0T150 0T200 0T250 0T300 0V16H-100Z';
    for (i = 0; i < 3; i++) { var y1 = liqBot - band * i, y0 = y1 - band, h = band + (i === 0 ? 16 : 1); g += '<rect class="pl" id="pl' + i + '" x="0" y="' + f(y0) + '" width="200" height="' + f(h) + '" style="fill:' + col(i) + '"/><rect x="0" y="' + f(y0) + '" width="200" height="' + f(h) + '" fill="url(#prV)"/>'; }
    g += '<rect class="pf" id="pf" x="0" y="' + f(fillTop) + '" width="200" height="' + f(foamH + 2) + '" style="fill:' + fc + '"/>';
    var R = rng(12), dots = ''; for (i = 0; i < 20; i++) dots += '<circle cx="' + f(R() * 200) + '" cy="' + f(fillTop + 4 + R() * foamH * .8) + '" r="' + f(.6 + R() * 1.4) + '" fill="#fff" opacity=".4"/>';
    var waves = '<g transform="translate(0 ' + f(fillTop + 2) + ')"><g class="wv b"><path class="pf" id="pw2" d="' + WAVE + '" style="fill:' + fc + '" opacity=".55"/></g></g><g transform="translate(0 ' + f(fillTop) + ')"><g class="wv"><path class="pf" id="pw" d="' + WAVE + '" style="fill:' + fc + '"/></g></g>';
    var ice = cube(cx - 36, fillTop + foamH + 20, 28, -10, id, 'bob', 0) + cube(cx + 8, fillTop + foamH + band + 6, 30, 14, id, 'bob', 2.2) + cube(cx - 18, fillTop + foamH + band * 2 + 10, 28, 4, id, 'bob', 4);
    var bub = ''; for (i = 0; i < 24; i++) { var r = 1.2 + R() * 2.4; bub += '<circle class="bub" cx="' + f(cx + (R() - .5) * 96) + '" cy="' + f(liqBot - 8 - R() * 24) + '" r="' + f(r) + '" fill="#fff" style="--h:' + Math.round(fh * .9) + 'px;animation-delay:-' + f(R() * 7) + 's;animation-duration:' + f(3.2 + R() * 4) + 's"/>'; }
    var shadow = '<ellipse cx="' + (cx + 12) + '" cy="' + (s.bot + 3) + '" rx="' + f(s.bw + 28) + '" ry="8" fill="#3b2414" opacity=".3" filter="url(#blur4)"/>';
    return '<svg class="glass pourglass" viewBox="0 0 200 300" aria-hidden="true" preserveAspectRatio="xMidYMax meet"><defs>' + defs + '</defs>' + shadow +
      '<g filter="url(#wc)"><g clip-path="url(#' + id + ')"><g filter="url(#soft)">' + g + '</g>' + tex(fillTop, liqBot) + dots + waves + '<rect x="0" y="' + f(fillTop) + '" width="200" height="' + f(liqBot - fillTop + 14) + '" fill="url(#' + id + 'H)"/>' + ice + bub + glassFinish(s, id, true, col(0)) + '</g>' +
      highlights(s, id) + '<path d="' + s.d + '" fill="none" stroke="#3a2a22" stroke-opacity=".38" stroke-width="1.2"/>' + rimOf(s) + '</g></svg>';
  }

  /* ---------- top-down plate ---------- */
  function plate(d) {
    var a = d.art, R = rng(hash(d.id) + 7), L = a.L, top = a.f || L[L.length - 1][0], second = L[Math.max(0, L.length - 2)][0], gid = 'p' + (++uid);
    var s = '<svg class="plate" viewBox="0 0 200 200" role="img" aria-label="' + d.name + ' seen from above"><defs><radialGradient id="' + gid + '" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + L[0][0] + '"/></radialGradient><radialGradient id="' + gid + 'v" cx=".5" cy=".5" r=".5"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".32"/></radialGradient><clipPath id="' + gid + 'c"><circle cx="100" cy="100" r="86"/></clipPath></defs>';
    s += '<g filter="url(#wc)"><circle cx="100" cy="100" r="93" fill="#fff" fill-opacity=".5" stroke="#4a362c" stroke-opacity=".4" stroke-width="1.3"/><circle cx="100" cy="100" r="86" fill="url(#' + gid + ')"/><circle cx="100" cy="100" r="86" fill="url(#' + gid + 'v)"/><circle cx="100" cy="100" r="90" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="3"/>';
    s += '<g clip-path="url(#' + gid + 'c)"><path d="M' + f(30 + R() * 30) + ' ' + f(70 + R() * 40) + 'C70 ' + f(20 + R() * 30) + ' ' + f(130 + R() * 30) + ' ' + f(40 + R() * 40) + ' ' + f(150 + R() * 20) + ' ' + f(100 + R() * 30) + 'C140 170 90 180 50 150Z" fill="' + second + '" opacity=".55"/>';
    if (a.f) for (var q = 0; q < 24; q++) s += '<circle cx="' + f(30 + R() * 140) + '" cy="' + f(30 + R() * 140) + '" r="' + f(.8 + R() * 2.2) + '" fill="#fff" opacity=".35"/>';
    if (a.ice) for (var i = 0; i < 5; i++) { var x = 45 + R() * 90, y = 45 + R() * 90, w = 26 + R() * 14; s += '<rect x="' + f(x) + '" y="' + f(y) + '" width="' + f(w) + '" height="' + f(w) + '" rx="6" fill="#fff" opacity=".3" stroke="#fff" stroke-opacity=".8" stroke-width="1.2" transform="rotate(' + f(R() * 50 - 25) + ' ' + f(x + w / 2) + ' ' + f(y + w / 2) + ')"/>'; }
    if (a.b) for (var b = 0; b < 16; b++) s += '<circle cx="' + f(25 + R() * 150) + '" cy="' + f(25 + R() * 150) + '" r="' + f(1 + R() * 2.2) + '" fill="#fff" opacity=".6"/>';
    s += '</g>';
    var gs = (a.gar || [])[0], gx = 138, gy = 58;
    if (gs && RIM[gs]) s += wheel(gx, gy, -20, C[gs]);
    else if (gs === 'mint' || gs === 'basil' || gs === 'rosemary' || gs === 'thyme') s += leaf(gx - 8, gy + 4, -35, 20, 10, '#6f9a4a') + leaf(gx + 12, gy - 8, 25, 18, 9, '#5f8a3e');
    else if (gs === 'flower' || gs === 'rose') s += flower(gx, gy, 1.6);
    else if (gs === 'blueberry' || gs === 'raspberry' || gs === 'cherry' || gs === 'pomegranate') s += '<circle cx="' + gx + '" cy="' + gy + '" r="12" fill="#4a2a5c"/><circle cx="' + (gx + 16) + '" cy="' + (gy + 10) + '" r="10" fill="#5a3470"/>';
    else if (gs === 'cocoa' || gs === 'matcha' || gs === 'pistachio') s += dots(100, 100, 52, gs === 'matcha' ? '#6f8b3d' : gs === 'pistachio' ? '#8aa84a' : '#4a2a18', 60, hash(d.id), 1.3);
    else if (gs) s += '<circle cx="' + gx + '" cy="' + gy + '" r="15" fill="' + (L[0][0]) + '" opacity=".6" stroke="#fff" stroke-opacity=".6"/>';
    s += '<path d="M42 62A70 70 0 0 1 100 30" stroke="#fff" stroke-opacity=".7" stroke-width="4" fill="none" stroke-linecap="round"/></g></svg>';
    return s;
  }

  /* ---------- coffee-ring stains ---------- */
  function stain(kind, seed, size) {
    var R = rng(seed || 3), col = kind === 'matcha' ? '#7f9a4a' : kind === 'hibiscus' ? '#7a1f35' : '#8a5a34', dark = kind === 'matcha' ? '#55702f' : kind === 'hibiscus' ? '#5a1226' : '#6e4220';
    var cx = 100, cy = 100, rr = 70 + R() * 12, n = 48, pts = [], pts2 = [];
    for (var i = 0; i <= n; i++) { var t = i / n * 6.2832, w = 1 + Math.sin(t * 3 + R() * .3) * .035 + (R() - .5) * .03; pts.push([cx + Math.cos(t) * rr * w, cy + Math.sin(t) * rr * w * .97]); pts2.push([cx + Math.cos(t) * (rr - 5) * w, cy + Math.sin(t) * (rr - 5) * w * .97]); }
    function path(P) { return 'M' + P.map(function (p) { return f(p[0]) + ' ' + f(p[1]); }).join('L') + 'Z'; }
    var s = '<svg class="stain" viewBox="0 0 200 200" aria-hidden="true"' + (size ? ' style="width:' + size + '"' : '') + '><g filter="url(#rough)">';
    s += '<path d="' + path(pts) + '" fill="' + col + '" fill-opacity=".05"/><path d="' + path(pts) + '" fill="none" stroke="' + dark + '" stroke-opacity=".5" stroke-width="3.2"/><path d="' + path(pts2) + '" fill="none" stroke="' + col + '" stroke-opacity=".28" stroke-width="5"/>';
    var gap = 1 + Math.floor(R() * 3);
    for (var d = 0; d < 6; d++) { var a = R() * 6.28, dist = rr + 12 + R() * 22; s += '<circle cx="' + f(cx + Math.cos(a) * dist) + '" cy="' + f(cy + Math.sin(a) * dist) + '" r="' + f(1.2 + R() * (d < 2 ? 5 : 2.5)) + '" fill="' + dark + '" fill-opacity="' + f(.3 + R() * .35) + '"/>'; }
    return s + '</g></svg>';
  }

  /* ---------- line botanicals ---------- */
  function botanical(kind) {
    var s = '<svg class="botan" viewBox="0 0 120 220" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round">';
    if (kind === 'lavender') {
      s += '<path d="M60 215C58 160 62 100 60 30"/>';
      for (var i = 0; i < 9; i++) { var y = 30 + i * 9; s += '<ellipse cx="54" cy="' + y + '" rx="5" ry="3" transform="rotate(-30 54 ' + y + ')"/><ellipse cx="67" cy="' + (y + 4) + '" rx="5" ry="3" transform="rotate(30 67 ' + (y + 4) + ')"/>'; }
      s += '<path d="M60 140C40 130 30 110 28 96M60 160C80 150 90 132 92 118"/>';
    } else if (kind === 'citrus') {
      s += '<circle cx="60" cy="110" r="46"/><circle cx="60" cy="110" r="39"/>';
      for (var j = 0; j < 9; j++) { var a = j * 6.2832 / 9; s += '<path d="M60 110L' + f(60 + Math.cos(a) * 38) + ' ' + f(110 + Math.sin(a) * 38) + '"/>'; }
      s += '<path d="M60 64C58 40 70 22 92 14"/><path d="M92 14C84 28 76 32 64 34M92 14C98 28 94 36 86 42"/>';
    } else {
      s += '<path d="M60 215C56 160 66 110 58 30"/>';
      [[44, 175, -50], [76, 150, 50], [42, 124, -50], [78, 98, 50], [44, 74, -45], [72, 52, 40]].forEach(function (l) { s += '<g transform="translate(' + (l[2] < 0 ? 58 : 62) + ' ' + l[1] + ') rotate(' + l[2] + ')"><path d="M0 0C14 -10 30 -8 38 0C30 8 14 10 0 0Z"/><path d="M4 0H34"/></g>'; });
      s += '<path d="M58 30C52 18 54 10 60 4C66 10 66 20 58 30Z"/>';
    }
    return s + '</svg>';
  }

  /* shared filters, injected once */
  function defs() {
    return '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>' +
      '<filter id="wc" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".02" numOctaves="2" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="1.6"/></filter>' +
      '<filter id="soft"><feGaussianBlur stdDeviation="2.2"/></filter><filter id="blur4" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur stdDeviation="3.5"/></filter>' +
      '<radialGradient id="sheen" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><linearGradient id="lshade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity=".2"/></linearGradient>' +
      '<filter id="liqd" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".018 .09" numOctaves="3" seed="3"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.4 -.5"/></filter>' +
      '<filter id="liql" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".03 .07" numOctaves="3" seed="8"/><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.6 -.7"/></filter>' +
      '<filter id="rough" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="3" seed="9" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="5"/></filter>' +
      '</defs></svg>';
  }
  return { glass: glass, pour: pour, plate: plate, stain: stain, botanical: botanical, defs: defs, hash: hash, rng: rng };
})();
/* Mixology Lab data and concept builder. Everything it returns is an untested concept, not an archive recipe. */
var LAB = (function () {
  var bases = [
    { k: 'coffee', n: 'Coffee', s: 'espresso or cold brew' },
    { k: 'matcha', n: 'Matcha', s: 'ceremonial, whisked' },
    { k: 'milk', n: 'Milk', s: 'warm or iced, any milk' },
    { k: 'mocktail', n: 'Mocktail', s: 'sparkling, zero proof' }
  ];
  var flavours = [
    { k: 'fruity', n: 'Fruity' }, { k: 'floral', n: 'Floral' }, { k: 'citrus', n: 'Citrus' }, { k: 'spicy', n: 'Spicy' },
    { k: 'creamy', n: 'Creamy' }, { k: 'sweet', n: 'Sweet' }, { k: 'earthy', n: 'Earthy' }
  ];
  function m(n, s, c, a) { return { n: n, s: s, c: c, a: a }; }
  var mains = {
    fruity: [m('Strawberry purée', 'Strawberry', '#d9657a', '40 ml'), m('Mango purée', 'Mango', '#f1b23a', '40 ml'), m('Raspberry purée', 'Raspberry', '#c92c50', '30 ml'), m('Peach purée', 'Peach', '#f3b27a', '40 ml')],
    floral: [m('Rose syrup', 'Rose', '#e9a9b4', '20 ml'), m('Lavender syrup', 'Lavender', '#b79ad8', '20 ml'), m('Elderflower cordial', 'Elderflower', '#f3e2a4', '25 ml'), m('Hibiscus tea, strong', 'Hibiscus', '#b3183f', '60 ml')],
    citrus: [m('Pink grapefruit juice', 'Grapefruit', '#f4a08a', '60 ml'), m('Orange juice', 'Orange', '#f2a03a', '60 ml'), m('Lemon juice and honey', 'Lemon', '#f0d46a', '25 ml + 10 ml'), m('Yuzu juice', 'Yuzu', '#e9d36a', '20 ml')],
    spicy: [m('Fresh ginger syrup', 'Ginger', '#c9a06a', '20 ml'), m('Cinnamon syrup', 'Cinnamon', '#9a5a35', '20 ml'), m('Chai concentrate', 'Chai', '#d9b98a', '60 ml'), m('Cardamom syrup', 'Cardamom', '#c6a77a', '20 ml')],
    creamy: [m('Coconut cream', 'Coconut', '#f6f0e6', '40 ml'), m('Pistachio cream', 'Pistachio', '#b8c46a', '2 tbsp'), m('Vanilla cream', 'Vanilla', '#f0e2c4', '40 ml'), m('Salted caramel sauce', 'Salted Caramel', '#c9964f', '20 ml')],
    sweet: [m('Brown sugar syrup', 'Brown Sugar', '#8a5a35', '20 ml'), m('Honey', 'Honey', '#e5b13f', '15 ml'), m('Maple syrup', 'Maple', '#c27a2e', '15 ml'), m('Date syrup', 'Date', '#4a2a18', '20 ml')],
    earthy: [m('Black sesame paste', 'Black Sesame', '#59544f', '1 tbsp'), m('Hojicha concentrate', 'Hojicha', '#9a6a3a', '40 ml'), m('Ube paste', 'Ube', '#a98bd0', '1 tbsp'), m('Pumpkin purée', 'Pumpkin', '#e8a24a', '2 tbsp')]
  };
  var extras = [
    { n: 'A pinch of sea salt', a: '1 pinch', t: 'a pinch of salt' }, { n: 'Vanilla syrup', a: '10 ml', t: 'a little vanilla' },
    { n: 'Ground cinnamon', a: '1 pinch', t: 'cinnamon' }, { n: 'Fresh mint leaves', a: '6', t: 'fresh mint' },
    { n: 'Lime juice', a: '10 ml', t: 'a squeeze of lime' }, { n: 'Orange zest', a: '1 strip', t: 'orange zest' },
    { n: 'Coconut cream', a: '1 tbsp', t: 'coconut cream' }, { n: 'Fresh ginger', a: '2 thin slices', t: 'fresh ginger' }
  ];
  var finishes = [
    { k: 'mint', n: 'Mint sprig' }, { k: 'lemon', n: 'Lemon wheel' }, { k: 'flower', n: 'Edible flower' }, { k: 'cinnamon', n: 'Cinnamon stick' },
    { k: 'cocoa', n: 'Cocoa dust' }, { k: 'matcha', n: 'Matcha dust' }, { k: 'rosemary', n: 'Rosemary sprig' }, { k: 'none', n: 'Nothing, keep it clean' }
  ];
  var adj = { fruity: ['Blushing', 'Sunday', 'Juicy'], floral: ['Velvet', 'Garden', 'Hushed'], citrus: ['Bright', 'Sunlit', 'Golden Hour'], spicy: ['Slow', 'Smoky', 'Warm'], creamy: ['Cloud', 'Silken', 'Soft'], sweet: ['Honeyed', 'Sugar-Spun', 'Sweet'], earthy: ['Mossy', 'Midnight', 'Quiet'] };
  var noun = { coffee: ['Latte', 'Cold Brew', 'Pour'], matcha: ['Matcha Latte', 'Whisk', 'Matcha Cloud'], milk: ['Milk', 'Latte', 'Cup'], mocktail: ['Fizz', 'Cooler', 'Spritz'] };
  var fword = { fruity: 'juicy and bright', floral: 'soft and perfumed', citrus: 'sharp, zesty and awake', spicy: 'warm with a slow heat', creamy: 'rounded and silky', sweet: 'gently sweet', earthy: 'deep and a little toasty' };
  var bword = { coffee: 'bittersweet', matcha: 'grassy', milk: 'comforting', mocktail: 'sparkling' };
  var glasses = {
    coffee: [['tumbler', 'Tumbler'], ['ribbed', 'Ribbed glass'], ['rocks', 'Rocks glass']],
    matcha: [['highball', 'Tall highball'], ['slim', 'Slim tall glass'], ['can', 'Can-shaped glass']],
    milkHot: [['mug', 'Glass mug']], milkIced: [['wavy', 'Wavy glass'], ['tumbler', 'Tumbler']],
    mocktail: [['ribbed', 'Ribbed highball'], ['tulip', 'Tulip glass'], ['stemless', 'Stemless glass'], ['coupe', 'Coupe'], ['rocks', 'Rocks glass']]
  };
  var MILK = '#d6a981', TONIC = '#b9d98a', FIZZ = '#8fd0c0';

  function build(sel) {
    var base = sel.base, fl = sel.flav, main = mains[fl][sel.main], extra = sel.extra >= 0 ? extras[sel.extra] : null, fin = sel.fin;
    var key = base + fl + sel.main + sel.extra + fin, h = ART.hash(key);
    var name = adj[fl][h % 3] + ' ' + main.s + ' ' + noun[base][(h >>> 3) % 3];
    var tonic = fl === 'citrus', ing = [], how = '', art = { L: [], ice: 1, gar: [] }, g, hot = false;
    if (base === 'coffee') {
      ing.push({ n: main.n, a: main.a }, { n: 'Espresso, double', a: '60 ml' }, tonic ? { n: 'Tonic water', a: '90 ml' } : { n: 'Milk of your choice', a: '120 ml' }, { n: 'Ice', a: 'as you like' });
      how = 'Spoon ' + main.s.toLowerCase() + ' into the glass, add ice and the ' + (tonic ? 'tonic' : 'milk') + ', then pour the espresso slowly over the top. Stir before drinking.';
      art.L = [[main.c, .2, main.s], [tonic ? TONIC : MILK, .4, tonic ? 'Tonic' : 'Milk'], ['#3b2014', .3, 'Espresso']]; g = glasses.coffee[h % 3];
      if (tonic) art.b = 1;
    } else if (base === 'matcha') {
      ing.push({ n: main.n, a: main.a }, { n: 'Matcha, ceremonial', a: '2 g' }, { n: 'Water, 70 °C', a: '40 ml' }, tonic ? { n: 'Tonic water', a: '100 ml' } : { n: 'Milk of your choice', a: '140 ml' }, { n: 'Ice', a: 'as you like' });
      how = 'Whisk the matcha with the hot water until smooth. Put ' + main.s.toLowerCase() + ' in the glass, add ice and the ' + (tonic ? 'tonic' : 'milk') + ', and pour the matcha on top.';
      art.L = [[main.c, .2, main.s], [tonic ? TONIC : MILK, .4, tonic ? 'Tonic' : 'Milk'], ['#6f9a3a', .3, 'Matcha']]; g = glasses.matcha[h % 3];
      if (tonic) art.b = 1;
    } else if (base === 'milk') {
      hot = fl === 'spicy' || fl === 'earthy';
      ing.push({ n: main.n, a: main.a }, { n: 'Milk of your choice', a: '220 ml' }, hot ? { n: 'Heat the milk', a: 'until steaming' } : { n: 'Ice', a: 'as you like' });
      how = hot ? 'Warm the milk, whisk in ' + main.s.toLowerCase() + ' until smooth and froth it. Pour into a mug.' : 'Stir ' + main.s.toLowerCase() + ' into the glass, add ice, pour in the milk and swirl.';
      art.L = [[main.c, .2, main.s], [MILK, .6, 'Milk']]; art.f = '#f3e8d4'; art.ice = hot ? 0 : 1; g = hot ? glasses.milkHot[0] : glasses.milkIced[h % 2];
    } else {
      var cream = fl === 'creamy';
      ing.push({ n: main.n, a: main.a }, { n: 'Lime juice', a: '20 ml' }, { n: 'Simple syrup', a: '10 ml' }, cream ? { n: 'Coconut water', a: '100 ml' } : { n: 'Soda water', a: '100 ml' }, { n: 'Ice', a: 'as you like' });
      how = 'Stir ' + main.s.toLowerCase() + ', lime and syrup together over ice, then top with ' + (cream ? 'coconut water' : 'soda water') + ' and stir once, gently.';
      art.L = [[main.c, .4, main.s], ['#e8d35a', .15, 'Lime'], [FIZZ, .35, cream ? 'Coconut water' : 'Soda']]; art.b = cream ? 0 : 1; g = glasses.mocktail[h % 5];
    }
    if (extra) ing.splice(ing.length - 1, 0, { n: extra.n, a: extra.a });
    if (fin !== 'none') {
      var fn = finishes.filter(function (x) { return x.k === fin; })[0];
      ing.push({ n: fn.n, a: 'to finish' }); art.gar = [fin];
      how += ' Finish with ' + fn.n.toLowerCase() + '.';
    }
    art.g = g[0];
    var desc = cap(fword[fl]) + ', ' + bword[base] + ' and built around ' + main.s.toLowerCase() + (extra ? ', with ' + extra.t : '') + '.';
    return { id: 'lab-' + h, name: name, desc: desc, ing: ing, how: how, glass: g[1], art: art, cat: base };
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  return { bases: bases, flavours: flavours, mains: mains, extras: extras, finishes: finishes, build: build };
})();
document.body.insertAdjacentHTML('afterbegin', ART.defs());
/* ===== App: router, pages, filters, Find Your Mood, Mixology Lab ===== */
(function () {
  ['mango-green-tea-mocktail', 'banana-latte', 'pistachio-cold-brew'].forEach(function (id) { for (var i = DRINKS.length - 1; i >= 0; i--) if (DRINKS[i].id === id) DRINKS.splice(i, 1); });
  var CATS = { mocktails: 'Mocktails', coffee: 'Coffee', matcha: 'Matcha', milk: 'Milk' };
  var CAT_LINE = { mocktails: 'Sparkling, fruity, zero proof', coffee: 'Espresso, cold brew and lattes', matcha: 'Whisked green, iced and layered', milk: 'Warm, golden and soft' };
  var TAGS = ['Floral', 'Fruity', 'Citrus', 'Spicy', 'Creamy', 'Sweet', 'Bitter', 'Refreshing', 'Sparkling', 'Earthy'];
  var GLASS = { tumbler: 'Tumbler', rocks: 'Rocks glass', highball: 'Highball glass', slim: 'Slim tall glass', ribbed: 'Ribbed glass', can: 'Can-shaped glass', wavy: 'Wavy glass', stemless: 'Stemless glass', tulip: 'Tulip glass', mug: 'Glass mug', coupe: 'Coupe' };
  var GN = { mint: 'mint sprig', basil: 'basil', lime: 'lime wheel', lemon: 'lemon wheel', orange: 'orange wheel', grapefruit: 'grapefruit wheel', orangeDried: 'dried orange slice', flower: 'edible flower', rose: 'edible rose', cinnamon: 'cinnamon stick', rosemary: 'rosemary sprig', lavender: 'lavender', cherry: 'cherries', strawberry: 'strawberry', blueberry: 'blueberries', raspberry: 'raspberry', passion: 'passion fruit half', watermelon: 'watermelon wedge', peach: 'peach slice', apple: 'apple slice', cucumber: 'cucumber slice', banana: 'banana slices', dragon: 'dragon fruit slice', honeycomb: 'honeycomb', melon: 'melon balls', mango: 'mango cubes', beans: 'coffee beans', cocoa: 'cocoa dust', matcha: 'matcha dust', pistachio: 'crushed pistachio', pomegranate: 'pomegranate seeds', popcorn: 'caramel popcorn', thyme: 'thyme' };
  var ORB = ['coconut-matcha-cloud', 'mango-matcha-latte', 'lavender-matcha-latte', 'salted-matcha', 'strawberry-foam-matcha-latte', 'ube-matcha', 'pistachio-cold-foam-latte', 'purple-grape-garden-fizz'];

  var PAINT = (function () {
    var seed = 7; function r() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    function pick(a) { return a[Math.floor(r() * a.length)]; }
    var blues = ['#3f6aa6', '#5a82b8', '#2f5590', '#7a9ccb', '#6f94c4', '#8fb0d6', '#4a74b0'], golds = ['#e9d68f', '#d9c26f', '#f1e3a8', '#c9bb70', '#b9c47a', '#9fb56a', '#cfe0e8', '#a9c7e3'], creams = ['#e7dcbc', '#d8cfae', '#c4c6b8', '#b6bdc4', '#a9b3c0', '#ece3c4'];
    var s = '';
    for (var i = 0; i < 230; i++) {
      var x = r() * 1700 - 50, y = r() * 760 - 20, pal = x < 560 ? blues : (x < 1020 ? golds : creams);
      if (x < 560 && r() < .35) pal = golds;
      var w = x < 560 ? 40 + r() * 70 : 70 + r() * 150, h = x < 560 ? 90 + r() * 210 : 16 + r() * 40, ang = x < 560 ? -6 + r() * 12 : -14 + r() * 28;
      s += '<rect x="' + x.toFixed(0) + '" y="' + y.toFixed(0) + '" width="' + w.toFixed(0) + '" height="' + h.toFixed(0) + '" rx="8" fill="' + pick(pal) + '" opacity="' + (.65 + r() * .3).toFixed(2) + '" transform="rotate(' + ang.toFixed(1) + ' ' + x.toFixed(0) + ' ' + y.toFixed(0) + ')"/>';
    }
    return '<svg class="cv-paint" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><filter id="pf" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".035 .05" numOctaves="3" seed="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="22"/></filter><linearGradient id="pg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4b74ad"/><stop offset=".38" stop-color="#7f9fc8"/><stop offset=".6" stop-color="#d8c98a"/><stop offset="1" stop-color="#b3b9bd"/></linearGradient></defs><rect width="1600" height="900" fill="url(#pg)"/><g filter="url(#pf)">' + s + '</g></svg>';
  })();
  var FABRIC = '<svg class="cv-fabric" viewBox="0 0 1600 320" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7f1dc"/><stop offset=".55" stop-color="#e3d9b8"/><stop offset="1" stop-color="#c3bd9f"/></linearGradient><filter id="fr"><feTurbulence type="fractalNoise" baseFrequency=".02 .06" numOctaves="3" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="26"/></filter></defs><g filter="url(#fr)"><path d="M-40 210 C160 120 330 150 520 215 S760 260 800 230 S1120 130 1330 190 S1560 150 1660 120 L1660 340 L-40 340 Z" fill="url(#fg)"/><path d="M-40 270 C200 215 420 250 640 285 S1000 300 1180 250 S1480 220 1660 250 L1660 340 L-40 340 Z" fill="#e9ebf0" opacity=".85"/></g></svg>';
  var CUBES = [[3, 30, 90, 0], [88, 30, 70, -2], [16, 52, 74, -4], [80, 46, 100, -1], [91, 70, 62, -3], [3, 74, 58, -5]].map(function (c) { return '<i class="cube" style="left:' + c[0] + '%;top:' + c[1] + '%;--s:' + c[2] + 'px;animation-delay:' + c[3] + 's"></i>'; }).join('');
  var MOODS = [
    { k: 'r', t: 'I need something refreshing', why: 'Cold, bright and made to be sipped slowly.', f: function (d) { return has(d, 'Refreshing'); } },
    { k: 'c', t: 'I want something comforting', why: 'Warm flavours and a soft finish, for when you need a hug.', f: function (d) { return d.moods.indexOf('c') > -1; } },
    { k: 's', t: 'I feel like something sweet', why: 'Sweet without turning heavy.', f: function (d) { return has(d, 'Sweet'); } },
    { k: 'e', t: 'I want something energising', why: 'Built on coffee or matcha, so it wakes you up.', f: function (d) { return d.cat === 'coffee' || d.cat === 'matcha'; } },
    { k: 'x', t: 'I want something sophisticated', why: 'Layered, grown-up flavours that feel like a night out.', f: function (d) { return d.moods.indexOf('x') > -1; } },
    { k: 'f', t: 'I want something fruity', why: 'Fruit does the talking here.', f: function (d) { return has(d, 'Fruity'); } },
    { k: 'm', t: 'I want something creamy', why: 'Smooth, rounded and silky.', f: function (d) { return has(d, 'Creamy'); } },
    { k: 'z', t: 'Surprise me', why: 'Picked at random, no questions asked.', f: function () { return true; } }
  ];
  function has(d, t) { return d.tags.indexOf(t) > -1; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  var TALL = { 'spicy-dragon-fruit': 1.25 };
  function pic(d, big) {
    if (typeof LM_IMGS === 'undefined' || LM_IMGS.indexOf(d.id) < 0) return ART.glass(d);
    var creamy = d.cat === 'milk' || /milk|cream|oat|latte|foam/i.test(d.name + ' ' + d.ing.map(function (g) { return g[0] || g.n || ''; }).join(' ')) || d.tags.join(' ').toLowerCase().indexOf('cream') > -1, n = creamy ? 0 : (d.art.b ? 8 : 5), b = '', i;
    for (i = 0; i < n; i++) b += '<i style="--x:' + (6 + (i * 29) % 80) + '%;--s:' + (4 + (i * 5) % 6) + 'px;--t:' + (3.4 + (i * .85) % 3).toFixed(1) + 's;--dl:-' + (i * .9).toFixed(1) + 's"></i>';
    return '<div class="pic"' + (TALL[d.id] ? ' style="--k:' + TALL[d.id] + '"' : '') + '><img loading="lazy" src="img/' + d.id + '.webp" alt="' + esc(d.name) + '" draggable="false">' + (n ? '<span class="bubs' + (d.art.b ? '' : ' few') + '">' + b + '</span>' : '') + '' + '</div>';
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function byId(id) { return DRINKS.filter(function (d) { return d.id === id; })[0]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function list(a) { return a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]; }
  function f1(n) { return Math.round(n * 1000) / 1000; }

  /* interleave categories so "All" reads like a mixed menu */
  (function () { DRINKS.forEach(function (d) { if (d.id === 'caramel-popcorn-iced-coffee') { d.art.ice = 0; d.art.g = 'coupe'; } }); })();
  var ORDER = (function () {
    var list = ['lychee-jasmine-hibiscus-tea', 'watermelon-mint-cooler', 'cherry-coke-mocktail', 'vanilla-daydream-cold-brew', 'rose-guava-cooler', 'spicy-dragon-fruit', 'banana-latte', 'mango-green-tea-lemonade', 'cucumber-mint-cooler', 'pink-citrus-spritz', 'passion-fruit-sunshine', 'berry-garden-fizz', 'strawberry-basil-smash', 'elderflower-bliss', 'lavender-lemonade', 'peach-ginger-fizz', 'blueberry-coconut', 'salted-honey-latte', 'apple-espresso-martini-mocktail', 'americano', 'black-sugar-latte', 'rose-latte', 'coconut-hibiscus-breeze', 'golden-turmeric-latte', 'ube-latte', 'banana-iced-latte', 'pistachio-cold-foam-latte', 'charcoal-latte', 'red-velvet-latte', 'raspberry-coconut-latte', 'pistachio-cold-brew', 'coconut-matcha-cloud', 'ube-matcha', 'salted-matcha', 'strawberry-coffee-latte', 'mango-matcha-latte', 'lavender-matcha-latte', 'strawberry-foam-matcha-latte', 'cocoa-coffee', 'pumpkin-spice-latte', 'date-cinnamon-latte', 'citrus-coffee', 'dirty-chai-latte', 'grapefruit-americano', 'smoked-apple-mocktail', 'rosemary-pomegranate-mocktail', 'caramel-popcorn-iced-coffee', 'ginger-spice-latte', 'mango-green-tea-mocktail', 'golden-pineapple-breeze', 'purple-grape-garden-fizz', 'chamomile-honey-cloud', 'muskmelon-honey-lime-refresher'];
    var out = [];
    list.forEach(function (id) { var d = DRINKS.filter(function (x) { return x.id === id; })[0]; if (d) out.push(d); });
    DRINKS.forEach(function (d) { if (out.indexOf(d) < 0) out.push(d); });
    return out;
  })();

  var S = { labName: null, cat: 'all', tags: [], mood: 'r', lab: { base: 'coffee', flav: 'fruity', main: 0, extra: -1, fin: 'mint', sw: 3, nt: 3 } };
  var $app = document.getElementById('app'), orbTimer = 0;
  var reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------- shared pieces ---------- */
  function item(d) {
    return '<a class="item rv" href="#d-' + d.id + '"><div class="art">' + pic(d) + '</div><div class="meta"><span class="cap">' + CATS[d.cat] + ' &middot; ' + pad(ORDER.indexOf(d) + 1) + '</span><span class="nm">' + esc(d.name) + '</span><p class="ds">' + esc(d.story.split('.')[0]) + '.</p></div></a>';
  }
  function head(title, sub) { return '<div class="page-head wrap"><h1>' + title + '</h1><p class="it">' + sub + '</p></div>'; }

  /* ---------- home ---------- */
  function home() {
    var orb = ORB.map(function (id, i) { return '<div class="op' + (i ? '' : ' on') + '">' + pic(byId(id)) + '</div>'; }).join('');
    var strip = ORDER.map(item).join('') + '<a class="item strip-end" href="#archive"><span class="script">Open the archive</span><span class="cap">Filter by flavour</span></a>';
    var counts = {}; DRINKS.forEach(function (d) { counts[d.cat] = (counts[d.cat] || 0) + 1; });
    var cats = ['mocktails', 'coffee', 'matcha', 'milk'].map(function (k) { return '<li class="rv"><a href="#archive" data-cat="' + k + '"><span class="cn">' + CATS[k] + '</span><span class="cc"><span class="cap">' + counts[k] + ' recipes</span><span class="it">' + CAT_LINE[k] + '</span></span></a></li>'; }).join('');
    return '<section class="cover2"><h1 class="sr">The Liquid Method</h1><img class="cv2-img" src="img/cover.webp" alt="The Liquid Method: three painted drinks on a cream cloth"><div class="cv2-copy"><p class="cv2-line">A collection of ' + DRINKS.length + ' drinks for every moment.</p><a class="btn cv-btn" href="#archive">See all ' + DRINKS.length + ' drinks</a></div></section>' +
      '<div class="cv2-below"><p class="cv2-line">A collection of ' + DRINKS.length + ' drinks for every moment.</p><a class="btn fill" href="#archive">See all ' + DRINKS.length + ' drinks</a></div><div class="wrap">' +
      '<hr class="rule"><section class="sec"><div class="sec-head rv"><h2>The collection</h2><p class="it">Scroll through all ' + DRINKS.length + ' drinks, from 01 to ' + DRINKS.length + '. Open any one for its recipe, or go to the archive to filter.</p></div>' +
      '<div class="strip-wrap"><div class="strip" id="strip">' + strip + '</div></div><div class="strip-ctl"><button class="arrow" id="sprev" aria-label="Previous">&larr;</button><div class="bar"><i id="sbar"></i></div><button class="arrow" id="snext" aria-label="Next">&rarr;</button></div></section>' +
      '<section class="sec"><div class="sub-head rv"><span></span><h2>Browse by type</h2><span></span></div><ul class="cats">' + cats + '</ul></section>' +
      '<section class="sec"><div class="teasers"><a class="tz a rv" href="#mood"><span class="cap">Find your mood</span><h3>How are you feeling?</h3><span class="tlink">Start</span></a>' +
      '<a class="tz b rv" href="#lab"><span class="cap">The mixology lab</span><h3>Make your own</h3><span class="tlink">Open the lab</span></a></div></section></div>';
  }
  function homeInit() {
    var ops = document.querySelectorAll('#orb .op'), n = 0;
    clearInterval(orbTimer);
    if (!reduce && ops.length > 1) orbTimer = setInterval(function () { ops[n].classList.remove('on'); n = (n + 1) % ops.length; ops[n].classList.add('on'); }, 3800);
    var st = document.getElementById('strip'); if (!st) return;
    var bar = document.getElementById('sbar');
    function upd() { var m = st.scrollWidth - st.clientWidth; bar.style.left = (m > 0 ? st.scrollLeft / m * 80 : 0) + '%'; }
    st.addEventListener('scroll', upd, { passive: true }); upd();
    document.getElementById('sprev').onclick = function () { st.scrollBy({ left: -st.clientWidth * .7, behavior: 'smooth' }); };
    document.getElementById('snext').onclick = function () { st.scrollBy({ left: st.clientWidth * .7, behavior: 'smooth' }); };
    var down = false, sx = 0, sl = 0, moved = 0;
    st.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; moved = 0; sx = e.clientX; sl = st.scrollLeft; });
    window.addEventListener('pointermove', function (e) { if (!down) return; var dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx)); if (moved > 6) st.classList.add('drag'); st.scrollLeft = sl - dx; });
    window.addEventListener('pointerup', function () { down = false; setTimeout(function () { st.classList.remove('drag'); }, 0); });
    st.addEventListener('click', function (e) { if (moved > 6) { e.preventDefault(); e.stopPropagation(); moved = 0; } }, true);
  }

  /* ---------- archive ---------- */
  function filtered() { return ORDER.filter(function (d) { return (S.cat === 'all' || d.cat === S.cat) && S.tags.every(function (t) { return has(d, t); }); }); }
  function archive() {
    return '<div class="wrap">' + head('The archive', 'Choose a category, then narrow it down by flavour.') +
      '<div class="filters"><div class="cat-tabs" id="cats"></div><div class="chips" id="chips"></div></div><p class="count" id="count"></p><div class="grid" id="grid"></div></div>';
  }
  function archiveDraw(animate) {
    var cats = document.getElementById('cats'), chips = document.getElementById('chips'), grid = document.getElementById('grid'), count = document.getElementById('count');
    var counts = { all: DRINKS.length }; DRINKS.forEach(function (d) { counts[d.cat] = (counts[d.cat] || 0) + 1; });
    cats.innerHTML = ['all', 'mocktails', 'coffee', 'matcha', 'milk'].map(function (k) { return '<button data-c="' + k + '" class="' + (S.cat === k ? 'on' : '') + '" aria-pressed="' + (S.cat === k) + '">' + (k === 'all' ? 'All' : CATS[k]) + '<sup>' + counts[k] + '</sup></button>'; }).join('');
    chips.innerHTML = TAGS.map(function (t) { var on = S.tags.indexOf(t) > -1; return '<button class="chip' + (on ? ' on' : '') + '" data-t="' + t + '" aria-pressed="' + on + '">' + t + '</button>'; }).join('') + (S.tags.length ? '<button class="chip clear" data-t="*">Clear</button>' : '');
    function fill() {
      var r = filtered();
      count.textContent = r.length === DRINKS.length ? 'All ' + r.length + ' recipes' : 'Showing ' + r.length + ' of ' + DRINKS.length;
      grid.innerHTML = r.length ? r.map(item).join('') : '<p class="empty">No drink is both ' + list(S.tags.map(function (t) { return t.toLowerCase(); })) + ' in this category yet. Try taking one flavour away.</p>';
      grid.classList.remove('swap'); reveal();
    }
    if (animate) { grid.classList.add('swap'); setTimeout(fill, 230); } else fill();
  }

  /* ---------- drink page ---------- */
  function serve(d) { if (d.id === 'dirty-chai-latte') return 'Iced or steamed'; if (d.art.ice) return 'Over ice'; if (d.art.g === 'mug') return 'Warm'; if (d.art.g === 'coupe') return 'Chilled, served up'; return 'Chilled'; }
  function drink(id) {
    var d = byId(id); if (!d) return '<div class="wrap">' + head('Not found', 'That drink is not in the archive.') + '<p><a class="tlink" href="#archive">Back to the archive</a></p></div>';
    var i = ORDER.indexOf(d), prev = ORDER[(i + ORDER.length - 1) % ORDER.length], next = ORDER[(i + 1) % ORDER.length];
    var gar = (d.art.gar || []).map(function (k) { return GN[k]; }).filter(Boolean);
    var L = d.art.L, labelled = L.length > 1 && L.every(function (l) { return l[2]; }), layers = '';
    if (labelled) {
      var seg = L.slice().reverse().map(function (l) { return { c: l[0], w: l[1], n: l[2] }; });
      if (d.art.f) seg.unshift({ c: d.art.f, w: .14, n: 'Foam' });
      var tot = seg.reduce(function (t, s) { return t + s.w; }, 0);
      layers = '<div class="blk"><h2><span class="t">In the glass</span></h2><div class="layers"><div class="bar" style="height:' + Math.max(150, seg.length * 44) + 'px">' + seg.map(function (s) { return '<i style="background:' + s.c + ';flex:' + f1(s.w / tot) + '"></i>'; }).join('') + '</div><ol>' + seg.map(function (s) { return '<li>' + esc(s.n) + '</li>'; }).join('') + '</ol></div><p class="cap" style="margin-top:.6rem">Top to bottom</p></div>';
    }
    return '<div class="wrap"><a class="back" href="#archive">&larr; Back to the archive</a><article class="dp"><div class="dp-art"><div class="dp-stage">' + pic(d, true) + '</div>'+ '</div>' +
      '<div class="dp-body"><div class="crumb cap"><a href="#archive">Archive</a><span>/</span><a href="#archive" data-cat="' + d.cat + '">' + CATS[d.cat] + '</a><span>/</span><span>No. ' + pad(i + 1) + ' of ' + DRINKS.length + '</span></div>' +
      '<h1>' + esc(d.name) + '</h1><p class="story">' + esc(d.story) + '</p><div class="tags">' + d.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
      '<div class="blk"><h2><span class="t">Ingredients</span></h2><ul class="ings">' + d.ing.map(function (g) { return '<li><span>' + esc(g.n) + '</span><span class="am">' + esc(g.a) + '</span></li>'; }).join('') + '</ul></div>' +
      '<div class="blk"><h2><span class="t">Method</span></h2><p class="method">' + esc(d.how) + '</p></div>' +
      '' + (gar.length ? '<div class="blk facts"><div class="wide"><span class="cap">Garnish</span><span>' + esc(gar.join(', ')) + '</span></div></div>' : '') +
      layers + (d.milk ? '<p class="milknote">Milk of your choice: dairy, oat, almond, soy or coconut all work.</p>' : '') +
      '<div class="pn"><a href="#d-' + prev.id + '"><span class="cap">&larr; Previous</span><span class="script">' + esc(prev.name) + '</span></a><a href="#d-' + next.id + '"><span class="cap">Next &rarr;</span><span class="script">' + esc(next.name) + '</span></a></div></div></article></div>';
  }

  /* ---------- find your mood ---------- */
  function mood() {
    return '<div class="wrap">' + head('Find your mood', 'How are you feeling? Find your perfect drink.') +
      '<div class="mood"><ul class="moods" id="moods">' + MOODS.map(function (m) { return '<li><button data-m="' + m.k + '" class="' + (S.mood === m.k ? 'on' : '') + '" aria-pressed="' + (S.mood === m.k) + '"><span>' + m.t + '</span><span class="cap">&rarr;</span></button></li>'; }).join('') + '</ul><div class="res" id="res"></div></div></div>';
  }
  function moodDraw(animate) {
    var m = MOODS.filter(function (x) { return x.k === S.mood; })[0], res = document.getElementById('res');
    document.querySelectorAll('#moods button').forEach(function (b) { var on = b.getAttribute('data-m') === S.mood; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    function fill() {
      var pool = shuffle(DRINKS.filter(m.f)), picks = [], used = {};
      if (m.k === 'z') picks = pool.slice(0, 1);
      else { pool.forEach(function (d) { if (picks.length < 3 && !used[d.cat]) { picks.push(d); used[d.cat] = 1; } }); pool.forEach(function (d) { if (picks.length < 3 && picks.indexOf(d) < 0) picks.push(d); }); }
      if (m.k === 'z') {
        var s = picks[0], st = s.tags.slice(0, 3).map(function (x) { return x.toLowerCase(); }), sp = '';
        for (var q = 0; q < 14; q++) sp += '<i style="--x:' + (6 + (q * 37) % 88) + '%;--y:' + (8 + (q * 53) % 80) + '%;--d:' + (q * .35).toFixed(2) + 's;--z:' + (.6 + (q % 4) * .25) + '"></i>';
        var au = (s.art.L && s.art.L[0] && s.art.L[0][0]) || '#d3a'; if (s.art.L && s.art.L.length > 1) au = s.art.L[s.art.L.length > 2 ? 1 : 0][0] === '#efe2cc' ? s.art.L[0][0] : au;
        res.innerHTML = '<div class="surprise" id="picks" style="--aura:' + au + '"><div class="sp-aura"><b></b><b></b><b></b></div><div class="sp-sparks" aria-hidden="true">' + sp + '</div>' +
          '<span class="sp-kicker">Today, for you</span><a class="sp-art" href="#d-' + s.id + '" aria-label="' + esc(s.name) + '"><span class="sp-ring"></span>' + pic(s) + '</a>' +
          '<span class="cap sp-cat">' + CATS[s.cat] + '</span><a class="sp-name" href="#d-' + s.id + '">' + esc(s.name) + '</a>' +
          '<p class="sp-why">' + esc(s.story) + '</p><p class="sp-tags">' + st.join(' &middot; ') + '</p>' +
          '<div class="sp-btns"><a class="btn fill" href="#d-' + s.id + '">Discover the recipe</a><button class="btn" id="again">Surprise me again</button></div></div>';
        document.getElementById('again').onclick = function () { moodDraw(true); };
        return;
      }
      res.innerHTML = '<div class="res-head"><h2>' + (m.k === 'z' ? 'Your surprise' : 'Try these') + '</h2><button class="tlink" id="again">' + (m.k === 'z' ? 'Surprise me again' : 'Another round') + '</button></div><div class="picks' + (picks.length === 1 ? ' one' : '') + '" id="picks">' +
        picks.map(function (d) {
          var t = d.tags.slice(0, 3).map(function (x) { return x.toLowerCase(); });
          return '<article class="item"><a class="art" href="#d-' + d.id + '" aria-label="' + esc(d.name) + '">' + pic(d) + '</a><div class="meta"><span class="cap">' + CATS[d.cat] + '</span><a class="nm" href="#d-' + d.id + '">' + esc(d.name) + '</a><p class="why"><b>' + m.why + '</b> It is ' + list(t) + '.</p><a class="pick-btn" href="#d-' + d.id + '">Discover the recipe</a></div></article>';
        }).join('') + '</div>';
      document.getElementById('again').onclick = function () { moodDraw(true); };
    }
    if (animate && document.getElementById('picks')) { document.getElementById('picks').classList.add('swap'); setTimeout(fill, 240); } else fill();
  }

  /* ---------- mixology lab ---------- */
  function lab() {
    return '<div class="wrap">' + head('The mixology lab', 'Create your own drink, then recreate it at home.') +
      '<div class="lab"><div id="steps"></div><div class="lab-out"><div id="concept"></div></div></div><div class="nb" id="nb"></div></div>';
  }
  function opt(on, attrs, html) { return '<button class="opt' + (on ? ' on' : '') + '" aria-pressed="' + on + '" ' + attrs + '>' + html + '</button>'; }
  function labSteps() {
    var s = S.lab;
    document.getElementById('steps').innerHTML =
      '<div class="step"><h3><span class="n">1</span><span class="it">Pick a base</span></h3><div class="opts">' + LAB.bases.map(function (b) { return opt(s.base === b.k, 'data-l="base" data-v="' + b.k + '"', b.n + '<small>' + b.s + '</small>'); }).join('') + '</div></div>' +
      '<div class="step"><h3><span class="n">2</span><span class="it">Choose a flavour direction</span></h3><div class="opts">' + LAB.flavours.map(function (b) { return opt(s.flav === b.k, 'data-l="flav" data-v="' + b.k + '"', b.n); }).join('') + '</div></div>' +
      '<div class="step"><h3><span class="n">3</span><span class="it">Main ingredient</span></h3><div class="opts">' + LAB.mains[s.flav].map(function (m, i) { return opt(s.main === i, 'data-l="main" data-v="' + i + '"', '<span class="sw" style="background:' + m.c + '"></span>' + esc(m.s)); }).join('') + '</div></div>' +
      '<div class="step"><h3><span class="n">4</span><span class="it">Something extra</span></h3><div class="opts">' + opt(s.extra < 0, 'data-l="extra" data-v="-1"', 'Nothing extra') + LAB.extras.map(function (m, i) { return opt(s.extra === i, 'data-l="extra" data-v="' + i + '"', esc(m.n)); }).join('') + '</div></div>' +
      '<div class="step"><h3><span class="n">5</span><span class="it">Finishing touch</span></h3><div class="opts">' + LAB.finishes.map(function (m) { return opt(s.fin === m.k, 'data-l="fin" data-v="' + m.k + '"', esc(m.n)); }).join('') + '</div></div>' +
      '<div class="step"><h3><span class="n">6</span><span class="it">Dial it in</span></h3>' +
      '<div class="dial"><label for="d-sw"><span>Sweetness</span><span id="v-sw">' + (s.sw || 3) + ' / 5</span></label><input id="d-sw" type="range" min="1" max="5" step="1" value="' + (s.sw || 3) + '" data-dial="sw"></div>' +
      '<div class="dial"><label for="d-nt"><span>Intensity</span><span id="v-nt">' + (s.nt || 3) + ' / 5</span></label><input id="d-nt" type="range" min="1" max="5" step="1" value="' + (s.nt || 3) + '" data-dial="nt"></div></div>';
  }
  function hexRgb(h) { return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]; }
  function refDrink(c, sel) {
    var cat = { coffee: 'coffee', matcha: 'matcha', milk: 'milk', mocktail: 'mocktails' }[sel.base], main = LAB.mains[sel.flav][sel.main], t = hexRgb(main.c), best = null, bd = 1e9;
    DRINKS.forEach(function (d) {
      if (d.cat !== cat || LM_IMGS.indexOf(d.id) < 0) return;
      var named = d.name.toLowerCase().indexOf(main.s.toLowerCase().split(' ')[0]) > -1 ? 0 : 1;
      d.art.L.forEach(function (l) { var r = hexRgb(l[0]), dd = named * 1e6 + Math.pow(r[0] - t[0], 2) + Math.pow(r[1] - t[1], 2) + Math.pow(r[2] - t[2], 2); if (dd < bd) { bd = dd; best = d; } });
    });
    return best;
  }
  function tune(c, sel) {
    var sw = sel.sw || 3, nt = sel.nt || 3, f = .6 + nt * .2;
    c.ing = c.ing.map(function (g, i) { if (i !== 0) return g; return { n: g.n, a: g.a.replace(/\d+(\.\d+)?/, function (x) { return String(Math.round(parseFloat(x) * f * 10) / 10); }) }; });
    var at = c.ing.length; if (c.ing[at - 1] && c.ing[at - 1].n === 'Ice') at--;
    c.ing.splice(at, 0, { n: 'Sweetener, to taste', a: (sw - 1) * 5 + ' ml' });
    c.sel = sel; return c;
  }
  function clamp5(x) { return Math.max(1, Math.min(5, Math.round(x))); }
  function taste(sel) {
    var b = sel.base, fl = sel.flav, sw = sel.sw || 3, nt = sel.nt || 3;
    return [['Sweet', clamp5(sw + (fl === 'sweet' ? 1 : 0))], ['Fresh', clamp5((b === 'mocktail' ? 4 : 2) + (fl === 'citrus' ? 1 : 0) + (fl === 'fruity' ? 1 : 0) - 1)], ['Creamy', clamp5((b === 'milk' ? 4 : 2) + (fl === 'creamy' ? 1 : 0))], ['Bold', clamp5(nt + (b === 'coffee' ? 1 : 0) - (b === 'mocktail' ? 1 : 0))]];
  }
  var lastConcept = null;
  function bar(n) { return new Array(n + 1).join('█') + new Array(6 - n).join('░'); }
  function labConcept() {
    var c = lastConcept = tune(LAB.build(S.lab), S.lab), nm = S.labName || c.name, now = new Date();
    c.name = nm;
    var no = 1000 + ART.hash(c.id || nm) % 9000, dt = now.toLocaleDateString('en-GB') + '  ' + pad(now.getHours()) + ':' + pad(now.getMinutes());
    document.getElementById('concept').innerHTML = '<div class="lstage">' + ART.glass(c) + '</div>' +
      '<div class="receipt"><div class="r-head"><span class="r-star">&#10022;</span><b>THE LIQUID METHOD</b><span>MIXOLOGY LAB</span><span>MIX NO. ' + no + '</span><span>' + dt + '</span></div>' +
      '<div class="r-sep"></div><label class="r-name" for="rname"><span>NAME YOUR MIX</span><input id="rname" maxlength="40" value="' + esc(nm) + '"></label>' +
      '<p class="r-desc">' + esc(c.desc) + '</p><div class="r-sep"></div>' +
      '<ul class="r-list">' + c.ing.map(function (g) { return '<li><span>' + esc(g.n) + '</span><i></i><span>' + esc(g.a) + '</span></li>'; }).join('') + '</ul>' +
      '<div class="r-sep"></div><div class="r-taste">' + taste(S.lab).map(function (t) { return '<div><span>' + t[0].toUpperCase() + '</span><span class="blk-b">' + bar(t[1]) + '</span></div>'; }).join('') + '</div>' +
      '<div class="r-sep"></div><p class="r-how"><b>METHOD</b><br>' + esc(c.how) + '</p><div class="r-sep"></div>' +
      '<div class="r-code" aria-hidden="true"></div><p class="r-thanks">TASTE, ADJUST, ENJOY.</p>' +
      '<div class="cbtns"><button class="btn fill" id="save">Save your mix</button><button class="btn" id="shuf">Shuffle for me</button><button class="btn" id="copy">Copy recipe</button></div><div class="toast" id="toast" role="status"></div></div>';
    document.getElementById('shuf').onclick = function () {
      S.labName = null;
      S.lab = { base: LAB.bases[Math.floor(Math.random() * 4)].k, flav: LAB.flavours[Math.floor(Math.random() * 7)].k, main: Math.floor(Math.random() * 4), extra: Math.random() < .6 ? Math.floor(Math.random() * LAB.extras.length) : -1, fin: LAB.finishes[Math.floor(Math.random() * LAB.finishes.length)].k, sw: 1 + Math.floor(Math.random() * 5), nt: 1 + Math.floor(Math.random() * 5) };
      labSteps(); labConcept();
    };
    document.getElementById('copy').onclick = copyRecipe;
    document.getElementById('save').onclick = saveConcept;
  }
  function recipeText(c) { return c.name + '\n(Concept from The Liquid Method, untested)\n\n' + c.ing.map(function (g) { return '- ' + g.n + ': ' + g.a; }).join('\n') + '\n\n' + c.how ; }
  function toast(t) { var el = document.getElementById('toast'); if (el) el.textContent = t; }
  function copyRecipe() {
    var txt = recipeText(lastConcept);
    function fallback() {
      var box = document.getElementById('cbox');
      if (!box) { box = document.createElement('textarea'); box.id = 'cbox'; box.readOnly = true; box.rows = 8; box.className = 'cbox'; document.getElementById('toast').after(box); }
      box.value = txt; box.focus(); box.select(); toast('Select and copy the text below.');
    }
    try { navigator.clipboard.writeText(txt).then(function () { toast('Recipe copied.'); }, fallback); } catch (e) { fallback(); }
  }
  var mem = [];
  function nbGet() { try { return JSON.parse(localStorage.getItem('lm-notebook') || '[]'); } catch (e) { return mem; } }
  function nbSet(a) { mem = a; try { localStorage.setItem('lm-notebook', JSON.stringify(a)); } catch (e) { } }
  var nbEdit = -1;
  function saveConcept() {
    var a = nbGet(), nm = (document.getElementById('rname').value || lastConcept.name).trim() || lastConcept.name;
    if (a.some(function (x) { return x.name === nm && JSON.stringify(x.sel) === JSON.stringify(S.lab); })) { toast('This mix is already in your notebook.'); return; }
    a.unshift({ name: nm, sel: JSON.parse(JSON.stringify(S.lab)) }); nbSet(a.slice(0, 20)); nbEdit = -1; nbDraw(); toast('Saved. You can rename it in your notebook below.');
  }
  function nbDraw() {
    var a = nbGet(), el = document.getElementById('nb'); if (!el) return;
    el.innerHTML = '<div class="sec-head"><h2>Your notebook</h2></div>' + (a.length ? '<ul>' + a.map(function (x, i) {
      if (i === nbEdit) return '<li><input class="nbin" id="nbin" maxlength="40" value="' + esc(x.name) + '" aria-label="Mix name"><span><button class="view" data-nrs="' + i + '">Done</button></span></li>';
      return '<li><span class="script">' + esc(x.name) + '</span><span><button class="view" data-nv="' + i + '">Open</button><button class="view" data-nrn="' + i + '">Rename</button><button data-nr="' + i + '">Remove</button></span></li>';
    }).join('') + '</ul>' : '<p class="empty">Nothing saved yet. Build a mix above and press “Save your mix”.</p>');
    var inp = document.getElementById('nbin'); if (inp) { inp.focus(); inp.select(); inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') nbDone(nbEdit); }); }
  }
  function nbDone(i) { var inp = document.getElementById('nbin'), a = nbGet(); if (inp && a[i]) { a[i].name = inp.value.trim() || a[i].name; nbSet(a); } nbEdit = -1; nbDraw(); }

  /* ---------- reveal on scroll (only below-the-fold items start hidden) ---------- */
  var io = null;
  function reveal() {
    if (io) io.disconnect();
    if (!('IntersectionObserver' in window)) return;
    io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.rv').forEach(function (el) { if (el.getBoundingClientRect().top > window.innerHeight * .95) { el.classList.add('pre'); io.observe(el); } });
  }

  /* ---------- router ---------- */
  function routeName() { var h = location.hash.replace('#', ''); if (h.indexOf('d-') === 0) return 'drink'; return ['archive', 'mood', 'lab'].indexOf(h) > -1 ? h : 'home'; }
  function render() {
    clearInterval(orbTimer);
    var r = routeName(), h = location.hash.replace('#', '');
    document.body.setAttribute('data-page', r);
    if (r === 'home') { $app.innerHTML = home(); homeInit(); }
    else if (r === 'archive') { $app.innerHTML = archive(); archiveDraw(false); }
    else if (r === 'drink') { $app.innerHTML = drink(h.slice(2)); }
    else if (r === 'mood') { $app.innerHTML = mood(); moodDraw(false); }
    else if (r === 'lab') { $app.innerHTML = lab(); labSteps(); labConcept(); nbDraw(); }
    document.querySelectorAll('.nav a.l').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-r') === r); });
    window.scrollTo(0, 0); reveal();
  }
  function go(first) {
    if (first || reduce) { render(); return; }
    $app.classList.add('out'); setTimeout(function () { render(); $app.classList.remove('out'); }, 240);
  }
  window.addEventListener('hashchange', function () { go(false); });

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-cat],[data-tag],[data-c],[data-t],[data-m],[data-l],[data-nv],[data-nr],[data-nrn],[data-nrs]'); if (!t) return;
    if (t.hasAttribute('data-cat')) { S.cat = t.getAttribute('data-cat'); S.tags = []; if (location.hash === '#archive') archiveDraw(true); return; }
    if (t.hasAttribute('data-tag')) { S.cat = 'all'; S.tags = [t.getAttribute('data-tag')]; return; }
    if (t.hasAttribute('data-c')) { S.cat = t.getAttribute('data-c'); archiveDraw(true); return; }
    if (t.hasAttribute('data-t')) { var v = t.getAttribute('data-t'); if (v === '*') S.tags = []; else { var i = S.tags.indexOf(v); if (i > -1) S.tags.splice(i, 1); else S.tags.push(v); } archiveDraw(true); return; }
    if (t.hasAttribute('data-m')) { S.mood = t.getAttribute('data-m'); moodDraw(true); return; }
    if (t.hasAttribute('data-l')) {
      var k = t.getAttribute('data-l'), val = t.getAttribute('data-v');
      if (k === 'base' || k === 'flav' || k === 'fin') S.lab[k] = val; else S.lab[k] = parseInt(val, 10);
      if (k === 'flav') S.lab.main = 0;
      S.labName = null; labSteps(); labConcept(); return;
    }
    if (t.hasAttribute('data-nv')) { var x = nbGet()[+t.getAttribute('data-nv')]; if (x) { S.lab = x.sel; S.labName = x.name; labSteps(); labConcept(); window.scrollTo(0, 0); } return; }
    if (t.hasAttribute('data-nrn')) { nbEdit = +t.getAttribute('data-nrn'); nbDraw(); return; }
    if (t.hasAttribute('data-nrs')) { nbDone(+t.getAttribute('data-nrs')); return; }
    if (t.hasAttribute('data-nr')) { var a = nbGet(); a.splice(+t.getAttribute('data-nr'), 1); nbSet(a); nbDraw(); }
  });
  document.addEventListener('input', function (e) {
    var t = e.target; if (t.id === 'rname') { S.labName = t.value; lastConcept.name = t.value || lastConcept.name; return; }
    if (!t.getAttribute || !t.getAttribute('data-dial')) return;
    var k = t.getAttribute('data-dial'); S.lab[k] = parseInt(t.value, 10);
    var o = document.getElementById('v-' + k); if (o) o.textContent = t.value + ' / 5';
    labConcept();
  });
  go(true);
})();
