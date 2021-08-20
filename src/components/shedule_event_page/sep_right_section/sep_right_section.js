import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: '#FFFFFF',
    boxShadow: '-2px -2px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1)'
  },
  cardTopSection:{
     padding:'10px'
  },
  topText1:{
      fontSize:'18px',
      fontWeight:'600'
  },
  secondaryTextContainer:{
     display:'flex',
     justifyContent:'flex-start',
     alignItems:'center'
  },
  topText2:{
      fontSize:'14px',
      fontWeight:'500',
      color:'darkgrey',
      marginRight:'10px'
  },
  topText3:{
    fontSize:'14px',
    fontWeight:'500',
    color:'darkgrey'
},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    width:'62px',
    height:'62px',
    borderRadius:'8px'
  },
  cardHeading:{
      fontSize:"14px",
      fontWeight:'600'
  },
  cardSubheading:{
    fontSize:"13px"
},
details:{
    fontSize:"14px",
      fontWeight:'600'
},
description:{
    fontSize:"14px"
}
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <div className={classes.cardTopSection}>
            <Typography className={classes.topText1}>
               How to start saving for business capital?
            </Typography>
            <div className={classes.secondaryTextContainer}>
            <Typography className={classes.topText2}>
                06:00-07:00 PM
            </Typography>
            <Typography className={classes.topText3}>
               .1 Hour
            </Typography>
            </div>
        </div>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img className={classes.avatar} src='https://dp.profilepics.in/profile-pictures-for-facebook-whatsapp/selected_profile_pics/cool-stylish-profile-pics-dps-for-fb-whatsapp-facebook-1438.jpg' alt='name'/>
          </Avatar>
        }
        title="Siddikka Aggarwal"
        subheader="Founder of SHEROES Money"
        titleTypographyProps={
            {
                className:classes.cardHeading
            }
        }
        subheaderTypographyProps={{
            className:classes.cardSubheading
        }}
      />
      <CardMedia
        className={classes.media}
        image="https://images.theconversation.com/files/219669/original/file-20180520-42238-1ixuggz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
        title="Paella dish"
      />
      <CardContent>
        <Typography className={classes.details}>Details</Typography>
        <Typography className={classes.description}>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
