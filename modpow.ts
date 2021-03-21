// https://gist.github.com/krzkaczor/0bdba0ee9555659ae5fe
/**
 * Fast modular exponentiation for a ^ b mod n
 * @param {bigint} a
 * @param {bigint} b
 * @param {bigint} n
 * @returns {bigint} a ^ b mod n
 */
export const modPow = (a: bigint, b: bigint, n: bigint): bigint => {
  let result = 1n;
  let x = a % n;
  while (b > 0n) {
    if (b % 2n === 1n) {
      result *= x;
      result %= n;
    }
    b /= 2n;
    x *= x;
    x %= n;
  }
  return result;
};
