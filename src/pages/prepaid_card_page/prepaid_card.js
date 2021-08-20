import {Grid, makeStyles, Typography} from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import CardContainer from '../../components/prepaid_card_components/card_container/card_container'
import CustomizedTables from '../../components/prepaid_card_components/prepaid_card_table_section/prepaid_card_table_section'


const useStyles=makeStyles((theme)=>{
    return{
        secondSection:{
          backgroundColor:'#FFFFFF',
          borderRadius:'5px',
        },
        secondSectionBtnsContainer:{
            [theme.breakpoints.up('lg')]:{
                display:'flex',
                justifyContent:'flex-end'
            }
        },
        byAdminSelect:{
            width:'150px',
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

      heading:{
          fontWeight:'600',
          borderBottom:'3px solid #C4C4C4'
      },
      search: {
        width:'auto',
        boxSizing:'content-box',
        color:'#C4C4C4',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#EFF0F6',
        '&:hover': {
          backgroundColor: '#C4C4C4',
          color:'black'
        },
        marginLeft: 0
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
          width: '20ch'
        }
      },
    manageTopicsBtn:{
        width:'100%',
        backgroundColor:'#4F5052',
        color:'white',
        borderRadius:'0',
        fontSize:'12px',
        fontWeight:'500',
        boxShadow:'0 0 0',
        '&:hover':{
          backgroundColor:'#EFF0F6',
          color:'black',
          boxShadow:'0 0 0'
        }
       
    },
    createPostBtn:{
        width:'100%',
        backgroundColor:'#4F5052',
        color:'white',
        borderRadius:'0',
        fontSize:'12px',
        fontWeight:'500',
        boxShadow:'0 0 0',
        '&:hover':{
          backgroundColor:'#EFF0F6',
          color:'black',
          boxShadow:'0 0 0',
          textDecoration:'none'
        }
    },
    tableHeading:{
        fontSize:'14px',
        fontWeight:'600'
    }
    }
  })

function PrepaidCardsPage(props){
    const classes=useStyles()
    return(
       <div className={classes.LoansPage}>
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
                        Prepaid cards
                    </Typography>
                 </Grid>
                 <Grid item xs={12}>
                     <CardContainer/>
                 </Grid> 
                 <Grid item xs={12} className={classes.secondSection}>
                     <Grid container justifyContent='space-between' alignItems='center' spacing={1}>
                        <Grid item xs={12} md={3}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                <SearchIcon />
                                </div>
                                <InputBase
                                placeholder="Search by name/number"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container className={classes.secondSectionBtnsContainer} spacing={1}>
                                <Grid item xs={12} sm={4} md={6} lg={4} className={classes.manageTopicsBtnContainer}>
                                    <input className={classes.byAdminSelect} list="filter-by" name="filter-by" id="filter-by-input" placeholder="Filter by"/>
                                    <datalist id="filter-by">
                                        <option value="option 1"/>
                                        <option value="option 2"/>
                                        <option value="option 3"/>
                                        <option value="option 4"/>
                                        <option value="option 5"/>
                                    </datalist>
                                </Grid>
                                <Grid item xs={12} sm={4} md={6} lg={4} className={classes.createPostBtnContainer}>
                                    <input className={classes.byStatusSelect} list="status" name="status" id="status-input" placeholder="Status"/>
                                    <datalist id="status">
                                        <option value="status 1"/>
                                        <option value="status 2"/>
                                        <option value="status 1"/>
                                        <option value="status 2"/>
                                        <option value="status 1"/>
                                    </datalist>
                                </Grid>
                            </Grid>
                        </Grid>
                     </Grid>
                 </Grid>
                 <Grid item xs={12}>
                 <Grid container justifyContent='space-between' alignItems='center' spacing={1}>
                        <Grid item xs={12} md={3}>
                          <Typography className={classes.tableHeading}>Users</Typography>
                        </Grid>
                     </Grid>
                 </Grid>
                 <Grid item xs={12}>
                     <CustomizedTables/>
                 </Grid>
            </Grid>
       </div>
    )
}

export default PrepaidCardsPage