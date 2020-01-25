const {
  getWinner,
} = require('./index');

const item = require('./data/items');

test(
  'Bidder and price', () => {
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



