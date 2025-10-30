import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';

const sidebarStyles = css`
  width: 250px;
  height: 100vh;
  background: linear-gradient(180deg, #1f2937 0%, #111827 100%);
  color: white;
  padding: 1.5rem 0;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

const logoStyles = css`
  padding: 0 1.5rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 0.75rem;
    color: #9ca3af;
    margin: 0.25rem 0 0 0;
  }
`;

const navSectionStyles = css`
  margin-bottom: 2rem;
`;

const sectionTitleStyles = css`
  padding: 0 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
`;

const navLinkStyles = (isActive: boolean) => css`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: ${isActive ? '#fff' : '#d1d5db'};
  text-decoration: none;
  transition: all 0.2s;
  background: ${isActive ? 'rgba(102, 126, 234, 0.2)' : 'transparent'};
  border-left: 3px solid ${isActive ? '#667eea' : 'transparent'};
  font-weight: ${isActive ? '600' : '400'};

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #fff;
  }

  span {
    margin-left: 0.75rem;
  }
`;

const iconStyles = css`
  font-size: 1.25rem;
  width: 1.5rem;
  text-align: center;
`;

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div css={sidebarStyles}>
      <div css={logoStyles}>
        <h1>생산 관리</h1>
        <p>Production Management</p>
      </div>

      <nav>
        <div css={navSectionStyles}>
          <div css={sectionTitleStyles}>메인</div>
          <Link to="/" css={navLinkStyles(isActive('/'))}>
            <span css={iconStyles}>📊</span>
            <span>대시보드</span>
          </Link>
        </div>

        <div css={navSectionStyles}>
          <div css={sectionTitleStyles}>제품 관리</div>
          <Link to="/products/fd2" css={navLinkStyles(isActive('/products/fd2'))}>
            <span css={iconStyles}>🔵</span>
            <span>FD2</span>
          </Link>
          <Link to="/products/fw1" css={navLinkStyles(isActive('/products/fw1'))}>
            <span css={iconStyles}>🟢</span>
            <span>FW1</span>
          </Link>
          <Link to="/products/fw2" css={navLinkStyles(isActive('/products/fw2'))}>
            <span css={iconStyles}>🟡</span>
            <span>FW2</span>
          </Link>
        </div>

        <div css={navSectionStyles}>
          <div css={sectionTitleStyles}>설정</div>
          <Link to="/settings" css={navLinkStyles(isActive('/settings'))}>
            <span css={iconStyles}>⚙️</span>
            <span>설정</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
