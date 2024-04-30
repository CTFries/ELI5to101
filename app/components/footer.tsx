import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] flex items-center p-4 bg-neutral text-neutral-content justify-center space-x-2 ">
      <span>created with</span>
      <FavoriteIcon className="mx-1 text-red-500" />
      <span>by</span>
      <Link href="https://github.com/ctfries">
        <span className="flex items-center">
          <GitHubIcon className="mr-1" />
          <span>ctfries</span>
        </span>
      </Link>
      <span className="flex items-center text-lg">
        <CopyrightIcon className="mr-1" />
        {new Date().getFullYear()}
      </span>
    </footer>
  );
}
