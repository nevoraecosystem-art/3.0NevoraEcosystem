import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SegmentPage from './pages/SegmentPage';
import FounderPage from './pages/FounderPage';
import EngagementPage from './pages/EngagementPage';

const segments = [
  'shows',
  'corporativo',
  'esportes',
  'formaturas',
  'educacional',
  'religioso',
  'casamentos',
  'prefeituras',
  'festivais',
  'beneficentes',
  'feiras',
  'gastronomicos',
];

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Nevora Ecosystem 3.0</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/engagement">Atendimento Norah</Link>
          <Link to="/founder">Founder</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard segments={segments} />} />
          <Route path="/engagement" element={<EngagementPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/segment/:id" element={<SegmentPage />} />
        </Routes>
      </main>
    </div>
  );
}
