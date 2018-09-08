const fs = require('fs')

fs.readdir('../', function(error, files) {
  if (error) {
    throw 'Unable to delete unwanted definition types'
  }

  files.filter(function(file) {
    if (file.endsWith('.d.ts') && !file.startsWith('libsiren')) {
      return true
    }

    return false
  }).map(function(file) {
    fs.unlink(`../${file}`, function(error) {
      if (error) {
        throw `Unable to delete ${file} (${error})`
      }
    })
  })
})