import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Drawer, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import BusinessIcon from '@material-ui/icons/Business';
import BuildIcon from '@material-ui/icons/Build';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import StoreRoundedIcon from '@material-ui/icons/StoreRounded';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon><BusinessIcon /></ListItemIcon>
                    <ListItemText primary={'About Us'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><StoreRoundedIcon /></ListItemIcon>
                    <ListItemText primary={'Products'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><BuildIcon /></ListItemIcon>
                    <ListItemText primary={'Services'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><PermContactCalendarIcon /></ListItemIcon>
                    <ListItemText primary={'Contact Us'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><AccountCircleRoundedIcon /></ListItemIcon>
                    <ListItemText primary={'Profile'} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        BayWrex
          </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Services</Button>
                        <Button color="inherit">Products</Button>
                        <Button color="inherit">Contact</Button>
                        <Button color="inherit">Login</Button>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="open drawer"
                            aria-haspopup="true"
                            onClick={toggleDrawer('right', true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                        {list('right')}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    );
}