export function isLoggedIn() {
  return localStorage.getItem("zenif_auth_token");
}
