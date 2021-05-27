import React, { useState } from "react";

import {
  Container,
  SideMenu,
  Content,
  Items,
  Line,
  HeaderDetail,

 
} from "./styles";
import Table from"../Table"
import { ListaDetail } from "../../services/listaDetail";

export default function Detalhe({lista}) {
  const [content, setContent] = useState(0);
  const [contentTitle, setContentTitle] = useState(0);

  console.log("LISTAAA", JSON.stringify(lista))
  return (
    <Container>
      <SideMenu>
        <ul>
          {lista.map((item, index) => {
            return (
              <li
                className="links"
                key={index}
                onClick={() => setContent(index)}
              >
                {item.titulo}
              </li>
            );
          })}
        </ul>
      </SideMenu>
     
      <Content>
        <HeaderDetail>
          {/* <label>{lista[content].titulo}</label> */}
         
        </HeaderDetail>
        <Line />

        <Table index={content} />
     
      </Content>
    </Container>
  );
}
function retornaCampo(item) {

    return (
      <Items>
        <label className="title">{item.title}</label>
        <label className="value">{item.value}</label>
      </Items>
    );
 
}
