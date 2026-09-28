import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string): string {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatSender(emailOrFormatted: string, defaultName: string): string {
  const trimmed = emailOrFormatted.trim();
  if (trimmed.includes("<") && trimmed.includes(">")) {
    return trimmed;
  }
  return `${defaultName} <${trimmed}>`;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not set.");
      return NextResponse.json(
        { error: "Email service is not configured (missing API key)." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const rawFrom =
      process.env.RESEND_FROM_EMAIL_CONTACT ||
      process.env.RESEND_FROM_EMAIL ||
      "team@4kmedia.in";
    const rawTo = process.env.RESEND_CONTACT_TO_EMAIL || "team@4kmedia.in";

    const FROM_EMAIL = formatSender(rawFrom, "4K Media");
    const TO_EMAIL = rawTo.trim();

    const body = await req.json();
    const { name, email, phone, location, website, service, subService, message, time } = body;

    if (!name || !email || !phone || !location || !service || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const targetEmail = String(email).trim().toLowerCase();
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(targetEmail);
    const safePhone = escapeHtml(phone.trim());
    const safeLocation = escapeHtml(location.trim());
    const safeWebsite = website ? escapeHtml(website.trim()) : "";
    const safeService = escapeHtml(service.trim());
    const safeSubService = subService ? escapeHtml(subService.trim()) : "";
    const safeMessage = escapeHtml(message.trim());
    const displayTime =
      time ||
      new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      });

    const LOGO_URL = process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "")}/assets/33.png`
      : "https://www.4kmedia.in/assets/33.png";

    // 1. Admin / Team Notification Email
    const teamEmailPromise = resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: targetEmail,
      subject: `New Contact Inquiry from ${safeName} — ${safeService}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Inquiry</title>
        </head>
        <body style="margin: 0; padding: 24px 12px; background-color: #05080c; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background: #0a0f15; color: #e2e8f0; border-radius: 14px; overflow: hidden; border: 1px solid #1e2a38; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #101722 0%, #1a2536 100%); padding: 30px 36px; border-bottom: 2px solid #f7e839;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
                <tr>
                  <td style="vertical-align: middle;">
                    <table style="border-collapse: collapse;">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 12px;">
                          <img src="${LOGO_URL}" alt="4K Media" width="40" height="40" style="display: block; width: 40px; height: 40px; border-radius: 8px; border: 1px solid rgba(247, 232, 57, 0.4); background: #0a0c10; object-fit: contain;" />
                        </td>
                        <td style="vertical-align: middle;">
                          <span style="font-size: 18px; font-weight: 800; letter-spacing: 1px; color: #ffffff;">4K <span style="color: #f7e839;">MEDIA</span></span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="vertical-align: middle; text-align: right;">
                    <span style="display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #f7e839; background: rgba(247, 232, 57, 0.12); padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(247, 232, 57, 0.3);">
                      New Inquiry
                    </span>
                  </td>
                </tr>
              </table>
              <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">Contact Inquiry Received</h1>
              <p style="margin: 6px 0 0; font-size: 13px; color: #94a3b8;">Received on ${displayTime} via 4kmedia.in/contact</p>
            </div>

            <!-- Content -->
            <div style="padding: 32px 36px;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px; width: 130px;">Name</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #ffffff; font-size: 14px; font-weight: 600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px;">Email</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #ffffff; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #f7e839; text-decoration: none;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px;">Phone</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #ffffff; font-size: 14px;"><a href="tel:${safePhone}" style="color: #ffffff; text-decoration: none;">${safePhone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px;">Location</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #ffffff; font-size: 14px;">${safeLocation}</td>
                </tr>
                ${
                  safeWebsite
                    ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px;">Website</td><td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #ffffff; font-size: 14px;"><a href="${safeWebsite}" style="color: #f7e839; text-decoration: none;" target="_blank">${safeWebsite}</a></td></tr>`
                    : ""
                }
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px;">Service</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #f7e839; font-size: 14px; font-weight: 600;">${safeService}</td>
                </tr>
                ${
                  safeSubService
                    ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px;">Requirement</td><td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #ffffff; font-size: 14px;">${safeSubService}</td></tr>`
                    : ""
                }
              </table>

              <!-- Message -->
              <div style="margin-bottom: 28px;">
                <p style="margin: 0 0 10px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px;">Client Message</p>
                <div style="background: #111824; border-left: 3px solid #f7e839; border-radius: 6px; padding: 18px 20px; color: #e2e8f0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</div>
              </div>

              <!-- Action button -->
              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${safeEmail}?subject=Re: Inquiry with 4K Media — ${safeService}" style="display: inline-block; background: #f7e839; color: #0a0f15; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 8px; text-decoration: none; letter-spacing: 0.4px;">Reply to Client →</a>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding: 20px 36px; background: #060a0f; border-top: 1px solid #1e2a38; text-align: center;">
              <table align="center" style="margin: 0 auto 8px; border-collapse: collapse;">
                <tr>
                  <td style="vertical-align: middle; padding-right: 8px;">
                    <img src="${LOGO_URL}" alt="4K Media" width="20" height="20" style="display: block; width: 20px; height: 20px; border-radius: 4px;" />
                  </td>
                  <td style="vertical-align: middle;">
                    <span style="font-size: 12px; font-weight: 700; color: #cbd5e1; letter-spacing: 0.5px;">4K MEDIA</span>
                  </td>
                </tr>
              </table>
              <p style="margin: 0; font-size: 12px; color: #64748b;">4K Media Notification System • <a href="https://www.4kmedia.in" style="color: #f7e839; text-decoration: none;">4kmedia.in</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // 2. Immediate Confirmation / Auto-Reply Email to Submitter
    const userEmailPromise = resend.emails.send({
      from: FROM_EMAIL,
      to: [targetEmail],
      replyTo: TO_EMAIL,
      subject: `Thank you for contacting 4K Media, ${safeName}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>We Received Your Message — 4K Media</title>
        </head>
        <body style="margin: 0; padding: 24px 12px; background-color: #05080c; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background: #0a0f15; color: #e2e8f0; border-radius: 14px; overflow: hidden; border: 1px solid #1e2a38; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            
            <!-- Brand Banner -->
            <div style="background: linear-gradient(135deg, #0d131c 0%, #151f2d 100%); padding: 36px 40px; border-bottom: 2px solid #f7e839; text-align: center;">
              <table align="center" style="margin: 0 auto; border-collapse: collapse;">
                <tr>
                  <td style="vertical-align: middle; padding-right: 14px;">
                    <img src="${LOGO_URL}" alt="4K Media Logo" width="48" height="48" style="display: block; width: 48px; height: 48px; border-radius: 10px; border: 2px solid rgba(247, 232, 57, 0.4); background: #0a0c10; object-fit: contain;" />
                  </td>
                  <td style="vertical-align: middle; text-align: left;">
                    <div style="font-size: 24px; font-weight: 900; letter-spacing: 2px; color: #ffffff; text-transform: uppercase; line-height: 1;">
                      4K <span style="color: #f7e839;">MEDIA</span>
                    </div>
                    <div style="margin-top: 4px; font-size: 11px; font-weight: 600; color: #94a3b8; letter-spacing: 1.5px; text-transform: uppercase;">
                      Creative Studio
                    </div>
                  </td>
                </tr>
              </table>
              <p style="margin: 14px 0 0; font-size: 13px; color: #94a3b8; letter-spacing: 0.5px;">High-Impact Visuals &amp; Production Studio</p>
            </div>

            <!-- Main Body -->
            <div style="padding: 36px 40px;">
              <h2 style="margin: 0 0 16px; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px;">
                Hello ${safeName},
              </h2>
              <p style="margin: 0 0 18px; font-size: 15px; line-height: 1.7; color: #cbd5e1;">
                Thank you for reaching out to <strong style="color: #ffffff;">4K Media</strong>! We have received your inquiry regarding <span style="color: #f7e839; font-weight: 600;">${safeService}</span>.
              </p>
              <p style="margin: 0 0 28px; font-size: 14px; line-height: 1.7; color: #94a3b8;">
                Our creative directors and production team are currently reviewing your project details. We typically respond within <strong style="color: #e2e8f0;">24 business hours</strong> to discuss concepts, timelines, and next steps.
              </p>

              <!-- Inquiry Summary Box -->
              <div style="background: #0f1622; border-radius: 10px; border: 1px solid #1e2a38; padding: 22px 24px; margin-bottom: 28px;">
                <p style="margin: 0 0 14px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #f7e839; font-weight: 700;">
                  Summary of Your Inquiry
                </p>
                <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8; width: 120px;">Service:</td>
                    <td style="padding: 6px 0; color: #f1f5f9; font-weight: 600;">${safeService}</td>
                  </tr>
                  ${
                    safeSubService
                      ? `<tr><td style="padding: 6px 0; color: #94a3b8;">Requirement:</td><td style="padding: 6px 0; color: #f1f5f9;">${safeSubService}</td></tr>`
                      : ""
                  }
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8;">Location:</td>
                    <td style="padding: 6px 0; color: #f1f5f9;">${safeLocation}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8; vertical-align: top;">Your Message:</td>
                    <td style="padding: 6px 0; color: #cbd5e1; font-style: italic;">&ldquo;${safeMessage}&rdquo;</td>
                  </tr>
                </table>
              </div>

              <!-- Next Steps -->
              <div style="background: #0a111a; border-left: 3px solid #f7e839; border-radius: 4px; padding: 18px 20px; margin-bottom: 28px;">
                <p style="margin: 0 0 8px; font-size: 13px; font-weight: 700; color: #ffffff;">What happens next?</p>
                <ol style="margin: 0; padding-left: 20px; color: #94a3b8; font-size: 13px; line-height: 1.8;">
                  <li><strong style="color: #cbd5e1;">Review:</strong> We analyze your goals, visual requirements, and reference points.</li>
                  <li><strong style="color: #cbd5e1;">Connect:</strong> A producer from our team will reach out directly via email or phone.</li>
                  <li><strong style="color: #cbd5e1;">Proposal:</strong> We present tailored creative ideas, timelines, and pricing.</li>
                </ol>
              </div>

              <!-- Urgent notice -->
              <p style="margin: 0 0 24px; font-size: 13px; color: #94a3b8; line-height: 1.6;">
                Have urgent deadlines or need immediate support? Feel free to reply directly to this email or reach us at <a href="mailto:${TO_EMAIL}" style="color: #f7e839; text-decoration: none;">${TO_EMAIL}</a>.
              </p>

              <!-- CTA -->
              <div style="text-align: center; margin-top: 32px;">
                <a href="https://www.4kmedia.in" style="display: inline-block; background: #f7e839; color: #0a0f15; font-weight: 700; font-size: 14px; padding: 12px 30px; border-radius: 8px; text-decoration: none; letter-spacing: 0.4px;">
                  Explore Our Work at 4kmedia.in →
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding: 24px 40px; background: #060a0f; border-top: 1px solid #1e2a38; text-align: center;">
              <table align="center" style="margin: 0 auto 10px; border-collapse: collapse;">
                <tr>
                  <td style="vertical-align: middle; padding-right: 8px;">
                    <img src="${LOGO_URL}" alt="4K Media" width="24" height="24" style="display: block; width: 24px; height: 24px; border-radius: 4px;" />
                  </td>
                  <td style="vertical-align: middle;">
                    <span style="font-size: 13px; font-weight: 700; color: #cbd5e1; letter-spacing: 0.5px;">4K MEDIA STUDIO</span>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 12px; font-size: 12px; color: #64748b;">Hyderabad, India • High-End Production &amp; Creative Agency</p>
              <p style="margin: 0; font-size: 11px; color: #475569;">
                &copy; ${new Date().getFullYear()} 4K Media. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    const [teamResult, userResult] = await Promise.allSettled([
      teamEmailPromise,
      userEmailPromise,
    ]);

    let teamSuccess = false;
    let userSuccess = false;
    let teamError: string | null = null;
    let userError: string | null = null;
    let teamId: string | undefined;
    let userId: string | undefined;

    if (teamResult.status === "fulfilled") {
      if (teamResult.value.error) {
        teamError = teamResult.value.error.message;
        console.error("Resend error sending team notification:", teamResult.value.error);
      } else {
        teamSuccess = true;
        teamId = teamResult.value.data?.id;
      }
    } else {
      teamError = teamResult.reason?.message || "Failed to send team notification";
      console.error("Resend exception sending team notification:", teamResult.reason);
    }

    if (userResult.status === "fulfilled") {
      if (userResult.value.error) {
        userError = userResult.value.error.message;
        console.warn("Resend error sending submitter auto-reply:", userResult.value.error);
      } else {
        userSuccess = true;
        userId = userResult.value.data?.id;
      }
    } else {
      userError = userResult.reason?.message || "Failed to send submitter auto-reply";
      console.warn("Resend exception sending submitter auto-reply:", userResult.reason);
    }

    // If the primary team notification failed, respond with 500 so fallback systems can trigger
    if (!teamSuccess) {
      return NextResponse.json(
        { error: teamError || "Failed to deliver contact inquiry email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: teamId,
        autoReplySent: userSuccess,
        userEmailId: userId,
        warning: userError ? `Auto-reply note: ${userError}` : undefined,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Contact email error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

