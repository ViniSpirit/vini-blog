import React, { useState } from "react";
import axios from "axios";
import styles from "./createPost.module.css";

const createPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const create = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://vini-blog-backend.herokuapp.com/api/createpost",
      {
        title,
        author: "Vinicius",
        body,
      },
      config
    );
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={create}>
      <label>
        Title:
        <input type="text" onChange={(e) => setTitle(e.target.value)} />{" "}
      </label>
      <label>
        Markdown:
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </label>
      <button type="submit"> criar</button>
    </form>
  );
};

export default createPost;
