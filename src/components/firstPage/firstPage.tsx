import * as React from 'react'
import {
  firstPageContainer,
  lightDivider,
  menuLink,
  menuDivider,
  mainArticle,
  coverMainArticle,
  contentMainArticle,
  textContainer,
  } from './firstPage.module.css'
import { Link } from 'gatsby'

  const FirstPage = () => {

    return (
      <div className={firstPageContainer}>
        <h1>CARNET DE VOYAGE</h1>
        <div className={lightDivider}>
          <Link to="/about" className={menuLink}>
            VENISE, VILLE AUX MILLE VITRINES
          </Link>
          <p className={menuDivider}>-</p>
          <Link to="/about" className={menuLink}>
            MONSTER PARTY
          </Link>
          <p className={menuDivider}>-</p>
          <Link to="/about" className={menuLink}>
            CONFINEMENT
          </Link>
        </div>

        <div className={mainArticle}>
          <h2>VENISE, VILLE AUX MILLE VITRINES</h2>
          <div className={contentMainArticle}>
            <div className={coverMainArticle}/>
            <div className={textContainer}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button>SEE PHOTOS</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default FirstPage