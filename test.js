const myFunction = (timeout, message) => {
   return setTimeout(() => {
        console.log(message);
        return message
    }, timeout );
};

myFunction (1000, 'Alpha');
const ladida = myFunction (500, 'Bravo');