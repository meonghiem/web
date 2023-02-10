import * as React from "react";
import Styles from "./table.module.css";
import Button from "../button";
// import Button from '../button'

function handleClickOnRow(e) {
  var curRow = e.currentTarget;
  var col0 = curRow.cells[3].innerHTML;
  alert(col0);
}

const Table = ({ tableHead, data, tableStyle }) => {
  //   console.log(data)
  let list = data.map((rows, index) => {
    console.log(rows);
    return (
      <tr id={index} className={Styles.row} onClick={handleClickOnRow}>
        {Object.entries(rows).map(([key, value]) =>
          key !== "key" ? (
            key === "action" ? (
              <Button btnType="dark" children="Update"></Button>
            ) : (
              <td className={Styles.cell}>{value}</td>
            )
          ) : (
            <></>
          )
        )}
      </tr>
    );
  });
  // list += <Button btnType="table" ></Button>
  return (
    <div style={tableStyle} className={Styles.outside}>
      <table className={Styles.table} rules="none">
        <thead className={Styles.tablehead}>
          <tr>
            {tableHead.map((ths) => (
              <th scope="col" className={Styles.cell}>
                {ths.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={Styles.tablebody}>{list}</tbody>
      </table>
    </div>
  );
};

export default Table;
