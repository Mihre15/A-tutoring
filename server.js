import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
console.log("SMTP host:", process.env.SMTP_HOST);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create transporter using SES SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { parent, children, tutorial, extra, estimate, contact } = req.body;

  try {
    // ===== CONTACT PAGE =====
    if (contact) {
      const { name, email, message } = contact;

      const contactMail = {
        from: "tesfayemihretab399@gmail.com", // use verified sender
        replyTo: email, // allows replying directly to user
        to: "mirokweb@gmail.com",
        subject: `New Contact Message from ${name}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };

      await transporter.sendMail(contactMail);
      return res.json({ success: true });
    }

    // ===== FORM PAGE =====
    const html = `
      <h2>New Tutorial Registration</h2>
      <h3>Parent Information</h3>
      <p><strong>Name:</strong> ${parent.name}</p>
      <p><strong>Phone:</strong> ${parent.phone1}</p>
      <p><strong>Email:</strong> ${parent.phone2}</p>
      <p><strong>Address:</strong> ${parent.address}</p>

      <h3>Children</h3>
      <ul>
        ${children
          .map(
            (c, i) =>
              `<li><strong>Child ${i + 1}:</strong> ${c.name}, ${c.age} yrs, ${c.gender}, Grade ${c.grade}, School: ${c.school}</li>`
          )
          .join("")}
      </ul>

      <h3>Tutorial Details</h3>
      <p><strong>Days/Week:</strong> ${tutorial.daysPerWeek}</p>
      <p><strong>Hours/Day:</strong> ${tutorial.hoursPerDay}</p>
      <p><strong>Subject:</strong> ${tutorial.subject}</p>
      <p><strong>Extra Info:</strong> ${extra}</p>
      <h3>Estimate: ${estimate} birr</h3>
    `;

    const mailOptions = {
      from: "tesfayemihretab399@gmail.com",
      to: "mirokweb@gmail.com",
      subject: "New Tutorial Registration Submission",
      html,
    };

    
    await transporter.sendMail(mailOptions);
    res.json({ success: true });

  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
