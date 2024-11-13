import React, { useContext, useEffect } from 'react'
import noteContext from './context/Notecontext'
import './css/about.css';
export default function About() {

  return (

   
    <div>
      <center>
        <h1>ABOUT</h1>
      </center>

      <section className="card-container">
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2023/02/04/17/28/chat-7767693_1280.jpg"
            alt="Chat Support"
          />
          <div className="card-content">
            <h3>Chat Support</h3>
            <p>
              Our chatbot offers a safe space for mental health support, providing
              mindfulness techniques. It also addresses personal questions with
              tailored guidance.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2022/09/21101527/STILL_002.jpg"
            alt="Immersive Meditation Space 1234"
          />
          <div className="card-content">
            <h3>Immersive Meditation Space</h3>
            <p>
              An immersive meditation space promotes mental well-being by creating a
              tranquil environment that enhances focus and relaxation. It provides a
              sanctuary to reduce stress and enhance emotional balance.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://www.pngmart.com/files/23/Notepad-PNG-Isolated-Photos.png"
            alt="INote Book"
          />
          <div className="card-content">
            <h3>INote Book</h3>
            <p>
              A mental health notebook is a dedicated space for individuals to
              express their thoughts and feelings, track emotions. It encourages
              personal growth by allowing users to document their journey.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://i.ytimg.com/vi/vjQ4F6dPPDk/maxresdefault.jpg"
            alt="Mood Tracker"
          />
          <div className="card-content">
            <h3>Mood Tracker</h3>
            <p>
              A mood tracker is a valuable tool for monitoring emotional patterns and
              identifying triggers. By regularly recording moods, users gain insights
              into emotional fluctuations, recognizing both positive and negative
              trends.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://img1.cgtrader.com/items/3911581/f99883fbb0/large/3d-phone-icon-3d-model-obj-fbx-blend.jpg"
            alt="HelpLine Support"
          />
          <div className="card-content">
            <h3>HelpLine Support</h3>
            <p>
              Helpline support for mental health offers immediate assistance,
              providing a safe space for individuals to share their concerns. It
              connects people with trained professionals for guidance and emotional
              support in times of need.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


