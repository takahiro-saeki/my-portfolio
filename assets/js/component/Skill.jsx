import React, {Component} from 'react';
import classNames from 'classnames';
import style from '../../css/style';
import FontIcon from 'material-ui/FontIcon';

export default class Skill extends Component {
  render() {
    const arr = classNames('material-icons', style['md-50']);
    const language = classNames('material-icons', style['md-50'], style.language);
    const work = classNames('material-icons', style['md-50'], style.work);
    const query_builder = classNames('material-icons', style['md-50'], style.query_builder);
    const photo_library = classNames('material-icons', style['md-50'], style.photo_library);
    const import_export = classNames('material-icons', style['md-50'], style.import_export);
    const verified_user = classNames('material-icons', style['md-50'], style.verified_user);
    const contentBox = classNames(style['col-xs-12'], style['col-sm-6'], style['col-lg-4'], style['box-margin']);
    const header = classNames(style.row, style['center-xs']);

    return (
      <section className={style['container-fluid']}>
        <div className={header}>
          <h2 className={style['col-xs-6']}>SKILL LIST</h2>
        </div>
        <div className={style.row}>
          <div className={contentBox}>
            <div className={style['skill-box']}>
              <div className={style.icon_wrap}>
                <i className={language}>language</i>
              </div>
              <h3>Language</h3>
              <div>I’m front-end developer. Although my speciality is javascript, I can use several language. Especially, I like language that I get involved with front-end development.</div>
              <hr />
              <div>I can use languages: HTML5, CSS3, javascript, ECMAScript 2015&2016, PHP.</div>
            </div>
          </div>

          <div className={contentBox}>
            <div className={style['skill-box']}>
              <div className={style.icon_wrap}>
                <i className={work}>work</i>
              </div>
              <h3>FrameWork</h3>
              <div>Nowadays, our front-end development are hypertrophic. In order to improve our environment, javascript framework is so necessary. Especially, I like React.js. React.js is view library. if we implement huge APP, we need flux architecture. My recommend is Redux.js.</div>
              <hr />
              <div>I can use Frameworks: React.js, react-native, Redux, relay, Vue.js, angular2.</div>
            </div>
          </div>

          <div className={contentBox}>
            <div className={style['skill-box']}>
              <div className={style.icon_wrap}>
                <i className={query_builder}>query_builder</i>
              </div>
              <h3>Build</h3>
              <div>Recently, build environment is really necessary because our development will be huge. Do you know ECMAScript2015? If we use ECMAScript2015 syntax, we prepare to use environment. so many front-end developer are using Babel. Babel is transformed our javascript codes.</div>
              <hr />
              <div>I can use Build tools and altJS: Grunt, Gulp, Webpack, Browserify, rollup.js, typescript, babel, flow, coffee script, EJS, JADE.</div>
            </div>
          </div>

          <div className={contentBox}>
            <div className={style['skill-box']}>
              <div className={style.icon_wrap}>
                <i className={photo_library}>photo_library</i>
              </div>
              <h3>GRAPHIC-TOOL</h3>
              <div>when I joined IT industry, I was WEB Designer. I made a lot of web site, and DTP. at that then, I was using graphic-tools. but only sketch, I started to use recently.</div>
              <hr />
              <div>I can use Graphic-tools: Photoshop, Illustrator, Sketch.</div>
            </div>
          </div>

          <div className={contentBox}>
            <div className={style['skill-box']}>
              <div className={style.icon_wrap}>
                <i className={import_export}>import_export</i>
              </div>
              <h3>META-PREPROCESSOR</h3>
              <div>css is becoming complex as well as javascript. so many developer need library to become useful for css. I recommend you to use PostCSS. because PostCSS can use cssnext new syntax. and all SASS syntax. and, it is easy for setting. definitely, My favorite Meta-Preprocessor is PostCSS.</div>
              <hr />
              <div>I can use Meta-Preprocessors: SASS, LESS, Stylus, PostCSS</div>
            </div>
          </div>

          <div className={contentBox}>
            <div className={style['skill-box']}>
              <div className={style.icon_wrap}>
                <i className={verified_user}>verified_user</i>
              </div>
              <h3>SERVER & OTHER</h3>
              <div>Node.js is really good runtime built engine. it is essential library for us. absolutely, I use that. and, I was interested in wordpress and test tools. In particular, wp-rest-api is really interesting. it will be famous and we will use that. I pay attention to that.</div>
              <hr />
              <div>I can use SERVER and test tool and other: node.js, express.js, passport.js, mongoDB, mocha, wordpress. wp-rest-api.</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
