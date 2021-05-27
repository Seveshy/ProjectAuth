import React, { useEffect, useState } from "react";



import MaterialTable from "material-table";



export default function ModalNotaFiscal({lista}) {



  const [list, setListaTabela] = useState(lista);
  console.log("LISTAAAAAAA " + JSON.stringify(lista))

  const headerNotaFiscal =
  [
    {
      "title": "Data Entrega",
      "field": "dataEntrega",
      "editable": "never",
      "hidden": false
    },
    {
      "title": "Valor Titulo",
      "field": "valorTitulo",
      "editable": "never",
      "hidden": false
    },
    {
      "title": "Matricula",
      "field": "cliente.matricula",
      "editable": "never",
      "hidden": false
    },
    {
      "title": "Nome Cliente",
      "field": "cliente.nome",
      "editable": "never",
      "hidden": false
    },
    {
      "title": "Centro Emissor",
      "field": "empresa.centroEmissorNF",
      "editable": "never",
      "hidden": false
    }
  ]

  
 
  return (
    <MaterialTable
    title={"Notas Fiscais"}
    columns={headerNotaFiscal}
    data={list != null ? list : []}
 
    options={{
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
    
 
  />
  );
}
