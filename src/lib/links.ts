/** Fitopia user-facing web app */
export const APP_URL = "https://fitopia-react-app.vercel.app";

/** Deep links into the web app */
export const LINKS = {
  app: APP_URL,
  login: `${APP_URL}/login`,
  register: `${APP_URL}/register`,
  gyms: `${APP_URL}/gym/all`,
  welcome: `${APP_URL}/welcome`,
} as const;
