import './styles/App.css';
import AppRoutes from './routes';
import Contexts from './hooks';

export default function App() {
  return (
    <Contexts>
      <AppRoutes />
    </Contexts>
  );
}
