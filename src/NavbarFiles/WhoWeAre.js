import seoul from '../assets/seoul.mp4'

function WhoWeAre() {
  return (
    <video className="center" src={seoul} loop autoPlay>
    </video>
  )
}

export default WhoWeAre