console.time('init loop');

// find the primes in the first 100,000 numbers
doCPUWork(100000);

console.timeEnd('init loop');

exports.hello = async (event) => {
  console.time('handler loop');

  // find the primes in the first 100,000 numbers
  doCPUWork(100000);

  console.timeEnd('handler loop');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!",
    }),
  };
};

function doCPUWork(n) {
  let i = 0;
  for (i = 0; i < n; i++) {
    isPrime(i);
  }
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true; // 2 and 3 are prime numbers
  if (n % 2 === 0 || n % 3 === 0) return false;

  // Check divisors from 5 up to √n
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}