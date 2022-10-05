import React, { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";


export default function Home(): JSX.Element {
  
  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag='h1'>{rating}</Htag>
      <Button appearance="primary" arrow="right" >Кнопка</Button>
      <Button appearance="ghost" arrow='down'>Кнопка Вторая</Button>
      <P size='l'>klajshdlaksdjhalksdjhalsdkjahskasd</P>
      <P size='m'>klajshdlaksdjhalksdjhalsdkjahskasd</P>
      <P size='s'>klajshdlaksdjhalksdjhalsdkjahskasd</P>
      <Tag size='s' color="green">knlsfjklfjkldfs</Tag>
      <Tag size='m' color="gray" href="google.com">knlklfjkldfs</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
};