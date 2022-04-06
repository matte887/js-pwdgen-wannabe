// Ask for user's name
const userName = prompt('Qual è il tuo nome?');
console.log(userName);

// Ask for user's surname
const userSurName = prompt('Qual è il tuo cognome?');
console.log(userSurName);

// Ask for user's favourite color
const userFavColor = prompt('Qual è il tuo colore preferito?');
console.log(userFavColor);

// Compose password
const message = `${userName}${userSurName}${userFavColor}21`;
console.log(message);

// Print generated password on screen
document.getElementById('pw').innerHTML = message;