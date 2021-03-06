import React, { Component, PropTypes } from 'react';

import styles from './Prisme.css';
import prismes from '../../constants';
import data from '../../constants/data';

import Header from '../../components/Header';
import Article from '../../components/Article';
import NextPrisme from '../../components/NextPrisme';

import browserHistory from '../../browserHistory';

class Prisme extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  goToSingle = index => {
    const { params: { id } } = this.props;

    browserHistory.push({
      pathname: '/single',
      query: {
        prisme: id,
        article: index,
      },
    });
  };

  render() {
    const { params: { id } } = this.props;
    const current = prismes[id];

    return (
      <div className={styles.prisme}>
        <Header
          pathname="/prismes"
          title={data[id].name}
          options
          prisme
        />
        <div className={styles.articles}>
          <NextPrisme id={parseInt(id, 10)} />
          {current.map((single, index) => (
            <Article
              key={index}
              index={index}
              goToSingle={this.goToSingle}
              {...single}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Prisme;
