import { useState, useEffect } from 'react';
import axios from 'axios';
import './Row.css';
import Card from '../Card/Card'

export default function Row({ title, url }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setData(request.data.results);

      return request;
    }
    fetchData();
  }, [url]);

  return (
    <div className='row_wrapper'>
      <h3 className='row_title'>{title}</h3>
      <div className='row_card'>
        {data.map((el) => {
          return (
            <Card key={el.id} id={el.id} title={el.title} isAdult={el.adult} backdroPath={el.backdrop_path} voteAverage={el.vote_average}/>
          );
        })}
      </div>
      
    </div>
  );
}
