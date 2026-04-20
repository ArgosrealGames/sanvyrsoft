'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Por favor, preencha todos os campos obrigatórios.' };
  }

  try {
    const data = await resend.emails.send({
      from: 'Sanvyrsoft <contact@sanvyrsoft.com>',
      to: ['contact@sanvyrsoft.com'],
      replyTo: email,
      subject: `Novo Contato do Site: ${name}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { error: 'Falha ao enviar e-mail. Por favor, tente novamente mais tarde.' };
  }
}
