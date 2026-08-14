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
        description: "Desarrollo e implementacion de aplicaciones web y sistemas empresariales, participando en distintas etapas del ciclo de desarrollo de software.",
        goals: [
            "Desarrollo de aplicaciones backend y full-stack utilizando tecnologias como NestJS, Angular, Laravel y TypeScript.",
            "Diseno e implementacion de APIs REST para integracion entre aplicaciones, servicios y sistemas externos.",
            "Diseno y administracion de bases de datos relacionales y NoSQL, trabajando con PostgreSQL, MySQL y MongoDB.",
            "Participacion en el diseno de arquitectura, modelado de datos y definicion de soluciones tecnicas para nuevos modulos y funcionalidades.",
            "Desarrollo de sistemas orientados a procesos empresariales, incluyendo logistica, gestion de rutas, pedidos, clientes, inventario y operaciones internas.",
            "Mantenimiento y evolucion de aplicaciones existentes mediante nuevas funcionalidades, resolucion de errores, optimizacion y refactorizacion de codigo.",
            "Trabajo con Git y flujos de desarrollo colaborativo para control de versiones y mantenimiento de diferentes proyectos de software.",
        ],
        currentJob: true,
    },
];

export default workExperience;
