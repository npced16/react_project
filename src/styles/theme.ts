export const theme = {
  colors: {
    // 배경색
    background: {
      primary: '#fafafa',      // 메인 배경
      secondary: '#ffffff',    // 카드 배경
      tertiary: '#f5f5f5',     // 대체 섹션 배경
    },
    // 텍스트 색상
    text: {
      primary: '#0a0a0a',      // 제목
      secondary: '#525252',    // 본문
      tertiary: '#737373',     // 서브텍스트
    },
    // 액센트 색상
    accent: {
      primary: '#3b82f6',      // 블루
      secondary: '#8b5cf6',    // 퍼플
      gradient: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    },
    // UI 요소
    border: '#e5e5e5',         // 테두리
    hover: '#f5f5f5',          // 호버 배경
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '6rem',
  },
};

export type Theme = typeof theme;
