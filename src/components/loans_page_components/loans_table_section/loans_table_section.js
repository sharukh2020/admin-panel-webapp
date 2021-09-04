import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar, Button, Card, CardHeader, Icon,Typography } from '@material-ui/core';

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

function createData(user, status,phoneNumber,date,Form,documents,paymentLink) {
  return {  user, status,phoneNumber,date,Form,documents,paymentLink };
}

const rows = [
  createData('Merril Dinz',{status:'Verifying',class:'verifying'},'9999999999',{date:'08.01.2021',time:'2:00 PM'}),
  createData('Merril Dinz',{status:'Approved',class:'approved'},'9999999999',{date:'08.01.2021',time:'2:00 PM'}),
  createData('Merril Dinz',{status:'Rejected',class:'rejected'},'9999999999',{date:'08.01.2021',time:'2:00 PM'}),
  createData('Merril Dinz',{status:'Incomplete',class:'incomplete'},'9999999999',{date:'08.01.2021',time:'2:00 PM'}),
  createData('Merril Dinz',{status:'verifying',class:'verifying'},'9999999999',{date:'08.01.2021',time:'2:00 PM'})
];

const useStyles = makeStyles((theme)=>{
  return{
  table: {
    minWidth: 250,
  },
  uploadInput:{
    display:'none'
  },
  verifying:{
    backgroundColor:'#FEC400',
    color:'white'
  },
  approved:{
    backgroundColor:'#55BB59',
    color:'white'
  },
  rejected:{
    backgroundColor:'#E13E3E',
    color:'white'
  },
  incomplete:{
    background: 'rgba(254, 196, 0, 0.15)',
    color:'#FFAD47'
  },
  phoneNumber:{
    color:'#767676',
    fontSize:'14px',
    fontWeight:'500'
  },
  dateTime:{
   display:'flex',
   flexDirection:'column',
   justifyContent:'flex-start',
   alignItems:'flex-start'
  },
  date:{
    fontSize:'14px',
    fontWeight:'600'
  },
  time:{
    color:'#C5C7CD',
    fontSize:'12px'
  },
  uploadBtn:{
   color:'#4485FD',
   fontSize:'14px',
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'flex-start',
   cursor:'pointer',
   fontWeight:'600',
   '&:hover':{
     textDecoration:'underline',
   }
  },
  downloadBtns:{
    color:'#4485FD',
    fontSize:'14px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    cursor:'pointer',
    fontWeight:'600',
    textDecoration:'none',
    '&:hover':{
      textDecoration:'underline',
    }
  },
  makePaymentLink:{
    color:'#4485FD',
    fontSize:'14px',
    textDecoration:'none',
    fontWeight:'600',
    '&:hover':{
      cursor:'pointer',
      textDecoration:'underline'
    }
  },
  postCardHeader2:{
      padding:'0',
      fontSize:'12px',
      transform:'translateX(-10px)'
  },
  postCardHeader1:{
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
      width:'30px',
      height:'30px',
      borderRadius:'50%',
      [theme.breakpoints.down('md')]:{
        display:'none'
      }
  },
  status:{
      borderRadius:'50px',
      textTransform:'capitalize',
      fontWeight:'600',
      padding:'3px 20px',
      fontSize:'12px',
      '&:hover':{
        background:'navy',
        color:'white'
      }
  }}
});

function CustomizedTablesLoans() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Phone Number</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Form</StyledTableCell>
            <StyledTableCell>Documents</StyledTableCell>
            <StyledTableCell>Payment link</StyledTableCell>
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
                            
                        </Avatar>
                        }
                        title={row.user}
                        titleTypographyProps={
                          {
                            className:classes.postCardHeader2
                          }
                        }
                        classes={{
                            root:classes.postCardHeader1
                        }}
                    />
                </Card>
              </StyledTableCell>
            
              <StyledTableCell>
                <Button variant='contained' className={[classes[row.status.class],classes.status].join(' ')} disableElevation>
                   {row.status.status}
                </Button>
              </StyledTableCell>
              <StyledTableCell>
                <Typography className={classes.phoneNumber}>{row.phoneNumber}</Typography>
            </StyledTableCell>
            <StyledTableCell>
                <div className={classes.dateTime}>
                  <Typography className={classes.date}>{row.date.date}</Typography>
                  <Typography className={classes.time}>{row.date.time}</Typography>
                </div>
            </StyledTableCell>
            <StyledTableCell>
              <span className={classes.downloadBtns} download>
                      <Icon style={{color:'black',fontSize:'17px',fontWeight:'600'}}>feed</Icon>
                      <p style={{padding:'0',margin:'0'}} >Download</p>
              </span>
            </StyledTableCell>
            <StyledTableCell>
              <span className={classes.downloadBtns} download >
                        <Icon style={{color:'black',fontSize:'17px',fontWeight:'600'}}>feed</Icon>
                        <p style={{padding:'0',margin:'0'}} >Download</p>
                </span>
            </StyledTableCell>
            <StyledTableCell>
                {/* <input
                  className={classes.uploadInput}
                  accept="image/*"
                  className={classes.uploadInput}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                    <div className={classes.uploadBtn}>
                    <Icon style={{color:'black',fontSize:'17px',fontWeight:'600'}}>launch</Icon>
                    <p style={{padding:'0',margin:'0'}} >Upload</p>
                    </div>
                </label> */}
                <span className={classes.makePaymentLink} >Make payment</span>
            </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CustomizedTablesLoans