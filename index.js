// Code your solutions in this file

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`; 
        messages.push(message); 
    }
    
    return messages;
}

console.log(writeCards(["Ana", "Stuart", "Glenn"], "birthday"));