let path = require('path')
let run = require('./run')

let folder = process.argv[2]

;(async () => {
  let urls = [`file://${path.join(__dirname, folder, 'test.html')}`]

  await run(urls)
})()
