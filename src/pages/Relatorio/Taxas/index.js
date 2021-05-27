import React, { useEffect, useState } from "react";
import {
  WrapperPesquisa,
  WrapperData,
  ItemPesquisa
} from "./styles";

import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";

import { useDispatch, useSelector } from "react-redux";



import MaterialTable from "material-table";

import api from "../../../services/api";

export default function Settings() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  registerLocale('ptBR', ptBR);

  const [list, setListaTabela] = useState([]);



  const [startDate, setStartDate] = useState(new Date());

  
  useEffect(() => {
    carregarTabelaTaxa();
  }, []);

  function carregarTabelaTaxa(data) {
    
    if(data==null)
      data = startDate

    setLoading(true);
    api
      .get("relatorio/retorna-taxas?data="+data.toISOString().slice(0,10))
      .then((response) => {
        setListaTabela(response.data)
        setLoading(false);
      });
  }

  function pesquisaData(data){
    console.log("LISTAAAAAAA " + JSON.stringify(data))

    setStartDate(data)
    setLoading(true)
    setTimeout(function () {
      carregarTabelaTaxa(data)
    }, 2000);

  
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

              zIndex: "auto",
            },
            cellStyle: {
              color: "#5C5C5C",
              fontSize: 12,

            },
          }}
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
 
    </>
  );
}
