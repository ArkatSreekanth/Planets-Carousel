import './index.css'

const PlanetItem = props => {
  const {eachItem} = props
  const {name, imageUrl, description} = eachItem

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-desc">{description}</p>
    </div>
  )
}

export default PlanetItem
