import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Card from '@material-ui/core/Card';
import { Typography,Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  headingMainContainer:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    boxShadow:'0 0 0',
    padding:'15px'
  },
  headingSubContainer:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  heading:{
    fontWeight:'600',
    fontSize:'15px',
    marginRight:'10px'
  },
  headingIcon:{
    fontSize:'20px',
    color:'#BDBDBD',
  },
  headingAvatar:{
    backgroundColor:'#E13E3E'
  },
  listItem:{
    backgroundColor:'#F2F2F2',
    marginBottom:'10px',
    padding:'15px 10px'
  },
  listItemAvatar:{
    width:'40px',
    height:'35px',
    borderRadius:'5px'
  },
  listItemSecondaryAction:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'flex-end'
  },
  dateAndTime:{
    color:'#BDBDBD',
    fontSize:'11px'
  },
  listItemSecondaryText:{
    color:'#BDBDBD',
    fontSize:'13px'
  }
}));

function generate(element) {
  return [0, 1, 2,3,4,5].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function InteractiveList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <div className={classes.demo}>
          <Card className={classes.headingMainContainer}>
                <div className={classes.headingSubContainer}>
                  <Typography variant='h6' className={classes.heading}>New Support Tickets</Typography>
                  <Icon className={classes.headingIcon}>info</Icon>
                </div>
                <Avatar aria-label="recipe" className={classes.headingAvatar}>
                  R
                </Avatar>
          </Card>
            <List dense>
              {generate(
                <ListItem className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar className={classes.listItemAvatar}>
                      <Icon></Icon>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    secondaryTypographyProps={
                     {
                      className:classes.listItemSecondaryText
                     }
                    }
                    primary="Merril Dinz"
                    secondary='I need some maintenac...'
                  />
                  <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
                    <Typography className={classes.dateAndTime}>Jan 2, 12.31pm</Typography>
                    <IconButton edge="end" aria-label="delete">
                      <ArrowForwardIosIcon style={{fontSize:'12px'}} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
    </div>
  );
}
