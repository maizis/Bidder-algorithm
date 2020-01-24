const {
  itemName, itemPrice, bidList, bidWin, bidderWin, priceWin
} = require('./index');
const item = require('./data/items');

test('itemName', () => {
  expect(
    itemName(item)
  ).toBe('Voiture');},
);

test('itemPrice', () => {
  expect(
    itemPrice(item)
  ).toBe(100);
},
);

test('bidList', () => {
  expect(
    bidList(item)
  ).toMatchObject([200, 901, 800, 100]);
},
);

test('bidWin', () => {
  expect(
    bidWin(item)
  ).toBe(901);
},
);

test('bidderWin', () => {
  expect(
    bidderWin(item)
  ).toBe('Jean');
},
);

test('priceWin', () => {
  expect(
    priceWin(item)
  ).toBe(800);
},
);



