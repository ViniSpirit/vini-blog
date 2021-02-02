import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import getAge from "../utils/getAge";
import formatDate from "../utils/formatDate";

export default function Home({ data }) {
  const [storage, setStorage] = useState({});

  useEffect(() => {
    setStorage(JSON.parse(localStorage.getItem("userInfo")));
  }, []);
  const name = "Marcos Vinicius";
  return (
    <Layout home storage={storage}>
      <Head>
        <title>Blog do Vini</title>
        <link rel="icon" href="icon.svg" />
        <script
          src="https://kit.fontawesome.com/7356223ae9.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.item1}>
            <img className={styles.img} src="/profile.jpg" alt="profile" />
            <h2>{name}</h2>
          </div>

          <p className={styles.p}>
            Oi eu sou Vini, tenho {getAge("01/06/1994")} anos, Desenvolvedor Web
            Full-Stack. Principais tecnologias: JavaScript, HTML, CSS, React.js,
            Next.js, React Native, Redux, Node.js, Express, MongoDB. entre em
            contato pelo email: marcosvims@gmail.com .
          </p>
          <h2>Blog</h2>
          <div>
            {data.map((post) => (
              <div key={post._id} className={styles.allLinks}>
                <Link href={`/posts/${post._id}`}>
                  <a className={styles.link}>{post.title}</a>
                </Link>
                <p className={styles.date}>{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "http://vini-blog-backend.herokuapp.com/api/allposts"
  );
  const data = await response.json();
  data.forEach((item) => {
    return (item.date = formatDate(item.date));
  });
  data.reverse();

  return {
    props: { data },
    revalidate: 1,
  };
}
