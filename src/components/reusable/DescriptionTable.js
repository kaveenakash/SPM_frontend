import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Ad Reference', 'W4018081744961202101'),
  createData('Model Year', 2017),
  createData('Condition','Used'),
  createData('Transmission', 'Automatic'),
  createData('Manufacturer', 'BMW'),
  createData('Model', 'I8'),
  createData('Fuel Type', 'Petrol'),
  createData('Engine Capacity', '1500 CC'),
  createData('Mileage', '30000 km'),
  createData('Color', 'White'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const  DescriptionTable = props => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table className={classes.table} aria-label="customized table">
     
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell  align="left">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}




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
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);



  export default DescriptionTable