import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

function Row({ row, setEditPizza }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.pizzaId}
        </TableCell>
        <TableCell>{row.pizzaType}</TableCell>
        <TableCell>${row.price}</TableCell>

        <TableCell sx={{ width: "130px" }}>
          <ModeEditOutlineIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setEditPizza(row)}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Ingredient
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.ingredients.map((item) => (
                    <TableRow key={item.ingredientId}>
                      <TableCell component="th" scope="row">
                        {item.ingredientId}
                      </TableCell>
                      <TableCell>{item.ingredientName}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function PizzaMenu({ pizzaTypes, setEditPizza }) {
  const { pizzas } = pizzaTypes;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Pizza Id</TableCell>
            <TableCell>Pizza Type</TableCell>
            <TableCell>Price ($)</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pizzas.map((row) => (
            <Row key={row.pizzaId} row={row} setEditPizza={setEditPizza} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
