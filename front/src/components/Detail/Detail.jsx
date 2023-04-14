import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from './Detail.module.css'

const Detail = () => {

const { detailId } = useParams();

const [character, setCharacter] = useState({})

  useEffect(()=>{

    const URL_BASE = 'http://localhost:3001/rickandmorty/detail/'

    axios(`${URL_BASE}${detailId}`)
    .then((response) => setCharacter(response.data));
  }, []);

return(
  <div className={style.div}>
    {
      character.name ? 
      (<>
        <h2>{character.name}</h2>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin?.name}</p>
        <img src={character.image} alt='img' />
      </>
      ): (<h3>Loading...</h3>
    )}
  </div>
)
}

export default Detail;