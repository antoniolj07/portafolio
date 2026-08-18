interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Backend Development",
    description: "Diseño y desarrollo de lógica de negocio, servicios, endpoints e integraciones para aplicaciones empresariales.",
    icon: "nodejs"
  },
  {
    name: "REST APIs",
    description: "Implementación de APIs para integración entre módulos, servicios internos y sistemas externos.",
    icon: "link"
  },
  {
    name: "Full-Stack Development",
    description: "Construcción de aplicaciones web completas con experiencia en NestJS, Angular, Laravel y TypeScript.",
    icon: "typescript"
  },
  {
    name: "Database Design",
    description: "Modelado y trabajo con PostgreSQL, MySQL y MongoDB para sistemas con reglas de negocio reales.",
    icon: "mongodb"
  }
];

export default hardSkills;
