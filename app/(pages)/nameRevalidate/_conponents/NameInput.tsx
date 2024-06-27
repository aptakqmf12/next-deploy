import { ChangeEvent } from "react";

interface NameInputProps {
  name: string;
  setName: (v: string) => void;
}

export default function NameInput({ name, setName }: NameInputProps) {
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <input
      type="text"
      value={name}
      onChange={handleNameChange}
      aria-label="이름 입력"
    />
  );
}
