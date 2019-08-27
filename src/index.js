document.getElementById("cliqueCode").addEventListener("click", clique);
document.getElementById("cliqueDecode").addEventListener("click", cliqueDecode);

//import { Cipher } from "crypto";

function clique() {
  event.preventDefault();   
  let string = document.getElementById("string").value;
  let offset = parseInt(document.getElementById("offset").value);
  let result = window.cipher.encode(offset, string); //chamando a função do cipher.js
  document.getElementById("msgCodificada").innerHTML = `Sua mensagem codificada é ${result}`;
}

function cliqueDecode() {
  event.preventDefault();   
  let string = document.getElementById("stringDecode").value;
  let offset = parseInt(document.getElementById("offsetDecode").value);
  let result = window.cipher.decode(offset, string); //chamando a função do cipher.js
  document.getElementById("msgDecodificada").innerHTML = `Sua mensagem decodificada é ${result}`; 
}