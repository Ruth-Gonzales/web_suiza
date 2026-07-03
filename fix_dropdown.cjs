const fs = require('fs');

// 1. Update Navbar.jsx
let nav = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

// Add useEffect import if not there
if (!nav.includes('useEffect')) {
  nav = nav.replace("import React, { useState }", "import React, { useState, useEffect }");
}

// Add forceClose state and effect
const hookInjection = `  const [isOpen, setIsOpen] = useState(false);
  const [forceClose, setForceClose] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setForceClose(true);
    const timer = setTimeout(() => setForceClose(false), 150);
    return () => clearTimeout(timer);
  }, [location.pathname]);`;

nav = nav.replace(/  const \[isOpen, setIsOpen\] = useState\(false\);\n  const location = useLocation\(\);\n  const navigate = useNavigate\(\);/, hookInjection);

// Replace dropdown wrappers
nav = nav.replace(
  `className="absolute top-full left-0 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3"`,
  'className={`absolute top-full left-0 w-96 opacity-0 invisible translate-y-2 transition-all duration-300 ease-out z-50 before:content-[\'\'] before:absolute before:bottom-full before:left-0 before:w-full before:h-3 ${!forceClose ? \'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0\' : \'\'}`}'
);

nav = nav.replace(
  `className="absolute top-full left-0 w-[820px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3"`,
  'className={`absolute top-full left-0 w-[820px] opacity-0 invisible translate-y-2 transition-all duration-300 ease-out z-50 before:content-[\'\'] before:absolute before:bottom-full before:left-0 before:w-full before:h-3 ${!forceClose ? \'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0\' : \'\'}`}'
);

nav = nav.replace(
  `className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3"`,
  'className={`absolute top-full left-0 w-64 opacity-0 invisible translate-y-2 transition-all duration-300 ease-out z-50 before:content-[\'\'] before:absolute before:bottom-full before:left-0 before:w-full before:h-3 ${!forceClose ? \'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0\' : \'\'}`}'
);

// Update AboutMegaMenu prop
nav = nav.replace(
  `<AboutMegaMenu t={t} />`,
  `<AboutMegaMenu t={t} forceClose={forceClose} />`
);

fs.writeFileSync('src/components/Navbar.jsx', nav);

// 2. Update AboutMegaMenu.jsx
let about = fs.readFileSync('src/components/AboutMegaMenu.jsx', 'utf8');

about = about.replace(
  `export default function AboutMegaMenu({ t, isMobile, onItemClick }) {`,
  `export default function AboutMegaMenu({ t, isMobile, onItemClick, forceClose = false }) {`
);

about = about.replace(
  `className="absolute top-full left-1/2 -translate-x-1/2 w-[860px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-out z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-3"`,
  'className={`absolute top-full left-1/2 -translate-x-1/2 w-[860px] opacity-0 invisible translate-y-2 transition-all duration-300 ease-out z-50 before:content-[\'\'] before:absolute before:bottom-full before:left-0 before:w-full before:h-3 ${!forceClose ? \'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0\' : \'\'}`}'
);

fs.writeFileSync('src/components/AboutMegaMenu.jsx', about);

console.log("Applied UI/UX hover fix");
