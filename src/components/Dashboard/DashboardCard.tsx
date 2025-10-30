import { css } from '@emotion/react';
import { type ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  subtitle?: string;
}

const cardStyles = css`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const titleStyles = css`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const iconWrapperStyles = css`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const valueStyles = css`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const footerStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

const trendStyles = (isPositive: boolean) => css`
  color: ${isPositive ? '#10b981' : '#ef4444'};
  font-weight: 600;
`;

const subtitleStyles = css`
  color: #6b7280;
`;

export const DashboardCard = ({
  title,
  value,
  icon,
  trend,
  subtitle,
}: DashboardCardProps) => {
  return (
    <div css={cardStyles}>
      <div css={headerStyles}>
        <div>
          <div css={titleStyles}>{title}</div>
        </div>
        {icon && <div css={iconWrapperStyles}>{icon}</div>}
      </div>
      <div css={valueStyles}>{value}</div>
      <div css={footerStyles}>
        {trend && (
          <span css={trendStyles(trend.isPositive)}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
        )}
        {subtitle && <span css={subtitleStyles}>{subtitle}</span>}
      </div>
    </div>
  );
};
