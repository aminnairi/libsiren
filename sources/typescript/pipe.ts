/** @internal */
import { Callable } from "./Callable";

export function pipe(...Callables: Array<Callable>): any {
  return function (target: any): any {
    return Callables.reduce(function (value: any, next: Callable): any {
      return next(value);
    }, target);
  };
}