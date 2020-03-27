import React from 'react';
import style from './HomePage.module.css';

class HomePage extends React.Component {

  render() {
    return (
      <div className={style.detailsPage} >
        <div className={style.class1}>
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i> &nbsp;
        СВЕТ
        </div>
        <div className={style.class2}>
          <i className="fa fa-tint" aria-hidden="true"></i>&nbsp;
        ВОДА</div>
        <div className={style.class3}>
          <i className="fa fa-shield" aria-hidden="true"></i>&nbsp;
        ОХРАНА</div>
        <div className={style.class4}>
          <i className="fa fa-video-camera" aria-hidden="true"></i>&nbsp;
        КАМЕРЫ</div>
        <div className={style.class5}>
          <i className="fa fa-cogs" aria-hidden="true"></i>&nbsp;
        СИСТЕМЫ</div>
        <div className={style.class6}>
          <i className="fa fa-align-justify" aria-hidden="true"></i>&nbsp;
        ШТОРЫ</div>
        {/* <div className={style.class7}>7</div>
        <div className={style.class8}>8</div> */}
        <div className={style.class9}>
          <div className={style['cssload-container']}>
            <div className={style['cssload-whirlpool']}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;