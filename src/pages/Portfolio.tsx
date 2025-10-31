import { css } from '@emotion/react';
import { HeroSection } from '../components/Portfolio/HeroSection';
import { ProjectsSection } from '../components/Portfolio/ProjectsSection';
import { SkillsSection } from '../components/Portfolio/SkillsSection';
import { ContactSection } from '../components/Portfolio/ContactSection';
import { theme } from '../styles/theme';

const containerStyles = css`
  min-height: 100vh;
  background: ${theme.colors.background.primary};
  color: ${theme.colors.text.primary};
  overflow-x: hidden;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  /* 도트 그리드 패턴 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0, 0, 0, 0.02) 4px, rgba(0, 0, 0, 0.02) 5px),
      repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0, 0, 0, 0.02) 4px, rgba(0, 0, 0, 0.02) 5px);
    pointer-events: none;
    image-rendering: pixelated;
  }
`;

export function Portfolio() {
  return (
    <div css={containerStyles}>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
