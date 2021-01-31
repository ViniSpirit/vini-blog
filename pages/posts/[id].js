import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "./id.module.css";
import remark from "remark";
import html from "remark-html";
import { useEffect, useState } from "react";
import formatDate from "../../utils/formatDate";

export default function Post({ post: {} }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const test = async () => {
      const newHtml = post.body;
      const processedContent = await remark().use(html).process(newHtml);
      setText(processedContent.contents);
    };
    test();
  }, []);
  return (
    <Layout>
      <Head>
        <link rel="icon" href="icon.svg" />
        <script
          src="https://kit.fontawesome.com/7356223ae9.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Link href="/">
        <a className={styles.link}>
          <i aria-hidden className="fas fa-chevron-left"></i>
          <i aria-hidden className="fas fa-chevron-left"></i> back
        </a>
      </Link>

      <div className={styles.container}>
        <h1>{post.title}</h1>
        <p className={styles.date}>{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    "http://vini-blog-backend.herokuapp.com/api/allposts"
  );
  const data = await response.json();
  const post = data.find((post) => post._id == params.id);
  post.date = formatDate(post.date);

  return {
    props: { post },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    "http://vini-blog-backend.herokuapp.com/api/allposts"
  );
  const data = await response.json();
  const test = data.map((post) => {
    return { params: { id: `${post._id}` } };
  });
  return {
    paths: test,
    fallback: true,
  };
}
