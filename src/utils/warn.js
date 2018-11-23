/* @flow */

export function assert (condition: any, message: string) {
  if (!condition) {
    throw new Error(`[vidget] ${message}`)
  }
}

export function warn (condition: any, message: string) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(`[vidget] ${message}`)
  }
}

export function isError (err: any): boolean {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}
