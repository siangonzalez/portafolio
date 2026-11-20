// El portafolio se publica en www.nomadaestudio.digital/sian (el sitio del estudio
// lo sirve como proxy desde Netlify). BASE_PATH debe coincidir con basePath en next.config.ts.
export const SITE_ORIGIN = "https://www.nomadaestudio.digital";
export const BASE_PATH = "/sian";
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

// Ruta de un archivo de /public con el prefijo del sitio (para <video>, <img> y Open Graph).
export function asset(path: string): string {
  return path.startsWith("/") && !path.startsWith(`${BASE_PATH}/`) ? `${BASE_PATH}${path}` : path;
}
