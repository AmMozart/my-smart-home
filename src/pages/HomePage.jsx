import React from 'react'
import {useHistory} from 'react-router-dom'
import style from './HomePage.module.css'
import CenterEye from '../components/CenterEye'

const HomePage = ({defaultPage = 'FirstFloorPage'}) => {
  let history = useHistory()

  let goToPage = (path) => {
    history.push(`/${defaultPage}/${path}`)
  }

    return (
      <div className={style.detailsPage} >
        <div className={style.class1} onClick={() => goToPage('Light')}>
          <span>СВЕТ</span>
          <i className="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
        </div>
        <div className={style.class2} onClick={() => goToPage('Water')}>
          <i className="fa fa-tint fa-2x" aria-hidden="true"></i>
          <span>ВОДА</span>
        </div>
        <div className={style.class3} onClick={() => goToPage('Security')}>
          <span>ОХРАНА</span>
          <i className="fa fa-shield fa-2x" aria-hidden="true"></i>
        </div>
        <div className={style.class4} onClick={() => goToPage('Climate')}>
          <i className="fa fa-thermometer-empty fa-2x" aria-hidden="true"></i>
          <span>КЛИМАТ</span>
        </div>
        <div className={style.class5} onClick={() => goToPage('System')}>
          <span>СИСТЕМЫ</span>
          <i className="fa fa-cogs fa-2x" aria-hidden="true"></i>
        </div>
        <div className={style.class6} onClick={() => goToPage('Blind')}>
          <i className="fa fa-align-justify fa-2x" aria-hidden="true"></i>
          <span>ШТОРЫ</span>
        </div>
        <div className={style.class9}>
          <React.Fragment>
            <CenterEye />
          </React.Fragment>
        </div>

      </div>
    )
}


export default HomePage;