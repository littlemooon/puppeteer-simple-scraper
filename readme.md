# puppeteer-simple-scraper

## Get started

```bash
# install dependencies
npm i

# run the example test.html
npm test example
cat src/example/data.json

# run the example against the web
npm start example
cat src/example/data.json
```

## Adding scrapers

1. Create a copy of the example `cp -a ./src/example/. ./src/new-scraper`
2. Copy the source of the scrape subject into `test.html`
3. Update `parse.js` and test with `npm test new-scraper`
4. Iterate until `data.json` looks as expected
5. Update `config.js` with the page urls you want to scrape
6. Run against the web pages with `npm start new-scraper`
