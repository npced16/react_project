import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { theme } from '../../styles/theme';

const sectionStyles = css`
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  max-width: 1400px;
  margin: 0 auto;
  background: ${theme.colors.background.primary};
`;

const sectionTitleStyles = css`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text.primary};
  font-weight: 800;
  letter-spacing: 0.05em;
  position: relative;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.08);
  text-transform: uppercase;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 6px;
    background: ${theme.colors.accent.gradient};
  }
`;

const skillsGridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: 3rem;
`;

const skillCardStyles = css`
  background: ${theme.colors.background.secondary};
  border: 3px solid ${theme.colors.text.primary};
  border-radius: 0;
  padding: ${theme.spacing.md};
  text-align: center;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: 5px 5px 0px ${theme.colors.text.primary};

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0px ${theme.colors.text.primary};
  }
`;

const skillNameStyles = css`
  font-size: 1.1rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const skillLevelStyles = css`
  height: 12px;
  background: ${theme.colors.background.primary};
  border: 2px solid ${theme.colors.text.primary};
  overflow: hidden;
  margin-top: ${theme.spacing.sm};
`;

const skillBarStyles = (level: number) => css`
  height: 100%;
  background: ${theme.colors.accent.gradient};
  width: ${level}%;
  transition: width 1s ease-out;
  position: relative;
  image-rendering: pixelated;
`;

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "Vue 3 / Pinia / Vite", level: 95 },
  { name: "Flutter / Dart", level: 92 },
  { name: "Jetpack Compose / Kotlin", level: 90 },
  { name: "JavaScript / TypeScript", level: 88 },
  { name: "Java / C# / C++", level: 85 },
  { name: "Electron / Node.js", level: 87 }
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section css={sectionStyles}>
      <h2 css={sectionTitleStyles}>Tech Stack</h2>
      <div css={skillsGridStyles}>
        {skills.map((skill, index) => (
          <div key={index} css={skillCardStyles}>
            <div css={skillNameStyles}>{skill.name}</div>
            <div css={skillLevelStyles}>
              <div css={skillBarStyles(isVisible ? skill.level : 0)} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
