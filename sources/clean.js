//@ts-check
const { readdir, unlink } = require('fs')
const { resolve } = require('path')

/**
 * @description Return the correct project path from a relative path
 * @param {string} endpoint
 * @return {string}
 */
function fromRoot(endpoint = '.') {
  return resolve(__dirname, '..', endpoint)
}

readdir(fromRoot(), function(error, paths) {
  if (error) {
    throw 'Unable to delete unwanted definition types'
  }

  paths.filter(function(path) {
    if (path.endsWith('.d.ts') && !path.startsWith('libsiren')) {
      return true
    }

    return false
  }).map(function(path) {
    unlink(fromRoot(path), function(error) {
      if (error) {
        throw `Unable to delete ${path} (${error})`
      }

      console.log(`[CLEAN] successfully removed "${path}".`)
    })
  })
})