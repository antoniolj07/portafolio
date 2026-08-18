interface FeaturedProject {
    title: string;
    category: string;
    summary: string;
    outcomes: string[];
    highlights: string[];
}

const featuredProjects: FeaturedProject[] = [
    {
        title: "Sistemas empresariales para logística y operaciones",
        category: "Global Support",
        summary: "Participación en el desarrollo de aplicaciones web orientadas a procesos de negocio como logística, gestión de rutas, pedidos, clientes, inventario y operaciones internas.",
        outcomes: [
            "Diseño y desarrollo de funcionalidades backend y full-stack para sistemas empresariales reales.",
            "Implementación de reglas de negocio, nuevas funcionalidades, mantenimiento y evolución de aplicaciones existentes.",
            "Participación en decisiones técnicas relacionadas con arquitectura, modelado de datos e integraciones.",
        ],
        highlights: [
            "NestJS",
            "Angular",
            "Laravel",
            "TypeScript",
        ],
    },
    {
        title: "APIs REST e integración de servicios",
        category: "Global Support",
        summary: "Diseño e implementación de APIs REST para conectar aplicaciones, módulos internos y servicios externos dentro de soluciones empresariales.",
        outcomes: [
            "Creación de endpoints y lógica de integración entre sistemas con distintos requerimientos de negocio.",
            "Trabajo con bases de datos relacionales y NoSQL para soportar operaciones, reportes y persistencia de información.",
            "Apoyo en mantenimiento, depuración, optimización y refactorización de código en proyectos activos.",
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
        category: "Proyecto académico-profesional",
        summary: "Desarrollo e implementación de módulos para el sistema de gestión de la Biblioteca Central de la Universidad de San Carlos de Guatemala como parte del Ejercicio Profesional Supervisado.",
        outcomes: [
            "Construcción de módulos de adquisiciones, inventario y preservación para el sistema ILS.",
            "Implementación de funcionalidades para conteos físicos, flujos de adquisición y seguimiento de preservación.",
            "Participación en una solución con reglas de negocio reales y enfoque en mantenibilidad y operación institucional.",
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
