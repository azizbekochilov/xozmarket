import React from 'react'
import "../css/Karusel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../css/Carousel.css"

const Karusel = () => {

  return (
    <div className='Carusel'>
      <center>

        <Carousel className='carusel' autoPlay={true}>
          <div className='carusel__div'>
            <img className='carusel__div_img' src="https://xozm.ru/upload/iblock/a8e/a8e126d57ccd1a7cdee3be9680fe1b0e.png" />

          </div>
          <div className='carusel__div'>
            <img className='carusel__div_img' src="https://xozm.ru/upload/iblock/faa/faaa938059f6ee651eb72070fa7e7443.png" />

          </div>
          <div className='carusel__div'>
            <img className='carusel__div_img' src="https://xozm.ru/upload/iblock/955/95526d940427a9e1cd7fa3885657e43d.png" />

          </div>
          <div className='carusel__div'>
            <img className='carusel__div_img' src="https://xozm.ru/upload/iblock/3b6/3b6eb3879810f8931f8d8a05e1515b74.png" />

          </div>
          <div className='carusel__div'>
            <img className='carusel__div_img' src="https://xozm.ru/upload/iblock/27b/27b23bfb924e2374c6e312eedd61686d.png" />

          </div>
          <div className='carusel__div'>
            <img className='carusel__div_img' src="https://xozm.ru/upload/iblock/02d/banner_na_site_960x417_hozmarket_2.png" />

          </div>
        </Carousel>
      </center>

    </div>
  )
}

export default Karusel