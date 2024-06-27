import { revalidateTag } from "next/cache";
import React from "react";

export default function NameButton({ newName }: { newName: string }) {
  // const handleButtonClick = async () => {
  //   const res = await fetch("http://localhost:3000/api/test", {
  //     method: "post",
  //     body: JSON.stringify({ newName }),
  //   });

  //   const json = await res.json();

  //   revalidateTag("myName");
  // };

  return <div>{/* <button onClick={handleButtonClick}>post!</button>; */}</div>;
}
