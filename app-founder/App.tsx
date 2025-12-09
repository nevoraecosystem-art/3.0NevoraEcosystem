import { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, ScrollView } from 'react-native';

const TOKEN = '0001rui0002alice0003pedro0004arthur0001rui0002alice0003pedro0004arthur';

export default function App() {
  const [command, setCommand] = useState('SOU FUNDADOR');
  const [token, setToken] = useState('');
  const [log, setLog] = useState<string[]>([]);

  const activate = () => {
    const authorized = command.toLowerCase() === 'sou fundador' && token === TOKEN;
    setLog((prev) => [
      `Comando: ${command}`,
      authorized ? 'Founder liberado. Dashboard invisível ativo.' : 'Token inválido.',
      ...prev,
    ]);
  };

  return (
    <SafeAreaView style={{ padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Founder Control</Text>
      <TextInput
        value={command}
        onChangeText={setCommand}
        style={{ borderWidth: 1, marginTop: 12, padding: 8 }}
      />
      <TextInput
        value={token}
        onChangeText={setToken}
        placeholder="Token"
        style={{ borderWidth: 1, marginTop: 12, padding: 8 }}
      />
      <Button title="Ativar" onPress={activate} />
      <ScrollView style={{ marginTop: 16, height: 200 }}>
        {log.map((entry, index) => (
          <Text key={index}>{entry}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
