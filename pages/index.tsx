import React, { useEffect, useState } from "react";
import { Button, Htag, P, Tag } from "../components";


export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  
  useEffect(() => {
    console.log('Counter=' + counter);
    return function cleanup() {
      console.log('Unmount');
    }
  }, [] )
  return (
    <div>
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance="primary" arrow="right" onClick={() => setCounter(x => x+1)}>Кнопка</Button>
      <Button appearance="ghost" arrow='down'>Кнопка Вторая</Button>
      <P size='l'>klajshdlaksdjhalksdjhalsdkjahskasd</P>
      <P size='m'>klajshdlaksdjhalksdjhalsdkjahskasd</P>
      <P size='s'>klajshdlaksdjhalksdjhalsdkjahskasd</P>
      <Tag size='s' color="green">knlsfjklfjkldfs</Tag>
      <Tag size = 'm' color = "gray" href="google.com">knlklfjkldfs</Tag>

    </div>
  );
};