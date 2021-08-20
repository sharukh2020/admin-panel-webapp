import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar, Button, Card, CardHeader,Typography } from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

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

function createData(user, status,phoneNumber,date,cardNumber,action) {
  return {  user, status,phoneNumber,date,cardNumber,action };
}

const rows = [
  createData('Merril Dinz',{status:'KYC',class:'kyc'},'9999999999','08.01.2021','1111 1111 1111 1111'),
  createData('Merril Dinz',{status:'Active User',class:'active'},'9999999999','08.01.2021','1111 1111 1111 1111'),
  createData('Merril Dinz',{status:'Active User',class:'active'},'9999999999','08.01.2021','1111 1111 1111 1111'),
  createData('Merril Dinz',{status:'Started',class:'started'},'9999999999','08.01.2021','1111 1111 1111 1111')
];

const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 250,
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
  kyc:{
    background:'rgba(255, 172, 50, 0.1)',
    color:'#FFB648'
  },
  active:{
    background: 'rgba(88, 135, 255, 0.1)',
    color:'#5887FF'
  },
  started:{
    background: 'rgba(85, 187, 89, 0.1)',
    color:'#55BB59'
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
  }
}))

function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell className={classes.phoneNumberCell}>Phone Number</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell className={classes.cardNumberCell}>Card number</StyledTableCell>
            <StyledTableCell className={classes.blockBtnCell}>Action</StyledTableCell>
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
              <StyledTableCell className={classes.phoneNumberCell}>
                <Typography className={classes.phoneNumber}>{row.phoneNumber}</Typography>
            </StyledTableCell>
            <StyledTableCell>
                <div className={classes.dateTime}>
                  <Typography className={classes.date}>{row.date}</Typography>
                </div>
            </StyledTableCell>
            <StyledTableCell className={classes.cardNumberCell}>
               <Typography className={classes.cardNumber}>{row.cardNumber}</Typography>
               <Typography className={classes.seeBalance}>See balance</Typography>
            </StyledTableCell>
            <StyledTableCell className={classes.blockBtnCell}>
                <Button
                variant="contained"
                color="secondary"
                className={classes.blockCardbtn}
                startIcon={<NotInterestedIcon style={{fontSize:'14px'}}/>}
                 >
                   Block card
                </Button> 
            </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CustomizedTables