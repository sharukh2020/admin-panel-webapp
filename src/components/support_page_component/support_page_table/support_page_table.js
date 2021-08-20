import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button,Typography } from '@material-ui/core';

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
          background:'#9DCAFF'
      }
  },
}))(TableRow);

function createData(ticketId,user, subject,status,assignedTo) {
  return {  ticketId,user,subject,status,assignedTo};
}

const rows = [
  createData({id:'1231234',time:'2 mins'},'Merril Dinz','Loan application',{status:'Ongoing',class:'ongoing'},'user-1'),
  createData({id:'1231234',time:'2 mins'},'Merril Dinz','Loan application',{status:'Ongoing',class:'ongoing'},'user-2'),
  createData({id:'1231234',time:'2 mins'},'Merril Dinz','Loan application',{status:'On Hold',class:'onhold'},'user-3'),
  createData({id:'1231234',time:'2 mins'},'Merril Dinz','Loan application',{status:'On Hold',class:'onhold'},'user-4'),
  createData({id:'1231234',time:'2 mins'},'Merril Dinz','Loan application',{status:'Rejected',class:'rejected'},'user-5'),
];

const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 250,
  },
  ongoing:{
      background:'#3EAF49',
      color:'white',
      borderRadius:'100px',
      fontSize:'10px',
      fontWeight:'600',
      boxShadow:'0 0 0',
      '&:hover':{
          background:'navy',
          boxShadow:'0 0 0',
      }
  },
  onhold:{
      background:'#FFAD47',
      color:'white',
      borderRadius:'100px',
      fontSize:'10px',
      fontWeight:'600',
      boxShadow:'0 0 0',
      '&:hover':{
          background:'navy',
          boxShadow:'0 0 0',
      }
  },
  rejected:{
    background:' #C4C4C4',
    color:'white',
    borderRadius:'100px',
    fontSize:'10px',
    fontWeight:'600',
    boxShadow:'0 0 0',
    '&:hover':{
        background:'navy',
        boxShadow:'0 0 0',
    }
},
  phoneNumberCell:{
    [theme.breakpoints.down('md')]:{
      display:'none'
    }
  },
  blockBtnCell:{
    [theme.breakpoints.down('md')]:{
      display:'none'
    }
  },
  cardNumberCell:{
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  },
  uploadInput:{
    display:'none'
  },
  phoneNumber:{
    color:'#767676',
    fontSize:'14px',
    fontWeight:'500'
  },
  cardNumber:{
    color:'#767676',
    fontSize:'14px'
  },
  seeBalance:{
    color:'#4485FD',
    fontSize:'12px',
    fontWeight:'600',
    cursor:"pointer",
    '&:hover':{
      textDecoration:'underline'
    }
  },
  blockCardbtn:{
    background: 'rgba(225, 62, 62, 0.2)',
    boxShadow:'0 0 0',
    '&:hover':{
      boxShadow:'0 0 0',
      color:'white'
    },
    color:'#E13E3E',
    fontWeight:'600',
    fontSize:'12px',
    textTransform:'capitalize',
    borderRadius:'100px'
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
      fontSize:'12px'
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
      borderRadius:'50%'
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
  },
  byAdminSelect:{
    width:'150px',
    padding:'10px',
    borderRadius:'4px',
    border:'1px solid #EEEEEE',
    fontSize:'14px',
    color:' #B9B9B9',
    marginRight:'20px',
    backgroundColor:'#FFFFFF',
    outline:'none',
    '&:hover':{
        backgroundColor:'whitesmoke',
        color:'black',
        cursor:'pointer'
    },
    [theme.breakpoints.down('md')]:{
        marginRight:'0'
    }
}
}))

function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Ticket ID</StyledTableCell>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Assigned to</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,pos) => (
            <StyledTableRow key={pos}>
              <StyledTableCell component="th" scope="row">
                <Typography style={{fontSize:"14px",fontWeight:'600'}}>{row.ticketId.id}</Typography>
                <Typography style={{fontSize:'12px',fontWeight:'600',color:'#3EAF49'}}>{row.ticketId.time}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography style={{fontSize:"12px",color:"#767676"}}>{row.user}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                   <Typography style={{fontSize:'12px',fontWeight:'600',color:'#252733'}}>{row.subject}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                 <Button variant='contained' className={classes[row.status.class]}>
                    {row.status.status}
                 </Button>
              </StyledTableCell>
              <StyledTableCell>
                 <input className={classes.byAdminSelect} list={row.assignedTo} name="user" id={`${row.assignedTo}-id`} placeholder="User name"/>
                <datalist id={row.assignedTo}>
                    <option value="user 1"/>
                    <option value="user 2"/>
                    <option value="user 3"/>
                    <option value="user 4"/>
                    <option value="user 5"/>
                </datalist>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CustomizedTables