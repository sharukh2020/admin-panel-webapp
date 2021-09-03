import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar, Button, Card, CardHeader, Typography } from '@material-ui/core';

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
  createData(
      {
       text1:'#Home_Business',
       text2:'12d ago',
       text3:'11 Tips to run a successfull business',
       text4:'251 Likes',
       text5:'200 comments'
      },
      'Merril Dinz',
      'Active'
   ),
   createData(
    {
     text1:'#Home_Business',
     text2:'12d ago',
     text3:'11 Tips to run a successfull business',
     text4:'251 Likes',
     text5:'200 comments'
    },
    'Merril Dinz',
    'Active'
 ),
 createData(
    {
     text1:'#Home_Business',
     text2:'12d ago',
     text3:'11 Tips to run a successfull business',
     text4:'251 Likes',
     text5:'200 comments'
    },
    'Merril Dinz',
    'Active'
 ),
 createData(
    {
     text1:'#Home_Business',
     text2:'12d ago',
     text3:'11 Tips to run a successfull business',
     text4:'251 Likes',
     text5:'200 comments'
    },
    'Merril Dinz',
    'Active'
 ),
 createData(
    {
     text1:'#Home_Business',
     text2:'12d ago',
     text3:'11 Tips to run a successfull business',
     text4:'251 Likes',
     text5:'200 comments'
    },
    'Merril Dinz',
    'Active'
 ),
];

const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 250,
  },
  tableRow:{
     marginBottom:'20px'
  },
  postCard:{
    boxShadow:'0 0',
    borderRadius:'0',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down('md')]:{
      justifyContent:'flex-start'
    }
  },
  postCardAvatar:{
    borderRadius:'0',
    width:'60px',
    height:'60px',
    marginRight:'10px',
    [theme.breakpoints.down('md')]:{
      display:'none'
    }
  },
  postCardRightSection:{
    
  },
  postCardRightSection1:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'80%',
    [theme.breakpoints.down('md')]:{
      flexDirection:'column',
      alignItems:'flex-start'
    }
  },
  postCardRightSection2:{
    width:'100%'
  },
  postCardRightSection3:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'80%'
  },
  postCardText1:{
      color:'#4485FD',
      fontSize:'14px',
      fontWeight:'600'
  },
  postCardSmallTexts:{
      color:'#898A8D',
      fontSize:'12px'
  },
  postCardText3:{
     fontSize:'14px'
  },
  userCard:{
    boxShadow:'0 0'
  },
  userCardHeader:{
    padding:'0'
  },
  useCardAvatar:{
    [theme.breakpoints.down('md')]:{
      display:'none'
    }
  }
  ,
  status:{
      padding:'1px 8px',
      fontSize:'12px',
      color:'#5887FF',
      borderRadius:'50px',
      textTransform:'capitalize',
      fontWeight:'600',
      background: 'rgba(88, 135, 255, 0.1)',
      '&:hover':{
        background: 'rgba(88, 135, 255, 0.3);' 
      }
  }
}));

export default function CustomizedTables() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {rows.map((row,pos) => (
            <StyledTableRow key={pos} className={classes.tableRow}>
              <StyledTableCell component="th" scope="row">
                <Card className={classes.postCard}>
                  <Avatar className={classes.postCardAvatar}>
                        p
                  </Avatar>
                  <div className={classes.postCardRightSection}>
                      <div className={classes.postCardRightSection1}>
                        <Typography className={classes.postCardText1}>{row.post.text1}</Typography>
                        <Typography className={classes.postCardSmallTexts}>{row.post.text2}</Typography>
                      </div>
                      <div className={classes.postCardRightSection2}>
                         <Typography className={classes.postCardText3}>{row.post.text3}</Typography>
                      </div>
                      <div className={classes.postCardRightSection3}>
                        <Typography className={classes.postCardSmallTexts}>{row.post.text4}</Typography>
                        <Typography className={classes.postCardSmallTexts}>{row.post.text5}</Typography>
                      </div>
                  </div>
                </Card>
              </StyledTableCell>
              <StyledTableCell>
              <Card className={classes.userCard}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.useCardAvatar}>
                            
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
