import { getCredits } from "../../service/movieApi";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {List, Img, Item} from "./Cast.styled";
import image from "../../image/Noimage.jpg";


const Cast = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const {cast} = await getCredits(movieId);
            setCast([...cast]);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, [movieId]);

    
    return (
        <List>
          {cast?.map(({ id, name, character, profile_path }) => {

        if(profile_path === null) {
            return (
                <Item key={id}>
            <Img
              src={image}
              alt={name}
                />
                
                <p>Name: {name}</p>
                <p>Character: {character}</p>
                
          </Item>
            )
        }
     return (
        
          <Item key={id}>
            <Img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
                />  
                <p>Name: {name}</p>
                <p>Character: {character}</p>
                
          </Item>
     );
        })} 
        
        </List>
      );
}

export default Cast;