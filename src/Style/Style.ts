import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  musicContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  searchContainer: {
    display: 'flex',
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '5px',
    marginBottom: '5px',
  },
  searchIcon: {
    alignSelf: 'flex-end',
    marginBottom: '5px',
    color: '#1976d2',
  },
  searchInput: {
    width: '200px',
    margin: '5px',
    color: 'black',
  },
  musicMedia: {
    margin: 'auto',
  },
  musicContent: {
    textAlign: 'center',
  },
  fullHeightCard: {
    height: '100%',
  },
});

export { useStyles };
