let run = require('./run')

let folder = process.argv[2]

;(async () => {
  let config = require(`./${folder}/config`)
  let urls = config.urls

  await run(urls)
})()
