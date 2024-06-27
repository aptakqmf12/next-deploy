"use client";

import { ChangeEvent, useState } from "react";
import NameInput from "./NameInput";
import NameButton from "./NameButton";

export default function NameForm() {
  const [name, setName] = useState("");

  return (
    <>
      <NameInput {...{ name, setName }} />
      <NameButton newName={name} />
    </>
  );
}
