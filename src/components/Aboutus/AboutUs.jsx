import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-semibold mb-4">About Us</h1>
            <p className="text-gray-700 mb-6">
              Welcome to <span className="font-bold">Eventers</span> ! We are passionate about turning your dreams into unforgettable experiences.
            </p>
  
            <p className="text-gray-700 mb-6">
              Who We Are:
              We are a dynamic team of creative event enthusiasts, dedicated to bringing your visions to life. With years of experience in the event planning industry, we understand that every event is unique and deserves a personalized touch. From weddings and corporate gatherings to birthdays and special celebrations, we specialize in curating a wide range of events with precision and flair.
            </p>
  
            <p className="text-gray-700 mb-6">
              What Sets Us Apart:
            </p>
  
            <p className="text-gray-700 mb-6">
              What We Do:
            </p>
  
            <p className="text-gray-700 mb-6">
              Why Choose Us:
            </p>
  
            <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;