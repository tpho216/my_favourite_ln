import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const Home : React.FC = () => (
    <div>
        <h1>
            Welcome to My Favourite Light Novel
        </h1>
        <ImageCarousel/>
    </div>

);
export default Home;