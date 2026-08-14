export type Lang = "es" | "en";

export interface MenuItem {
    path: string;
    label: string;
}

export interface ProfileFact {
    value: string;
    description: string;
}

export interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

export interface EducationItem {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

export interface SkillItem {
    name: string;
    description?: string;
    icon: string;
}

export interface LanguageItem {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

export type ProjectImageFrame = "browser" | "phone" | "plain";

export interface ProjectImage {
    src: string;
    alt: string;
    darkSrc?: string;
    frame?: ProjectImageFrame;
    label?: string;
}

export interface ProjectEntry {
    slug: string;
    icon: string;
    category: string;
    title: string;
    shortDescription: string;
    summary: string;
    location: string;
    status: string;
    stack: string[];
    highlights: string[];
    overview: string[];
    images: ProjectImage[];
    externalUrl?: string;
    placeholder: boolean;
}

export interface LocaleDictionary {
    site: {
        title: string;
        description: string;
        tags: string[];
        author: string;
        footer: string;
    };
    navigation: {
        menu: MenuItem[];
        openMenuLabel: string;
        languageLabel: string;
        themeToggleLabel: string;
        languages: Record<Lang, string>;
    };
    home: {
        tabs: {
            portfolio: string;
            about: string;
        };
    };
    profile: {
        name: string;
        profession: string;
        aboutMe: string;
        facts: ProfileFact[];
        experienceTitle: string;
        educationTitle: string;
        technicalSkillsTitle: string;
        softSkillsTitle: string;
        languagesTitle: string;
        currentLabel: string;
        workExperience: WorkExperience[];
        education: EducationItem[];
        technicalSkills: SkillItem[];
        softSkills: SkillItem[];
        languages: LanguageItem[];
    };
    actions: {
        downloadCv: string;
        contactAvailableOnRequest: string;
        viewMore: string;
        moreInfo: string;
        backToProjects: string;
        backToTop: string;
    };
    projects: {
        eyebrow: string;
        sectionTitle: string;
        sectionDescription: string;
        pageTitle: string;
        pageDescription: string;
        detailOverviewTitle: string;
        detailHighlightsTitle: string;
        detailStackTitle: string;
        detailGalleryTitle: string;
        detailLocationTitle: string;
        detailStatusTitle: string;
        placeholderBadge: string;
        ctaTitle: string;
        ctaDescription: string;
        items: ProjectEntry[];
    };
    blog: {
        title: string;
        description: string;
        empty: string;
    };
}
