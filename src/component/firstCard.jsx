import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    maxHeight: 220
  },
}));

export default function FirstCard() {
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
        subheader="Announcements"
      />
     
      <CardContent align="left">
        <h4>Incredibly Positive Reviews</h4>
        <Typography  color="textSecondary" component="p">
          To start a blog, think about a topic and first brainstorm part is to write details.
        </Typography>
        <Button variant="outlined" color="primary" size="small" >
            17 Nov, 2018
        </Button>
      </CardContent>
     
    </Card>
  );
}
