import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useLogStore = create(
  persist(
    immer((set) => ({
      user: null,
      logIn: () => {
        set((state) => {
          return {
            user: state.user
          };
        });
      },
      logOut: () => {
        set({
          user: null
        });
      }
    })),
    {
      name: 'loggedIn_user'
      //getStorage :()=>sessionStorage
    }
  )
);

export default useLogStore;
