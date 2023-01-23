import  {Box, Input, Button } from "./SearchBox.styled";

export const SearchBox = ({ value, onChange}) => {
    return (
        <Box>
            <Input type="text"
            placeholder="Search movies" 
            value={value}
            onChange={e => onChange(e.target.value)}
            />
            <Button type="submit">Search</Button>
        </Box>
    )
}