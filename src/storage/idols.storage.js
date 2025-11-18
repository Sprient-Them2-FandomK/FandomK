const KEY = "APP_FAVORITE_IDOLS";

export const idolsStorage = {
  get: () => {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  },
  set: (idolIds) => {
    localStorage.setItem(KEY, JSON.stringify(idolIds));
  },
};
