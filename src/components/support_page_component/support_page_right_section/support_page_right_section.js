import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor:'white',
    marginRight:'10px'
  },
  cardHeader:{
      backgroundColor:'#C4C4C4',
      padding:'15px',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center'
  },
  avatarContainer:{
      display:'flex',
      justifyContent:'center',
      alignItems:"center"
  },
  secondaryTextContainer:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center'
  },
  ongoing:{
      padding:'5px',
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
assignedToContainer:{
  padding:'25px 10px',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center'
},
assignedToText:{
  fontSize:'16px',
  fontWeight:'600',
  marginLeft:'20px'
},
byAdminSelect:{
    width:'150px',
    padding:'10px',
    borderRadius:'4px',
    border:'1px solid #EEEEEE',
    fontSize:'14px',
    color:' #B9B9B9',
    backgroundColor:'#FFFFFF',
    outline:'none',
    '&:hover':{
        backgroundColor:'whitesmoke',
        color:'black',
        cursor:'pointer'
    }
},
textAreaContainer:{
    backgroundColor:'#FFFFFF',
    overflow:'hidden',
    height:'200px',
    padding:'0 10px'
},
textArea:{
    width:'100%',
    border:'0',
    borderRadius:'0',
    padding:'12px 15px',
    outline:'none',
    height:'250px',
    background:'#C4C4C4',
    fontSize:'16px',
    fontWeight:'600'
},
bottomBoxes:{
    padding:'0 10px',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:'15px'
},
bottomBox1:{
    background:'#C4C4C4',
    height:'60px',
    width:'60px',
    marginRight:'15px'
},
bottomBox2:{
    background:'#C4C4C4',
    height:'60px',
    width:'60px'
},
thirdSectionBtns:{
    color:'white',
    backgroundColor:'#4F5052',
    boxShadow:'0 0 0',
    borderRadius:'2px',
    fontSize:'13px',
    textTransform:'capitalize',
    marginBottom:'15px',
    '&:hover':{
        backgroundColor:'#EFF0F6',
        color:'black',
        boxShadow:'0 0 0'
    }
},
lastBtnsContainer:{
    padding:'0 10px',
    marginTop:'25px'
}
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.cardHeader}>
          <div className={classes.avatarContainer}>
            <Avatar className={classes.avatar}>

            </Avatar>
            <div className={classes.primaryTextContainer}>
                <Typography style={{fontSize:'14px',fontWeight:'600'}}>1231234-Ticket heading</Typography>
                <div className={classes.secondaryTextContainer}>
                    <Typography style={{fontSize:'14px',fontWeight:'600'}}>User-99999 99999</Typography>
                    <Typography style={{fontSize:'12px',marginLeft:'10px'}}>2hrs ago</Typography>
                </div>
            </div>
          </div>
          <Button variant='contained' className={classes.ongoing}>
              Ongoing
          </Button>
      </div>
         <div className={classes.assignedToContainer}>
                <Typography className={classes.assignedToText}>Assigned to</Typography>
                <input className={classes.byAdminSelect} list="users" name="user" id="user" placeholder="User name"/>
                <datalist id="users">
                    <option value="user 1"/>
                    <option value="user 2"/>
                    <option value="user 3"/>
                    <option value="user 4"/>
                    <option value="user 5"/>
                </datalist>
         </div>
         <div className={classes.textAreaContainer}>
           <textarea defaultValue={'Ticket Message'} className={classes.textArea}>

           </textarea>
         </div>
         <div className={classes.bottomBoxes}>
           <div className={classes.bottomBox1}>

           </div>
           <div className={classes.bottomBox2}>
             
           </div>
         </div>
         <div className={classes.lastBtnsContainer}>
             <div>
             <input
                    accept="image/*"
                    style={{display:'none'}}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                <Button
                    variant="contained"
                    className={classes.thirdSectionBtns}
                    component='span'
                >
                    Attach file
                </Button>
                </label>
             </div>
             <div>
             <Button variant='contained' className={classes.thirdSectionBtns}>
                 Send and Close
             </Button>
             </div>
         </div>

    </Card>
  );
}
