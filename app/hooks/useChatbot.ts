import {useState} from 'react';
import axios from 'axios';

const OPENAI_API_KEY =
  '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';

export const useChatbot = () => {
  const [messages, setMessages] = useState<{role: string; content: string}[]>([
    {role: 'bot', content: 'Hi! Ask me about your flights. ✈️'},
  ]);
  const [loading, setLoading] = useState(false);

  const predefinedQuestions = [
    'What is my next flight?',
    'Can you provide details about my flight?',
    'What is the departure time for my flight?',
    'What is the arrival time for my flight?',
    'Are there any delays in my flight schedule?',
  ];

  const sendMessage = async (input: string) => {
    if (!input.trim()) return;

    const userMessage = {role: 'user', content: input};
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {role: 'system', content: 'You are a helpful assistant.'},
            ...updatedMessages,
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        },
      );

      const botReply = response.data.choices[0].message;
      setMessages(prev => [...prev, botReply]);
    } catch (error: any) {
      console.error('Error sending message:', error);
      const errorMessage =
        error.response?.data?.error?.message ||
        'Sorry, I couldn’t get a response. Please try again shortly.';
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content: errorMessage,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    predefinedQuestions,
    sendMessage,
  };
};
