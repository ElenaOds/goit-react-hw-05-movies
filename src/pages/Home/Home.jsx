import { Box, Name } from "./Home.styled";
import { Outlet } from "react-router-dom";


export const Home = () => {
    return (
      <Box>
        <Name> Tranding today</Name>
        <ul>
            
        </ul>
        <Outlet />
      </Box> 
    )
}