import * as React from 'react'
import Styles from './table.module.css'
import Button from '../button'
// import Button from '../button'

function handleClickOnRow(e) {
  var curRow = e.currentTarget;
  var col0 = curRow.cells[3].innerHTML;
  alert(col0);
}

const Table = ({ tableHead, data }) => {
  //   console.log(data)
  return (
    <div className={Styles.outside}>
      <table className={Styles.table}>
        <thead className={Styles.tablehead}>
          <tr>
            {tableHead.map((ths) => (
              <th scope="col" className={Styles.cell}>
                {ths.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={Styles.tablebody}>
          {data.map((row, index) => (
            <tr id={index} className={Styles.row} onClick={handleClickOnRow}  >
              <td className={Styles.cell}>{row.day}</td>
              <td className={Styles.cell}>{row.date}</td>
              <td className={Styles.cell}>{row.in}</td>
              <td className={Styles.cell}>{row.out}</td>
              <td className={Styles.cell}>{row.total_break}</td>
              <td className={Styles.cell}>{row.work_time}</td>
              <td className={Styles.cell}>
                <Button>
                    Update
                </Button>
              </td>
              <td className={Styles.cell}>
                <Button>
                  Comment
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
