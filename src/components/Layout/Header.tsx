import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const headerStyles = css`
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const containerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const logoStyles = css`
  font-size: 1.5rem;
  font-weight: 800;
  color: #667eea;
  text-decoration: none;

  &:hover {
    color: #764ba2;
  }
`;

const navStyles = css`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: #374151;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #667eea;
    }
  }
`;

export function Header() {
  return (
    <header css={headerStyles}>
      <div css={containerStyles}>
        <Link to="/" css={logoStyles}>
          My Blog
        </Link>
        <nav css={navStyles}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
