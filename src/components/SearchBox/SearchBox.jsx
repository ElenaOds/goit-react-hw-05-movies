import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  {Box, Input, Button } from "./SearchBox.styled";

export const SearchBox = ({onSubmit}) => {
const [searchQuery, setSearchQuery] = useState('');

const handleChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
};


const handleSubmit = event => {
    event.preventDefault();

    if(searchQuery.trim() === '') {
        return toast.error("You cannot search by empty field. Try again");
    }

       onSubmit(searchQuery);
    setSearchQuery('');
}
    return (
        <Box onSubmit={handleSubmit}>
            <Input 
            type="text"
            placeholder="Search movies" 
            value={searchQuery}
            onChange={handleChange}
            />
            <Button 
            
            type="submit">Search</Button>
        </Box>
        
    )
    
};