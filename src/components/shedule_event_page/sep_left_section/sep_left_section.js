import { Avatar, Button, Card, CardContent, CardHeader, Grid, Icon, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles=makeStyles((theme)=>({
    heading:{
        fontSize:'24px',
        fontWeight:'bold'
    },
    secondSection:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:'20px'
    },
    secondSectionInput:{
        width:'100%',
        marginBottom:'20px',
        background: '#FFFFFF',
        border:'0',
        outline:'none',
        padding:'15px 20px',
        boxShadow: '-2px -2px 4px rgba(0, 0, 0, 0.1), 4px 4px 4px rgba(0, 0, 0, 0.1)',
        '&::placeholder':{
            fontSize:'14px'
        }
    },
    thirdSection:{
        marginBottom:'20px'
    },
    thirdSectionBtns:{
        backgroundColor:'#4F5052',
        boxShadow:'0 0 0',
        borderRadius:'2px',
        marginRight:'20px',
        '&:hover':{
            backgroundColor:'#EFF0F6',
            color:'black',
            boxShadow:'0 0 0'
        }
    },
    fourthSection:{
        backgroundColor:'#FFFFFF',
        boxShadow: '-2px -2px 4px rgba(0, 0, 0, 0.1), 4px 4px 4px rgba(0, 0, 0, 0.1)',
        overflow:'hidden',
        height:'520px',
        marginTop:'20px'
    },
    formattingHeading:{
        width:'100%',
        borderBottom:'1px solid #C4C4C4',
        fontSize:'14px',
        fontWeight:'600',
        padding:'12px 15px'
    },
    formattingInput:{
        width:'100%',
        border:'0',
        borderRadius:'0',
        boxShadow:'0 0 0',
        padding:'12px 15px',
        outline:'none',
        height:'400px',
        fontSize:'16px',
    },
    fifthSection:{
        background: '#FFFFFF',
        boxShadow: '-2px -2px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1)',
        height:'580px',
        position:'relative'
    },
    fifthSectionHeading:{
        fontSize:'18px',
        fontWeight:'600'
    },
    fifthSectionInput:{
        width:'100%',
        marginBottom:'10px',
        background: '#FFFFFF',
        outline:'none',
        padding:'15px 20px',
        border: '1px solid #C4C4C4',
        '&::placeholder':{
            fontSize:'14px'
        }
    },
    speakerHeading:{
        fontSize:'18px',
        fontWeight:'600'
    },
    speakerCard:{
        boxShadow:'0 0 0'
    },
    speakerCardHeader:{
      padding:'5px 0 10px 0'
    },
    speakerCardAvatar:{
        width:'80px',
        height:'80px',
        backgroundColor:'#C4C4C4;'
    },
    speakerCardHeading:{
        fontSize:'14px'
    },
    recordVideoSection:{
        position:'absolute',
        bottom:'20px',
        left:'20px'
    }
}))

function SEP_Left_Section(props){
    const classes=useStyles()
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return(
        <div className={classes.mainContainer}>
            <Typography className={classes.heading}>
                Shedule an event
            </Typography>
            <div className={classes.secondSection}>
                <input className={classes.secondSectionInput} type='text' name='post-title' placeholder='Your title'/>
                <input className={classes.secondSectionInput} type="datetime-local" id="event-date-time" name="event-date-time" />
            </div>
            <div className={classes.thirdSection}>
              <Grid container spacing={2}>
                  <Grid item xs={12} lg={7}>
                  <input
                    accept="image/*"
                    style={{display:'none'}}
                    id="contained-button-file-2"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file-2">
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.thirdSectionBtns}
                    startIcon={<AddIcon/>}
                    component='span'
                >
                    Add video
                </Button>
                </label>
                   <div className={classes.fourthSection}>
                        <Typography className={classes.formattingHeading}>Formatting</Typography>
                        <textarea defaultValue='Write your article/description' className={classes.formattingInput}>

                        </textarea>
                   </div>
                  </Grid>
                  <Grid item xs={12} lg={5}>
                    <Card className={classes.fifthSection}>
                        <CardHeader
                         title='Host'
                         titleTypographyProps={{
                             className:classes.fifthSectionHeading
                         }}
                         action={
                            <IconButton>
                                <Icon>add</Icon>
                            </IconButton>
                         }
                        />
                         <CardContent>
                          <input className={classes.fifthSectionInput} type='text' name='email-id' placeholder='Email ID'/>
                          <input className={classes.fifthSectionInput} type='text' name='phone-number' placeholder='Phone number'/>
                          <Typography className={classes.speakerHeading}>Speaker</Typography>
                          <Card className={classes.speakerCard}>
                              <CardHeader
                                className={classes.speakerCardHeader}
                                avatar={
                                    <Avatar className={classes.speakerCardAvatar}>

                                    </Avatar>
                                }
                                title='Add speaker image'
                                titleTypographyProps={{
                                    className:classes.speakerCardHeading
                                }}
                              />
                          </Card>
                          <input className={classes.fifthSectionInput} type='text' name='speaker-name' placeholder='Speaker name'/>
                          <input className={classes.fifthSectionInput} type='text' name='designation' placeholder='Designation'/>
                          <FormGroup row className={classes.recordVideoSection}>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    name="checked"
                                    color="primary"
                                />
                                }
                                label="Record video"
                            />
                            </FormGroup>
                        </CardContent>
                    </Card>
                  </Grid>
              </Grid>
            </div>
           
        </div>
    )
}

export default SEP_Left_Section