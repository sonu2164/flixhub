import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import useAlan from './Alan';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './index';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  useAlan();
  const alanBtnContainer = useRef();
  return (
    <div className={classes.root}>

      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Routes>

          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />

        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
}

export default App;

