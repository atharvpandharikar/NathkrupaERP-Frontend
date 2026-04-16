import { API_BASE_URL } from './shop';

const AUTH_REGISTER_PATH = '/api/auth/register/';
const AUTH_LOGIN_PATH = '/api/auth/login/';
const AUTH_LOGOUT_PATH = '/api/auth/logout/';

async function parseJsonOrText(res) {
  const text = await res.text().catch(() => '');
  try {
    return text ? JSON.parse(text) : null;
  } catch {
    return text;
  }
}

function toErrorMessage(payload, fallback) {
  if (!payload) return fallback;
  if (typeof payload === 'string') return payload;
  if (payload.detail) return String(payload.detail);
  if (payload.error) return String(payload.error);
  const firstField = Object.values(payload)[0];
  if (Array.isArray(firstField) && firstField.length) return String(firstField[0]);
  if (typeof firstField === 'string') return firstField;
  return fallback;
}

export async function registerCustomer({ username, email, password }) {
  const res = await fetch(`${API_BASE_URL}${AUTH_REGISTER_PATH}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const payload = await parseJsonOrText(res);
  if (!res.ok) {
    throw new Error(toErrorMessage(payload, `Signup failed (${res.status})`));
  }
  return payload;
}

export async function loginWithPassword({ identifier, password }) {
  const res = await fetch(`${API_BASE_URL}${AUTH_LOGIN_PATH}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier, password }),
  });
  const payload = await parseJsonOrText(res);
  if (!res.ok) {
    throw new Error(toErrorMessage(payload, `Login failed (${res.status})`));
  }
  return payload;
}

export async function logoutWithRefresh({ refreshToken, accessToken }) {
  const res = await fetch(`${API_BASE_URL}${AUTH_LOGOUT_PATH}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    body: JSON.stringify({ refresh: refreshToken }),
  });
  if (!res.ok && res.status !== 401 && res.status !== 403) {
    const payload = await parseJsonOrText(res);
    throw new Error(toErrorMessage(payload, `Logout failed (${res.status})`));
  }
}
