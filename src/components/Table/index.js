import React,{useState} from "react";
import { TableContent, Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../actions/tableListSettingsActions";
import { selectors } from "../../selector";

export default function Table({index}) {

  const dispatch = useDispatch();
  const table = useSelector(selectors.getTableSettings);
  const list = table[index];
  const [data, setData] = useState(list.data);
  
  
  const setTable = (newList) => dispatch(actions.updateTable(newList));


  const updateList = () => {
    let newTable = table;
    newTable[index].data = data;
    setTable(newTable);
   
  };
  
 
  return (
    <Container>
      <TableContent
        title={list.titulo}
        columns={list.header}
        data={data}
        options={{
          search: false,
          paging: false,
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                updateList();
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                updateList();
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                updateList();

                resolve();
              }, 1000);
            }),
        }}
      />
    </Container>
  );
}
