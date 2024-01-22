import * as React from 'react'
import {
    imageContainer,
    titleContainer,
  } from './profilView.module.css'

  const ProfilView = () => {

    return (
      <div className={imageContainer}>
        <div className={titleContainer}>
          <h3 className="robotoTitle">KARADEG</h3>
          <h3 className="robotoTitle">DAUCÉ</h3>
        </div>
      </div>
    )
  }
  
  export default ProfilView