let puppeteer = require('puppeteer')
let chalk = require('chalk')
let fs = require('fs')
let path = require('path')

let error = chalk.bold.red
let success = chalk.keyword('green')

let folder = process.argv[2]

module.exports = async function run(urls) {
  let browser = await puppeteer.launch({
    headless: true,
  })

  try {
    let parse = require(`./${folder}/parse`)
    let savePath = path.join(__dirname, folder, 'data.json')

    console.log('Opening page')
    let page = await browser.newPage()
    await page.setJavaScriptEnabled(false)

    let data = {}
    for (var i = 0; i < urls.length; i++) {
      const url = urls[i]
      console.log('Loading', url)
      await page.goto(url, { waitUntil: 'load', timeout: 0 })

      data[url] = await parse(page)
    }

    fs.writeFile(savePath, JSON.stringify(data), err => {
      if (err) {
        console.log(error('Failed to save to:', savePath))
        throw err
      }
      console.log(success('Saved to:', savePath))
    })
  } catch (err) {
    console.log(error(err))
  } finally {
    await browser.close()
    console.log('Browser Closed')
  }
}
