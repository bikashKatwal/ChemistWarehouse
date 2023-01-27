import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Location({ locations }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Location Id</TableCell>
            <TableCell>Location Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations.map((row) => (
            <TableRow key={row.locationId}>
              <TableCell component="th" scope="row">
                {row.locationId}
              </TableCell>
              <TableCell> {row.locationName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
