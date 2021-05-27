import React, { useEffect, useState } from "react";
import {
  WrapperPesquisa,
  WrapperData,
  
  ItemPesquisa
} from "./styles";

import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import "./modal.css";

import { useDispatch, useSelector } from "react-redux";



import MaterialTable from "material-table";

import api from "../../../services/api";
import ModalNotaFiscal from "../ModalNotaFiscal";

export default function Settings() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  registerLocale('ptBR', ptBR);

  const [list, setListaTabela] = useState([]);


  const [modal, setModal] = useState(false);
  const [notaFiscal, setNotaFiscal] = useState([]);
  

  const [exibeHeader, setExibeHeader] = useState(true);
  const [startDate, setStartDate] = useState(new Date());




  


  useEffect(() => {
    carregarTabelaTaxa();
  }, []);

  function carregarTabelaTaxa(data, numeroTransporte) {

    if (data == null)
      data = startDate;
   
    setLoading(true);
    api
      .get("relatorio/retorna-transportes?data=" + data.toISOString().slice(0, 10) + (numeroTransporte==null?"":numeroTransporte))
      .then((response) => {
        setListaTabela(response.data)
        setLoading(false);
      });
  }

  function pesquisaData(data) {
    console.log("LISTAAAAAAA " + JSON.stringify(data))

    setStartDate(data)
    setLoading(true)
    setTimeout(function () {
      carregarTabelaTaxa(data)
    }, 2000);


  }


  function closeModal() {
    setExibeHeader(true)
    setModal(false);
  }

  function openModal(data) {
    setNotaFiscal(data.notasFiscais);
    setExibeHeader(false)
    setModal(true);




  }
  return (
    <>

      <WrapperData>
        <h1>{list.titulo}</h1>
        <WrapperPesquisa>
          <ItemPesquisa>
            <label>Pesquisar por Data:</label>
            <DatePicker
              locale="ptBR"
              dateFormat="P"
              selected={startDate} onChange={date => pesquisaData(date)} />
          </ItemPesquisa>
          <ItemPesquisa>

            <label>Pesquisar por numeroTransporte:</label>
            <input
             type="text"
            placeholder="Número transporte"
            onChange={(event) => carregarTabelaTaxa(startDate,event.target.value!=""?"&numeroTransporte="+event.target.value:"")}
              />
          </ItemPesquisa>

        </WrapperPesquisa>
      </WrapperData>
      <MaterialTable
        title={list != null ? list.titulo : ""}
        columns={list != null ? list.header : []}
        data={list != null ? list.data : []}
        isLoading={loading}
        options={{
          showTitle: false,
          search: true,
          actionsColumnIndex: -1,
          toolbar: true,
          maxBodyHeight: 400,
          exportButton: true,

          pageSize: 10,
          pageSizeOptions: [10, 20, 30, 40, 50, 100],
          headerStyle: {
            fontWeight: "bold",
            color: "#5C5C5C",
            fontSize: 12,
            top: 0,
            display: exibeHeader,
            zIndex: "auto",
          },
          cellStyle: {
            color: "#5C5C5C",
            fontSize: 12,

          },
        }}
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => openModal(rowData)
          }
        ]}
        localization={{
          body: {
            emptyDataSourceMessage: "Nenhum registro para exibir",
          },
          toolbar: {
            searchTooltip: "Pesquisar",
            exportTitle: "Exportar",
            searchPlaceholder: "Pesquisar"
          },
          pagination: {
            labelRowsSelect: "linhas",
            labelDisplayedRows: "{count} de {from}-{to}",
            firstTooltip: "Primeira página",
            previousTooltip: "Página anterior",
            nextTooltip: "Próxima página",
            lastTooltip: "Última página",
          },
          header: {
            actions: "",
          },
        }}

      />
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="modal-skytefhub"
        overlayClassName="Overlay"

      >
        <ModalNotaFiscal lista={notaFiscal} />
      </Modal>

    </>
  );
}
