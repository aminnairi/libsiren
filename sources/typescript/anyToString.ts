/** @internal */
export function anyToString(target: any): string {
  if (typeof target !== 'string') {
    return target.toString();
  }
  return target;
}