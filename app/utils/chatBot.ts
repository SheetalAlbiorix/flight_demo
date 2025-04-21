import axios from 'axios';

const getBotResponse = async (userMessage) => {
  const response = await axios.post(
    'https://api.openai.com/v1/completions',
    {
      model: 'gpt-4',
      prompt: `User's question: ${userMessage}`,
      max_tokens: 150,
      temperature: 0.7,
    },
    {
      headers: {
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data.choices[0].text;
};
