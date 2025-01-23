import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    // Obtener el cuerpo de la solicitud
    const body = await request.json();
    const { to, from, html, subject, text } = body;

    // Validar los campos requeridos
    if (!to || !from || !html || !subject || !text) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
          missingFields: {
            to: !to,
            from: !from,
            html: !html,
            subject: !subject,
            text: !text,
          },
        }),
        {
          status: 400,
          headers,
        }
      );
    }

    // Enviar el correo
    const response = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
    });

    // Responder con éxito
    return new Response(
      JSON.stringify({
        message: "Email sent successfully",
        data: response,
      }),
      {
        status: 200,
        headers,
      }
    );
  } catch (error: any) {
    // Manejar errores de envío
    return new Response(
      JSON.stringify({
        message: "Failed to send email",
        error: error.message || "Unknown error",
        details: error.response || null, // Capturar detalles específicos si están disponibles
      }),
      {
        status: 500,
        headers,
      }
    );
  }
};
