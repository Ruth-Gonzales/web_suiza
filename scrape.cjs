const https = require('https');

https.get('https://iestpsuiza.edu.pe/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const titles = [...data.matchAll(/class="ekit_page_list_title_title">(.*?)<\/span>/g)].map(m => m[1]);
    console.log("Page list titles:", titles);
    
    const navLinks = [...data.matchAll(/class="ekit-menu-nav-link.*?>(.*?)<\/a>/g)].map(m => m[1].replace(/<[^>]*>?/gm, ''));
    console.log("Nav links:", navLinks);
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
