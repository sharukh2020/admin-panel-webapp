import { Grid, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import HPLeftSection from '../../components/home_page_components/hp_left_section/hp_left_section'
import HPRightSection from '../../components/home_page_components/hp_right_section/hp_right_section'


const useStyles=makeStyles((theme)=>{
  return{
    HomePage:{
        // [theme.breakpoints.down('sm')]:{
        //   width:window.innerWidth
        // },
        // boxSizing:'border-box'
    },
    heading:{
        fontWeight:'600'
    }
  }
})

function HomePage(props){
    const classes=useStyles()
    return(
        <div className={classes.HomePage}>
             <Grid 
              container
              spacing={3}
            >
                 <Grid item xs={12}>
                    <Typography 
                    variant='h5'
                    classes={{
                        h5:classes.heading
                    }}
                    >
                        Dashboard
                    </Typography>
                 </Grid>
                 <HPLeftSection/>
                 <HPRightSection/>
            </Grid>
        </div>
    )
}

export default HomePage