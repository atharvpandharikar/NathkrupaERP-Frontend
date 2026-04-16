import { createSlice } from '@reduxjs/toolkit';

const AUTH_STORAGE_KEY = 'nk_auth';

function readStoredAuth() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.tokens?.access || !parsed?.tokens?.refresh) return null;
    return parsed;
  } catch {
    return null;
  }
}

function persistAuth(payload) {
  if (typeof window === 'undefined') return;
  if (!payload) {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    return;
  }
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload));
}

const stored = readStoredAuth();

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: Boolean(stored?.tokens?.access),
    user: stored?.user || null,
    tokens: stored?.tokens || null,
  },
  reducers: {
    setCredentials(state, action) {
      const payload = action.payload || {};
      state.user = payload.user || null;
      state.tokens = payload.tokens || null;
      state.isAuthenticated = Boolean(state.tokens?.access);
      persistAuth({
        user: state.user,
        tokens: state.tokens,
      });
    },
    clearCredentials(state) {
      state.user = null;
      state.tokens = null;
      state.isAuthenticated = false;
      persistAuth(null);
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export const authStorageKey = AUTH_STORAGE_KEY;
export default authSlice.reducer;
