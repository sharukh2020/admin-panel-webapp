import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, Button, Card, CardHeader, Icon, IconButton, Typography } from '@material-ui/core';

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
      backgroundColor: theme.palette.action.white,
      '&:hover':{
          backgroundColor:'#EEF5FF'
      }
  },
}))(TableRow);

function createData(name,status,host,action) {
  return { name,status,host,action};
}

const rows = [
  createData({title:'Ask me anything'},{time:'09:10AM',status:'Starting in 10 minutes'},'host-name','start'),
  createData({title:'Ask me anything'},{time:'09:10AM',status:''},'host-name','start'),
  createData({title:'Ask me anything'},{time:'09:10AM',status:''},'host-name','start'),
  createData({title:'Ask me anything'},{time:'09:10AM',status:''},'host-name','start'),
  createData({title:'Ask me anything'},{time:'09:10AM',status:''},'host-name','start'),
  createData({title:'Ask me anything'},{time:'09:10AM',status:''},'host-name','start'),
];

const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 250,
  },
  postCardHeader:{
      padding:'0',    
      fontSize:'15px',
      fontWeight:'600'
  },
  postCard:{
    boxShadow:'0 0',
    borderRadius:'0',
    backgroundColor:'transparent'
  },
  postCardAvatar:{
      width:'36px',
      height:'36px',
      backgroundColor:'#FFE4C2',
      borderRadius:'8px'
  },
  postCardAvatarIcon:{
      color:'#FFAD47',
      fontSize:'15px'
  },
  timeContainer:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
  },
  time:{
     fontSize:'14px',
     color:'#9E9E9E',
     fontWeight:'600'
  },
  status:{
    color:'#FFAD47',
    fontSize:'12px',
    [theme.breakpoints.down('sm')]:{
        textAlign:'center'
    }
  },
  host:{
    fontSize:'14px',
    color:'#767676',
    fontWeight:'600'
  },
  action:{
      padding:'3px 20px',
      color:'#2F80ED',
      borderRadius:'50px',
      textTransform:'capitalize',
      fontWeight:'600',
      fontSize:'12px',
      marginRight:'10px',
      background: 'rgba(68, 133, 253, 0.13)',
      '&:hover':{
        background: 'rgba(68, 133, 253, 0.3)' 
      }
  },
  lastCellContainer:{
    position:'relative'
  },
  lastIconContainer:{
      width:'40px',
      height:'40px',
      position:'absolute',
      right:'-15px',
      top:'-15px',
      [theme.breakpoints.down('sm')]:{
          position:'absolute',
          right:'-20px',
          top:'-30px'
      }
  },
  lastIcon:{
      fontSize:'20px'
  }
}));

export default function CustomizedTables2() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {rows.map((row,pos) => (
            <StyledTableRow key={pos}>
              <StyledTableCell component="th" scope="row">
                <Card className={classes.postCard}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.postCardAvatar}>
                            <Icon className={classes.postCardAvatarIcon}>
                              notifications
                            </Icon>
                        </Avatar>
                        }
                        title={row.name.title}
                        classes={{
                            root:classes.postCardHeader
                        }}
                        titleTypographyProps={{
                            className:classes.postCardHeader
                        }}
                    />
                </Card>
              </StyledTableCell>
              <StyledTableCell>
                 <div className={classes.timeContainer}>
                    <Typography className={classes.time}>
                        {row.status.time}
                    </Typography>
                    <Typography className={classes.status}>
                        {row.status.status}
                    </Typography>
                 </div>
              </StyledTableCell>
              <StyledTableCell>
                 <div>
                    <Typography className={classes.host}>
                        {row.host}
                    </Typography>
                 </div>
              </StyledTableCell>
              <StyledTableCell>
               <div className={classes.lastCellContainer}>
                <Button variant='contained' className={classes.action} disableElevation>
                    {row.action}
                    </Button>
                    <IconButton aria-label="delete" className={classes.lastIconContainer}>
                        <MoreVertIcon className={classes.lastIcon} />
                    </IconButton>
               </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
