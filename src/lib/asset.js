/**
 * Baut einen Asset-Pfad auf dem Deploy-Basispfad auf.
 * BASE_URL endet bereits auf "/", deshalb wird ein fuehrender Slash
 * des uebergebenen Pfads entfernt — sonst entsteht ein doppelter Slash.
 */
export function asset(path = "") {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, "")}`;
}
