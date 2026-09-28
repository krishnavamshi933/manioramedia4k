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
      process.env.RESEND_FROM_EMAIL_CAREERS ||
      process.env.RESEND_FROM_EMAIL ||
      "no-reply@4kmedia.in";
    const rawTo = process.env.RESEND_CAREERS_TO_EMAIL || "team@4kmedia.in";

    const FROM_EMAIL = formatSender(rawFrom, "4K Media Careers");
    const TO_EMAIL = rawTo.trim();

    const body = await req.json();
    const { fullName, email, phone, portfolio, role, resume, time } = body;

    if (!fullName || !email || !phone || !portfolio || !role || !resume) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const targetEmail = String(email).trim().toLowerCase();
    const safeFullName = escapeHtml(fullName.trim());
    const safeEmail = escapeHtml(targetEmail);
    const safePhone = escapeHtml(phone.trim());
    const safePortfolio = escapeHtml(portfolio.trim());
    const safeRole = escapeHtml(role.trim());
    const safeResume = escapeHtml(resume.trim());
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

    // 1. Team / Hiring Manager Notification Email
    const teamEmailPromise = resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: targetEmail,
      subject: `New Job Application — ${safeRole} from ${safeFullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Job Application</title>
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
                          <span style="font-size: 18px; font-weight: 800; letter-spacing: 1px; color: #ffffff;">4K <span style="color: #f7e839;">CAREERS</span></span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="vertical-align: middle; text-align: right;">
                    <span style="display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #111827; background: #f7e839; padding: 4px 12px; border-radius: 20px;">
                      Job Application
                    </span>
                  </td>
                </tr>
              </table>
              <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">New Applicant: ${safeFullName}</h1>
              <p style="margin: 6px 0 0; font-size: 13px; color: #94a3b8;">Submitted for <strong style="color: #f7e839;">${safeRole}</strong> &bull; ${displayTime}</p>
            </div>

            <!-- Content -->
            <div style="padding: 32px 36px;">
              <div style="display: inline-block; background: rgba(247, 232, 57, 0.1); border: 1px solid rgba(247, 232, 57, 0.3); color: #f7e839; font-size: 13px; font-weight: 700; padding: 6px 16px; border-radius: 20px; margin-bottom: 24px; letter-spacing: 0.5px;">
                Target Role: ${safeRole}
              </div>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px; width: 130px;">Applicant</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #ffffff; font-size: 14px; font-weight: 600;">${safeFullName}</td>
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
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px;">Portfolio URL</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #ffffff; font-size: 14px;"><a href="${safePortfolio}" target="_blank" style="color: #f7e839; text-decoration: none; word-break: break-all;">${safePortfolio} ↗</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px;">Resume / CV</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e2a38; color: #ffffff; font-size: 14px;"><a href="${safeResume}" target="_blank" style="color: #f7e839; text-decoration: none; word-break: break-all;">View Resume Link ↗</a></td>
                </tr>
              </table>

              <!-- Action CTAs -->
              <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 24px;">
                <a href="${safeResume}" target="_blank" style="display: inline-block; background: #f7e839; color: #0a0f15; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 8px; text-decoration: none; letter-spacing: 0.4px;">
                  Open Resume →
                </a>
                <a href="mailto:${safeEmail}?subject=Regarding your application for ${safeRole} at 4K Media" style="display: inline-block; background: #1a2536; color: #ffffff; font-weight: 600; font-size: 14px; padding: 12px 24px; border-radius: 8px; text-decoration: none; border: 1px solid #2d3e56;">
                  Reply to Candidate
                </a>
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
                    <span style="font-size: 12px; font-weight: 700; color: #cbd5e1; letter-spacing: 0.5px;">4K MEDIA CAREERS</span>
                  </td>
                </tr>
              </table>
              <p style="margin: 0; font-size: 12px; color: #64748b;">4K Media Talent Acquisition System • <a href="https://www.4kmedia.in" style="color: #f7e839; text-decoration: none;">4kmedia.in</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // 2. Candidate Immediate Auto-Reply / Application Confirmation Email
    const candidateEmailPromise = resend.emails.send({
      from: FROM_EMAIL,
      to: [targetEmail],
      replyTo: TO_EMAIL,
      subject: `Application Received: ${safeRole} at 4K Media`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Application Received — 4K Media</title>
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
                      4K <span style="color: #f7e839;">CAREERS</span>
                    </div>
                    <div style="margin-top: 4px; font-size: 11px; font-weight: 600; color: #94a3b8; letter-spacing: 1.5px; text-transform: uppercase;">
                      Talent &amp; Culture
                    </div>
                  </td>
                </tr>
              </table>
              <p style="margin: 14px 0 0; font-size: 13px; color: #94a3b8; letter-spacing: 0.5px;">Building The Future of Visual Storytelling</p>
            </div>

            <!-- Main Body -->
            <div style="padding: 36px 40px;">
              <h2 style="margin: 0 0 16px; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px;">
                Hi ${safeFullName},
              </h2>
              <p style="margin: 0 0 18px; font-size: 15px; line-height: 1.7; color: #cbd5e1;">
                Thank you for applying to <strong style="color: #ffffff;">4K Media</strong>! We have successfully received your application for the <span style="color: #f7e839; font-weight: 700;">${safeRole}</span> position.
              </p>
              <p style="margin: 0 0 28px; font-size: 14px; line-height: 1.7; color: #94a3b8;">
                We are thrilled that you want to bring your talent, craft, and creative vision to our studio.
              </p>

              <!-- Application Summary Card -->
              <div style="background: #0f1622; border-radius: 10px; border: 1px solid #1e2a38; padding: 22px 24px; margin-bottom: 28px;">
                <p style="margin: 0 0 14px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #f7e839; font-weight: 700;">
                  Application Details
                </p>
                <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8; width: 120px;">Role:</td>
                    <td style="padding: 6px 0; color: #ffffff; font-weight: 600;">${safeRole}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8;">Applicant:</td>
                    <td style="padding: 6px 0; color: #ffffff;">${safeFullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8;">Portfolio:</td>
                    <td style="padding: 6px 0;"><a href="${safePortfolio}" target="_blank" style="color: #f7e839; text-decoration: none;">View Submitted Portfolio ↗</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8;">Resume:</td>
                    <td style="padding: 6px 0;"><a href="${safeResume}" target="_blank" style="color: #f7e839; text-decoration: none;">View Submitted Resume ↗</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8;">Submitted on:</td>
                    <td style="padding: 6px 0; color: #cbd5e1;">${displayTime}</td>
                  </tr>
                </table>
              </div>

              <!-- Roadmap / What's Next -->
              <div style="background: #0a111a; border-left: 3px solid #f7e839; border-radius: 4px; padding: 18px 20px; margin-bottom: 28px;">
                <p style="margin: 0 0 10px; font-size: 13px; font-weight: 700; color: #ffffff;">What happens next in our hiring process?</p>
                <ol style="margin: 0; padding-left: 20px; color: #94a3b8; font-size: 13px; line-height: 1.8;">
                  <li><strong style="color: #cbd5e1;">Portfolio &amp; Reel Review:</strong> Our department leads review your portfolio, showreel, and relevant project work.</li>
                  <li><strong style="color: #cbd5e1;">Introductory Call:</strong> If there is a strong alignment with our active pipeline, our recruitment team will schedule a 20-minute chat.</li>
                  <li><strong style="color: #cbd5e1;">Creative Interview:</strong> A deep-dive session to discuss past challenges, technical workflow, and future ambitions.</li>
                </ol>
              </div>

              <!-- Contact & Reassurance -->
              <p style="margin: 0 0 24px; font-size: 13px; color: #94a3b8; line-height: 1.6;">
                Need to update your portfolio link, resume, or have an inquiry? Simply reply directly to this email or write to <a href="mailto:${TO_EMAIL}" style="color: #f7e839; text-decoration: none;">${TO_EMAIL}</a>.
              </p>

              <!-- CTA -->
              <div style="text-align: center; margin-top: 32px;">
                <a href="https://www.4kmedia.in" style="display: inline-block; background: #f7e839; color: #0a0f15; font-weight: 700; font-size: 14px; padding: 12px 30px; border-radius: 8px; text-decoration: none; letter-spacing: 0.4px;">
                  Explore 4K Media Projects →
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
                    <span style="font-size: 13px; font-weight: 700; color: #cbd5e1; letter-spacing: 0.5px;">4K MEDIA CAREERS</span>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 12px; font-size: 12px; color: #64748b;">Hyderabad, India • Creative &amp; Production Studio</p>
              <p style="margin: 0; font-size: 11px; color: #475569;">
                &copy; ${new Date().getFullYear()} 4K Media. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    const [teamResult, candidateResult] = await Promise.allSettled([
      teamEmailPromise,
      candidateEmailPromise,
    ]);

    let teamSuccess = false;
    let candidateSuccess = false;
    let teamError: string | null = null;
    let candidateError: string | null = null;
    let teamId: string | undefined;
    let candidateId: string | undefined;

    if (teamResult.status === "fulfilled") {
      if (teamResult.value.error) {
        teamError = teamResult.value.error.message;
        console.error("Resend error sending careers team notification:", teamResult.value.error);
      } else {
        teamSuccess = true;
        teamId = teamResult.value.data?.id;
      }
    } else {
      teamError = teamResult.reason?.message || "Failed to send careers team notification";
      console.error("Resend exception sending careers team notification:", teamResult.reason);
    }

    if (candidateResult.status === "fulfilled") {
      if (candidateResult.value.error) {
        candidateError = candidateResult.value.error.message;
        console.warn("Resend error sending candidate auto-reply:", candidateResult.value.error);
      } else {
        candidateSuccess = true;
        candidateId = candidateResult.value.data?.id;
      }
    } else {
      candidateError = candidateResult.reason?.message || "Failed to send candidate auto-reply";
      console.warn("Resend exception sending candidate auto-reply:", candidateResult.reason);
    }

    // If primary team notification failed, respond with 500 so client fallback can trigger
    if (!teamSuccess) {
      return NextResponse.json(
        { error: teamError || "Failed to deliver job application email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: teamId,
        autoReplySent: candidateSuccess,
        candidateEmailId: candidateId,
        warning: candidateError ? `Auto-reply note: ${candidateError}` : undefined,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Careers email error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

