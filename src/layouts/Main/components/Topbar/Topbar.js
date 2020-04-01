import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  // const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      style={{justifyContent: 'center'}}
    >
      <Toolbar>
      <Hidden lgUp>
        <IconButton
          color="inherit"
          onClick={onSidebarOpen}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
        <RouterLink to="/">
          <img
            style={{width: 100,
                height: 40,}}
            alt="Logo"
            src="/images/logos/logo--white.png"
          />

        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden lgUp>
          <IconButton color="inherit">
            <Badge
              badgeContent={2}
              color="error"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
            href={"/sign-in"}
          >
            <InputIcon />
          </IconButton>
        </Hidden>

      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
