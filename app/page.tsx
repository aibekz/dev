import Link from "next/link";

export default function Home() {
  return (
    <div id="maincontent">
      <h1>Devcoder</h1>
      <p>
        <Link href="/contact">Contact</Link>
      </p>
    </div>
  );
}
