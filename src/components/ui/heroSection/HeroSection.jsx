import './style.scss'
import * as Icons from 'react-bootstrap-icons';
import { useState, useEffect } from 'react'
import { fetchAnimeOngoing } from '../../../database/api'

const HeroSection = () =>
{

  const [animeListOngoing, setAnimeOngoing] = useState([])
  const [countAnimeIndex, setCountAnimeIndex] = useState(0)

  useEffect(() => {
    fetchAnimeOngoing().then(result => {
      setAnimeOngoing(result)
      
      setTimeout(() => {
        setCountAnimeIndex(preventIndex => (preventIndex +1 ) % result.length)
      }, 10000)

    })
  }, [countAnimeIndex])

  const HeroMain = () =>
  {
    return (
      <a href=''>
        <figure className='wrapper hero-main'>
          <div className='hangup'>
            <span>{animeListOngoing[countAnimeIndex]?.status}</span>
            <span>{animeListOngoing[countAnimeIndex]?.type}</span>
          </div>
          <img src={animeListOngoing[countAnimeIndex]?.image} alt={animeListOngoing[countAnimeIndex]?.title} loading='lazy' />
          <span id="shadow"></span>
          <figcaption className='title'>
            <h1>{animeListOngoing[countAnimeIndex]?.title}</h1>
          </figcaption>
        </figure>
      </a>
    )
  }

  const HeroChild = () =>
  {
    return animeListOngoing.map((data, index) => {
      return (
        <a href='#' key={index}>
          <figure className='card'>
            <img src={data?.image} alt={data?.title} loading='lazy' />
            <span id="playButton"><Icons.PlayCircle/></span>
            <figcaption className='title'>
              <h1>{data?.title}</h1>
              <div className='hangup'>
                <span>{data?.status}</span>
                <span>{data?.type}</span>
              </div>
            </figcaption>
          </figure>
        </a>
      )
    })
  }

  return (
    <section className='container hero-section'>
      <HeroMain/>
      <div className='wrapper hero-child'>
        <HeroChild/>
      </div>
    </section>
  )
}

export default HeroSection
