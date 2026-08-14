import type { ReactNode } from "react";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/tabs.tsx";

interface Props {
    portfolioLabel: string;
    aboutLabel: string;
    portfolio?: ReactNode;
    about?: ReactNode;
}

const TabsButtons = (props: Props) => {
    return (
        <Tabs defaultValue="portfolio" className="w-full">
            <TabsList className={"grid h-auto w-full grid-cols-2 overflow-hidden rounded-2xl border border-neutral-200 bg-white/80 p-1.5 shadow-sm dark:border-white/10 dark:bg-n700/80"}>
                <TabsTrigger className={"min-w-0 rounded-xl py-3 font-semibold data-[state=active]:bg-light-theme data-[state=active]:text-n900 dark:data-[state=active]:bg-dark-theme dark:data-[state=active]:text-primary-dark"} value="portfolio">{props.portfolioLabel}</TabsTrigger>
                <TabsTrigger className={"min-w-0 rounded-xl py-3 font-semibold data-[state=active]:bg-light-theme data-[state=active]:text-n900 dark:data-[state=active]:bg-dark-theme dark:data-[state=active]:text-primary-dark"} value="about">{props.aboutLabel}</TabsTrigger>
            </TabsList>
            <TabsContent value="portfolio">
                {props.portfolio}
            </TabsContent>
            <TabsContent value="about">
                {props.about}
            </TabsContent>
        </Tabs>
    );
};

export default TabsButtons;
