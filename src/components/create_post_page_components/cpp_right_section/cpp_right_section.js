import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding:'14px',
    background: '#FFFFFF',
    boxShadow: '2px -2px 4px rgba(0, 0, 0, 0.08), -2px 4px 4px rgba(0, 0, 0, 0.1)'
  },
  cardHeader:{
      width:'100%',
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
      marginBottom:'10px'
  },
  cardHeaderLeftSection:{
      width:'60%',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center'
  },
  cardAvatar:{
      width:'35px',
      height:'35px',
      marginRight:'10px'
  },
  cardTextContainer:{

  },
  title:{
      color:'#4485FD',
      fontSize:'14px',
      fontWeight:'600'
  },
  secondaryTextContainer:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center'
  },
  secondaryText1:{
      fontSize:'12px'
  },
  secondaryText2:{
    color:'#898A8D',
    fontSize:'12px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    borderRadius:'5px'
  },
  cardContentHeading:{
      width:'100%',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'flex-start',
      fontSize:'16px',
      fontWeight:'600'
  },
  cardContentText:{
      fontSize:'13px',
      color:'#C4C4C4',
      margin:'10px 0 0 0'
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.cardHeader}>
          <div className={classes.cardHeaderLeftSection}>
                <Avatar className={classes.cardAvatar}>

                </Avatar>
              <div className={classes.cardTextContainer}>
                 <Typography className={classes.title}>#Home_Business</Typography>
                 <div className={classes.secondaryTextContainer}>
                   <Typography className={classes.secondaryText1}>Posted by admin</Typography>
                   <Typography className={classes.secondaryText2}>1h along</Typography>
                 </div>
              </div>
          </div>
      </div>
      <CardMedia
        className={classes.media}
        image='https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?size=626&ext=jpg'
      />

      <CardContent>
         <Typography className={classes.cardContentHeading}>
             11 Tips to run a successfull business
             <MoreVertIcon/>
         </Typography>
        <Typography className={classes.cardContentText}>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
