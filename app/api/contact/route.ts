import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // 入力値の検証
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '全ての項目を入力してください' },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!gmailUser || !gmailPassword || !contactEmail) {
      console.error('Gmail credentials are not set');
      return NextResponse.json(
        { error: 'サーバー設定エラー' },
        { status: 500 }
      );
    }

    // Nodemailerトランスポーターの設定
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    // メール本文
    const mailOptions = {
      from: gmailUser,
      to: contactEmail,
      replyTo: email,
      subject: `【ポートフォリオ】${subject}`,
      html: `
        <h2>新しいお問い合わせがあります</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <hr />
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'お問い合わせを送信しました' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending contact form:', error);
    return NextResponse.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    );
  }
}
