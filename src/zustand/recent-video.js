import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useRecentVideoStore = create(
  immer((set) => ({
    recent: [],
    addRecentVideo: (data) => {
      set((state) => {
        const index = state.recent.indexOf(data);
        if (index !== -1) {
          state.recent.splice(index, 1);
        }

        state.recent.push(data);

        if (state.recent.length > 10) {
          state.recent.shift();
        }
      });
    }
  }))
);

export default useRecentVideoStore;
