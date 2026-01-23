import type { Metadata } from "next";
import MichaelLathropClient from "./MichaelLathropClient";

export const metadata: Metadata = {
    title: "Michael Lathrop - Chief Investment Officer",
    description:
        "Learn about Michael Lathrop, Chief Investment Officer of Richards, Lathrop & Associates. With 14+ years in investment management, specializing in multi-asset portfolios and tax optimization.",
    openGraph: {
        title: "Michael Lathrop | Richards, Lathrop & Associates",
        description:
            "Learn about Michael Lathrop, Chief Investment Officer of Richards, Lathrop & Associates.",
    },
};

export default function MichaelLathrop() {
    return <MichaelLathropClient />;
}
