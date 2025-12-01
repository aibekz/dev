import Link from "next/link";

export default function Contact() {
  return (
    <div id="maincontent">
      <h1>Contact</h1>
      <p>For all inquiries please email me at <a href="mailto:devcoder.me@gmail.com">devcoder.me@gmail.com</a></p>
      <p>
        <Link href="/">Back</Link>
      </p>
    </div>
  );
}

