import { ITable } from "../../Types/ITable";

const Table = ({ header, data, onRowClick }: ITable) => {
  return (
    <table>
      <thead>
        <tr>
          {header.map((item, i) => (
            <th key={i}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i} onClick={() => onRowClick(item[0])}>
            {item.map((td, i) => {
              return <td key={i}>{td}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
