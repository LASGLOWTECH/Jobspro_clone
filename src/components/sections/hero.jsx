

import { Link } from "react-router-dom";
// import { HeroImage } from '../images';


// Floating shape component

  

export default function Hero() {
  return (
    <div className="relative w-full h-full bg-gradient-to-r from-bgcolor2 to-bgcolor2 md:py-16">
      
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div> */}

      {/* Hero Content */}
      <section className="relative z-10 md:px-20">
        <div
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-[40px] font-bold px-2 pt-0 md:pt-0 md:text-[70px] md:font-semibold text-textcolor2 leading-[40px] md:leading-[70px] mb-6">
            We Enhance Your Business with our <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-Secondarycolor to-Secondarycolor">
             
            </span>
          </h1>

          <p className="text-lg md:text-xl text-textcolor2 px-4 md:px-0max-w-2xl mx-auto py-6 mb-8">
            Purpose-driven digital experiences tailored to your brand.
          </p>

          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor shadow-lg text-white font-semibold rounded-full transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
