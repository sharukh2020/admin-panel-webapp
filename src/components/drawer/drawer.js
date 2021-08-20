import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Routes from '../../routes/routes'
import {Switch,Route} from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Icon, Typography, Link } from '@material-ui/core';
import { connect } from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor:'white',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  appBarInnerWrapper:{
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'black',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
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
      marginLeft: theme.spacing(1),
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
      width: '18ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  sectionDesktop: {
    color:'#C4C4C4',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    color:'#C4C4C4',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar2: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
    // necessary for content to be below app bar
  toolbar:theme.mixins.toolbar,
  brandName:{
    color:'white',
    fontSize:'18px',
    textAlign:'left',
    width:'80%'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#222A45'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerTopDivider:{
   backgroundColor:'grey'
  },
  sideBarLinkIcon:{
    color:'white',
    fontSize:'16px'
  },
  sideBarLinkName:{
    color:'white',
    fontSize:'14px'
  },
  drawerLinksContainer:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  drawerLinks:{
    backgroundColor:'#3c435c',
    width:'85%',
    borderRadius:'3px',
    marginBottom:'10px',
    padding:'7px 15px',
    '&:hover':{
      backgroundColor:'#2e3857'
    }
  },
  drawerLowerLinksHeading:{
    width:'90%',
    fontSize:'13px',
    color:'white',
    paddingLeft:'20px'
  }

}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerUpperLinks=props.sideBarUpperLinks.map((item,index)=>{
   return(
      <ListItem button key={index} className={classes.drawerLinks} component={Link} href={item.link}>
        <ListItemIcon><Icon className={classes.sideBarLinkIcon}>{item.icon}</Icon></ListItemIcon>
        <ListItemText primary={item.name} primaryTypographyProps={{className:classes.sideBarLinkName}}/>
      </ListItem>
   )
  })

  const drawerLowerLinks=props.sideBarLowerLinks.map((item,index)=>{
    return(
        <ListItem button key={index} className={classes.drawerLinks} component={Link} href={item.link}>
          <ListItemIcon><Icon className={classes.sideBarLinkIcon}>{item.icon}</Icon></ListItemIcon>
          <ListItemText primary={item.name} primaryTypographyProps={{className:classes.sideBarLinkName}}/>
        </ListItem>
    )
   })

  const drawer = (
    <div>
      <div className={[classes.toolbar,classes.toolbar2].join(' ')}>
         <Typography variant='h6' className={classes.brandName}>mahila.money</Typography>
      </div>
      <Divider className={classes.drawerTopDivider} />
      <List className={classes.drawerLinksContainer}>
         {drawerUpperLinks}
      </List>
      <div>
        <Typography variant='h6' className={classes.drawerLowerLinksHeading}>SYSTEM</Typography>
        <List className={classes.drawerLinksContainer}>
           {drawerLowerLinks}
        </List>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.appBarInnerWrapper}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Enter a keyword"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
       
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
           {
            Routes.map((item,pos)=>{
              return (<Route key={pos} path={item.path} component={item.component}/>)
            })
           }
         </Switch>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const connectToGlobalStore=(globalStore)=>{
  return{
    sideBarUpperLinks:globalStore.layout_reducer.sideBarUpperLinks,
    sideBarLowerLinks:globalStore.layout_reducer.sideBarLowerLinks
  }
}

export default connect(connectToGlobalStore,null)(ResponsiveDrawer)
