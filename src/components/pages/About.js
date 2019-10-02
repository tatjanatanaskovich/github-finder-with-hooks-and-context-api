import React, { Fragment } from 'react';


const About = () => {
  return (
    <Fragment>
      <h1>About Github Finder Application</h1><br></br>
      <p className='lead'>This app is developed with React.js. using React Hooks and Context API.</p>
      <p className='lead'>You can use it to search for GitHub users.</p>
      <p className='lead'>Source code for this app you can find in Github repository <a className='lead repo-link' href='https://github.com/tatjanatanaskovich/github-finder-with-hooks-and-context-api'>
         here</a>.
      </p>
    </Fragment>
  );
};


export default About;