import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
