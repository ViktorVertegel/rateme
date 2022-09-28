import React from "react";
import { Button, Htag } from "../components";


export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'> asdasdasd</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost">Кнопка Вторая</Button>
    </div>
  );
};