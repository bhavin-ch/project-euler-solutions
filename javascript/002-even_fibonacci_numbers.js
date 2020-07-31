const solution = (N) => {
  const fib = [0, 1];
  let sum = 0;
  lastElem = arr => arr[arr.length - 1];

  for (let i = 2; lastElem(fib) < N; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    if (i % 3 === 0) sum += fib[i];
    console.log(sum);
  }
  console.log(fib)
  return (lastElem(fib) % 2 === 0) ? sum - lastElem(fib) : sum;
};

const n = 4000000;
const ans = solution(n);
console.log(ans);