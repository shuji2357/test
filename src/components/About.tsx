import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2>自己紹介</h2>
      <p>
        現在、システムエンジニアとしてWebアプリケーションの設計・開発を行っています。
        ReactやTypeScriptを用いたフロントエンド開発が得意です。
      </p>
    </section>
  );
};

export default About;
