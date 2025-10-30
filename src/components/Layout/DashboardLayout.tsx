import { css } from '@emotion/react';
import { type ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const layoutStyles = css`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`;

const containerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const headerStyles = css`
  color: white;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div css={layoutStyles}>
      <div css={containerStyles}>
        <header css={headerStyles}>
          <h1>대시보드</h1>
          <p>실시간 데이터 모니터링</p>
        </header>
        {children}
      </div>
    </div>
  );
};
