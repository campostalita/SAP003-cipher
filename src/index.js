document.getElementById("code-clique").addEventListener("click", cliqueCode);
document.getElementById("decode-clique").addEventListener("click", cliqueDecode);

function cliqueCode() {
  event.preventDefault();   
  let string = document.getElementById("code-string").value;
  let offset = parseInt(document.getElementById("code-offset").value);
  let result = window.cipher.encode(offset, string); //chamando a função do cipher.js
  document.getElementById("msg-codificada").innerHTML = `Sua mensagem codificada é ${result}`;
}

function cliqueDecode() {
  event.preventDefault();   
  let string = document.getElementById("decode-string").value;
  let offset = parseInt(document.getElementById("decode-offset").value);
  let result = window.cipher.decode(offset, string); //chamando a função do cipher.js
  document.getElementById("msg-decodificada").innerHTML = `Sua mensagem decodificada é ${result}`; 
}