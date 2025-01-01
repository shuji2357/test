import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h1 className="logo">濱田のポートフォリオ</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">自己紹介</a></li>
            <li><a href="#projects">実績</a></li>
            <li><a href="#skills">スキル</a></li>
            <li><a href="#contact">連絡先</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
