import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>実績</h2>
      <div className="project-card">
        <h3>React + TypeScript Webアプリ</h3>
        <p>
          顧客管理のWebアプリケーションをReactとTypeScriptで開発。バックエンドAPIとの連携を行い、ユーザー管理や検索機能を実装しました。
        </p>
        <ul>
          <li><strong>使用技術:</strong> React, TypeScript, Node.js, Express, MongoDB</li>
          <li><strong>役割:</strong> フロントエンド開発、UI設計</li>
          <li><strong>期間:</strong> 2023年5月～7月</li>
        </ul>
        <a href="https://github.com/yourusername/project-repo" target="_blank" rel="noopener noreferrer" className="btn">
          GitHubで確認
        </a>
      </div>

      <div className="project-card">
        <h3>ToDoリストアプリ</h3>
        <p>
          Reactを使用して、シンプルなToDoリストアプリを作成。タスクの追加、削除、編集機能を実装し、localStorageを使用してデータを保持。
        </p>
        <ul>
          <li><strong>使用技術:</strong> React, TypeScript, CSS</li>
          <li><strong>役割:</strong> フロントエンド開発、UI設計</li>
          <li><strong>期間:</strong> 2023年3月～4月</li>
        </ul>
        <a href="https://github.com/yourusername/todo-app" target="_blank" rel="noopener noreferrer" className="btn">
          GitHubで確認
        </a>
      </div>
    </section>
  );
};

export default Projects;
