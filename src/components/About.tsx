import '../styles/About.css';
import profileImage from '../assets/profile.jpg'; // プロフィール画像を使用
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <img src={profileImage} alt="プロフィール写真" className="profile-image" />
        <div className="about-content">
          <h2>自己紹介</h2>
          <p>
            現在、システムエンジニアとしてWebアプリケーションの設計・開発を行っています。
            ReactやTypeScriptを用いたフロントエンド開発が得意です。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
