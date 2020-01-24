//Nom du produit qui est vendu.
function itemName (a) {
  return a[0].name
}

//Prix du produit qui est vendu.
function itemPrice (a) {
  return a[0].price
}


//Listes des bids qui ont été envoyé pour ce produit.
function bidList (a) {
  return bids = a[0].bids.map((b) => {
    return b.bid
  })
}

//Le plus haut bid envoyé pour ce produit.
function bidWin (a) {
  return Math.max(...a[0].bids.map((b) => { return b.bid }))
}

//Le nom du gagnant correspondant au plus haut bid envoyé.
function bidderWin (a) {
  const bidderList = a[0].bids.map((b) => ({ name: b.name, bid: b.bid}))
  return bidderList.filter((b) => { 
    return b.bid === (Math.max(...a[0].bids.map((b) =>
      { return b.bid }
      )))
    })[0].name
}

//Si sup au prix du produit, le prix gagnant correspondant au bid le plus haut envoyé par un non-gagnant.
//Filtrer sur le nom afin de pouvoir retiré tout les bids du gagnant et pas que le bid gagnant.
function priceWin (a) {
 const bidderList = a[0].bids.map((b) => ({ name: b.name, bid : b.bid}))
 const bidderWin = bidderList.filter((b) => { 
   return b.bid === (Math.max(...a[0].bids.map((b) =>
     { return b.bid }
     )))
   })[0].name
 const bidderLoose = bidderList.filter((b) => { return b.name !== bidderWin })
 const winPrice = Math.max(...bidderLoose.map((b) => { return b.bid }))
 return winPrice > a[0].price ? winPrice : a[0].price
}

module.exports = {
  itemName,
  itemPrice,
  bidList,
  bidWin,
  bidderWin,
  priceWin,
}


// Chaque fonction doit retourner le même résultat si les mêmes paramètre son passer (Pure Function)
// Tu dois teste chaque fonction avec plusieurs cas

// Tester la rapidité de ton algorithme

// https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
