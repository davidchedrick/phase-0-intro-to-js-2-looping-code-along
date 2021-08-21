for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added bow!`);
    
    }
    return gifts;
}
wrapGifts(gifts);

const cards = [];
const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names){
    for (let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    
    }
    return cards;
}
writeCards(cards);

let count = 10
function countDown(count){
   
    while (count >= 0){
        console.log(count--);
    }
}