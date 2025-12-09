import { useState } from 'react';
import axios from 'axios';

export default function EngagementPage() {
  const [message, setMessage] = useState('Sou produtor e quero um show');
  const [result, setResult] = useState<any>(null);

  const send = async () => {
    const { data } = await axios.post('/api/engagement', { message });
    setResult(data);
  };

  return (
    <div>
      <h2>Atendimento Universal Norah</h2>
      <p>Detecção de persona, roteamento e lead scoring automáticos.</p>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={send}>Atender</button>
      {result && <pre className="panel">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
