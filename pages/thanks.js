import React from "react";
import Link from "next/link";

const thanks = () => {
  return (
    <>
      <Link href="/">
        <a>back to home</a>
      </Link>
      <div>Obrigado por se inscrever</div>
      <Link href="/users/login">
        <a>faça o login</a>
      </Link>
    </>
  );
};

export default thanks;
