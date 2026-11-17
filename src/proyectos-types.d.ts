// Tipos del módulo virtual "virtual:proyectos" (lo genera vite-plugin-proyectos.js)

interface ImagenProyecto {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  altTarjeta?: string;
}

interface BloqueTexto {
  titulo: string;
  parrafos: string[];
}

declare module "virtual:proyectos" {
  export interface Proyecto {
    slug: string;
    orden: number;
    nombre: string;
    tipo: string;
    categoria: string;
    tarjeta: string;
    resumen: string;
    url?: string;
    botonVisitar?: string;
    detalles?: { etiqueta: string; valor: string }[];
    proyecto?: BloqueTexto;
    objetivo?: BloqueTexto;
    solucion?: {
      titulo: string;
      pasos: { titulo: string; texto: string }[];
    };
    escritorio?: { eyebrow?: string; titulo: string };
    responsive?: {
      eyebrow?: string;
      titulo: string;
      texto: string;
      grupoDispositivos?: boolean;
    };
    resultado?: BloqueTexto & { botonVisitar?: string };
    cta?: { titulo: string; texto: string };
    colorPantalla?: string;
    seo?: { titulo?: string; descripcion?: string; descripcionSocial?: string };
    imagenes: {
      portada: ImagenProyecto | null;
      escritorio: ImagenProyecto | null;
      movil: ImagenProyecto | null;
      tablet: ImagenProyecto | null;
      seccionEscritorio: ImagenProyecto | null;
      responsive: ImagenProyecto | null;
    };
  }

  const proyectos: Proyecto[];
  export default proyectos;
}
