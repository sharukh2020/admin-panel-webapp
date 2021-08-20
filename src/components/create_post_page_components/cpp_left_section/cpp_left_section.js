import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import AddIcon from '@material-ui/icons/Add';

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
    secondSectionInput2:{
        width:'100%',
        marginBottom:'20px',
        background: '#FFFFFF',
        border:'0',
        outline:'none',
        padding:'15px 20px',
        boxShadow: '-2px -2px 4px rgba(0, 0, 0, 0.1), 4px 4px 4px rgba(0, 0, 0, 0.1)',
        '&::placeholder':{
            fontSize:'14px'
        },
        '&:hover':{
            cursor:'pointer'
        }
    },
    thirdSection:{
        marginBottom:'20px',
        [theme.breakpoints.only('xs')]:{
            marginBottom:'0'
        }
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
        },
        [theme.breakpoints.only('xs')]:{
            marginBottom:'20px'
        }
    },
    fourthSection:{
        backgroundColor:'#FFFFFF',
        boxShadow: '-2px -2px 4px rgba(0, 0, 0, 0.1), 4px 4px 4px rgba(0, 0, 0, 0.1)',
        overflow:'hidden',
        height:'400px'
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
    }
}))

function CPP_Left_Section(props){
    const classes=useStyles()
    return(
        <div className={classes.mainContainer}>
            <Typography className={classes.heading}>
                Add a new post  
            </Typography>
            <div className={classes.secondSection}>
                <input className={classes.secondSectionInput} type='text' name='post-title' placeholder='Your title'/>
                <input className={classes.secondSectionInput2} list="topics" name="topics" id="topic" placeholder='Select a topic'/>
                <datalist  id="topics">
                    <option value="topic 1"/>
                    <option value="topic 2"/>
                    <option value="topic 3"/>
                    <option value="topic 4"/>
                    <option value="topic 5"/>
                </datalist>
            </div>
            <div className={classes.thirdSection}>
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
                    color="secondary"
                    className={classes.thirdSectionBtns}
                    startIcon={<AddIcon/>}
                    component='span'
                >
                    Add image
                </Button>
                </label>
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
            </div>
            <div className={classes.fourthSection}>
                <Typography className={classes.formattingHeading}>Formatting</Typography>
                <textarea defaultValue='Write your article/description' className={classes.formattingInput}>

                </textarea>
            </div>
        </div>
    )
}

export default CPP_Left_Section