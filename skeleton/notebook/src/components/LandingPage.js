
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './css/LandingPage.css';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={[2.5, 2.3, 2.5]} />;
}

const LandingPage = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const text = "It's okay to not be okay.\nTogether, we'll find your way to a healthier and happier you.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypewriterText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100); // Speed of typing effect
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="underline">Mind Mates</h1>
            <p className="typewriter">
              {typewriterText.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <button className="cta-button">" Be Happy "</button>
          </div>
          <div className="hero-image">
            <Canvas style={{ width: '100%', height: '400px' }}>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Model url="https://cdn.glitch.global/72f99422-7626-44cc-8e53-7dea88894785/A_butterfly_fairy_H_1115152627_refine.glb?v=1731684551186" />
              <OrbitControls />
            </Canvas>
          </div>
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
      <section className="contact">
  <h2>Contact</h2>

        <div className="overlay">
                <div className="slider">
                    <div className="slider-header">
                        <div className="sticky-header">
                            <h2>"Need Support? Let’s Take the First Step Together - GET HELP NOW!"</h2>
                        </div>
                        <span className="close-btn">&times;</span>
                    </div>
                    <div className="slider-content">
                        <p>"If you're feeling overwhelmed by emotional challenges, remember that you don't have to navigate this journey alone. Opening up about your feelings is a powerful first step towards healing".</p>
                        <ul>
                            <li> ◉ Whether it's confiding in a trusted friend.</li>
                            <li> ◉ Seeking guidance from a mental health professional.</li>
                            <li> ◉ Tapping into one of the free and confidential resources listed below.</li>
                        </ul>


                        <h3>More resources</h3>
                        <p>All resources are free, confidential and most are available 24/7.</p>
                        <table>
                            <tr>
                                <th>Resource</th>
                                <th>Type</th>
                                <th>Contact</th>
                            </tr>
                            <tr>
                                <td>KIRAN</td>
                                <td>Call Line</td>
                                <td><a href="tel:1800-599-0019">1800-599-0019</a></td>
                            </tr>
                            <tr>
                                <td>Aasra</td>
                                <td>Call Line/Website</td>
                                <td><a href="tel:09820466726">09820466726</a><br />Visit: Aasra.info</td>
                            </tr>
                            <tr>
                                <td>Mpower 1-on-1</td>
                                <td>Call Line/Webiste</td>
                                <td><a href="tel:1800-1208-20050">1800-1208-20050</a><br />Visit : Mpowerminds.com/oneonone</td>
                            </tr>
                            <tr>
                                <td>Mitram Foundation</td>
                                <td>Call Line/Website</td>
                                <td><a href="tel:080-25722573">080-25722573</a><br />Visit : www.mitramfoundation.org</td>
                            </tr>
                            <tr>
                                <td>Connecting Trust</td>
                                <td>Call Line/Website</td>
                                <td><a href="tel:91-9922001122">91-9922001122</a> , <a href="tel:+91-9922004305">+91-9922004305</a>  , <br/>Visit : https://connectingngo.org</td>
                            </tr>
                            <tr>
                                <td>Mann Talks</td>
                                <td>Call Line/Website</td>
                                <td><a href="tel:+91-8686139139">+91-8686139139</a><br />Visit : http://www.manntalks.org</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
      </section>
      
    </div>
  );
}

export default LandingPage;
