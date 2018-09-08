/** @internal */
export function addDigits(target: Array<number>): Array<number> {
  return target.map(function (number: number): number {
    if (number > 9) {
      return number - 9;
    }
    return number;
  });
}