import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useModalStore = create(
  immer((set) => ({
    isVisible: false,
    modalOpen: () => {
      set((state) => {
        state.isVisible = true;
      });
    },
    modalClose: () => {
      set((state) => {
        state.isVisible = false;
      });
    }
  }))
);

export default useModalStore;
