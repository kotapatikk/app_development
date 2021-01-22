import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(name, language, location, plot, rating) {
  return { name, language, location, plot, rating };
}

const rows = [
  createData('Frozen I', 'English','UK', 24, 4.0),
  createData('Ice Age 1', 'Telugu', 'INDIA', 37, 4.3),
  createData('Eragon', 'English', 'USA', 24, 5.0),
  createData('King Kong', 'Hindi', 'Russia', 67, 4.3),
  createData('The Pink', 'English', 'USA', 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Movies=()=> {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Movie</StyledTableCell>
            <StyledTableCell align="left">Language</StyledTableCell>
            <StyledTableCell align="left">Location</StyledTableCell>
            <StyledTableCell align="left">Plot</StyledTableCell>
            <StyledTableCell align="right">Rating</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.language}</StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.plot}</StyledTableCell>
              <StyledTableCell align="right">{row.rating}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Movies;