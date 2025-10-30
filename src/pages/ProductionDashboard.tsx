import { css } from '@emotion/react';
import { useStore } from '../store/useStore';
import { DashboardCard } from '../components/Dashboard/DashboardCard';
import { useMemo } from 'react';

const containerStyles = css`
  padding: 2rem;
`;

const headerStyles = css`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    font-size: 1rem;
  }
`;

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ProductionDashboard = () => {
  const products = useStore((state) => state.products);

  // useMemo로 계산된 값을 캐싱
  const stats = useMemo(() => {
    return {
      totalProduced: products.reduce((sum, p) => sum + p.quantity, 0),
      inProduction: products.filter((p) => p.status === 'in-production').length,
      completed: products.filter((p) => p.status === 'completed').length,
      shipped: products.filter((p) => p.status === 'shipped').length,
    };
  }, [products]);

  const fd2Stats = useMemo(() => {
    const fd2Products = products.filter((p) => p.type === 'FD2');
    return {
      totalProduced: fd2Products.reduce((sum, p) => sum + p.quantity, 0),
      inProduction: fd2Products.filter((p) => p.status === 'in-production').length,
      completed: fd2Products.filter((p) => p.status === 'completed').length,
    };
  }, [products]);

  const fw1Stats = useMemo(() => {
    const fw1Products = products.filter((p) => p.type === 'FW1');
    return {
      totalProduced: fw1Products.reduce((sum, p) => sum + p.quantity, 0),
      inProduction: fw1Products.filter((p) => p.status === 'in-production').length,
      completed: fw1Products.filter((p) => p.status === 'completed').length,
    };
  }, [products]);

  const fw2Stats = useMemo(() => {
    const fw2Products = products.filter((p) => p.type === 'FW2');
    return {
      totalProduced: fw2Products.reduce((sum, p) => sum + p.quantity, 0),
      inProduction: fw2Products.filter((p) => p.status === 'in-production').length,
      completed: fw2Products.filter((p) => p.status === 'completed').length,
    };
  }, [products]);

  return (
    <div css={containerStyles}>
      <div css={headerStyles}>
        <h1>생산 관리 대시보드</h1>
        <p>전체 제품 생산 현황을 한눈에 확인하세요</p>
      </div>

      {/* 전체 통계 */}
      <div css={gridStyles}>
        <DashboardCard
          title="총 생산량"
          value={stats.totalProduced.toLocaleString()}
          icon="📦"
          subtitle="전체 제품"
        />
        <DashboardCard
          title="생산 중"
          value={stats.inProduction}
          icon="⚙️"
          subtitle="진행 중인 작업"
        />
        <DashboardCard
          title="생산 완료"
          value={stats.completed}
          icon="✅"
          subtitle="완료된 작업"
        />
        <DashboardCard
          title="출하 완료"
          value={stats.shipped}
          icon="🚚"
          subtitle="배송된 제품"
        />
      </div>

      {/* 제품별 통계 */}
      <h2 css={css`font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem 0;`}>
        제품별 현황
      </h2>
      <div css={gridStyles}>
        <DashboardCard
          title="FD2"
          value={fd2Stats.totalProduced.toLocaleString()}
          icon="🔵"
          subtitle={`생산 중: ${fd2Stats.inProduction} | 완료: ${fd2Stats.completed}`}
        />
        <DashboardCard
          title="FW1"
          value={fw1Stats.totalProduced.toLocaleString()}
          icon="🟢"
          subtitle={`생산 중: ${fw1Stats.inProduction} | 완료: ${fw1Stats.completed}`}
        />
        <DashboardCard
          title="FW2"
          value={fw2Stats.totalProduced.toLocaleString()}
          icon="🟡"
          subtitle={`생산 중: ${fw2Stats.inProduction} | 완료: ${fw2Stats.completed}`}
        />
      </div>

      {/* 최근 제품 목록 */}
      <h2 css={css`font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem 0;`}>
        최근 등록 제품
      </h2>
      <div css={css`
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      `}>
        <table css={css`
          width: 100%;
          border-collapse: collapse;

          th {
            text-align: left;
            padding: 0.75rem;
            border-bottom: 2px solid #e5e7eb;
            font-weight: 600;
            color: #374151;
          }

          td {
            padding: 0.75rem;
            border-bottom: 1px solid #f3f4f6;
          }

          tr:hover {
            background: #f9fafb;
          }
        `}>
          <thead>
            <tr>
              <th>제품명</th>
              <th>타입</th>
              <th>수량</th>
              <th>상태</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {products.slice(-5).reverse().map((product) => (
              <tr key={product.id}>
                <td css={css`font-weight: 600;`}>{product.name}</td>
                <td>
                  <span css={css`
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    background: ${
                      product.type === 'FD2' ? '#dbeafe' :
                      product.type === 'FW1' ? '#d1fae5' : '#fef3c7'
                    };
                    color: ${
                      product.type === 'FD2' ? '#1e40af' :
                      product.type === 'FW1' ? '#065f46' : '#92400e'
                    };
                  `}>
                    {product.type}
                  </span>
                </td>
                <td>{product.quantity.toLocaleString()}</td>
                <td>
                  <span css={css`
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    background: ${
                      product.status === 'completed' ? '#d1fae5' :
                      product.status === 'in-production' ? '#fef3c7' :
                      product.status === 'shipped' ? '#dbeafe' : '#f3f4f6'
                    };
                    color: ${
                      product.status === 'completed' ? '#065f46' :
                      product.status === 'in-production' ? '#92400e' :
                      product.status === 'shipped' ? '#1e40af' : '#374151'
                    };
                  `}>
                    {product.status === 'planning' ? '계획 중' :
                     product.status === 'in-production' ? '생산 중' :
                     product.status === 'completed' ? '완료' : '출하'}
                  </span>
                </td>
                <td css={css`color: #6b7280;`}>{product.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductionDashboard;