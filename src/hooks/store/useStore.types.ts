export type StoredData = {
  id: string;
  name: string;
};

export type StoreProps = {
  storeValue: string;
  setStoreValue: (value: string) => void;

  storedData: StoredData | null;
  setStoredData: (data: StoredData | null) => void;

  clearStore: () => void;
};
