import React, {Component} from 'react';
import Header from '../component/Header';
import Intro from '../component/Intro';
import Skill from '../component/Skill';
import Footer from '../component/Footer';
import Resume from '../component/Resume';
import Social from '../component/Social';
import Work from '../component/Work';
import Contact from '../component/Contact';
import style from '../../css/style';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Header />
        <Intro />
        <Skill />
        <Work />
        <Resume />
        <Contact />
        <Social />
        <Footer />
      </main>
    )
  }
}
