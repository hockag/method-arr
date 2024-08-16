// 1

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = ''

for (let i = 0; i < friends.length; i++) {
    string += friends[i] + ",  "
}

string = string.trim();

console.log(string);

// 2

console.log(friends.join(', '));

// 3

const cards = [
    'карточка - 1',
    'карточка - 2',
    'карточка - 3',
    'карточка - 4',
    'карточка - 5',
];

cards.splice(0, 1);
console.log(cards)

// 4

const cardToRemove = 'карточка - 3';
const index = cards.indexOf(cardToRemove);

cards.splice(index, 1);
console.log(cards);

// 5

const cardToInsert = 'карточка - 6';
cards.splice(4, 0, cardToInsert);
console.log(cards);

// 6

const cardToUpdate = 'оновлена карточка - 4';

cards.splice(1, 1, cardToUpdate);
console.log(cards);