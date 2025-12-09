import { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('Preciso de ajuda com vendas');
  const [history, setHistory] = useState<string[]>([]);

  const send = () => {
    setHistory((prev) => [`Norah Lite: resposta rápida para "${message}"`, ...prev]);
  };

  return (
    <SafeAreaView style={{ padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Norah Lite</Text>
      <Text style={{ marginBottom: 12 }}>Assistente comercial minimalista.</Text>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Pergunte qualquer coisa"
        style={{ borderWidth: 1, padding: 8 }}
      />
      <Button title="Enviar" onPress={send} />
      <ScrollView style={{ marginTop: 16, height: 200 }}>
        {history.map((entry, index) => (
          <Text key={index}>{entry}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
