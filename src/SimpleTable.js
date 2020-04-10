import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
class SimpleTable extends React.Component {
  render() {
    const what = this.props.location.state.details;
    return (
      <TableContainer component={Paper}>
        <Table className="classes" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone No</TableCell>
              <TableCell align="right">Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={what.name}>
              <TableCell component="th" scope="row">
                {what.name}
              </TableCell>
              <TableCell align="right">{what.id}</TableCell>
              <TableCell align="right">{what.username}</TableCell>
              <TableCell align="right">{what.password}</TableCell>
              <TableCell align="right">{what.email}</TableCell>
              <TableCell align="right">{what.phone}</TableCell>
              <TableCell align="right">{what.website}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default SimpleTable;
