import { css } from '@emotion/react';
import { theme } from '../../styles/theme';

const sectionStyles = css`
  padding: ${theme.spacing.md} ${theme.spacing.md};
  max-width: 900px;
  margin: 0 auto;
  background: ${theme.colors.background.primary};
  text-align: center;
`;

const sectionTitleStyles = css`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  text-align: center;
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.text.primary};
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const contactListStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.sm};
`;

const contactItemStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const contactLabelStyles = css`
  font-size: 0.8rem;
  color: ${theme.colors.text.secondary};
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const contactValueStyles = css`
  font-size: 0.85rem;
  color: ${theme.colors.text.primary};
  text-decoration: none;
  transition: color 0.2s ease;
  font-weight: 600;

  &:hover {
    color: ${theme.colors.accent.primary};
  }
`;

export function ContactSection() {
  return (
    <section css={sectionStyles}>
      <h2 css={sectionTitleStyles}>Contact</h2>
      <div css={contactListStyles}>
        <div css={contactItemStyles}>
          <span css={contactLabelStyles}>Email</span>
          <a href="mailto:khsms16@naver.com" css={contactValueStyles}>khsms16@naver.com</a>
        </div>
        <div css={contactItemStyles}>
          <span css={contactLabelStyles}>GitHub</span>
          <a href="https://github.com/npced16" target="_blank" rel="noopener noreferrer" css={contactValueStyles}>github.com/npced16</a>
        </div>
        <div css={contactItemStyles}>
          <span css={contactLabelStyles}>Phone</span>
          <span css={contactValueStyles}>010-8384-5508</span>
        </div>
      </div>
    </section>
  );
}
