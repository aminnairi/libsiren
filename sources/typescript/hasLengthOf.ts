/** @internal */
import { Callable } from "./Callable";

export function hasLengthOf(length: number): Callable {
  return function (target: string): boolean {
    return target.length === length;
  };
}