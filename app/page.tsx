import Link from "next/link";

export default function Home() {
  return (
    <div id="maincontent">
      <h1>Devcoder</h1>
      <p>I love writing code.</p>
      <p>My favorite programming language is HTML.</p>
      <p>I like posting programming memes.</p>
      <p>
        <Link href="/contact">Contact</Link>
      </p>
    </div>
  );
}
