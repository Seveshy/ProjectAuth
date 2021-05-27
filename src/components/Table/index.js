import React,{useState} from "react";
import { TableContent, Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../actions/tableListSettingsActions";
import { selectors } from "../../selector";
import { ListaDetail } from "../../services/listaDetail";
import api from "../../services/api";

export default function Table({index}) {

  const dispatch = useDispatch();
  const table = useSelector(selectors.getTableSettings);
  const list = table[index];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const setTable = (newList) => dispatch(actions.updateTable(newList));
 
  console.log("index  "+JSON.stringify(list))
  const updateList = (dataUpdate) => {
 

    api
      .put("configuracao"+list.url,dataUpdate)
      .then((response) => {
        carregarTabelas();
     
      });
   
  };
  
  function carregarTabelas() {
    setLoading(true);
    api
      .get("configuracao/retona-dados")
      .then((response) => {
    
        setTable(response.data)
        setLoading(false);
      });
  }
  return (
    <Container>
      <TableContent
        title={list!=null ? list.titulo : ""}
        columns={list!=null ? list.header:[]}
        data={list!=null ?  list.data:[]}
        isLoading={loading}
        options={{
          showTitle: true,
          search: true,
          actionsColumnIndex: -1,
          toolbar: true,
          maxBodyHeight: 400,

          pageSize: 10,
          pageSizeOptions: [10, 20, 30, 40, 50, 100],
          headerStyle: {
            fontWeight: "bold",
            color: "#5C5C5C",
            fontSize: 14,
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
        editable={{
         
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                updateList(newData);
                resolve();
              }, 1000);
            }),
        
        }}
      />
    </Container>
  );
}
