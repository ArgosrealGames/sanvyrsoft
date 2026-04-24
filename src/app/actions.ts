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
    console.log(`Tentando enviar email de: ${email} para Sanvyrsoft e Lionscript...`);
    
    const response = await resend.emails.send({
      from: 'Sanvyrsoft <contact@sanvyrsoft.com>',
      to: ['contact@sanvyrsoft.com', 'help@lionscript.com'],
      replyTo: email,
      subject: `Novo Contato do Site: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Nova mensagem de contato</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <hr/>
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (response.error) {
      console.error('Erro retornado pelo Resend:', response.error);
      return { error: `Erro no serviço de email: ${response.error.message}` };
    }

    console.log('Email enviado com sucesso:', response.data);
    return { success: true };
  } catch (error: any) {
    console.error('Erro catastrófico ao enviar email:', error);
    return { error: 'Falha técnica ao enviar e-mail. Por favor, tente novamente mais tarde.' };
  }
}
