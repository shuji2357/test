import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <h2>スキル</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>フロントエンド開発</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>バックエンド開発</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>RESTful API設計</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>クラウド & DevOps</h3>
          <ul>
            <li>AWS (EC2, S3, CloudFront)</li>
            <li>Docker</li>
            <li>CI/CD（GitHub Actions, CircleCI）</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>ツール & フレームワーク</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Visual Studio Code</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
