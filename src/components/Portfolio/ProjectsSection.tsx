import { css } from '@emotion/react';
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

const projectsGridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: 3rem;
`;

const projectCardStyles = css`
  background: ${theme.colors.background.secondary};
  border: 3px solid ${theme.colors.text.primary};
  border-radius: 0;
  padding: ${theme.spacing.md};
  transition: all 0.2s ease;
  position: relative;
  user-select: none;
  box-shadow: 6px 6px 0px ${theme.colors.text.primary};

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px 0px ${theme.colors.text.primary};
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 4px 4px 0px ${theme.colors.text.primary};
  }
`;

const projectTitleStyles = css`
  font-size: 1.3rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  font-weight: 700;
  letter-spacing: 0.02em;
`;

const projectDescStyles = css`
  color: ${theme.colors.text.secondary};
  line-height: 1.7;
  margin-bottom: ${theme.spacing.sm};
  font-size: 0.9rem;
`;

const techStackStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: ${theme.spacing.sm};
`;

const techTagStyles = css`
  background: ${theme.colors.background.tertiary};
  color: ${theme.colors.text.primary};
  padding: 0.35rem 0.8rem;
  border-radius: 0;
  font-size: 0.8rem;
  border: 2px solid ${theme.colors.text.primary};
  font-weight: 600;
  transition: all 0.2s ease;
  user-select: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background: ${theme.colors.accent.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

interface Project {
  title: string;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "아이벡스 산소챔버 앱 (2025)",
    description: "Flutter 기반 산소챔버 제어 앱 개발 총괄. Riverpod 의존성 관리, Router 기반 화면 이동, Dio + Retrofit 서버 통신 구현.",
    tech: ["Flutter", "Riverpod", "Dio", "Retrofit"]
  },
  {
    title: "전기연구원 웹/앱 5버전 업데이트 (2025)",
    description: "Vue3 + Electron 웹, Node.js 서버, Kotlin 앱 총괄. DB 구조 변경, Vite 도입, 실시간 음성 데이터 처리(5MB+), 블루투스 녹음 기능 구현.",
    tech: ["Vue3", "Electron", "Pinia", "Kotlin", "Node.js"]
  },
  {
    title: "연세대 건강관리 앱 (2024)",
    description: "Jetpack Compose 기반 건강 관리 앱 기획 및 총괄. InBody 시리얼 통신 데이터 분석 및 차트 변환 구현.",
    tech: ["Jetpack Compose", "Kotlin", "Serial Communication"]
  },
  {
    title: "국립재활원 모니터링 앱 (2024)",
    description: "Vue3 + Pinia + Vite로 구현한 호실별 실시간 데이터 모니터링 웹 페이지 총괄.",
    tech: ["Vue3", "Pinia", "Vite"]
  },
  {
    title: "연세대 약물검색기 (2024)",
    description: "Vue3 기반 약물 검색 및 연관도 시각화 시스템. XLSX 데이터 기반 DB 검색, 데이터 반출, 커스텀 기능 구현.",
    tech: ["Vue3", "XLSX", "Database"]
  },
  {
    title: "당뇨병 관리 앱 (2023)",
    description: "Jetpack Compose로 제작한 당뇨병 문진 앱. 간편한 UI/UX로 환자 관리 기능 제공.",
    tech: ["Jetpack Compose", "Kotlin"]
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" css={sectionStyles}>
      <h2 css={sectionTitleStyles}>Projects</h2>
      <div css={projectsGridStyles}>
        {projects.map((project, index) => (
          <div key={index} css={projectCardStyles}>
            <h3 css={projectTitleStyles}>{project.title}</h3>
            <p css={projectDescStyles}>{project.description}</p>
            <div css={techStackStyles}>
              {project.tech.map((tech, i) => (
                <span key={i} css={techTagStyles}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
