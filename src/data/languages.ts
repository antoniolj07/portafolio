interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Espanol",
        level: "Nativo",
        description: "Comunicacion oral y escrita fluida",
        show: true
    },
];

export default languages;
