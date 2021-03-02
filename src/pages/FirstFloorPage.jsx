import React from 'react'
import style from './FirstFloorPage.module.css'
import figma from "../img/plan.png"
import ToggleLight from '../components/controls/ToggleLight'

const FirstFloorPage = ({changeValue, statusReducer}) => {

    return (
      <div className={style.floor} >
        <div className={style.plan} >
          <img src={figma} alt="Plan 0 floor" />
          
          <div className={style.light_01} >
            <ToggleLight
              description="0-01L"
              name=""
              value={statusReducer.dmxChannels[1]}
              changeValue={changeValue}
            />
          </div>
          <div className={style.light_02} >
            <ToggleLight
              description="0-02L"
              name=""
              value={statusReducer.dmxChannels[2]}
              changeValue={changeValue}
            />
          </div>
          <div className={style.light_03} >
            <ToggleLight
              description="0-03L"
              name=""
              value={statusReducer.dmxChannels[3]}
              changeValue={changeValue}
            />
          </div>
          <div className={style.light_04} >
            <ToggleLight
              description="0-04L"
              name=""
              value={statusReducer.dmxChannels[4]}
              changeValue={changeValue}
            />
          </div>
          <div className={style.light_05} >
            <ToggleLight
              description="0-05L"
              name=""
              value={statusReducer.dmxChannels[5]}
              changeValue={changeValue}
            />
          </div>
        </div>
      </div>
    )
  }

export default FirstFloorPage