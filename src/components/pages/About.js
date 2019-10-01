import React, { Fragment } from 'react';


const About = () => {
  return (
    <Fragment>
      <h1>About</h1><br></br>
      <p className='lead'>This app is developed with React.js. using React Hooks and Context API.</p>
      <p className='lead'>You can use it for searching to GitHub users.</p>
      <p className='lead'>Repository with the code you can find <a className='lead repo-link' href='https://github.com/tatjanatanaskovich/github-finder-with-hooks-and-context-api'>
         here</a>.
      </p>
    </Fragment>
  );
};


export default About;