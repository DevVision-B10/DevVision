import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useLogStore = create(
  persist(
    immer((set) => ({
      user: null,
      logIn: (userData) => {
        set((state) => {
          state.user = userData;
        });
      },
      logOut: () => {
        set((state) => {
          state.user = null;
        });
      }
    })),
    {
      name: 'loggedIn_user'
      // getStorage: () => sessionStorage
    }
  )
);

export default useLogStore;
