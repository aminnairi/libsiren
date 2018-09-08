/** @internal */
export default function sum(target: Array<number>): number {
  return target.reduce(function (sum: number, number: number): number {
    return sum + number;
  }, 0);
}