import { css, keyframes } from '@emotion/react';
import { theme } from '../../styles/theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const heroStyles = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${theme.spacing.md};
  position: relative;
  background: ${theme.colors.background.primary};
`;

const titleStyles = css`
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 800;
  margin: 0;
  color: ${theme.colors.text.primary};
  letter-spacing: 0.02em;
  position: relative;
  user-select: none;
  animation: ${slideUp} 0.8s ease-out;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 8px;
    background: ${theme.colors.accent.gradient};
    image-rendering: pixelated;
  }
`;

const subtitleStyles = css`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: ${theme.colors.text.secondary};
  margin: 2.5rem 0 1rem 0;
  font-weight: 600;
  letter-spacing: 0.1em;
  animation: ${fadeIn} 1s ease-out 0.3s both;
  text-transform: uppercase;
`;

const descriptionStyles = css`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: ${theme.colors.text.tertiary};
  max-width: 700px;
  line-height: 1.8;
  margin: ${theme.spacing.sm} auto;
  animation: ${fadeIn} 1s ease-out 0.5s both;
`;

const ctaButtonStyles = css`
  display: inline-block;
  padding: 0.9rem 2.2rem;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  background: ${theme.colors.accent.primary};
  border: 3px solid ${theme.colors.text.primary};
  border-radius: 0;
  transition: all 0.2s ease;
  margin-top: ${theme.spacing.md};
  text-decoration: none;
  letter-spacing: 0.05em;
  user-select: none;
  box-shadow: 5px 5px 0px ${theme.colors.text.primary};
  animation: ${fadeIn} 1s ease-out 0.7s both;
  text-transform: uppercase;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0px ${theme.colors.text.primary};
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0px ${theme.colors.text.primary};
  }
`;

export function HeroSection() {
  return (
    <section css={heroStyles}>
      <h1 css={titleStyles}>김현석</h1>
      <p css={subtitleStyles}>Frontend Developer</p>
      <p css={descriptionStyles}>
        Vue 3, Flutter, Java, JavaScript, Kotlin 등 다양한 기술을 활용하여 웹과 모바일 앱을 개발합니다.
        <br />
        사용자 경험을 극대화하고, 효율적인 코드 구조와 안정적인 시스템 구현을 중시합니다.
      </p>
      <a href="#projects" css={ctaButtonStyles}>프로젝트 보기</a>
    </section>
  );
}
