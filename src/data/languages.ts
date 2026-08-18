interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Español",
        level: "Nativo",
        description: "Comunicación oral y escrita fluida",
        show: true
    },
];

export default languages;
