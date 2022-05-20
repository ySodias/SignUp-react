import React, {useState} from "react";
import { render } from 'react-dom';
import { AgGridReact } from "ag-grid-react";

export interface IPagementoPros{}

const Pagamentos: React.FC<IPagementoPros> = (props) =>{

  const [rowData] = useState([
    {make: "Beatriz", model: "Ativa"},
  ]);

  const [columnDefs] = useState([
    { field: 'Nome' },
    { field: 'Estado da Matrícula' }
  ])

  return <>
      <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
  </>
}

export default Pagamentos;