import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import blogImage1 from "../assets/cour1.png";
import blogImage2 from "../assets/cour2.png";
import blogImage3 from "../assets/cour3.png";
import blogImage10 from "../assets/image.png";
import blogImage4 from "../assets/Img1.png";
import blogImage5 from "../assets/step1.png";
import blogImage6 from "../assets/step2.png";
import blogImage7 from "../assets/step3.png";
import blogImage8 from "../assets/step4.png";
import blogImage9 from "../assets/step5.png";
import Navbar from "../components/Navbar";
import "../styles.css";


const Blog = () => {
  return (
    <div className="blog-container">
      <Navbar page="blog" />

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={1000}
        dynamicHeight={false}
      >
        <div>
          <img src={blogImage1} alt="Farm field 1" />
        </div>
        <div>
          <img src={blogImage2} alt="Farm field 2" />
        </div>
        <div>
          <img src={blogImage3} alt="Farm field 3" />
        </div>
      </Carousel>


      <div className="blog-content">
        <p className="blog-description">
          Sustainable farming is the future of agriculture. By implementing early detection techniques and sustainable practices, we can ensure better yields and a healthier environment.
        </p>
      </div>

      <div className="content">
        <h1 className="blog-title">🌱 "Healthy crops, prosperous farms, and a brighter future." 🌿</h1>
      </div>
      <h2 className="blog-heading">Revolutionizing Farming with AgriGuard</h2>
      <div className="blog-card1">
        <div className="blog-image-container">
          <img src={blogImage4} alt="Farming technology" className="blog-image-right" />
        </div>
        <p className="blog-text">Farming is the backbone of our food system, yet farmers often face challenges like unexpected crop diseases that can severely impact yield and income. Early detection and timely preventive measures are crucial to protecting crops and ensuring a healthy harvest. That's where AgriGuard comes in—an AI-powered solution designed to help farmers detect crop diseases, get climate-based preventive measures, and receive real-time assistance through chatbot and voice-over support.</p>
      </div>

      {/* section 2 */}
      <h2 className="blog-heading">AgriGuard's method of working!</h2>
      <div className="blog-card2">
        <p className="blog-text">Our web app is built to assist farmers in diagnosing crop diseases and providing effective solutions. The process is simple and efficient:</p>

        <div className="steps-container">
          <div className="step-card">
            <h2 className="heading"><b>Upload an<br></br> Image</b></h2>
            <img src={blogImage5} alt="Farming technology" className="image" />
            <p className="content">Farmers can use a webcam to take a picture of the affected crop.</p>
          </div>

          <div className="step-card">
            <h2 className="heading"><b>AI-Based Disease Detection</b></h2>
            <img src={blogImage6} alt="Farming technology" className="image" />
            <p className="content">The system analyzes the uploaded image using Machine Learning (ML) algorithms and detects the type of disease affecting the crop.</p>
          </div>

          <div className="step-card">
            <h2 className="heading"><b>Preventive Measures Based on  Climate</b></h2>
            <img src={blogImage7} alt="Farming technology" className="image" />
            <p className="content">Once the disease is detected, our app provides customized preventive measures based on the farmer’s location and real-time weather conditions </p>
          </div>

          <div className="step-card">
            <h2 className="heading"><b>AI Chatbot for Quick Support</b></h2>
            <img src={blogImage8} alt="Farming technology" className="image" />
            <p className="content">If farmers need further assistance, they can interact with our AI-powered chatbot, which answers queries related to crop diseases.</p>
          </div>

          <div className="step-card">
            <h2 className="heading"><b>Final<br></br>result</b></h2>
            <img src={blogImage9} alt="Farming technology" className="image" />
            <p className="content">Final Outcome contains Name of the disease, Location, temperature of location, preventive measures</p>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <h1 className="blog-title">🌾 "Empowering farmers with knowledge, technology, and a touch of nature." 🌍</h1>
      <h2 className="heading-3">Transform Your Farming with AgriGuard</h2>
      <img src={blogImage10} alt="Farming technology" className="map" />

      {/* section 4 */}
      <h2 className="heading-3">Join with AgriGuard</h2>
      <p className="blog-text">By integrating AI and real-time data, AgriGuard is transforming traditional farming methods and helping farmers make informed decisions. Whether you're a small-scale farmer or managing large fields, this web app ensures that you stay one step ahead of crop diseases and maximize your yield.</p>
      <div className="final-content">
      <h3>🔗 Try AgriGuard Today!</h3>
      <button className="btn">AgriGuard</button>
      </div>
      
      <h1 className="blog-title">🌟 "Smart farming for a sustainable tomorrow." 🌾</h1>
    </div>
  );
}
export default Blog;
