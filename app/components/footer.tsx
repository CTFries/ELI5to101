import { Heart, GitHub } from "react-feather";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="sticky top-[100vh] footer items-center p-4 bg-neutral text-neutral-content justify-center">
      created with <Heart color="red" /> by{" "}
      <Link href="https://github.com/ctfries">
        {" "}
        <span className="items-center justify-center">
          <GitHub /> ctfries{" "}
        </span>
      </Link>{" "}
      | &copy; {new Date().getFullYear()}
    </footer>
  );
}
