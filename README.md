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
items.js

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
      bid: 80
    },
  ]
```

### Test (made with https://jestjs.io/)
Insert the expect result in test()

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
