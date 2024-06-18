import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { findOneUser } from '../api/supabase/user.api';

const useRecentVideoStore = create(
  immer((set) => ({
    recent: [],
    initializeRecentVideos: async (email) => {
      const userData = await findOneUser('recentVideo', email);
      const recentVideos = JSON.parse(userData.recentVideo || '[]');
      set((state) => {
        state.recent = recentVideos;
      });
    },
    addRecentVideo: (data) => {
      console.log('zustand: ' + data);
      set((state) => {
        const index = state.recent.indexOf(data);
        if (index !== -1) {
          state.recent.splice(index, 1);
        }

        state.recent.unshift(data);

        if (state.recent.length > 10) {
          state.recent.pop();
        }
      });
    }
  }))
);

export default useRecentVideoStore;
