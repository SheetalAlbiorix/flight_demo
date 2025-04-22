import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useChatbot} from '@hooks/useChatbot';

const ChatBot = () => {
  const {messages, loading, predefinedQuestions, sendMessage} = useChatbot();
  const [input, setInput] = useState('');

  const handlePredefinedQuestion = (question: string) => {
    setInput(question);
    sendMessage(question);
  };

  const handleSend = () => {
    sendMessage(input);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.suggestionsContainer}
        contentContainerStyle={styles.suggestionsContent}>
        {predefinedQuestions.map((question, index) => (
          <TouchableOpacity
            key={index}
            style={styles.suggestionButton}
            onPress={() => handlePredefinedQuestion(question)}>
            <Text style={styles.suggestionText}>{question}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <Text
            style={[
              styles.message,
              item.role === 'user' ? styles.userMessage : styles.botMessage,
            ]}>
            {item.content}
          </Text>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Ask something..."
        />
        <Button
          title={loading ? 'Sending...' : 'Send'}
          onPress={handleSend}
          disabled={loading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, backgroundColor: '#F0F8FF'},
  message: {marginVertical: 6, padding: 10, borderRadius: 6, maxWidth: '80%'},
  userMessage: {backgroundColor: '#FFE0B2', alignSelf: 'flex-end'},
  botMessage: {backgroundColor: '#DFF6FF', alignSelf: 'flex-start'},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginRight: 10,
  },
  suggestionsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    maxHeight: 50,
    backgroundColor: '#E6F7FF',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  suggestionsContent: {
    alignItems: 'center',
  },
  suggestionButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 8,
  },
  suggestionText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ChatBot;
