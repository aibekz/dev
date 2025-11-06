import Link from "next/link";

export default function Home() {
  return (
    <div id="maincontent">
   <h1>Hello, World.</h1>
   <p>Software Engineer, based in the U.S.</p>
   <p>I run on caffeine and curiosity.</p>
   <p>I write code in English and JavaScript.</p>
   <p>I build things that (sometimes) work.</p>
   <p>If you’re in tech, let’s connect.</p>
      <p>
        <Link href="/contact">Contact</Link>
      </p>
    </div>
  );
}
