import { create } from 'zustand';

// 제품 타입 정의
export type ProductType = 'FD2' | 'FW1' | 'FW2';

export interface Product {
  id: number;
  type: ProductType;
  name: string;
  quantity: number;
  status: 'planning' | 'in-production' | 'completed' | 'shipped';
  createdAt: string;
  completedAt?: string;
}

// 생산 통계
export interface ProductionStats {
  totalProduced: number;
  inProduction: number;
  completed: number;
  shipped: number;
}

// Zustand Store 타입 정의
interface StoreState {
  // 상태
  products: Product[];
  selectedProductType: ProductType | null;

  // 액션
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  updateProduct: (id: number, updates: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  setSelectedProductType: (type: ProductType | null) => void;

  // 계산된 값
  getProductsByType: (type: ProductType) => Product[];
  getStatsByType: (type: ProductType) => ProductionStats;
  getTotalStats: () => ProductionStats;
}

// Zustand Store 생성
export const useStore = create<StoreState>((set, get) => ({
  // 초기 상태 - 샘플 데이터
  products: [
    {
      id: 1,
      type: 'FD2',
      name: 'FD2-001',
      quantity: 100,
      status: 'completed',
      createdAt: '2025-10-28',
      completedAt: '2025-10-29',
    },
    {
      id: 2,
      type: 'FW1',
      name: 'FW1-001',
      quantity: 50,
      status: 'in-production',
      createdAt: '2025-10-29',
    },
    {
      id: 3,
      type: 'FW2',
      name: 'FW2-001',
      quantity: 75,
      status: 'planning',
      createdAt: '2025-10-30',
    },
  ],
  selectedProductType: null,

  // 액션 구현
  addProduct: (product) =>
    set((state) => ({
      products: [
        ...state.products,
        {
          ...product,
          id: Date.now(),
          createdAt: new Date().toISOString().split('T')[0],
        },
      ],
    })),

  updateProduct: (id, updates) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, ...updates } : product
      ),
    })),

  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),

  setSelectedProductType: (type) => set({ selectedProductType: type }),

  // 계산된 값
  getProductsByType: (type) => {
    const state = get();
    return state.products.filter((product) => product.type === type);
  },

  getStatsByType: (type) => {
    const state = get();
    const products = state.products.filter((product) => product.type === type);
    return {
      totalProduced: products.reduce((sum, p) => sum + p.quantity, 0),
      inProduction: products.filter((p) => p.status === 'in-production').length,
      completed: products.filter((p) => p.status === 'completed').length,
      shipped: products.filter((p) => p.status === 'shipped').length,
    };
  },

  getTotalStats: () => {
    const state = get();
    return {
      totalProduced: state.products.reduce((sum, p) => sum + p.quantity, 0),
      inProduction: state.products.filter((p) => p.status === 'in-production').length,
      completed: state.products.filter((p) => p.status === 'completed').length,
      shipped: state.products.filter((p) => p.status === 'shipped').length,
    };
  },
}));
