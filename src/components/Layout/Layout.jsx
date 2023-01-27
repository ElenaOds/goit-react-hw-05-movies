import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import { Suspense } from "react";
// import { Box } from "./Layout.styled";


export const Layout = () => {
    return (
    <div display="grid" gridtemplaterows="300px 1fr">
        <AppBar />
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
        
    </div>
    );
};