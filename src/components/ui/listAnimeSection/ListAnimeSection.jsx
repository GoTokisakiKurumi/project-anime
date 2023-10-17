import './style.scss'
import { 
  fetchAnimeUpdate,
  fetchAnimeOngoing,
  fetchAnimeMovies,
  fetchAnimeCompleted } from '../../../database/api';
import { useState } from 'react';
import { useEffect } from 'react';


const ListAnimeSection = () =>
{
  const [listAnime, setListAnime] = useState([])
  const [activeButton, setActiveButton] = useState('update')

  useEffect(() => {
      fetchAnimeUpdate().then(result => setListAnime(result))
  }, [])

  const handlerButton = async (value) =>
  {
    setActiveButton(value)
    let result = []

    if (value === 'update') {
      result = await fetchAnimeUpdate()
    } else if (value === 'ongoing') {
      result = await fetchAnimeOngoing()
    } else if (value === 'movies') {
      result = await fetchAnimeMovies()
    } else if (value === 'completed') {
      result = await fetchAnimeCompleted()
    }

    setListAnime(result)
  }

  const ListAnime = () =>
  {
    return listAnime.map((data, index) => {
      return (
        <a href='' key={index}>
          <figure className='anime-list'>
            <img src={data?.thumbnail ?? data?.image} alt={data?.title} loading='lazy'/>
            <figcaption className='title'>
              <h1>{data?.title}</h1>
              <p>{data?.information}</p>
            </figcaption>
          </figure>
        </a>
      )
    })
  }

  return (
    <section className='container list-anime-section'>
      <div className='wrapper list-button'>
        <button id={activeButton === 'update' ? 'active' : ''} text='update' onClick={() => handlerButton('update')}>update</button>
        <button id={activeButton === 'ongoing' ? 'active' : ''} text='ongoing' onClick={() => handlerButton('ongoing')}>ongoing</button>
        <button id={activeButton === 'movies' ? 'active' : ''} text='movies' onClick={() => handlerButton('movies')}>movies</button>
        <button id={activeButton === 'completed' ? 'active' : ''} text='completed' onClick={() => handlerButton('completed')}>completed</button>
      </div>
      <div className='wrapper list-anime'>
        <ListAnime/>
      </div>
    </section>
  )
}

export default ListAnimeSection
