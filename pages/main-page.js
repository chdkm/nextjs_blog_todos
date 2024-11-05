import Cookie from "universal-cookie";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Link from "next/link";

const cookie = new Cookie();


export default function MainPage() {
  const router = useRouter();
  const logout = () => {
    //cookie.remove("access_token");
    cookie.remove("access_token", { path: "/" });
    router.push("/");
  };
  return (
    <Layout title="Main page">
      <div className="mb-10">
        <Link href="/blog-page">
          <a className="bg-indigo-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded">
            Visit Blog by SSG + ISR
          </a>
        </Link>
        <Link href="/task-page">
          <a className="bg-indigo-500 mr-8 hover:bg-indigo-600 text-white px-4 py-12 rounded">
            Visit Task by CSR + ISR
          </a>
        </Link>
      </div>
      <svg
        onClick={logout}
        className="mt-10 cursor-pointer w-6 h-6"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
        />
      </svg>
    </Layout>
  )
}