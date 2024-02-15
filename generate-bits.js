const bits = [];

function countPower(num){
  let count = 0;
  while(num >= 2){
    num = Math.floor((num + 1) / 2);
    count++
  }
  return count;
}

const num = 16;

const power = countPower(num + 1);

for(let i=0;i<power;i++){
  let num = Math.pow(2, i);
  bits.push(num);
}

console.log(bits);

const convertToBinary = (decimal, powers) => {
  let n = powers.length;
  const unfil = new Array(n).fill(0);
  const arr = [];
  let i = 0;
  let flag = false;
  while(decimal > 0){
    if(powers[n-1] <= decimal){
      decimal = decimal - powers[n - 1];
      arr.push(decimal);
      flag = true;
    } else {
      flag = false;
    }
    if(flag){
      unfil[i] = 1;
    }
    n--;
    i++;
  }
  let stringBinary = unfil.join("");
  return {
    binary: stringBinary,
    decimal: parseInt(stringBinary, 2),
    unfil: unfil, 
    arr: arr, 
  };
}

// console.log(convertToBinary(num, bits));

let binaryList = [];

const populateList = (list) => {
  for(let i=0;i<=num;i++){
    list.push(convertToBinary(i, bits));
  }
  return list;
}

const showBinaryList = (list) => {
  for(let obj of list){
    let { binary, decimal } = obj;
    console.log(decimal, binary);
  }
}

binaryList = populateList(binaryList);

showBinaryList(binaryList);
