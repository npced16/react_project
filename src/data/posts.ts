export interface Post {
  id: number;
  title: string;
  date: string;
  category: '개발' | '게임분석';
  excerpt: string;
  tags: string[];
  content: string; // 본문 내용 (HTML 또는 마크다운)
}

// 여기에 새 포스트를 추가하세요!
export const posts: Post[] = [
  {
    id: 1,
    title: '블로그 시작하기',
    date: '2025-10-30',
    category: '개발',
    excerpt: 'React + TypeScript + Emotion으로 만든 나만의 블로그입니다.',
    tags: ['블로그', 'React', 'TypeScript'],
    content: `
      <h2>블로그를 시작하며</h2>
      <p>GitHub Pages를 활용해서 나만의 블로그를 만들었습니다.</p>

      <h3>사용 기술</h3>
      <ul>
        <li>React 19</li>
        <li>TypeScript</li>
        <li>Emotion (CSS-in-JS)</li>
        <li>Vite</li>
        <li>GitHub Pages</li>
      </ul>

      <h3>앞으로의 계획</h3>
      <p>개발 작업을 정리하고, 게임 BM 분석도 올릴 예정입니다.</p>
      <p>포스트를 추가하려면 <code>src/data/posts.ts</code> 파일만 수정하면 됩니다!</p>
    `,
  },
  {
    id: 2,
    title: 'Zustand로 상태관리 간단하게 하기',
    date: '2025-10-29',
    category: '개발',
    excerpt: 'Redux는 너무 복잡해! Zustand로 간단하게 전역 상태를 관리하는 방법을 알아봅니다.',
    tags: ['React', 'Zustand', '상태관리'],
    content: `
      <h2>Zustand란?</h2>
      <p>Zustand는 작고 빠르며 확장 가능한 상태 관리 라이브러리입니다.</p>

      <h3>왜 Zustand를 선택했나?</h3>
      <ul>
        <li>Redux보다 훨씬 간단한 API</li>
        <li>보일러플레이트 코드가 거의 없음</li>
        <li>Provider 없이 사용 가능</li>
        <li>TypeScript 완벽 지원</li>
        <li>번들 크기가 매우 작음 (1KB 미만)</li>
      </ul>

      <h3>기본 사용법</h3>
      <pre><code>import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// 컴포넌트에서 사용
function Counter() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}</code></pre>

      <h3>결론</h3>
      <p>간단한 프로젝트부터 복잡한 프로젝트까지 Zustand로 충분히 관리할 수 있습니다!</p>
    `,
  },
  {
    id: 3,
    title: 'GitHub Pages 배포 자동화',
    date: '2025-10-28',
    category: '개발',
    excerpt: 'Vite + React 프로젝트를 GitHub Pages에 자동으로 배포하는 방법을 소개합니다.',
    tags: ['GitHub', 'Deploy', 'Vite', 'CI/CD'],
    content: `
      <h2>GitHub Pages 배포하기</h2>
      <p>gh-pages 패키지를 사용하면 쉽게 배포할 수 있습니다.</p>

      <h3>1. 패키지 설치</h3>
      <pre><code>npm install --save-dev gh-pages</code></pre>

      <h3>2. vite.config.ts 설정</h3>
      <pre><code>export default defineConfig({
  base: '/저장소이름/',
  plugins: [react()],
});</code></pre>

      <h3>3. package.json 스크립트 추가</h3>
      <pre><code>"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}</code></pre>

      <h3>4. 배포 실행</h3>
      <pre><code>npm run deploy</code></pre>

      <h3>주의사항</h3>
      <ul>
        <li>저장소가 Public이어야 무료로 사용 가능</li>
        <li>첫 배포 후 GitHub 설정에서 gh-pages 브랜치 확인</li>
        <li>배포 후 2-3분 정도 기다려야 반영됨</li>
      </ul>

      <p>이제 <code>npm run deploy</code> 명령어 하나로 배포 끝!</p>
    `,
  },
];

// 카테고리별 포스트 가져오기
export const getPostsByCategory = (category: '개발' | '게임분석' | '전체') => {
  if (category === '전체') return posts;
  return posts.filter(post => post.category === category);
};

// ID로 포스트 찾기
export const getPostById = (id: number) => {
  return posts.find(post => post.id === id);
};
