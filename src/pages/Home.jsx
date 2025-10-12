import React from "react";
import { Link } from "react-router-dom";
import HeroImage from '../assets/images/loginhero.svg'
const Home = () => {
    return (
        <div className="min-h-screen grid md:grid-cols-2 grid-cols-1">
            {/* Left Section */}
            <div className="bg-primary text-white flex flex-col justify-center items-start md:px-20 px-8 py-12">
                <img
                    className="w-32 mb-8"
                    src="/jobspro.svg"
                    alt="JobsPro Logo"
                />

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Hello, <br />
                    <span className="font-semibold">Welcome to JobsPro</span>
                </h1>

                <p className="text-lg text-secondary mb-8">
                    JobsPro gives access to all the coolest Gigs across Africa , Global resource of Talent, an ecosystem for professionals to connect.
                </p>

                <div className="flex gap-4 flex-wrap">
                    <Link to="/login/seeker">
                        <button className="bg-primary2 text-primary px-5 py-3 font-medium rounded-full shadow  hover:bg-white  hover:text-primary transition">
                            Login as Job Seeker
                        </button>
                    </Link>

                    <Link to="/login/poster">
                        <button className="border border-white px-5 py-3 font-medium rounded-full hover:bg-white hover:text-primary transition">
                            Login as Job Poster
                        </button>
                    </Link>
                </div>
            </div>



            {/* Right Section */}
            <div className="bg-secondary py-4 flex justify-center items-center">
                <img
                src={HeroImage}
                    alt="Job Illustration"
                    className="w-4/5 md:w-3/5"
                />
            </div>
        </div>
    );
};

export default Home;
