import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProductTable from './ProductTable'
import coffeeShop from './images/rod-long-I79Pgmhmy5M-unsplash.jpg';

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


function createData(name, description, size, price ) {
  return { name, description, size, price };
}

const rows = [
  createData('Latte', 'description', 'Small', '4.00'),
  createData('Latte', 'description', 'Large', '4.75'),
  createData('Capuccino', 'description', 'small', '4.25'),
  createData('Cappuccino', 'description', 'Large', '5.00'),
];

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      width: '100vw',
    },      
    body: {
      height: '100vh',
    },
    image: {  
      backgroundImage: 'url(' + coffeeShop + ')',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
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
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container component="body" className={classes.body}>
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <ProductTable/>
       </Grid>
      </Grid>
    </Grid>
  );
}