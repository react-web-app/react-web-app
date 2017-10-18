import React from 'react'

import { dependencies } from '../../package-lock.json'

const libraries = [
  [
    'react',
    'React',
    'https://reactjs.org/',
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  ],
  [
    'redux',
    'Redux',
    'http://redux.js.org/',
    'http://redux.js.org/gitbook/images/apple-touch-icon-precomposed-152.png',
  ],
  [
    'react-router',
    'React Router',
    'https://reacttraining.com/react-router/web',
    'https://reacttraining.com/react-router/apple-touch-icon.png',
  ],
  [
    'bootstrap',
    'Bootstrap',
    'https://getbootstrap.com',
    'https://getbootstrap.com/apple-touch-icon.png',
  ],
  [
    'webpack',
    'Webpack',
    'https://webpack.js.org/',
    'https://webpack.js.org/6bc5d8cf78d442a984e70195db059b69.svg',
  ],
  [
    'babel-core',
    'Babel',
    'https://babeljs.io/',
    'https://babeljs.io/apple-touch-icon.png',
  ],
  [
    'eslint',
    'ESLint',
    'https://eslint.org/',
    'https://eslint.org/img/favicon.512x512.png',
  ],
  [
    'jest',
    'Jest',
    'https://facebook.github.io/jest/',
    'https://facebook.github.io/jest/img/jest.svg',
  ],
  [
    'enzyme',
    'Enzyme',
    'http://airbnb.io/enzyme/',
    'http://airbnb.io/img/projects/enzyme.png',
  ],
]

const Home = () => (
  <div>
    <div className="row text-center">
      {libraries.map(([pkg, name, link, logo], i) => (
        <div key={i} className="col-4 mb-5">
          <a target="_blank" className="package" href={link}>
            <img className="img-fluid mb-2" src={logo} alt={name} />
            <br />
            {name}
            <br />
            <small className="text-secondary">
              {dependencies[pkg].version}
            </small>
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default Home
