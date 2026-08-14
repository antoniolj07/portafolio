interface FeaturedProject {
    title: string;
    category: string;
    summary: string;
    outcomes: string[];
    highlights: string[];
}

const featuredProjects: FeaturedProject[] = [
    {
        title: "Sistemas empresariales para logistica y operaciones",
        category: "Global Support",
        summary: "Participacion en el desarrollo de aplicaciones web orientadas a procesos de negocio como logistica, gestion de rutas, pedidos, clientes, inventario y operaciones internas.",
        outcomes: [
            "Diseno y desarrollo de funcionalidades backend y full-stack para sistemas empresariales reales.",
            "Implementacion de reglas de negocio, nuevas funcionalidades, mantenimiento y evolucion de aplicaciones existentes.",
            "Participacion en decisiones tecnicas relacionadas con arquitectura, modelado de datos e integraciones.",
        ],
        highlights: [
            "NestJS",
            "Angular",
            "Laravel",
            "TypeScript",
        ],
    },
    {
        title: "APIs REST e integracion de servicios",
        category: "Global Support",
        summary: "Diseno e implementacion de APIs REST para conectar aplicaciones, modulos internos y servicios externos dentro de soluciones empresariales.",
        outcomes: [
            "Creacion de endpoints y logica de integracion entre sistemas con distintos requerimientos de negocio.",
            "Trabajo con bases de datos relacionales y NoSQL para soportar operaciones, reportes y persistencia de informacion.",
            "Apoyo en mantenimiento, depuracion, optimizacion y refactorizacion de codigo en proyectos activos.",
        ],
        highlights: [
            "REST APIs",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
        ],
    },
    {
        title: "Sistema Integrado de Bibliotecas (EPS USAC)",
        category: "Proyecto academico-profesional",
        summary: "Desarrollo e implementacion de modulos para el sistema de gestion de la Biblioteca Central de la Universidad de San Carlos de Guatemala como parte del Ejercicio Profesional Supervisado.",
        outcomes: [
            "Construccion de modulos de adquisiciones, inventario y preservacion para el sistema ILS.",
            "Implementacion de funcionalidades para conteos fisicos, flujos de adquisicion y seguimiento de preservacion.",
            "Participacion en una solucion con reglas de negocio reales y enfoque en mantenibilidad y operacion institucional.",
        ],
        highlights: [
            "Laravel",
            "PHP",
            "MySQL",
            "Sistema ILS",
        ],
    },
];

export default featuredProjects;
