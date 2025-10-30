import { css } from '@emotion/react';
import { useStore } from '../../store/useStore';
import { useState } from 'react';

const containerStyles = css`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`;

const titleStyles = css`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
`;

const sectionStyles = css`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1rem;
  }
`;

const buttonStyles = css`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const deleteButtonStyles = css`
  ${buttonStyles}
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;

  &:hover {
    box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);
  }
`;

const inputStyles = css`
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  margin-right: 0.5rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const todoItemStyles = (completed: boolean) => css`
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: ${completed ? '#f3f4f6' : 'white'};
  border: 2px solid ${completed ? '#10b981' : '#e5e7eb'};
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s;

  &:hover {
    transform: translateX(4px);
  }
`;

const checkboxStyles = css`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const counterDisplayStyles = css`
  font-size: 3rem;
  font-weight: 700;
  color: #667eea;
  margin: 1rem 0;
  text-align: center;
`;

const infoBoxStyles = css`
  background: #f0f9ff;
  border-left: 4px solid #667eea;
  padding: 1rem;
  border-radius: 8px;
  color: #1e40af;
  margin-top: 1rem;
`;

export const ZustandDemo = () => {
  // Zustand 사용법: useStore로 필요한 상태와 액션만 가져오기
  const counter = useStore((state) => state.counter);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  const resetCounter = useStore((state) => state.resetCounter);

  const userName = useStore((state) => state.userName);
  const setUserName = useStore((state) => state.setUserName);

  const todos = useStore((state) => state.todos);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const addTodo = useStore((state) => state.addTodo);
  const removeTodo = useStore((state) => state.removeTodo);
  const getCompletedCount = useStore((state) => state.getCompletedCount);

  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      addTodo(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <div css={containerStyles}>
      <h2 css={titleStyles}>🐻 Zustand 상태관리 테스트</h2>

      {/* 1. 카운터 예제 */}
      <div css={sectionStyles}>
        <h3>📊 카운터 (전역 상태)</h3>
        <div css={counterDisplayStyles}>{counter}</div>
        <button css={buttonStyles} onClick={increment}>
          +1 증가
        </button>
        <button css={buttonStyles} onClick={decrement}>
          -1 감소
        </button>
        <button css={buttonStyles} onClick={resetCounter}>
          리셋
        </button>
        <div css={infoBoxStyles}>
          💡 이 카운터는 Zustand의 <code>useStore</code>로 관리됩니다.
          어떤 컴포넌트에서든 이 값을 공유할 수 있습니다!
        </div>
      </div>

      {/* 2. 사용자 이름 예제 */}
      <div css={sectionStyles}>
        <h3>👤 사용자 이름</h3>
        <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          안녕하세요, <strong>{userName}</strong>님!
        </p>
        <input
          css={inputStyles}
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        <div css={infoBoxStyles}>
          💡 입력하면 즉시 상태가 업데이트됩니다!
        </div>
      </div>

      {/* 3. 할 일 목록 예제 */}
      <div css={sectionStyles}>
        <h3>✅ 할 일 목록 (완료: {getCompletedCount()} / {todos.length})</h3>

        <div style={{ marginBottom: '1rem' }}>
          <input
            css={inputStyles}
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
            placeholder="새 할 일 추가..."
            style={{ width: '300px' }}
          />
          <button css={buttonStyles} onClick={handleAddTodo}>
            추가
          </button>
        </div>

        {todos.map((todo) => (
          <div key={todo.id} css={todoItemStyles(todo.completed)}>
            <input
              css={checkboxStyles}
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                flex: 1,
                fontSize: '1.125rem',
              }}
            >
              {todo.text}
            </span>
            <button
              css={deleteButtonStyles}
              onClick={() => removeTodo(todo.id)}
            >
              삭제
            </button>
          </div>
        ))}
        <div css={infoBoxStyles}>
          💡 할 일 추가, 완료 토글, 삭제 기능을 모두 테스트해보세요!
        </div>
      </div>

      {/* Zustand 설명 */}
      <div
        css={css`
          background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
          padding: 1.5rem;
          border-radius: 12px;
          margin-top: 2rem;
        `}
      >
        <h3 style={{ marginBottom: '1rem' }}>🐻 Zustand란?</h3>
        <ul style={{ lineHeight: '1.8', color: '#374151' }}>
          <li>✨ <strong>초간단 상태관리</strong>: Redux보다 훨씬 간단합니다</li>
          <li>🎯 <strong>선택적 구독</strong>: 필요한 상태만 골라서 사용 가능</li>
          <li>⚡ <strong>보일러플레이트 제로</strong>: Provider 불필요!</li>
          <li>🎨 <strong>TypeScript 완벽 지원</strong>: 타입 안정성 100%</li>
          <li>🪝 <strong>Hook 기반</strong>: React Hook처럼 자연스럽게 사용</li>
          <li>📦 <strong>매우 가볍다</strong>: 1KB도 안 되는 크기!</li>
        </ul>

        <div style={{ marginTop: '1rem', padding: '1rem', background: 'white', borderRadius: '8px' }}>
          <strong>사용법:</strong>
          <pre style={{ margin: '0.5rem 0', padding: '0.5rem', background: '#f3f4f6', borderRadius: '4px', fontSize: '0.875rem' }}>
{`const count = useStore(state => state.counter);
const increment = useStore(state => state.increment);`}
          </pre>
        </div>
      </div>
    </div>
  );
};
