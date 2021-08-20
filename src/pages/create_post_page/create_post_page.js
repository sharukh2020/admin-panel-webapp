import { Grid, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'
import CPPLeftSection from '../../components/create_post_page_components/cpp_left_section/cpp_left_section'
import RecipeReviewCard from '../../components/create_post_page_components/cpp_right_section/cpp_right_section'

const useStyles=makeStyles((theme)=>({
    PostPage:{
   
    },
    rightSection:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        height:'640px',
        [theme.breakpoints.down('md')]:{
            width:345
        }
    },
    rightSectionContainer:{
         display:'flex',
         justifyContent:'center',
         alignItems:'center'
    },
    rightSectionHeading:{
        fontSize:'18px',
        fontWeight:'600',
        marginBottom:'10px'
    },
    rightSectionLowerPart:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    postBtn:{
        width:'100%',
        border:'0',
        boxShadow:'0 0 0',
        backgroundColor:'#2F49D1',
        color:'white',
        fontSize:'13px',
        padding:'10px 20px',
        marginBottom:'20px',
        '&:hover':{
            boxShadow:'0 0 0',  
        }
    },
    saveBtn:{
        width:'100%',
        border:'1px solid black',
        boxShadow:'0 0 0',
        backgroundColor:'#FFFFFF',
        fontWeight:'600',
        fontSize:'13px',
        padding:'10px 20px',
        '&:hover':{
            boxShadow:'0 0 0',  
        }
    }
}))

function CreatePostPage(props){
    const classes=useStyles()
    return(
         <form className={classes.PostPage} noValidate autoComplete="off">
            <Grid container spacing={3}>
                <Grid item xs={12} lg={8}>
                  <CPPLeftSection/>
                </Grid>
                <Grid item xs={12} lg={4} className={classes.rightSectionContainer}>
                  <div className={classes.rightSection}>
                     <div className={classes.rightSectionUpperPart}>
                       <Typography className={classes.rightSectionHeading}>Preview</Typography>
                       <RecipeReviewCard/>
                     </div>
                     <div className={classes.rightSectionLowerPart}>
                        <Button variant='contained' className={classes.postBtn}>Post</Button>
                        <Button variant='outlined' className={classes.saveBtn}>Save as draft</Button>
                     </div>
                  </div>
                </Grid>
            </Grid>
        </form>
    )
}

export default CreatePostPage