"use client"
import clsx from "clsx";
import { Button } from "./components/ui/Button";

export default function Home() {
  let value = 10;

  return (
    <Button className={clsx({
      "bg-white hover:bg-white text-blue-500": value === 10,
      "bg-green-500 hover:bg-green-700": value < 10,
      "bg-yellow-500 hover:bg-yellow-700": value > 10,
    })} onClick={() => {
      alert("Usando twmerge y clsx")
    }}> Home</Button >
  );
}
