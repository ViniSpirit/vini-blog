import Link from "next/link";
import Head from "next/head";
import styles from "./layout.module.css";

const name = "Marcos Vinicius";
export default function Layout({ children, home, storage }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/7356223ae9.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      {home ? (
        <header className={styles.header}>
          <div className={styles.title}>
            <h1 className={styles.logo}>Blog do Vini </h1>
          </div>
          <div className={styles.social}>
            <a href="https://github.com/ViniSpirit" target="_blank">
              <i aria-hidden className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/marcos-vinicius-75863a74/"
              target="_blank"
            >
              <i aria-hidden className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/ViniSpiritDev" target="_blank">
              <i aria-hidden className="fab fa-twitter-square"></i>
            </a>
          </div>
          {storage ? (
            <p className={styles.username}>Bem Vindo(a) {storage.name} !!</p>
          ) : (
            <div className={styles.item2}>
              <li>
                <Link href="/users/login">
                  <button>Login</button>
                </Link>
              </li>
              <li>
                <Link href="/users/register">
                  <button>Register</button>
                </Link>
              </li>
            </div>
          )}
        </header>
      ) : (
        ""
      )}

      {children}
    </>
  );
}
