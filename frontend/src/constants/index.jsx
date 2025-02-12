import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";


export const navItems = [
  { label: "Elections", href: "/elections" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  // { label: "Testimonials", href: "#" },
];



export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Fully Online",
    description:
      "Fully Managed and Online Voting Process Design.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform",
    description:
      "Run in any browser from your laptop , PC , mobile web browsers",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Real Time Starting and Ending of Election with no delay. ",
  }
];





