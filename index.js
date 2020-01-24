const item = require('./data/items');

//Nom du produit qui est vendu.
function itemName (name) {
  return name = item[0].name
}

//Prix du produit qui est vendu.
function itemPrice (price) {
  return price = item[0].price
}
console.log(itemPrice())

//Listes des bids qui ont été envoyé pour ce produit.
function bidList (bids) {
  return bids = item[0].bids.map((b) => { return b.bid })
}
console.log(bidList())

//Le plus haut bid envoyé pour ce produit.
function bidWin (win) {
  return win = Math.max(...item[0].bids.map((b) => { return b.bid }))
}
console.log(bidWin())

//Le nom du gagnant correspondant au plus haut bid envoyé.
function bidderWin (win) {
  const bidderList = item[0].bids.map((b) => ({ name: b.name, bid : b.bid}))
  return win = bidderList.filter((b) => { return b.bid === bidWin() })
}
console.log(bidderWin())

//Le prix gagnant correspondant au plus haut bid envoyé par un non-gagnant.
//Si celui-ci est < au prix du produit, le prix gagnant est le prix du produit.
function priceWin (win) {
 const bidderList = item[0].bids.map((b) => ({ name: b.name, bid : b.bid}))
 const bidderLoose = bidderList.filter((b) => { return b.name !== bidderWin()[0].name })
 const winPrice = Math.max(...bidderLoose.map((b) => { return b.bid }))
 return win = winPrice > item[0].price ? winPrice : item[0].price
}
console.log(priceWin())


// module.exports = bidList;

// Récupère un item items.items[0] ou items[0]
  // Récupérer son prix
  // Parcourir ces enchères
  // (Func) Trouver l'enchère maximum -> Trouver le gagnant (Le nombre le plus haut dans ton tableau)
    // Ton tableau bids doit retourner un truc du style [100, 200, 300, 400, 500] -> Math.max(...bids) -> Retire du tableau -> Math.max(...Bids) (Vérifier que la valeur sois supérieur au prix de réserve)
  // (Func) Trouver le prix que l'acheteur payera

  //Winprice = remove math.max from bidList



// Chaque fonction doit retourner le même résultat si les mêmes paramètre son passer (Pure Function)
// Tu dois teste chaque fonction avec plusieurs cas

// Tester la rapidité de ton algorithme

// https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
