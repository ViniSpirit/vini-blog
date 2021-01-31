import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./login.module.css";
import axios from "axios";

const createPost = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Xerror, setError] = useState(false);

  const router = useRouter();

  const loginHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://vini-blog-backend.herokuapp.com/api/user/login",
        {
          email: email,
          password: password,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));

      setError(false);
      router.push("/");
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };

  return (
    <>
      <Head>
        <link rel="icon" href="icon.svg" />
      </Head>
      <form className={styles.form} onSubmit={loginHandler}>
        <div className={styles.error}>
          {Xerror && <p>Invalid Email or password</p>}
        </div>
        <div className={styles.container}>
          <h2>Login</h2>

          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className={styles.btn}>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default createPost;
