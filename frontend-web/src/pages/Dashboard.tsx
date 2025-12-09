import { Link } from 'react-router-dom';
import useFetch from '../utils/useFetch';

type Props = { segments: string[] };

export default function Dashboard({ segments }: Props) {
  const { data } = useFetch('/api/dashboard');
  return (
    <div>
      <h2>Dashboard Universal</h2>
      <p>{data?.message || 'Inicializando Norah...'}</p>
      <section className="cards">
        {segments.map((segment) => (
          <Link key={segment} to={`/segment/${segment}`} className="card">
            <h3>{segment}</h3>
            <p>Dash dedicado e monetização ativa.</p>
          </Link>
        ))}
      </section>
      <section>
        <h3>Monetização</h3>
        <ul>
          {(data?.monetization || []).map((rule: any) => (
            <li key={rule.segment}>
              <strong>{rule.segment}:</strong> {(rule.revenueShare * 100).toFixed(1)}% - {rule.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
