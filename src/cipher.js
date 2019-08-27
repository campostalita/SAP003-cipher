window.cipher = {
  encode: encode,
  decode: decode
};
          
function encode(offset, string) {
  let textoCodificado = [];
  let size = string.length;   
  for (let i = 0; i <size; i++) {
    const transformAsc = string[i].charCodeAt(0);
    if (transformAsc >= 65 && transformAsc <= 90) {
      const numerador =((transformAsc - 65 + offset) % 26) + 65;
      const sCharCode = String.fromCharCode(numerador);
      textoCodificado.push(sCharCode);
    } else if (transformAsc >= 97 && transformAsc <= 122) {
      const numerador = ((transformAsc - 97 + offset) % 26) + 97;
      const sCharCode = String.fromCharCode(numerador);
      textoCodificado.push(sCharCode);
    } else {
      textoCodificado.push(string[i]);
    }
  }
  return textoCodificado.join("");  
}

function decode(offset, string) {
  let textoCodificado = [];
  let size = string.length;
  for (let i = 0; i <size; i++) {
    const transformAsc = string[i].charCodeAt(0);
    if (transformAsc >= 65 && transformAsc <= 90) {
      const numerador =((transformAsc - 90 - offset) % 26) + 90;
      const sCharCode = String.fromCharCode(numerador);
      textoCodificado.push(sCharCode);
    } else if (transformAsc >= 97 && transformAsc <= 122) {
      const numerador = ((transformAsc - 122 - offset) % 26) + 122;
      const sCharCode = String.fromCharCode(numerador);
      textoCodificado.push(sCharCode);
    } else {
      string.push(string(i));
    }
  }
  return textoCodificado.join("");  
}