import React, { useEffect } from "react";
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
} from "./styles";
import NavBar from "../../components/Navbar";
import Table from "../../components/Table";

import { useDispatch, useSelector } from "react-redux";

import {
  loadTables,
  insertQuantityRecords,
  loadQuantityRecords,
} from "../../actions/tableListSettingsActions";

import { selectors } from "../../selector";

export default function Settings() {
  const dispatch = useDispatch();
  const listTable = useSelector(selectors.getTableSettings);
  const countRegister = useSelector(selectors.getCountRegisterSettings);

  useEffect(() => {
    loadTables(dispatch);
    loadQuantityRecords(dispatch);
  });

  return (
    <Container>
      <NavBar />
      <Header>
        <Title></Title>
        <CompanyIcon />
      </Header>
      <Content>
        <Register>
          <ContentTitle>LAYOUT 3 - Quantidade registros</ContentTitle>
          <ContentBody>
            <label>{countRegister}</label>
            <EditIcon />
          </ContentBody>
        </Register>
        {listTable.map((item, index) => {
          return <Table index={index} />;
        })}
      </Content>
    </Container>
  );
}
