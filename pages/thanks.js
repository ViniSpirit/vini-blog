import React from "react";
import Link from "next/link";

const thanks = () => {
  return (
    <>
      <Link href="/">
        <a>back to home</a>
      </Link>
      <div>thanks for subscribe</div>
      <Link href="/users/login">
        <a>login</a>
      </Link>
    </>
  );
};

export default thanks;
