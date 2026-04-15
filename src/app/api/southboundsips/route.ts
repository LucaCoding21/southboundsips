import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const {
    email,
    name,
    phone,
    date,
    eventType,
    guests,
    services,
    message,
    source,
  } = body;

  if (!email) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 }
    );
  }

  const lines: string[] = [];

  if (name) lines.push(`Name: ${name}`);
  lines.push(`Email: ${email}`);
  if (phone) lines.push(`Phone: ${phone}`);
  if (date) lines.push(`Event Date: ${date}`);
  if (eventType) lines.push(`Event Type: ${eventType}`);
  if (guests) lines.push(`Estimated Guests: ${guests}`);
  if (services) lines.push(`Services Interested In: ${services}`);
  if (message) {
    lines.push("");
    lines.push("Message:");
    lines.push(message);
  }
  if (source) {
    lines.push("");
    lines.push(`Form Source: ${source}`);
  }

  const textBody = [
    "New inquiry from the South Bound Sips website.",
    "",
    ...lines,
  ].join("\n");

  const { data, error } = await resend.emails.send({
    from: "South Bound Sips <southboundsips@cloverfield.studio>",
    to: ["events@southboundsips.com", "nguyen.william0121@gmail.com"],
    subject: `South Bound Sips — New Inquiry from ${email}`,
    replyTo: email,
    text: textBody,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, id: data?.id });
}
