/** @internal */
export function stringToInteger(target: Array<string>): Array<number> {
  return target.map(function (string: string): number {
    return parseInt(string) || 0;
  });
}