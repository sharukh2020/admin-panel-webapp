import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    padding:'20px 0'
  },
  avatar1: {
    backgroundColor: '#EFF0F6'
  },
  avatar2: {
    backgroundColor: '#ffebca'
  },
  avatar3: {
    backgroundColor: '#EFF0F6'
  },
  avatar4: {
    backgroundColor: '#d1ffe9'
  },
  class1:{
    color:'#2F49D1',
  },
  class2:{
    color:'#FFB648'
  },
  class3:{
    color:'#2F49D1'
  },
  class4:{
    color:'#4BDE97'
  },
  title:{
    fontWeight:'600',
    fontSize:'15px'
  },
  subheader:{
    fontSize:'13px',
    color:'#B9B9B9'
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        classes={{title:classes.title,subheader:classes.subheader}}
        avatar={
          <Avatar aria-label="recipe" className={classes[`avatar${props.cardData['class']}`]}>
            <Icon fontSize='small' classes={{root:classes[`class${props.cardData['class']}`]}}>{props.cardData.cardIcon}</Icon>
          </Avatar>
        }
        disableTypography={false}
        title={props.cardData.upperText}
        subheader={props.cardData.lowerText}
      />
    </Card>
  );
}
