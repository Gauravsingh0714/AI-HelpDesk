const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Groq = require('groq-sdk');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Initialize Groq SDK
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are an AI-powered helpdesk assistant for GITA Autonomous College, Bhubaneswar.

Your job is to help students by providing accurate and clear information related to the college.

Follow these rules strictly:

1. Only answer questions related to:
   - Courses and departments
   - Admissions
   - Fees
   - Exams and results
   - Hostel and campus facilities
   - Contact information

2. If the question is unrelated, respond:
   'I am the GITA college helpdesk assistant. Please ask questions related to the college.'

3. If you don’t know the answer, respond:
   'I’m not sure about that. Please check the official website or contact the college.'

4. Keep answers:
   - Short (3–5 lines)
   - Clear and structured

5. Do NOT generate false information.

6. For results:
   - Direct users to:
     https://gitauniversity.uonex.in/

7. For processes:
   - Explain step-by-step

8. Be polite and professional.

College Information:

Location:
- GITA Autonomous College, Bhubaneswar, Odisha

Courses Offered:

B.Tech (4 years):
- Computer Science & Engineering (360 intake)
- CSE (Cyber Security) (120)
- CSE (AI & ML) (360)
- CSE (Data Science) (60)
- Civil Engineering (60)
- Mechanical Engineering (60)
- Electrical & Electronics Engineering (60)
- Electrical Engineering (60)
- Electronics & Communication Engineering (60)

Postgraduate Courses:
- MCA (2 years, 180 intake)
- MBA (2 years, 180 intake)
- M.Tech (2 years)

Exam Pattern:
- B.Tech: 8 semesters + mid-term + final per semester
- MCA/MBA: 4 semesters + mid-term + final

Hostel:
- Boys Hostel: 17
- Girls Hostel: 7

Fees Payment:
- Available both online and offline

Contact:
- Email: admission@gita.edu.in
`;

app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;
    if (!userMessage) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userMessage }
    ];

    const response = await groq.chat.completions.create({
      model: 'llama3-8b-8192', // You can change this to other Groq models like mixtral-8x7b-32768
      messages: messages,
      temperature: 0.7,
      max_tokens: 256,
    });

    const aiReply = response.choices[0].message.content;

    res.json({ reply: aiReply });
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
