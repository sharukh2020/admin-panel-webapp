import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar, Button, Card, CardHeader} from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
    fontWeight:'600'
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
      backgroundColor: theme.palette.action.white
  },
}))(TableRow);

function createData(post, user, status) {
  return { post, user, status };
}

const rows = [
  createData({title:'Post 1 title',subheader:'Post 1 subheader'},'User 1','Pending'),
  createData({title:'Post 2 title',subheader:'Post 2 subheader'},'User 2','Pending'),
  createData({title:'Post 3 title',subheader:'Post 3 subheader'},'User 3','Pending'),
  createData({title:'Post 4 title',subheader:'Post 4 subheader'},'User 4','Pending'),
  createData({title:'Post 5 title',subheader:'Post 5 subheader'},'User 5','Pending'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
  postCardHeader:{
      padding:'0'
  },
  userCardHeader:{
    padding:'0'
  },
  postCard:{
    boxShadow:'0 0',
    borderRadius:'0'
  },
  userCard:{
    boxShadow:'0 0'
  },
  postCardAvatar:{
      borderRadius:'0',
      width:'60px',
      height:'60px'
  },
  status:{
      color:'#FFB648',
      borderRadius:'50px',
      textTransform:'capitalize',
      fontWeight:'600',
      background: 'rgba(255, 172, 50, 0.2)',
      '&:hover':{
        background: 'rgba(255, 172, 50, 0.3)' 
      }
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Post</StyledTableCell>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,pos) => (
            <StyledTableRow key={pos}>
              <StyledTableCell component="th" scope="row">
                <Card className={classes.postCard}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.postCardAvatar}>
                            P
                        </Avatar>
                        }
                        title={row.post.title}
                        subheader={row.post.subheader}
                        classes={{
                            root:classes.postCardHeader
                        }}
                    />
                </Card>
              </StyledTableCell>
              <StyledTableCell>
              <Card className={classes.userCard}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            
                        </Avatar>
                        }
                        title={row.user}
                        classes={{
                            root:classes.userCardHeader
                        }}
                    />
                </Card>
              </StyledTableCell>
              <StyledTableCell>
                <Button variant='contained' className={classes.status} disableElevation>
                   {row.status}
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
