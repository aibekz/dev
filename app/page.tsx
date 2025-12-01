import Link from "next/link";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <div id="maincontent">
    <h1>Hello, World.</h1>
    <p>It's Devcoder, a Software Engineer</p>
    <p>I run on caffeine and curiosity.</p>
    <p>I build things that (sometimes) work.</p>
    <p>If you're in tech, let's connect.</p>
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
