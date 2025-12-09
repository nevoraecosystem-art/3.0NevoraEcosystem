import { useState } from 'react';
import axios from 'axios';

export default function FounderPage() {
  const [command, setCommand] = useState('SOU FUNDADOR');
  const [token, setToken] = useState('');
  const [result, setResult] = useState<any>(null);

  const activate = async () => {
    const { data } = await axios.post('/api/founder/activate', { command, token });
    setResult(data);
  };

  return (
    <div>
      <h2>Ativação Founder</h2>
      <input value={command} onChange={(e) => setCommand(e.target.value)} />
      <input value={token} onChange={(e) => setToken(e.target.value)} placeholder="Token" />
      <button onClick={activate}>Ativar</button>
      {result && <pre className="panel">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
