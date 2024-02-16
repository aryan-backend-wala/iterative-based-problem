const decimalToBinary = (input) => {
  const inputs = [];
  while(input > 0){
    let dividend = Math.floor(input / 2);
    let remainder = input % 2;
    inputs.push(remainder);
    input = dividend;
  }
  return inputs.reverse().join("");
}

const input = 14;
console.log(decimalToBinary(input)); // 1110