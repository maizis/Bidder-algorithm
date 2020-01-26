# Teads development test
Let's consider a second-price, sealed-bid auction.

Implementation of an anglorithm for finding the winner and the winner price.

## Project setup
```
yarn install
```

### Run test using
```
yarn test
```

### Configure your object for sale
Configure your item like the following example.

```
data/items.js

const item = {
  name: "object_sale",
  reserve_price: 100,
  bids: [
    {
      name: 'Bidder1',
      bid: 90,
    },
    {
      name: 'Bidder2',
      bid: 120
    },
  ]
```

### algorithm

```
index.js

function getWinner(item) {
  return {
    "Name": bidderWin(item),
    "Price": priceWin(item),
  }
}
```

### Test (made with https://jestjs.io/)
Insert the expect result in test() and yarn test

```
item.test.js

test(
  'Winner and price', () => {
    expect(
      getWinner(item)
    ).toMatchObject(
      {
        "Name": "Bidder2",
        "Price": 100
      }
    )
  },
);
```
