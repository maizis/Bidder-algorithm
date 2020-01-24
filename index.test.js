const {
  itemName,
  itemPrice,
  bidList,
  bidMax,
  bidderWin,
  priceWin,
} = require('./index');

const item = require('./data/items');

//J'ai concaténé les f() dans le test pour afficher dans la console les résultats proprement.

test('Nom du produit : ' + itemName(item), () => {
  expect(
    itemName(item)
  ).toBe('Voiture');},
);

test('Prix de reserve du produit : ' + itemPrice(item), () => {
  expect(
    itemPrice(item)
  ).toBe(300);
},
);

test('Liste des bids envoyés : ' + bidList(item), () => {
  expect(
    bidList(item)
  ).toMatchObject([200, 901, 800, 100, 803]);
},
);

test('Bid le plus haut : ' + bidMax(item), () => {
  expect(
    bidMax(item)
  ).toBe(901);
},
);

test('Bidder gagnant : ' + bidderWin(item), () => {
  expect(
    bidderWin(item)
  ).toBe('Jean');
},
);

test('Prix gagnant : ' + priceWin(item), () => {
  expect(
    priceWin(item)
  ).toBe(803);
},
);



