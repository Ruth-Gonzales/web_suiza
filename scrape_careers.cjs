const cheerio = require('cheerio');
const fs = require('fs');

async function scrapePage(url) {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);
  
  let content = '';
  $('.elementor-widget-text-editor, .elementor-heading-title').each((i, el) => {
    content += $(el).text().trim() + '\n';
  });
  
  return content.trim();
}

async function run() {
  console.log('Scraping Programas...');
  const data = await scrapePage('https://iestpsuiza.edu.pe/programas-de-estudios/');
  fs.writeFileSync('programas_text.txt', data);
  console.log('Done!');
}

run();
