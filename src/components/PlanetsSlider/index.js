import './index.css'
import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

class PlanetSlider extends Component {
  render() {
    const {planetsList} = this.props
    console.log(planetsList)
    return (
      <div className="planets-bg-container" data-testid="planets">
        <h1 className="main-heading">PLANETS</h1>
        <Slider {...settings} className="carousel-container">
          {planetsList.map(eachItem => (
            <PlanetItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetSlider
