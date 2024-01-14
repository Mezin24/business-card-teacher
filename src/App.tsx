import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@routes/routeConfig';

function App() {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ path, element }) => (
        <Route key={path} element={element} path={path} />
      ))}
    </Routes>
  );
}

export default App;
