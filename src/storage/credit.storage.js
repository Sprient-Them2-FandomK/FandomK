const KEY = "APP_CREDIT";

export const creditStorage = {
  get: () => Number(localStorage.getItem(KEY)),
  set: (credit) => {
    localStorage.setItem(KEY, credit);
  },
};
