export function isTokenExpired(token) {
  const arrayToken = token.split(".");
  let tokenPayload = JSON.parse(atob(arrayToken[1]));
  const expired = Math.floor(new Date().getTime() / 1000) >= tokenPayload?.sub;
  tokenPayload = Object.assign({ expired: expired }, tokenPayload);
  return tokenPayload;
}
