import React from "react";
import classes from "./Table.module.scss";

import { ITableData } from "../../utils/interfaces/interfaces";

type TableProps = {
  readonly tableData: ITableData;
};

export const Table = ({ tableData }: TableProps): React.ReactElement => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th></th>
          {tableData.thead.map((item) => (
            <th>{item.th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.tbody.map((item) =>
          item.blocks.map((item) => (
            <tr key={item.id}>
              {item.th && <th colSpan={3}>{item.th}</th>}
              {item.td && (
                <>
                  <td>{item.td[0]}</td>
                  <td>{item.td[1]}</td>
                  <td>{item.td[2]}</td>
                </>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
