import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Register,
  ContentTitle,
  ContentBody,
  EditIcon,
  Title,
  Header,
  CompanyIcon,
  Wrapper,
  SideMenu,
  ContentWrapper,
  Items,
  Line,
  HeaderDetail,
} from "./styles";
import NavBar from "../../components/Navbar";
import Table from "../../components/Table";
import MenuSettings from "../../components/Detalhe"

import { useDispatch, useSelector } from "react-redux";

import {
  loadTables,
  insertQuantityRecords,
  loadQuantityRecords,
} from "../../actions/tableListSettingsActions";

import { actions } from "../../actions/tableListSettingsActions";

import { selectors } from "../../selector";
import api from "../../services/api";

export default function Settings() {
  const dispatch = useDispatch();
  const listTable = useSelector(selectors.getTableSettings);
  const countRegister = useSelector(selectors.getCountRegisterSettings);
  const [loading, setLoading] = useState(false);
  const setTable = (newList) => dispatch(actions.updateTable(newList));

  const [listaTabela, setListaTabela] = useState([]);
  const [contentTitle, setContentTitle] = useState(0);
  const [content, setContent] = useState(0);



  useEffect(() => {
    carregarTabelas();
  }, []);

  function carregarTabelas() {
    setLoading(true);
    api
      .get("configuracao/retona-dados")
      .then((response) => {
        setListaTabela(response.data)
        setTable(response.data)
        setLoading(false);
      });
  }

  return (
    <Container>
      <NavBar />
      <Header>
      <CompanyIcon />
        <h1>Configurações</h1>
       
      </Header>
      
      <Content>
        <Wrapper>
          <SideMenu>
            <ul>
              {listaTabela.map((item, index) => {
                return (
                  <>
                  <li
                    className={content== index ?"ativo": "links"}
                    key={index}
                    onClick={() => setContent(index)}>
                    {item.titulo}
                  </li>
                  <Line/>
                  </>
                );
              })}
            </ul>
          </SideMenu>
          <ContentWrapper>
            <HeaderDetail />
        
            <Table index={content} />
          </ContentWrapper>
        </Wrapper>
      </Content>
    </Container>
  );
}
