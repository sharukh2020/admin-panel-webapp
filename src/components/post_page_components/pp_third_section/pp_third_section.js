import React from 'react'
import CustomizedTables from '../pp_ts_left_section/pp_ts_left_section'
import { Box, Card, CardContent, Grid, makeStyles, Typography} from '@material-ui/core'
import RecipeReviewCard from '../pp_ts_right_section/pp_ts_right_section';

const useStyles=makeStyles((theme)=>{
    return{
       tableHeader:{
           display:'flex',
           justifyContent:'space-between',
           alignItems:'center',
           padding:'10px 20px 0 20px'
       },
       tableTitle:{
           fontSize:'16px',
           fontWeight:'600'
       },
       dropDownHolder:{
         display:'flex',
         justifyContent:'flex-end',
         alignItems:'center',
         [theme.breakpoints.down('sm')]:{
             flexDirection:'column',
             justifyContent:'center',
             alignItems:'flex-end',
         }
       },
       byAdminHeading:{
         
           
       },
       byStatusHeading:{
      
       },
       byAdminSelect:{
           width:'130px',
           padding:'10px',
           borderRadius:'4px',
           border:'1px solid #EEEEEE',
           fontSize:'14px',
           color:' #B9B9B9',
           marginRight:'20px',
           backgroundColor:'#FFFFFF',
           outline:'none',
           '&:hover':{
               backgroundColor:'whitesmoke',
               color:'black',
               cursor:'pointer'
           },
           [theme.breakpoints.down('md')]:{
               marginRight:'0'
           }
       },
       byStatusSelect:{   
        width:'130px',
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
       cardContainer:{
           display:'flex',
           justifyContent:'center',
           alignItems:'center'
       }
    }
})

function PP_Third_Section(props){
    // const [admin, setAdmin] = React.useState('');
    // const handleAdminChange = (event) => {
    //   setAdmin(event.target.value);
    // }
    // const [status, setStatus] = React.useState('');
    // const handleStatusChange = (event) => {
    //   setStatus(event.target.value);
    // };
    const classes=useStyles()
    return(
       <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
                    <Card>
                       <Box className={classes.tableHeader}>
                           <Typography className={classes.tableTitle}>All posts</Typography>
                           <div className={classes.dropDownHolder}>
                               <input className={classes.byAdminSelect} list="admins" name="admin" id="admin" placeholder="By admin"/>
                                <datalist id="admins">
                                <option value="Sharukh"/>
                                <option value="Vivek"/>
                                <option value="Rahul"/>
                                <option value="Kartik"/>
                                <option value="Naveen"/>
                                </datalist>
                                <input className={classes.byStatusSelect} list="status" name="status" id="status-1" placeholder="By status"/>
                                <datalist id="status">
                                <option value="Active"/>
                                <option value="Pending"/>
                                <option value="Active"/>
                                <option value="Active"/>
                                <option value="Active"/>
                                </datalist>
                           </div>
                       </Box>
                       <CardContent>
                          <CustomizedTables/> 
                       </CardContent> 
                    </Card>
                </Grid>
                <Grid item xs={12} lg={4} className={classes.cardContainer}>
                    <RecipeReviewCard/>
                </Grid>
       </Grid>
    )
}

export default PP_Third_Section