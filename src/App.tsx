import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { css } from '@emotion/react';
import { Portfolio } from './pages/Portfolio';


const appStyles = css`
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <BrowserRouter basename="/react_project">
      <div css={appStyles}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
