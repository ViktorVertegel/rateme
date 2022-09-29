import React from "react";
import { Button, Htag, P } from "../components";


export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'> asdasdasd</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow='down'>Кнопка Вторая</Button>
      <P size='l'>klajshdlaksdjhalksdjhalsdkjahskasd</P>
      <P size='m'>klajshdlaksdjhalksdjhalsdkjahskasd</P>
      <P size = 's'>klajshdlaksdjhalksdjhalsdkjahskasd</P>
    </div>
  );
};