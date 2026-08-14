interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Backend Development",
    description: "Diseno y desarrollo de logica de negocio, servicios, endpoints e integraciones para aplicaciones empresariales.",
    icon: "nodejs"
  },
  {
    name: "REST APIs",
    description: "Implementacion de APIs para integracion entre modulos, servicios internos y sistemas externos.",
    icon: "link"
  },
  {
    name: "Full-Stack Development",
    description: "Construccion de aplicaciones web completas con experiencia en NestJS, Angular, Laravel y TypeScript.",
    icon: "typescript"
  },
  {
    name: "Database Design",
    description: "Modelado y trabajo con PostgreSQL, MySQL y MongoDB para sistemas con reglas de negocio reales.",
    icon: "mongodb"
  }
];

export default hardSkills;
