interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const education: Education[] = [
    {
        title: "Ingenieria en Ciencias y Sistemas",
        startDate: "2019-01-01",
        endDate: "",
        school: "Universidad de San Carlos de Guatemala (USAC)",
        location: "Guatemala",
        description: "Estudiante de Ingenieria en Ciencias y Sistemas en la Universidad de San Carlos de Guatemala, con pensum de estudios cerrado y Ejercicio Profesional Supervisado (EPS) finalizado. Actualmente en proceso de graduacion, pendiente de realizar el examen privado. Durante la carrera he fortalecido conocimientos en desarrollo de software, bases de datos, arquitectura de sistemas, redes, ingenieria de software y analisis de soluciones tecnologicas, complementandolos con experiencia profesional en desarrollo de aplicaciones y sistemas empresariales desde 2020. Como parte de mi EPS desarrolle e implemente modulos de adquisiciones, inventario y preservacion para el sistema de gestion de la Biblioteca Central de la Universidad de San Carlos de Guatemala.",
        currentUni: true,
    },
];

export default education;
