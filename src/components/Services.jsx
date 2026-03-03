import React from 'react';
import icon1 from "../assets/delivery.png";
import icon2 from "../assets/quality.png";
import icon3 from "../assets/agreement.png";

const Services = () => {
  return (
    <section className="mt-36 px-4 max-w-7xl mx-auto shadow-lg rounded-lg bg-white mb-2">
      <div className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-6">

        {/* Icon1 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <img
            src={icon1}
            alt="Fast Delivery Icon"
            className="h-[70px] w-[60px] mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <h1 className="text-xl font-semibold mb-2 hover:text-gray-500 animate__animated animate__slideInUp">Fast And Efficient</h1>
          <p className="text-gray-600 leading-snug animate__animated animate__slideInUp mb-5">
            We deliver fast all over <br /> the world with care.
          </p>
        </div>

        {/* Icon2 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <img
            src={icon2}
            alt="Best Quality Icon"
            className="h-[70px] w-[60px] mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <h1 className="text-xl font-semibold mb-2 hover:text-gray-500 animate__animated animate__slideInUp">Best Quality</h1>
          <p className="text-gray-600 leading-snug animate__animated animate__slideInUp mb-5">
            We ensure good quality <br /> products for you.
          </p>
        </div>

        {/* Icon3 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <img
            src={icon3}
            alt="Customer Trust Icon"
            className="h-[70px] w-[60px] mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <h1 className="text-xl font-semibold mb-2 hover:text-gray-500 animate__animated animate__slideInUp">Customer Trust</h1>
          <p className="text-gray-600 leading-snug animate__animated animate__slideInUp mb-5">
            Our customers trust us <br /> for great service.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;
