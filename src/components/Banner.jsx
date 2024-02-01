import coast from '../assets/banner/coast.jpg'

function Banner() {
  return (
    <div className="banner">
      <img
        className="banner__img"
        src={coast}
        alt="un bord de mer agité et montagneux"
      />
      <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default Banner
