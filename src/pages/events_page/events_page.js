import {Grid, makeStyles, Typography, Button, Link} from '@material-ui/core'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import CustomizedTables from '../../components/events_page_components/ep_upper_table/ep_upper_table';
import CustomizedTables2 from '../../components/events_page_components/ep_lower_table/ep_lower_table';
import RecipeReviewCard from '../../components/events_page_components/ep_last_card/ep_last_card';

const useStyles=makeStyles((theme)=>{
    return{
        PostsPage:{
            [theme.breakpoints.down('sm')]:{
                width:'90%'
              }
        },
        secondSection:{
          backgroundColor:'#FFFFFF',
          borderRadius:'5px'
        },
        secondSectionBtnsContainer:{
            [theme.breakpoints.up('lg')]:{
                display:'flex',
                justifyContent:'flex-end'
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
      heading:{
          fontWeight:'600',
          borderBottom:'3px solid #C4C4C4'
      },
      search: {
        color:'#C4C4C4',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#EFF0F6',
        '&:hover': {
          backgroundColor: '#C4C4C4',
          color:'black'
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 'auto',
        },
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
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        }
      },
        cardTitle:{
            fontSize:'17px',
            fontWeight:'600'
    },
    cardHeader2:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'20px',
    },
    thirdSectionTable2Input:{
        border: '2px solid #EEEEEE',
        borderRadius: '4px',
        outline:'none',
        padding:'15px 20px',
        '&::placeholder':{
            fontSize:'14px'
        },
        [theme.breakpoints.only('xs')]:{
            marginLeft:'10px',
            padding:'10px',
            width:'50%'
        }
    },
    table1:{
        background: '#FFFFFF',
        boxShadow: '-3px -3px 4px rgba(0, 0, 0, 0.1), 3px 4px 4px rgba(0, 0, 0, 0.1)'
    },
    table2:{
        marginTop:'20px',
        background: '#FFFFFF',
        boxShadow: '-3px -3px 4px rgba(0, 0, 0, 0.1), 3px 4px 4px rgba(0, 0, 0, 0.1)'
    },
      lastSection:{
          display:'flex',
          justifyContent:'center',
          alignItems:'flex-start'
      }
    }
  })

function EventsPage(props){
    const classes=useStyles()
    return(
       <div className={classes.PostsPage}>
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
                        Events
                    </Typography>
                 </Grid> 
                 <Grid item xs={12} className={classes.secondSection}>
                     <Grid container justifyContent='space-between' alignItems='center' spacing={1}>
                        <Grid item xs={12} md={3}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                <SearchIcon />
                                </div>
                                <InputBase
                                placeholder="Search…"
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
                                <Grid item xs={12} sm={5} md={6} lg={4} className={classes.createPostBtnContainer}>
                                    <Button
                                    variant='contained'
                                    classes={{
                                        contained:classes.createPostBtn
                                    }}
                                    startIcon={<AddIcon/>}
                                    component={Link}
                                    href='/shedule_event'
                                    >
                                        Shedule event
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                     </Grid>
                 </Grid>
                 <Grid item xs={12}>
                  <Grid container spacing={3}>
                  <Grid item xs={12} lg={8}>
                    <Card className={classes.table1}>
                        <CardHeader
                            title="Ongoing event"
                                classes={{
                                    title:classes.cardTitle 
                            }}
                        />
                        <CardContent>
                            <CustomizedTables/>
                        </CardContent> 
                    </Card>
                    <Card className={classes.table2}>
                        <div className={classes.cardHeader2}>
                            <Typography className={classes.cardTitle}>
                                Upcoming events
                            </Typography>
                            <input className={classes.thirdSectionTable2Input} list="events" name="events" id="event" placeholder='Upcoming'/>
                            <datalist  id="events">
                                <option value="event 1"/>
                                <option value="event 2"/>
                                <option value="event 3"/>
                                <option value="event 4"/>
                                <option value="event 5"/>
                            </datalist>
                        </div>
                        <CardContent>
                            <CustomizedTables2/>
                        </CardContent> 
                    </Card>
                </Grid>
        
                    <Grid item xs={12} lg={4} className={classes.lastSection}>
                        <RecipeReviewCard/>
                    </Grid>
                  </Grid>
                 </Grid>
            </Grid>
       </div>
    )
}

export default EventsPage