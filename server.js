import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

dotenv.config();

const app = express();
aapp.use(cors({
  origin: ["https://your-frontend.vercel.app"], 
  credentials: true
}));

app.use(bodyParser.json());

// Create SES client
const ses = new SESClient({ region: "us-east-1" }); // change if your SES region differs

app.post("/send-email", async (req, res) => {
  const { parent, children, tutorial, extra, estimate, contact } = req.body;

  try {
    let subject, bodyHtml;

    if (contact) {
      const { name, email, message } = contact;
      subject = `New Contact Message from ${name}`;
      bodyHtml = `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `;
    } else {
      subject = "New Tutorial Registration Submission";
      bodyHtml = `
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
    }

    const emailParams = {
      Source: "tesfayemihretab399@gmail.com", // must be verified in SES
      Destination: {
        ToAddresses: ["mirokweb@gmail.com"], // recipient (verify if still in sandbox)
      },
      Message: {
        Subject: { Data: subject },
        Body: { Html: { Data: bodyHtml } },
      },
      ReplyToAddresses: contact ? [contact.email] : [],
    };

    await ses.send(new SendEmailCommand(emailParams));
    res.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
