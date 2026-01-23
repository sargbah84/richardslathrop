import type { Metadata } from "next";
import ChristianRichardsClient from "./ChristianRichardsClient";

export const metadata: Metadata = {
    title: "Christian P. Richards III - President",
    description:
        "Learn about Christian P. Richards III, President of Richards, Lathrop & Associates. From his NFL career to founding a client-first boutique wealth management firm.",
    openGraph: {
        title: "Christian P. Richards III | Richards, Lathrop & Associates",
        description:
            "Learn about Christian P. Richards III, President of Richards, Lathrop & Associates.",
    },
};

export default function ChristianRichards() {
    return <ChristianRichardsClient />;
}
