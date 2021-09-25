import React, { useState, ChangeEvent } from 'react';
import { useStyles } from '../../Style/Style';
import { AppBar, Toolbar, Grid, TextField } from '@material-ui/core';
import { useFetch } from '../../Hooks/useFetch.hooks';
import { baseUrl } from '../../Constant/Constant';
import { VideosEntity, selectGenresEntity } from '../../Models/Model';
import Select, { OptionsType } from 'react-select';
import SearchIcon from '@material-ui/icons/Search';
import Loader from 'react-loader-spinner';
import FallbackError from '../Error Boundary/FallbackError';
import VideoCard from '../Video Card/VideoCard';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './MusicVideos.css';

const MusicVideos: React.FC = () => {
  const classes = useStyles();
  const { data, error, loading } = useFetch(baseUrl);
  const [searchString, setsearchString] = useState<string>('');
  const [filterVideos, setFilterVideos] = useState<VideosEntity[]>([]);

  /**
   * Method accept search character and set state for search string
   * @param event
   */
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setsearchString(event.target.value);
  };

  /**
   * Based on selected genres method filter music videos
   * set state for filterVideos based on selected genre value
   * @param genres
   */

  const handleSelectChange = (
    genres: OptionsType<selectGenresEntity>
  ): void => {
    let tempMusicVideos: Array<VideosEntity> = [];
    genres.forEach((genre) => {
      tempMusicVideos = [
        ...tempMusicVideos,
        ...data.videos.filter(
          (video: VideosEntity) => video.genre_id === genre.value
        ),
      ];
    });
    setFilterVideos([...tempMusicVideos]);
  };

  return (
    <div data-testid='music-video'>
      {!error && (
        <>
          <AppBar
            position='static'
            style={{ backgroundColor: 'white' }}
            data-testid='app-bar'
          >
            <Toolbar>
              <div className={classes.searchContainer}>
                <SearchIcon
                  className={classes.searchIcon}
                  data-testid='search-icon'
                />
                <TextField
                  variant='standard'
                  placeholder='Title...'
                  className={classes.searchInput}
                  onChange={handleSearchChange}
                />
              </div>
            </Toolbar>
          </AppBar>
          {data && data.genres && (
            <div className='multiselect'>
              <Select
                isMulti
                name='genres'
                options={data.genres.map(({ id, name }) => ({
                  value: id,
                  label: name,
                }))}
                placeholder='Genres'
                className='basic-multi-select'
                classNamePrefix='select'
                test-dataid='multiselect'
                onChange={handleSelectChange}
              />
            </div>
          )}

          <Grid container spacing={2} className={classes.musicContainer}>
            {data &&
              !error &&
              !filterVideos.length &&
              data.videos &&
              data.videos.map(
                (video: VideosEntity, index: number) =>
                  data.videos[index].title
                    .toString()
                    .includes(searchString) && (
                    <VideoCard
                      video={data.videos[index]}
                      key={video.id}
                      data-testid='videocom'
                    />
                  )
              )}

            {!error &&
              filterVideos.length &&
              filterVideos.map(
                (video: VideosEntity, index: number) =>
                  filterVideos[index].title
                    .toString()
                    .includes(searchString) && (
                    <VideoCard video={filterVideos[index]} key={video.id} />
                  )
              )}
          </Grid>
        </>
      )}
      {error && <FallbackError />}
      {loading && (
        <div className='loader'>
          {loading && (
            <Loader type='Oval' color='white' height={50} width={50} />
          )}
        </div>
      )}
    </div>
  );
};

export default MusicVideos;
