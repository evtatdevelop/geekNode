const readline = require('readline');
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout
});

const casino = [];
const player = [];
const takenCards = new Set();

const getNewCard = () => {
  const cards = [2,3,4,5,6,7,8,9,10,'J','Q','K',"A"];
  const cardSuits = ['S', 'C', 'D', 'H']; // ['spades', 'clubs', 'diamonds', 'hearts']
  let newCard = null;
  while ( !newCard || takenCards.has(newCard) ) newCard = `${cardSuits[Math.floor(Math.random() * 4)]}${cards[Math.floor(Math.random() * 13)]}`;
  takenCards.add(newCard);
  return newCard;
}

const getCardWeight = card => {
  const jqka = {'J': 2, 'Q': 3, 'K': 4, 'A': 11}
  return !isNaN(card[1]) ? +card[1] : jqka[card[1]];
}

const getCardSum = player => player.reduce((sum, cur) => sum = sum + getCardWeight(cur), 0)
const bust = player => getCardSum(player) > 21
const getWinner = () => {
  console.log( getCardSum(casino) > getCardSum(player) ? `Casino winner` : `You are a winner` );
  console.log(`You: ${getCardSum(player)} / Casino:  ${getCardSum(casino)}`);
}
const showCards = player => console.log(player);
const casinoStep = () => true;

// player.push( getNewCard() );
// casino.push( getNewCard() );
console.log('let\'s play..');
showCards(player);

rl.on('line', line => {
  switch ( line ) {
    case 'y': case 'Y': 
      player.push( getNewCard() );
      showCards(player);
      if ( bust(player) ) {
        console.log(`You have too much. Casino winner`);
        rl.close();
        break;
      } 
      if ( casinoStep() ) {
        casino.push( getNewCard() );
        if ( bust(casino) ) {
          console.log(`Overkill at the casino. You are a winner`);
          rl.close();
        }        
      } else {
        getWinner();
        rl.close();
      }
      break;

    case 'n': case 'N':
      getWinner();
      rl.close();
      break;
  }
});
