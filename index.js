
function writeCards (name, event) {
 let message = [];
 for (let = i; i < name.length; i++) {
    message.push("Thank you, ${name[i]}, for the wonderful ${event} gift!");
 }
 return message;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
    }
}


