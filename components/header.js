import React, { useState } from 'react';

const LogoComponent = ({ text, url }) => (
  <a href={url} style={{ textDecoration: 'none', color: 'inherit' }}>
    <b className="relative leading-[130%] inline-block w-[133.28px] shrink-0 text-xl md:text-2xl">
      {text}
    </b>
  </a>
);

const NavItem = ({ text, url, onClick }) => (
  <div className="relative" onClick={onClick}>
    <a href={url} style={{ textDecoration: 'none', color: 'inherit' }}>
      {text}
    </a>
  </div>
);

const ContactButton = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="rounded-lg bg-blue-guideline1 h-[37.24px] flex flex-row py-[9.800230979919434px] px-[19.600461959838867px] box-border focus:outline-none text-white"
  >
    <b className="relative">{text}</b>
  </button>
);

const DesktopNav = ({ items, contactText, contactHref }) => {
  const handleContactClick = () => {
    window.location.href = contactHref;
  };

  return (
<div className="hidden lg:flex flex-row items-center gap-[49px] text-left text-[13.72px]">
      {items.map((item, idx) => (
        <NavItem key={idx} text={item.text} url={item.url} />
      ))}
      <div className="w-[114.66px] flex flex-row items-center text-white">
        <ContactButton text={contactText} onClick={handleContactClick} />
      </div>
    </div>
  );
};

const MobileMenuButton = ({ onClick }) => (
  <div className="flex items-center" style={{ paddingRight: '50px' }} onClick={onClick}>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </div>
);

const MobileMenuItem = ({ text, url, onClick }) => (
  <div onClick={onClick} className="py-2 px-4 hover:bg-gray-200" style={{ fontSize: '10px' }}>
    <a href={url} style={{ textDecoration: 'none', color: 'inherit' }}>
      {text}
    </a>
  </div>
);

const MobileContactButton = ({ text, onClick }) => (
  <div onClick={onClick} className="py-2 px-4 hover:bg-gray-200 flex flex-row items-center justify-start text-white">
    <div className="rounded-lg bg-blue-guideline1 h-8 flex flex-row py-1 px-3 box-border items-center justify-start">
      <b style={{ fontSize: '10px' }}>{text}</b>
    </div>
  </div>
);

const MobileMenu = ({ items, contactText, contactHref, onClose }) => {
  const handleContactClick = () => {
    window.location.href = contactHref;
    onClose();
  };

  return (
    <div className="bg-white w-full border-t">
      {items.map((item, idx) => (
        <MobileMenuItem key={idx} text={item.text} url={item.url} onClick={onClose} />
      ))}
      <MobileContactButton text={contactText} onClick={handleContactClick} />
    </div>
  );
};

const Header = ({ logoText, logoUrl, navItems, contactText, contactHref }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white px-4 md:px-[73.5017318725586px] py-[24.500577926635742px] shadow-sm">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <LogoComponent text={logoText} url={logoUrl} />
          <DesktopNav items={navItems} contactText={contactText} contactHref={contactHref} />
          <div className="lg:hidden bg-white shadow-sm w-[100%] absolute left-0 top-0 z-50">
            <div className="container mx-auto px-4 flex flex-row py-4 items-center justify-between">
              <LogoComponent text={logoText} url={logoUrl} />
              <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)} />
            </div>
            {menuOpen && <MobileMenu items={navItems} contactText={contactText} contactHref={contactHref} onClose={() => setMenuOpen(false)} />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
