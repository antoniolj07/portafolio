interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

const workExperience: WorkExperience[] = [
    {
        title: "Software Developer (Part-time)",
        startDate: "2020-07-01",
        company: "Global Support",
        location: "Guatemala",
        description: "Desarrollo e implementación de aplicaciones web y sistemas empresariales, participando en distintas etapas del ciclo de desarrollo de software.",
        goals: [
            "Desarrollo de aplicaciones backend y full-stack utilizando tecnologías como NestJS, Angular, Laravel y TypeScript.",
            "Diseño e implementación de APIs REST para integración entre aplicaciones, servicios y sistemas externos.",
            "Diseño y administración de bases de datos relacionales y NoSQL, trabajando con PostgreSQL, MySQL y MongoDB.",
            "Participación en el diseño de arquitectura, modelado de datos y definición de soluciones técnicas para nuevos módulos y funcionalidades.",
            "Desarrollo de sistemas orientados a procesos empresariales, incluyendo logística, gestión de rutas, pedidos, clientes, inventario y operaciones internas.",
            "Mantenimiento y evolución de aplicaciones existentes mediante nuevas funcionalidades, resolución de errores, optimización y refactorización de código.",
            "Trabajo con Git y flujos de desarrollo colaborativo para control de versiones y mantenimiento de diferentes proyectos de software.",
        ],
        currentJob: true,
    },
];

export default workExperience;
