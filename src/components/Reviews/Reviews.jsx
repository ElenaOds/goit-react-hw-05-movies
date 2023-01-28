import { useState, useEffect } from 'react';
import { getReviews } from "../../service/movieApi";
import { useParams } from "react-router-dom";
import { Text, List } from "./Reviews.styled";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const {results} = await getReviews(movieId);
            setReviews([...results]);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, [movieId]);

      if (reviews.length === 0) {
        return <Text>We don't have any reviews for this movie</Text>;
      }

      console.log(reviews);

      return (
        <List>
          {reviews?.map(({ id, content, author }) => (              
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>                 
        ))}
       
        </List>
      ); 
}

export default Reviews;