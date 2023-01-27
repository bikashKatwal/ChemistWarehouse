import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

export default function PizzaMenu({ pizzaTypes }) {
  const { pizzas } = pizzaTypes;

  //   const [pizzaList, setPizzaList] = useState(pizzas);
  //   console.log({ pizzaList });

  const handleEdit = (id) => {
    //     const pizza = pizzaList;
    //     pizza.forEach((item) => {
    //       item.isEdit = item.pizzaId === id;
    //     });
    //     setPizzaList(pizza);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Pizza Id</TableCell>
            <TableCell>Pizza Type</TableCell>
            <TableCell>Price ($)</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pizzas &&
            pizzas.map((row) => (
              <TableRow key={row.pizzaId}>
                <TableCell component="th" scope="row">
                  {row.pizzaId}
                </TableCell>
                <TableCell> {row.pizzaType}</TableCell>
                <TableCell> ${row.price}</TableCell>
                {/* {row.isEdit && row.isEdit ? (
                  <TableCell> ${row.price}</TableCell>
                ) : (
                  <TableCell> show Edit text</TableCell>
                )} */}
                <TableCell>
                  <ModeEditOutlineIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleEdit(row.pizzaId)}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
