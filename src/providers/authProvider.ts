import { AuthProvider } from "react-admin";

interface LoginInput {
	email: string,
	password: string
}

export const authProvider: AuthProvider = {
  login: ({ email, password }: LoginInput) => {
    const request = new Request('/api/login?isAdminPanelLogin=true', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        localStorage.setItem('auth', JSON.stringify(auth));
      })
      .catch(() => {
        throw new Error('Network error');
      });
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const {
        user: { id, name, lastname },
      } = JSON.parse(localStorage.getItem('auth') ?? "");
      return Promise.resolve({ id, fullName: `${name} ${lastname}` });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getPermissions: () => Promise.resolve(),
};