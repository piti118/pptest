import { Drawer } from 'material-ui/index';
import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List/index';
import { AppBar, Button, IconButton, List, ListItemIcon, Toolbar, Typography, withStyles } from 'material-ui';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import StarIcon from 'material-ui-icons/Star';
import MenuIcon from 'material-ui-icons/Menu';
import TopBar from './TopBar';


function MailboxSidebarItem() {
  return (
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
  )
}

function StarSidebarItem(){
  return(<ListItem button>
    <ListItemIcon>
      <StarIcon />
    </ListItemIcon>
    <ListItemText primary="Starred" />
  </ListItem>)
}

function SidebarItems() {
  return (<List>
    <MailboxSidebarItem/>
    <StarSidebarItem/>
  </List>)
}

const classes = theme => ({
  drawerPaper: {

  }
});
const SideBar = withStyles(classes)(({classes, open, onClose})=> {
  return (
    <Drawer
            classes={{
              paper: classes.drawerPaper,
              width: 240
            }}
            anchor="left"
            open={open}
            onClose={onClose}
    >
      <SidebarItems/>
    </Drawer>
  )
})

class MyAppBar extends React.Component {

  state = {sidebarOpen: false}

  handleOpenSidebar = () => {this.setState({sidebarOpen: true})}
  handleCloseSidebar = () => {this.setState({sidebarOpen: false})}

  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.handleOpenSidebar}/>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <SideBar open={this.state.sidebarOpen} onClose={this.handleCloseSidebar}/>
      </div>
    )
  }
}

export default function Page({children}){
  return(
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <MyAppBar/>
      {/*<main style={{flexGrow:1}}>*/}
        {/*<TopBar />*/}
        {/*<div>Hello</div>*/}
      {/*</main>*/}
    </div>
  )
}