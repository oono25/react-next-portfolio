'use client';

import { useState, FormEvent } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // 5秒後にメッセージを消す
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert('送信に失敗しました。もう一度お試しください。');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('エラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.backRow}>
          <a className={styles.backLink} href="/">ページに戻る</a>
        </div>

        <div className={styles.heading}>
          <h1 className={styles.title}>お問い合わせ</h1>
          <p className={styles.subtitle}>ご質問やご依頼がございましたら、お気軽にお問い合わせください</p>
        </div>

        {isSubmitted && (
          <div className={styles.info}>
            <div className={styles.infoTitle}>✓ 送信しました</div>
            <div className={styles.infoText}>
              お問い合わせいただきありがとうございます。確認いただけましたら、ご連絡させていただきます。
            </div>
          </div>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              お名前 <span>*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className={styles.input}
              placeholder="山田太郎"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              メールアドレス <span>*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className={styles.input}
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>
              件名 <span>*</span>
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              className={styles.input}
              placeholder="お問い合わせの件名"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              メッセージ <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="お問い合わせ内容をお聞きします"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </button>
        </form>

        <div className={styles.info}>
          <div className={styles.infoTitle}>📧 その他の連絡方法</div>
          <div className={styles.infoText}>
            メールでのお問い合わせ以外にも、SNSやGitHubからもご連絡いただけます。
          </div>
        </div>
      </div>
    </div>
  );
}
