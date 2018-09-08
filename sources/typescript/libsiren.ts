interface Callback {
  (target: any): any
}

function pipe(...callbacks: Array<Callback>): any {
  return function(target: any): any {
    return callbacks.reduce(function(value: any, next: Callback): any {
      return next(value)
    }, target)
  }
}

function anyToString(target: any): string {
  if (typeof target !== 'string') {
    return target.toString()
  }

  return target
}

function removeSpaces(target: string): string {
  return target.replace(/\s/g, '')
}

function spread(target: string): Array<string> {
  return [...target]
}

function stringToInteger(target: Array<string>): Array<number> {
  return target.map(function(string: string): number {
    return parseInt(string) || 0
  })
}

function doubleIfOddIndex(target: Array<number>): Array<number> {
  return target.map(function(charCode: number, index: number): number {
    if (index % 2 !== 0) {
      return charCode * 2
    }

    return charCode
  })
}

function addDigits(target: Array<number>): Array<number> {
  return target.map(function(number: number): number {
    if (number > 9) {
      return number - 9
    }

    return number
  })
}

function sum(target: Array<number>): number {
  return target.reduce(function(sum: number, number: number): number {
    return sum + number
  }, 0)
}

function isModulo10(target: number): boolean {
  if (target % 10 === 0) {
    return true
  }

  return false
}

function isValidSiren(target: any): boolean {
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

export { isValidSiren }