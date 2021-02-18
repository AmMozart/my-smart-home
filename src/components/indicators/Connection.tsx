import React from 'react'
import style from './Connection.module.css'

interface IConnectionProps {
    isConnect : boolean
}

const Connection : React.FunctionComponent<IConnectionProps> = ({ isConnect }) => {
    if ( isConnect )
        return <div className={"fa fa-wifi " + style.connect}></div>
    else
        return <div className={"fa fa-wifi " + style.disconnect}></div>
}

export default Connection