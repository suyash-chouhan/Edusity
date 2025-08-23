import React, { useRef, useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider = useRef();
  const tx = useRef(0);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const slideForward = () => {
    if (tx.current > -75) {   // 4 slides -> -75%
      tx.current -= 25;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
    updateButtonState();
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
    updateButtonState();
  };

  const updateButtonState = () => {
    setCanGoBack(tx.current < 0);
    setCanGoNext(tx.current > -75);
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="next"
        className={`next-icon ${!canGoNext ? 'disabled' : ''}`}
        onClick={canGoNext ? slideForward : undefined}
      />
      <img
        src={back_icon}
        alt="back"
        className={`back-icon ${!canGoBack ? 'disabled' : ''}`}
        onClick={canGoBack ? slideBackward : undefined}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Emily Carter</h3>
                  <span>Edusity, UK</span>
                </div>
              </div>
              <p>The faculty is incredibly supportive and the curriculum is very practical...</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Daniel Smith</h3>
                  <span>Edusity, Canada</span>
                </div>
              </div>
              <p>Edusity helped me grow both academically and personally...</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Sophia Johnson</h3>
                  <span>Edusity, Australia</span>
                </div>
              </div>
              <p>The vibrant campus life and career opportunities are amazing...</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
