import Link from "next/link";
import React from "react";

const ChallengePage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
      }}
    >
      <Link href="/challenges/1">Challenge 1</Link>
      <Link href="/challenges/2">Challenge 2</Link>
      <Link href="/challenges/3">Challenge 3</Link>
    </div>
  );
};

export default ChallengePage;
