// components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/LandingPage.css';
const LandingPage = () => {
    return (
        <div>
            

            <section className="hero">
                <div className="hero-content">
                    <h1>Mind Mates</h1>
                    <p>"It's okay to not be okay. Together, we'll find your way to a healthier and happier you."</p>
                    <button className="cta-button">Button Name</button>
                </div>
                <div className="hero-image">
                    <img src="https://plmr.co.uk/wp-content/uploads/2023/05/shutterstock_1959507154-scaled.jpg" alt="Website Design Illustration" />
                </div>
            </section>

            <section className="gallery">
                <h2>Our Mission</h2>
                <p>"Mental Health Matters -- Every Mind, Every Journey."</p>
                <div className="gallery-images">
                    <img src="https://static.vecteezy.com/system/resources/previews/011/782/046/original/mental-health-3d-render-icon-illustration-png.png" alt="Image 1" />
                    <img src="https://img.freepik.com/premium-photo/3d-health-monitoring-illustration_541443-3782.jpg" alt="Image 2" />
                    <img src="https://media.istockphoto.com/id/1310277551/vector/happy-healthy-brain-mind-character-meditation-yoga-relax-health-brain-mental-organ-sit-in.jpg?s=612x612&w=0&k=20&c=sei6jMApCiXroaZcvnoIJzI5cpNFs6CqMCV2KOiM3WA=" alt="Image 3" />
                    <img src="https://img.freepik.com/premium-vector/brains-heart-are-connected-heart-brain-work-together_153097-4562.jpg?w=2000" alt="Image 4" />
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
