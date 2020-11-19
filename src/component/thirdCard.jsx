import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    maxHeight: 220
  },
}));

export default function ThirdCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
              <ArrowBackIosIcon/>
              <ArrowForwardIosIcon/>
          </IconButton>
        }
        subheader="Today's Schedule"
      />
     
      <CardContent align="left">
        <h4>UI/UX Design Updates</h4>
        <Typography  color="purple" fontStyle="bold">
            11:15AM - 12:30PM
        </Typography>
        <br/>
        <LocationOnIcon/> some location
      </CardContent>
     
    </Card>
  );
}
