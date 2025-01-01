import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { name, email, message };

    try {
      const response = await fetch('https://your-backend-endpoint.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('送信成功');
        // 送信後の処理（例: メッセージの表示や入力フォームのリセット）
      } else {
        console.error('送信失敗');
      }
    } catch (error) {
      console.error('エラー:', error);
    }
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
