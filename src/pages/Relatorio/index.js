import React, { useEffect, useState } from "react";
import {
  Container,
  Content,

  Header,
  CompanyIcon,
  WrapperMenuItem,
  WrapperMenu,

} from "./styles";
import NavBar from "../../components/Navbar";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";

import { useDispatch, useSelector } from "react-redux";
import Taxas from "./Taxas"
import Transporte from "./Transporte"

import { FaBusAlt, FaPercent } from "react-icons/fa";
import { actions } from "../../actions/tableListSettingsActions";

import { selectors } from "../../selector";

export default function Settings() {
  const dispatch = useDispatch();
  const listTable = useSelector(selectors.getTableSettings);
  const countRegister = useSelector(selectors.getCountRegisterSettings);
  const [loading, setLoading] = useState(false);
  const setTable = (newList) => dispatch(actions.updateTable(newList));
  registerLocale('ptBR', ptBR);

  const [list, setListaTabela] = useState([]);
  const [contentTitle, setContentTitle] = useState(0);
  const [content, setContent] = useState(0);


  const [startDate, setStartDate] = useState(new Date());


  const relatorios = [
    {
      "title": "Taxas",
      "component": <Taxas />,
      "icon": <FaPercent/>,

    },
    {
      "title": "Transporte",
      "component": <Transporte />,
      "icon": <FaBusAlt/>,

    }
  ]

  useEffect(() => {
  }, []);




  return (
    <Container>
      <NavBar />
      <Header>
        <CompanyIcon />
        <h1>Relatorio</h1>

      </Header>
      <WrapperMenu>

        <ul>
          {relatorios.map((item, index) => {
            return (
              <>
                <li
                  className={content== index ? "ativo":""}
                  key={index}
                  onClick={() => setContent(index)}>
                  {item.icon}
                  {item.title}
                </li>

              </>
            );
          })}
        </ul>



      </WrapperMenu>

      <Content>

        {relatorios[content].component}
      </Content>
    </Container>
  );
}
