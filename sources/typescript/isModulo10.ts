/** @internal */

export function isModulo10(target: number): boolean {
  if (target % 10 === 0) {
    return true;
  }
  return false;
}