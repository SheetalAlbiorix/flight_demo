import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, ScrollView } from 'react-native';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me about your flights. ✈️' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { sender: 'user', text: input };
    const botReply = {
      sender: 'bot',
      text: "I'm checking your flights... 🧠 (This would be connected to OpenAI)",
    };
    setMessages([...messages, newMessage, botReply]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chat}>
        {messages.map((msg, i) => (
          <Text key={i} style={msg.sender === 'bot' ? styles.botText : styles.userText}>
            {msg.text}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Ask me anything..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#F0F8FF' },
  chat: { flex: 1, marginBottom: 10 },
  inputRow: { flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, borderColor: '#ccc', borderWidth: 1, padding: 8, borderRadius: 8, marginRight: 8 },
  botText: { backgroundColor: '#DFF6FF', padding: 10, borderRadius: 10, marginVertical: 4 },
  userText: { backgroundColor: '#FFE0B2', padding: 10, borderRadius: 10, alignSelf: 'flex-end', marginVertical: 4 },
});

export default ChatBot;
