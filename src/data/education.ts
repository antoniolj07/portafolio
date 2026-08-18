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
        title: "Ingeniería en Ciencias y Sistemas",
        startDate: "2019-01-01",
        endDate: "",
        school: "Universidad de San Carlos de Guatemala (USAC)",
        location: "Guatemala",
        description: "Estudiante de Ingeniería en Ciencias y Sistemas en la Universidad de San Carlos de Guatemala, con pensum de estudios cerrado y Ejercicio Profesional Supervisado (EPS) finalizado. Actualmente en proceso de graduación, pendiente de realizar el examen privado. Durante la carrera he fortalecido conocimientos en desarrollo de software, bases de datos, arquitectura de sistemas, redes, ingeniería de software y análisis de soluciones tecnológicas, complementándolos con experiencia profesional en desarrollo de aplicaciones y sistemas empresariales desde 2020. Como parte de mi EPS desarrollé e implementé módulos de adquisiciones, inventario y preservación para el sistema de gestión de la Biblioteca Central de la Universidad de San Carlos de Guatemala.",
        currentUni: true,
    },
];

export default education;
