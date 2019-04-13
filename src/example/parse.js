module.exports = async function parse(page) {
  await page.waitForSelector('h1')

  const data = await page.evaluate(() => {
    let titleNodeList = document.querySelectorAll('h1')
    let textNodeList = document.querySelectorAll('p')

    let title
    let texts = []

    for (var i = 0; i < titleNodeList.length; i++) {
      title = titleNodeList[i].textContent
    }

    for (var i = 0; i < textNodeList.length; i++) {
      texts[i] = textNodeList[i].textContent
    }

    return {
      title,
      texts,
    }
  })

  return data
}
