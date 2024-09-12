import { jwtDecode } from "jwt-decode";

export function setCookie(name: string, value: string, expires: Date) {
  const expiresString = expires.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expiresString}; path=/; Secure; SameSite=Lax`;
}

export function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
  return null;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Secure; SameSite=Lax`;
}

export function getExpToken(token: string): Date {
  try {
    const decoded = jwtDecode(token);
    const expiration = decoded.exp;

    if (expiration) {
      return new Date(expiration * 1000);
    }
  } catch (error) {
    console.error("Error decoding token", error);
  }

  const defaultExpiration = new Date();
  defaultExpiration.setDate(defaultExpiration.getDate() + 1);
  return defaultExpiration;
}
