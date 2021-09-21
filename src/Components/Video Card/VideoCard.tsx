import React from 'react';
import { useStyles } from '../../Style/Style';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Video } from '../../Models/Model';

const VideoCard: React.FC<Video> = React.memo(({ video }) => {
  const { id, artist, title, release_year, image_url } = video;
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={3} key={id} data-testid='grid'>
        <Card className={classes.fullHeightCard}>
          <CardMedia
            data-testid='image'
            className={classes.musicMedia}
            image={image_url}
            style={{ width: '200px', height: '200px' }}
          />
          <CardContent
            className={classes.musicContent}
            data-testid='card-content'
          >
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='subtitle1' gutterBottom component='h5'>
              artitst: {artist}
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              Year: {release_year}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
});

export default VideoCard;
