import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { useStore, type ProductType } from '../store/useStore';
import { useState } from 'react';

const containerStyles = css`
  padding: 2rem;
`;

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
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
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const cardStyles = css`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const modalStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const modalContentStyles = css`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  width: 500px;
  max-width: 90%;

  h2 {
    margin-top: 0;
    color: #111827;
  }
`;

const inputStyles = css`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const selectStyles = css`
  ${inputStyles}
  cursor: pointer;
`;

const ProductPage = () => {
  const { type } = useParams<{ type: string }>();
  const productType = type?.toUpperCase() as ProductType;

  const products = useStore((state) => state.getProductsByType(productType));
  const addProduct = useStore((state) => state.addProduct);
  const updateProduct = useStore((state) => state.updateProduct);
  const deleteProduct = useStore((state) => state.deleteProduct);

  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    quantity: 0,
    status: 'planning' as const,
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.quantity > 0) {
      addProduct({
        type: productType,
        ...newProduct,
      });
      setNewProduct({ name: '', quantity: 0, status: 'planning' });
      setShowModal(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return { bg: '#f3f4f6', text: '#374151' };
      case 'in-production': return { bg: '#fef3c7', text: '#92400e' };
      case 'completed': return { bg: '#d1fae5', text: '#065f46' };
      case 'shipped': return { bg: '#dbeafe', text: '#1e40af' };
      default: return { bg: '#f3f4f6', text: '#374151' };
    }
  };

  return (
    <div css={containerStyles}>
      <div css={headerStyles}>
        <h1>{productType} 제품 관리</h1>
        <button css={buttonStyles} onClick={() => setShowModal(true)}>
          + 새 제품 추가
        </button>
      </div>

      <div>
        {products.length === 0 ? (
          <div css={css`
            text-align: center;
            padding: 3rem;
            color: #6b7280;
          `}>
            등록된 제품이 없습니다. 새 제품을 추가해보세요!
          </div>
        ) : (
          products.map((product) => {
            const statusColor = getStatusColor(product.status);
            return (
              <div key={product.id} css={cardStyles}>
                <div>
                  <div css={css`font-weight: 700; font-size: 1.125rem; margin-bottom: 0.25rem;`}>
                    {product.name}
                  </div>
                  <div css={css`font-size: 0.875rem; color: #6b7280;`}>
                    등록일: {product.createdAt}
                  </div>
                </div>
                <div css={css`text-align: center;`}>
                  <div css={css`font-size: 1.5rem; font-weight: 700; color: #667eea;`}>
                    {product.quantity.toLocaleString()}
                  </div>
                  <div css={css`font-size: 0.875rem; color: #6b7280;`}>개</div>
                </div>
                <div>
                  <select
                    value={product.status}
                    onChange={(e) => updateProduct(product.id, {
                      status: e.target.value as any,
                      ...(e.target.value === 'completed' ? { completedAt: new Date().toISOString().split('T')[0] } : {})
                    })}
                    css={css`
                      padding: 0.5rem;
                      border-radius: 6px;
                      border: 2px solid #e5e7eb;
                      background: ${statusColor.bg};
                      color: ${statusColor.text};
                      font-weight: 600;
                      cursor: pointer;
                      width: 100%;
                    `}
                  >
                    <option value="planning">계획 중</option>
                    <option value="in-production">생산 중</option>
                    <option value="completed">완료</option>
                    <option value="shipped">출하</option>
                  </select>
                </div>
                <div css={css`text-align: center;`}>
                  {product.completedAt && (
                    <div css={css`font-size: 0.875rem; color: #6b7280;`}>
                      완료일: {product.completedAt}
                    </div>
                  )}
                </div>
                <div css={css`text-align: right;`}>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    css={css`
                      background: #ef4444;
                      color: white;
                      border: none;
                      padding: 0.5rem 1rem;
                      border-radius: 6px;
                      cursor: pointer;
                      font-weight: 600;
                      transition: background 0.2s;

                      &:hover {
                        background: #dc2626;
                      }
                    `}
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 모달 */}
      {showModal && (
        <div css={modalStyles} onClick={() => setShowModal(false)}>
          <div css={modalContentStyles} onClick={(e) => e.stopPropagation()}>
            <h2>{productType} 제품 추가</h2>
            <input
              css={inputStyles}
              type="text"
              placeholder="제품명 (예: FD2-001)"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input
              css={inputStyles}
              type="number"
              placeholder="수량"
              value={newProduct.quantity || ''}
              onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) || 0 })}
            />
            <select
              css={selectStyles}
              value={newProduct.status}
              onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value as any })}
            >
              <option value="planning">계획 중</option>
              <option value="in-production">생산 중</option>
              <option value="completed">완료</option>
              <option value="shipped">출하</option>
            </select>
            <div css={css`display: flex; gap: 1rem; justify-content: flex-end;`}>
              <button
                css={css`
                  ${buttonStyles}
                  background: #6b7280;
                `}
                onClick={() => setShowModal(false)}
              >
                취소
              </button>
              <button css={buttonStyles} onClick={handleAddProduct}>
                추가
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
