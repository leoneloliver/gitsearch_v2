import React, { Fragment }from 'react'
import spinner from './ajax-loader.gif'

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." style={{ width: '40px', margin: 'auto', display: 'block', marginTop: '52px'}} />
        </Fragment>
    )
}

export default Spinner;