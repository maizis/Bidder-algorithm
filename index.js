// Get the bidder's name of the hightest bid.
function bidderWin(item) {
  return item.bids.filter((b) => {
    return b.bid === Math.max(...item.bids.map((b) => b.bid))
  })[0].name
}

// Get the list of non-winning bidders
function bidderLoose(item) {
  return item.bids.filter((b) => {
    return b.name !== bidderWin(item)
  })
}

// Get the highest bid from non-winning bidders.
function priceWin(item) {
  const maxPrice = Math.max(...bidderLoose(item).map((b) => b.bid))
  return maxPrice > item.reserve_price ? maxPrice : item.reserve_price
}

// Return the winner and the price.
function getWinner(item) {
  return {
    "Name": bidderWin(item),
    "Price": priceWin(item),
  }
}
module.exports = {
  getWinner,
}
