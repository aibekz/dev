import Link from "next/link";

export default function NotFound() {
  return (
    <div id="maincontent">
      <h1>404 - Not Found</h1>
      <p>
        <br />
        <Link href="/">Go Back Home</Link>
      </p>
    </div>
  );
}

