function sendMessage(userName, isLoggged) {
    console.log("Ol\u00E1 ".concat(userName, ". Voc\u00EA ").concat(isLoggged ? "não" : "", " pode logar."));
}
var userName = "Beto";
var isLoggged = true;
sendMessage(userName, isLoggged);
