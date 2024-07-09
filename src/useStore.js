import { create } from "zustand";

const usernameStore = (set) => ({
  user: null,

  captureUser: (newUser) =>
    set(() => {
      return { user: newUser };
    }),
});

const useUsernameStore = create(usernameStore);
export default useUsernameStore;
