const fs = require('fs');
let c = fs.readFileSync('src/components/Navbar.jsx', 'utf-8');
c = c.replace(/\\\\`/g, '`').replace(/\\\`/g, '`');
c = c.replace(/\\\\\$/g, '$').replace(/\\\$/g, '$');
fs.writeFileSync('src/components/Navbar.jsx', c);
console.log("Fixed Navbar.jsx escaping issues");
