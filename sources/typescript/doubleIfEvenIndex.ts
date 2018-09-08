/** @internal */
export function doubleIfEvenIndex(target: Array<number>): Array<number> {
  return target.map(function (charCode: number, index: number) {
    if (index % 2 === 0) {
      return charCode * 2;
    }
    return charCode;
  });
}