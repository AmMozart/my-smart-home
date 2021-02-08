import React from 'react';
import style from './HomePage.module.css';
import CenterEye from './CenterEye'

class HomePage extends React.Component {

  render() {
    return (
      <div className={style.detailsPage} >
        <div className={style.class1}>
          СВЕТ
          <i className="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
        </div>
        <div className={style.class2}>
          <i className="fa fa-tint fa-2x" aria-hidden="true"></i>
          ВОДА
        </div>
        <div className={style.class3}>
          ОХРАНА
          <i className="fa fa-shield fa-2x" aria-hidden="true"></i>
        </div>
        <div className={style.class4}>
          <i className="fa fa-thermometer-empty fa-2x" aria-hidden="true"></i>
          КЛИМАТ
        </div>
        <div className={style.class5}>
          СИСТЕМЫ
          <i className="fa fa-cogs fa-2x" aria-hidden="true"></i>
        </div>
        <div className={style.class6}>
          <i className="fa fa-align-justify fa-2x" aria-hidden="true"></i>
          ШТОРЫ
        </div>
        {/* <div className={style.class7}>7</div>
        <div className={style.class8}>8</div> */}
        <div className={style.class9}>
          <React.Fragment>
            <CenterEye />
          </React.Fragment>
        </div>

      </div>
    );
  }
}

export default HomePage;