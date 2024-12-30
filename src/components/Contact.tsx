import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信のロジック（例: メール送信APIの呼び出しなど）
    console.log('送信された内容:', { name, email, message });
  };

  return (
    <section id="contact" className="contact">
      <h2>連絡先</h2>
      <p>ご質問やお仕事の依頼があれば、以下のフォームからご連絡ください。</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">お名前</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">メールアドレス</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">メッセージ</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required
          ></textarea>
        </div>

        <button type="submit">送信</button>
      </form>
    </section>
  );
};

export default Contact;
