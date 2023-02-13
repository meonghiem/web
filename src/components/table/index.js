// import * as React from "react";
// import "./table.css";
// import Button from "../button";
// // import Button from '../button'

// function handleClickOnRow(e) {
//   var curRow = e.currentTarget;
//   var col0 = curRow.cells[3].innerHTML;
//   alert(col0);
// }

// const Table = ({ tableHead, data, tableStyle }) => {
//   //   console.log(data)
//   let list = data.map((rows, index) => {
//     // console.log(rows);
//     return (
//       <tr id={index} className="row" onClick={handleClickOnRow}>
//         {Object.entries(rows).map(([key, value]) =>
//           key !== "key" ? (
//             key === "button" ? (
//               <Button btnType="dark" children={value}></Button>
//             ) : (
//               <td className="cell">{value}</td>
//             )
//           ) : (
//             <></>
//           )
//         )}
//       </tr>
//     );
//   });
//   // list += <Button btnType="table" ></Button>
//   return (
//     <div style={tableStyle} className="outside">
//       <table className="table" rules="none">
//         <thead className="tablehead">
//           <tr>
//             {tableHead.map((ths) => (
//               <th scope="col" className="cell">
//                 {ths.title}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="tablebody">{list}</tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

import * as React from "react";
import "./table.css";
import Button from "../button";

function handleClickOnRow(e) {
  var curRow = e.currentTarget;
  var col0 = curRow.cells[3].innerHTML;
  alert(col0);
}

const Table = ({ tableHead, data, tableStyle }) => {
  let list;
  if (data !== "none") {
    list = data.map((rows, index) => {
      return (
        <tr id={"row" + index} className="row" onClick={handleClickOnRow}>
          {tableHead.map((ths) => {
            let key = ths.key;
            let value = rows[key];
            // console.log(value);
            return key === "button" ? (
              <Button btnType="dark" children={ths.title}></Button>
            ) : !value ? (
              <td className="cell">None </td>
            ) : (
              <td className="cell">{value}</td>
            );
          })}
        </tr>
      );
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
        <tbody className="tablebody">{list ? list : null}</tbody>
      </table>
    </div>
  );
};

export default Table;
