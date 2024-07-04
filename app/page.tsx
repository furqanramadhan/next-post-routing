import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1> Testing </h1>
    <br></br>
    <Link href="/posts">Post Page</Link>
    <br></br>
    <Link href ="/albums">Albums Page</Link>
    </>
  );
}
