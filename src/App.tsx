import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { css } from '@emotion/react';
import { Sidebar } from './components/Layout/Sidebar';
import ProductionDashboard from './pages/ProductionDashboard';
import ProductPage from './pages/ProductPage';

const layoutStyles = css`
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
`;

const mainStyles = css`
  margin-left: 250px;
  flex: 1;
  overflow-y: auto;
`;

function App() {
  return (
    <BrowserRouter>
      <div css={layoutStyles}>
        <Sidebar />
        <main css={mainStyles}>
          <Routes>
            <Route path="/" element={<ProductionDashboard />} />
            <Route path="/products/:type" element={<ProductPage />} />
            <Route path="/settings" element={
              <div css={css`padding: 2rem;`}>
                <h1>설정 페이지</h1>
                <p>설정 기능이 여기에 추가됩니다.</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
