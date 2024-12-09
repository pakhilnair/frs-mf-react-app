import { create } from "zustand";

interface Mf {
  schemeCode: number;
  schemeName: string;
}

interface MfState {
  allMf: Mf[];
  fetchMf: () => Promise<void>;
}

interface LoadingStore {
  isLoading: boolean;
  toggleLoading: () => void;
}

export const useMfStore = create<MfState>((set) => ({
  allMf: [],
  fetchMf: async () => {
    try {
      const response = await fetch("https://api.mfapi.in/mf");
      if (!response.ok) {
        throw new Error("Failed to fetch from API");
      }

      const data: Mf[] = await response.json();
      set(() => ({ allMf: data }));
    } catch (error) {
      console.log("Api fetch failed ", error);
    }
  },
}));

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,
  toggleLoading: () => {
    set((state) => ({ isLoading: !state.isLoading }));
  },
}));
