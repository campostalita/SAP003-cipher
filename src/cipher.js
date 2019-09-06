window.cipher = {
  encode: encode,
  decode: decode
};

function offsetNegativo(offset) {
  while (offset < 0){
    return offset +=26;
  }
  return offset;
}

function encode(offset, string) {
  let textoCodificado = [];
  let size = string.length;   
  let offNegativo = offsetNegativo(offset);
  for (let i = 0; i <size; i++) {
    const transformAsc = string.charCodeAt(i);
    if (transformAsc >= 65 && transformAsc <= 90) {
      const numerador =((transformAsc - 65 + offNegativo) % 26) + 65;
      const sCharCode = String.fromCharCode(numerador);
      textoCodificado.push(sCharCode);
    } else if (transformAsc >= 97 && transformAsc <= 122) {
      const numerador = ((transformAsc - 97 + offNegativo) % 26) + 97;
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
  let offNegativoDecode = offsetNegativo(offset);
  for (let i = 0; i <size; i++) {
    const transformAsc = string.charCodeAt(i);
    if (transformAsc >= 65 && transformAsc <= 90) {
      const numerador =((transformAsc - 90 - offNegativoDecode) % 26) + 90;
      const sCharCode = String.fromCharCode(numerador);
      textoCodificado.push(sCharCode);
    } else if (transformAsc >= 97 && transformAsc <= 122) {
      const numerador = ((transformAsc - 122 - offNegativoDecode) % 26) + 122;
      const sCharCode = String.fromCharCode(numerador);
      textoCodificado.push(sCharCode);
    } else {
      textoCodificado.push(string(i));
    }
  }
  return textoCodificado.join("");  
}