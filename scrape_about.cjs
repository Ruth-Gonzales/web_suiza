const cheerio = require('cheerio');
const fs = require('fs');

async function scrapePage(url) {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);
  
  // Elementor stores text usually in .elementor-widget-text-editor or similar
  // Let's get all paragraphs inside the main content wrapper
  let content = '';
  $('.elementor-widget-text-editor, .elementor-heading-title').each((i, el) => {
    content += $(el).text().trim() + '\n';
  });
  
  return content.trim();
}

async function run() {
  console.log('Scraping Presentacion...');
  const pres = await scrapePage('https://iestpsuiza.edu.pe/inicio/presentacion/');
  fs.writeFileSync('presentacion_text.txt', pres);
  
  console.log('Scraping Vision Mision...');
  const vm = await scrapePage('https://iestpsuiza.edu.pe/inicio/vision-y-mision/');
  fs.writeFileSync('vision_text.txt', vm);
  
  console.log('Scraping Director...');
  const dir = await scrapePage('https://iestpsuiza.edu.pe/inicio/palabras-del-director/');
  fs.writeFileSync('director_text.txt', dir);
  
  console.log('Scraping Historia...');
  const hist = await scrapePage('https://iestpsuiza.edu.pe/inicio/resena-historica/');
  fs.writeFileSync('historia_text.txt', hist);
  
  console.log('Done!');
}

run();
