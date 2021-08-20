import {Grid, makeStyles, Typography, Button, Link} from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import PPThirdSection from '../../components/post_page_components/pp_third_section/pp_third_section'

const useStyles=makeStyles((theme)=>{
    return{
        PostsPage:{
          // [theme.breakpoints.down('sm')]:{
          //   width:window.innerWidth,
          // },
          // boxSizing:'border-box'
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
      }
    }
  })

function PostsPage(props){
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
                        Posts
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
                                <Grid item xs={12} sm={4} md={6} lg={4} className={classes.manageTopicsBtnContainer}>
                                    <Button
                                    variant='contained'
                                    classes={{
                                        contained:classes.manageTopicsBtn
                                    }}
                                    >
                                        Manage Topics
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={4} md={6} lg={4} className={classes.createPostBtnContainer}>
                                    <Button
                                    variant='contained'
                                    classes={{
                                        contained:classes.createPostBtn
                                    }}
                                    startIcon={<AddIcon/>}
                                    component={Link}
                                    href='/create_post'
                                    >
                                        Create post
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                     </Grid>
                 </Grid>
                 <Grid item xs={12}>
                    <PPThirdSection/>
                 </Grid>
            </Grid>
       </div>
    )
}

export default PostsPage