import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import logo from './images/theCat.png';

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

function createData(name, size, price ) {
  return { name, size, price };
}

const rows = [
  createData('Latte', 'Small', '4.00'),
  createData('Latte', 'Large', '4.75'),
  createData('Capuccino', 'small', '4.25'),
  createData('Cappuccino', 'Large', '5.00'),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 200,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
            <img src={logo} alt='logo'/>
            <Typography component="h1" variant="h4">
                Menu
            </Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Drinks</StyledTableCell>
            <StyledTableCell align="right">Size</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow>
              <StyledTableCell>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.size}</StyledTableCell>
              <StyledTableCell align="right">{row.price}&nbsp;($)</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}