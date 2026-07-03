const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.jsx', 'utf-8');

// Update navLinks
const newNavLinks = `  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about, hasAboutMega: true },
    { path: '/careers', label: t.nav.careers, hasDropdown: true },
    { path: '/admission', label: t.nav.admission, hasMega: true },
    { path: '/transparency', label: t.nav.transparency, hasSimpleDropdown: true, menuKey: 'transparencyMenu' },
    { path: '/procedures', label: t.nav.procedures, hasSimpleDropdown: true, menuKey: 'proceduresMenu' },
    { path: '/services', label: t.nav.services, hasSimpleDropdown: true, menuKey: 'servicesMenu' }
  ];`;
content = content.replace(/const navLinks = \[[\s\S]*?\];/, newNavLinks);

// Fix 7 programas in Navbar
content = content.replace(/Explora nuestros 11 programas/g, "Explora nuestros 11 programas"); // actually it's 11 now!

// Add Simple Dropdown markup for Desktop
const simpleDropdown = `
              {/* Simple Dropdown for Transparency, Procedures, Services */}
              {link.hasSimpleDropdown && (
                <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3">
                  <div className="dropdown-theme p-3">
                    <div className="flex flex-col gap-1 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                      {t[link.menuKey]?.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-text dark:text-white hover:text-primary dark:hover:text-secondary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
`;
content = content.replace(/\{\/\* Mega Menu for Admission \*\/\}[\s\S]*?<\/div>\s*<\/div>\s*\)\}\s*<\/div>\s*\)\)\}\s*<\/div>/, (match) => {
  return match.replace(/<\/div>\s*\)\)\}\s*<\/div>$/, '') + simpleDropdown + '\n        </div>';
});

// Add Simple Dropdown for Mobile
const mobileSimpleDropdown = `              ) : link.hasSimpleDropdown ? (
                <div>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={\`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 block \${
                      location.pathname === link.path
                        ? 'bg-primary text-white shadow-md shadow-primary/25'
                        : 'text-slate-text dark:text-dark-text hover:bg-slate-light dark:hover:bg-dark-hover hover:text-primary dark:hover:text-white'
                    }\`}
                  >
                    {link.label}
                  </Link>
                  <div className="mt-2 space-y-1 pl-4 border-l-2 border-primary/20">
                    {t[link.menuKey]?.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200 block text-xs font-semibold text-slate-text dark:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (`;
content = content.replace(/\) : \(\s*<Link/, mobileSimpleDropdown + '\n                <Link');

fs.writeFileSync('src/components/Navbar.jsx', content, 'utf-8');
console.log("Navbar updated!");
