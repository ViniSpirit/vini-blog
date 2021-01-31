import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./register.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmal] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Xerror, setError] = useState(false);
  const [Zerror, setZError] = useState(false);

  const router = useRouter();

  const createUser = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    if (!name || !email || !password || !confirmPassword) {
      setZError(true);
      console.log("preencha todos os campos");
    } else if (password !== confirmPassword) {
      setError(true);
    } else {
      try {
        const user = await axios.post(
          "http://vini-blog-backend.herokuapp.com/api/user",
          {
            name,
            email,
            password,
          },
          config
        );
        router.push("/thanks");
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <>
      <Head>
        <link rel="icon" href="icon.svg" />
      </Head>
      <form className={styles.form} onSubmit={createUser}>
        <div className={styles.error}>
          {Xerror && <p>password do not match </p>}
          {Zerror && <p>fill in all fields</p>}
        </div>
        <div className={styles.container}>
          <h1>Register</h1>
          <label>
            Name:
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmal(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <div className={styles.btn}>
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default register;
