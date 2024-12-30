import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>濱田のポートフォリオ</h1>
      <nav>
        <ul>
          <li><a href="#about">自己紹介</a></li>
          <li><a href="#projects">実績</a></li>
          <li><a href="#skills">スキル</a></li>
          <li><a href="#contact">連絡先</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
