import useStyles from "./Table.style";
import ActionColumn from "./ActionColumn";
import unlock from "../../../assets/icons/lock.svg";
import lock from "../../../assets/icons/lock_open.svg";

const Table = ({
  columns,
  data,
  icon,
  icon2,
  icon3,
  columnIcon,
  textLink,
  columnAction,
  className,
  className2,
  classNameIcon,
  onClick,
  onDelete,
  onAdd,
  start,
  end,
  onEdit,
  tableRef,
  classLink,
  state,
}) => {
  const classes = useStyles();

  return (
    <table className={className || classes.table} ref={tableRef}>
      <thead className={classes.headTable}>
        <tr>
          {columns.map((column, index) => (
            <th className={classes.nameHead} key={index}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, rowIndex) => {
          return  (
            <tr className={classes.rows} key={rowIndex}>
              {row.map((cell, cellIndex) => {
              return(
                <td className={className2 || classes.bodyTable} key={cellIndex}>
                  {cellIndex === columns.indexOf(`${columnIcon}`) && (
                    <ActionColumn
                      icon={icon}
                      icon2={state?(row[state]==='habilitado'?lock:unlock):icon2}
                      icon3={icon3}
                      onDelete={onDelete}
                      onEdit={onEdit}
                      onAdd={onAdd}
                      id={row.slice(start, end).join(" ")}
                      idSpecific={cell}
                      idEdit={rowIndex}
                      classNameIcon={classNameIcon}
                    />
                  )}
                  {(typeof cell === "string" || typeof cell === "number") &&
                    !(cellIndex === columns.indexOf(`${columnIcon}`)) &&
                    cell}
  
                  {columns[cellIndex] === `${columnAction}` && (
                    <div className={classLink}>
                      <p
                        className={classes.underline}
                        onClick={()=>onClick(rowIndex)}
                      >
                        {" "}
                        {textLink}{" "}
                      </p>
                    </div>
                  )}
                </td>
              )})}
            </tr>
          )
        }
        
          )
            }
      </tbody>
    </table>
  );
};

export default Table;
