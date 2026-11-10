// Loader de next/image para Cloudinary.
// Recibe el publicId (por ejemplo "v1791579001/portafolio/abc/def") y devuelve
// una URL con ancho, formato y calidad automáticos.
const CLOUD = "https://res.cloudinary.com/dvmhdtwiq";

type LoaderArgs = { src: string; width: number; quality?: number };

export default function cloudinaryLoader({ src, width, quality }: LoaderArgs): string {
  // Imágenes locales (carpeta /public) o URLs completas se devuelven tal cual.
  if (src.startsWith("/") || src.startsWith("http")) return src;
  const q = quality ? `q_${quality}` : "q_auto";
  return `${CLOUD}/image/upload/f_auto,${q},c_limit,w_${width}/${src}`;
}

export function videoPoster(publicId: string, width = 700): string {
  return `${CLOUD}/video/upload/so_1,w_${width},f_jpg,q_auto/${publicId}.jpg`;
}

export function videoSrc(publicId: string, width = 1080): string {
  return `${CLOUD}/video/upload/q_auto,c_limit,w_${width}/${publicId}.mp4`;
}

export function imageSrc(publicId: string, width = 1600): string {
  return `${CLOUD}/image/upload/f_auto,q_auto,c_limit,w_${width}/${publicId}`;
}
