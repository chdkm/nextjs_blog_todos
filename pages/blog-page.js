import Link from "next/link";
import Layout from "../components/Layout";
import { getAllPostsData  } from "../lib/posts";
import Post from "../components/Post";

export default function BlogPage({ filteredPosts }) {
  return(
    <Layout title="Blog page">
      <ul>
        {filteredPosts && filteredPosts.map((post) => <Post key={post.id} post={post}/>)}
      </ul>
      <Link href="/main-page">
        <div className="flex cursor-pointer mt-12">
          <svg
          className="w-6 h-6 mr-3"
          fill="none" stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"/>
          </svg>
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  const filteredPosts = await getAllPostsData();
  return {
    props: { filteredPosts },
    revalidate: 3,
  };
}