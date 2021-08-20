import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const DescriptionTable = (props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {props.vehicleDetails.map((row) => {
            return (
              <>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Ad Reference</StyledTableCell>
                <StyledTableCell align="left">{row.AdReference}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Model Year</StyledTableCell>
                <StyledTableCell align="left">{row.modelYear}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Condition</StyledTableCell>
                <StyledTableCell align="left">{row.condition}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Transmission</StyledTableCell>
                <StyledTableCell align="left">{row.transmission}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Manufacturer</StyledTableCell>
                <StyledTableCell align="left">{row.manufacturer}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Model</StyledTableCell>
                <StyledTableCell align="left">{row.model}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Fuel Type</StyledTableCell>
                <StyledTableCell align="left">{row.fuelType}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Engine Capacity</StyledTableCell>
                <StyledTableCell align="left">{row.engineCapacity}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Mileage</StyledTableCell>
                <StyledTableCell align="left">{row.mileage}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">Color</StyledTableCell>
                <StyledTableCell align="left">{row.color}</StyledTableCell>
              </StyledTableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default DescriptionTable;
