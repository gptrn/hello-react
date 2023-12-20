import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/navbar";

export const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};