import coast from '../assets/banner/coast.jpg'

function Banner() {
  return (
    <div className="banner">
      <img
        className="banner__img"
        src={coast}
        alt="un bord de mer agité et montagneux"
      />
    </div>
  )
}

export default Banner
