'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const sector = (formData.get('sector') as string) || 'Geral';
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Por favor, preencha todos os campos obrigatórios.' };
  }

  try {
    console.log(`Tentando enviar email de: ${email} [${sector}] para Sanvyrsoft e Lionscript...`);
    
    const response = await resend.emails.send({
      from: 'Sanvyrsoft <contact@sanvyrsoft.com>',
      to: ['contact@sanvyrsoft.com', 'help@lionscript.com'],
      replyTo: email,
      subject: `[Sanvyrsoft - ${sector}] Novo Contato: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #0f172a; padding: 22px; text-align: center; color: #06b6d4;">
            <h2 style="margin: 0; font-size: 20px;">Novo Contato - Sanvyrsoft.com</h2>
            <p style="margin: 5px 0 0 0; font-size: 13px; color: #94a3b8;">Setor: ${sector}</p>
          </div>
          <div style="padding: 25px; color: #334155;">
            <p style="margin-top: 0;"><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> <a href="mailto:${email}" style="color: #06b6d4;">${email}</a></p>
            <p><strong>Setor Selecionado:</strong> <span style="background-color: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 4px; font-weight: bold;">${sector}</span></p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;"/>
            <p><strong>Mensagem:</strong></p>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #06b6d4; white-space: pre-wrap; font-size: 14px; color: #1e293b;">${message}</div>
          </div>
          <div style="background-color: #f1f5f9; padding: 12px 25px; font-size: 0.8rem; color: #64748b; text-align: center;">
            Mensagem enviada através do formulário de contato de sanvyrsoft.com
          </div>
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
    console.error('Erro ao enviar email:', error);
    return { error: 'Falha técnica ao enviar e-mail. Por favor, tente novamente mais tarde.' };
  }
}
