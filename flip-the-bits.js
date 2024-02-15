const flipTheBit = (binary) => {
  let stringBinary = binary.toString();
  let bits = stringBinary.split('');
  const notBits = [];
  for(let bit of bits){
    if(bit === "1"){
      notBits.push("0");
    } else {
      notBits.push("1");
    }
  }
  const notBinary = notBits.join("");
  return {
    original_binary: binary, 
    invert_binary: notBinary, 
    decimal_value: parseInt(notBinary, 2),
  };
}

const a = 1001; // 9
console.log(flipTheBit(a));