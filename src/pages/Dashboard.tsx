import { css } from '@emotion/react';
import { DashboardLayout } from '../components/Layout/DashboardLayout';
import { DashboardCard } from '../components/Dashboard/DashboardCard';
import { ZustandDemo } from '../components/ZustandTest/ZustandDemo';

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const chartSectionStyles = css`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const chartTitleStyles = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

const placeholderChartStyles = css`
  height: 300px;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 1.125rem;
`;

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div css={gridStyles}>
        <DashboardCard
          title="총 사용자"
          value="12,543"
          icon="👥"
          trend={{ value: 12.5, isPositive: true }}
          subtitle="지난 달 대비"
        />
        <DashboardCard
          title="수익"
          value="₩8,234,000"
          icon="💰"
          trend={{ value: 8.2, isPositive: true }}
          subtitle="지난 달 대비"
        />
        <DashboardCard
          title="활성 세션"
          value="1,234"
          icon="📊"
          trend={{ value: 3.1, isPositive: false }}
          subtitle="지난 주 대비"
        />
        <DashboardCard
          title="전환율"
          value="3.24%"
          icon="🎯"
          trend={{ value: 1.8, isPositive: true }}
          subtitle="지난 달 대비"
        />
      </div>

      <div css={gridStyles}>
        <div css={chartSectionStyles}>
          <h2 css={chartTitleStyles}>월별 트래픽</h2>
          <div css={placeholderChartStyles}>
            차트 영역 (Chart.js 또는 Recharts 추가 가능)
          </div>
        </div>

        <div css={chartSectionStyles}>
          <h2 css={chartTitleStyles}>사용자 활동</h2>
          <div css={placeholderChartStyles}>
            차트 영역 (Chart.js 또는 Recharts 추가 가능)
          </div>
        </div>
      </div>

      <div css={chartSectionStyles}>
        <h2 css={chartTitleStyles}>최근 활동</h2>
        <div css={placeholderChartStyles}>
          테이블 또는 리스트 영역
        </div>
      </div>

      {/* Zustand 테스트 섹션 */}
      <ZustandDemo />
    </DashboardLayout>
  );
};

export default Dashboard;
