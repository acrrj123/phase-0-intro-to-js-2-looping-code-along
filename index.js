for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    // debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    const newArray = [];
    for(let i = 0; i < names.length; i++) {
        newArray[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;  
    }
    return newArray;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number) {
    let i = number
    while(i >= 0) {
        console.log(i--); 
    }
}



