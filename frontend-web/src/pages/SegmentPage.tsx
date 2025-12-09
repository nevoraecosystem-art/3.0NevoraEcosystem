import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function SegmentPage() {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState<any>(null);

  const send = async () => {
    const { data } = await axios.post(`/api/segments/${id}`, { message });
    setResponse(data);
  };

  return (
    <div>
      <h2>Segmento: {id}</h2>
      <p>IA dedicada, hunter e monetização configurada.</p>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Envie comandos para IA" />
      <button onClick={send}>Enviar</button>
      {response && (
        <pre className="panel">{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  );
}
