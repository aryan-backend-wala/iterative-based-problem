const iFib = (n) => {
  const arr = [0, 1];
  if(n === 0) return arr[n];
  if(n === 1) return arr[n];
  for(let i=1;i<n;i++){
    let sum = arr[i - 1] + arr[i];
    arr.push(sum);
  }
  console.log(arr);
  return arr[n];
}

console.log(iFib(0));
console.log(iFib(1));
console.log(iFib(2));
console.log(iFib(4));