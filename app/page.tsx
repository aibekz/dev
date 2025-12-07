import Link from "next/link";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <div id="maincontent">
    <h1>Hey, It's Devcoder.</h1>
    <p>Prompt Engineer based in San Francisco, CA.</p>
    <br />
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
      <Globe size={16} />
      <span>United States</span>
    </div>
    <p>
      <br />
      <Link href="/contact">Contact</Link>
    </p>
    </div>
  );
}
