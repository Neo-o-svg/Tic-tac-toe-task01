export const APP_VERSION = "2";

export const INITIAL_DATA = {
  username: "",
  password: "",
  userStats: {
    name: "",
    points: 0,
    totalGames: 0,
    losses: 0,
  },
};

export function ensureStorageInitialized() {
  const current = localStorage.getItem("app-version");

  if (current !== APP_VERSION) {
    localStorage.clear();

    localStorage.setItem("username", INITIAL_DATA.username);
    localStorage.setItem("password", INITIAL_DATA.password);
    localStorage.setItem("userStats", JSON.stringify(INITIAL_DATA.userStats));

    localStorage.setItem("app-version", APP_VERSION);
  }
}
