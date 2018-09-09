import { pipe } from "./pipe";
import { anyToString } from "./anyToString";
import { removeSpaces } from "./removeSpaces";
import { spread } from "./spread";
import { stringToInteger } from "./stringToInteger";
import { doubleIfOddIndex } from "./doubleIfOddIndex";
import { doubleIfEvenIndex } from "./doubleIfEvenIndex";
import { addDigits } from "./addDigits";
import { sum } from "./sum";
import { isModulo10 } from "./isModulo10";
import { hasLengthOf } from "./hasLengthOf";

function isValidSiren(target: any): boolean {
  const hasValidLength = pipe(
    anyToString,
    removeSpaces,
    hasLengthOf(9)
  )

  if (!hasValidLength(target)) {
    return false
  }

  const check = pipe(
    anyToString,
    removeSpaces,
    spread,
    stringToInteger,
    doubleIfOddIndex,
    addDigits,
    sum,
    isModulo10
  )

  return check(target)
}

function isValidSiret(target: any): boolean {
  const hasValidLength = pipe(
    anyToString,
    removeSpaces,
    hasLengthOf(14)
  )

  if (!hasValidLength(target)) {
    return false
  }

  const check = pipe(
    anyToString,
    removeSpaces,
    spread,
    stringToInteger,
    doubleIfEvenIndex,
    addDigits,
    sum,
    isModulo10
  )

  return check(target)
}

export { isValidSiren, isValidSiret }