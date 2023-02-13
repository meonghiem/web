import * as React from "react";
import "./table.css";
import Button from "../button";



const Table = ({ tableHead, data, tableStyle }) => {

  function handleClickOnRow(e) {
    var curRow = e.currentTarget;
    let count = 0;
    var noti = '';
    tableHead.map( (ths) => {
      var value = curRow.cells[count];
      if(value) {
        
        var col = value.innerHTML;
        count++;
        noti += ths.title + " : " + col +'\n';
      }
    })
    alert(noti)
  
  }
    
  let list;
  if(data !== "none")
  {
    list = data.map( (rows, index) => {
      return (
        <tr id={'row'+index} className="row" onClick={handleClickOnRow}>
        {
          tableHead.map( (ths) => {
            let key = ths.key;
            let value = rows[key];
            // console.log(value);
            return(
              key === "button" ? 
              <Button btnType="dark" children={ths.title}></Button> : 
              !value ?  <td className="cell">0</td> :
              <td className="cell">{value}</td>
            );
          })
        }
        </tr>
      )
    });
  }

  return (
    <div style={tableStyle} className="outside">
      <table className="table" rules="none">
        <thead className="tablehead">
          <tr>
            {tableHead.map((ths) => (
              <th scope="col" className="cell">
                {ths.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tablebody">
        { list ? list : <td className="row">"No record"</td>}
        </tbody>
      </table>
      
      <div id="moreInfo" hidden={true}>
              {/* {null} */}
      </div>
    </div>
  );
};

export default Table;
