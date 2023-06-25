import { makeStyles } from '@mui/styles';

const drawerWidth = 240;
export default makeStyles((theme) => ({

  toolbar: {
    height: '70px',
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },

  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      display: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,

  },
  linkButton: {
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },
}));
