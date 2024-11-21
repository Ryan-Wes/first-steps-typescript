function sendMessage(userName: string, isLoggged: boolean) {
  console.log(`Olá ${userName}. Você ${isLoggged ? "não" : ""} pode logar.`);
}

const userName = "Beto"
const isLoggged = true

sendMessage(userName, isLoggged)