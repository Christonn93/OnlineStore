import { create } from 'zustand';
import { StoredData, StoreProps } from './useStore.types';

export const useStore = create<StoreProps>(set => ({
  storeValue: '',
  setStoreValue: (value: string) => {
    set({ storeValue: value });
  },

  storedData: null,
  setStoredData: (data: StoredData | null) => {
    set({ storedData: data });
  },

  clearStore: () => {
    set({ storeValue: '', storedData: null });
  },
}));
