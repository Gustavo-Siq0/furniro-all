export const AUTH_STORAGE_KEY = 'furniro_auth_token';

export const getStoredToken = () => localStorage.getItem(AUTH_STORAGE_KEY);

export const isAuthenticated = () => Boolean(getStoredToken());

export const setStoredToken = (token: string) => {
  localStorage.setItem(AUTH_STORAGE_KEY, token);
};

export const clearStoredToken = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};
