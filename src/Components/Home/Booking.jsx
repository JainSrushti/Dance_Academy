import "./Booking.css";
import React from 'react'
import { useState } from "react";

function Booking() {

  return (

    <div>
      
        <section className="trial-section">

           <p className="trial-tagline">
               <span></span>
                    Don't Know Where To Start ??
                <span></span>
            </p>

            <h2 className="trial-title">Book Your FREE TRIALs Now !!</h2>

            <p className="trial-subtext">
               We would love the opportunity to help you to 
              <b>EXPLORE WHICH ALL DANCE STYLES YOU LIKE & CONNECT with !!</b>
            </p>

            <p className="trial-note">
             You are entitled to <b>1 FREE TRIAL for EACH Dance style.</b>
             Select <b>ALL the Dance Styles that you wish to TRY </b> and 
            <i> We  will contact you to schedule your <br/>FREE TRIALS </i>
            </p>

        </section>

    <Form/>
    </div>
    
  )
}
export default Booking

export function Form() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    whatsapp: "",
    styles: []
  });

  const danceStyles = [
    "    Bollywood",
    "    Freestyle",
    "    Semi Classical",
    "    Waking",
    "    Hiphop",
    "    Kathak",
    "    Folk Dance (Lavni)"
  ];

  const fitnessStyles = [
    "    Zumba",
    "    Aerobics",
    "    Stretching",
    "    Yoga",
    "    Meditation",
    "    Cardio",
    "    Floor Exercise"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (value) => {
    setForm(prev => {
      const exists = prev.styles.includes(value);
      return {
        ...prev,
        styles: exists
          ? prev.styles.filter(v => v !== value)
          : [...prev.styles, value]
      };
    });
  };

  return (
    <div className="trial-form">

      <p className="note">* = Mandatory Fields</p>

      {/* User Details */}
      <div className="form-row">
        <div className="input-box">
          <input
            type="text"
            name="name"
            placeholder="Your Complete Name *"
            value={form.name}
            onChange={handleChange}
          />
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                 <path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"/></svg></span>
        </div>

        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Your Email (Optional)"
            value={form.email}
            onChange={handleChange}
          />
          <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" /></svg></span>
        </div>
      </div>

      <div className="form-row">
        <div className="input-box">
          <input
            type="tel"
            name="mobile"
            maxLength="10"
            placeholder="Mobile No. (10 digits) *"
            value={form.mobile}
            onChange={handleChange}
          />
          <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" /></svg></span>
        </div>

        <div className="input-box">
          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp No. (If not same as Mobile No.)"
            value={form.whatsapp}
            onChange={handleChange}
          />
          <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                 <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/></svg></span>
        </div>
      </div>

      {/* Checkboxes Section */}
      <h4 className="checkbox-title">
                Select ALL Dance & Fitness Styles that You are interested in *
      </h4>

      <div className="checkbox-row">

        <div className="checkbox-group">
          <h5>Dance Styles 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M256 64a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM152.9 169.3c-23.7-8.4-44.5-24.3-58.8-45.8L74.6 94.2C64.8 79.5 45 75.6 30.3 85.4S11.6 115 21.4 129.8L40.9 159c18.1 27.1 42.8 48.4 71.1 62.4L112 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 32 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-258.4c29.1-14.2 54.4-36.2 72.7-64.2l18.2-27.9c9.6-14.8 5.4-34.6-9.4-44.3s-34.6-5.5-44.3 9.4L291 122.4c-21.8 33.4-58.9 53.6-98.8 53.6-12.6 0-24.9-2-36.6-5.8-.9-.3-1.8-.7-2.7-.9z"/></svg>
          </h5>
          {danceStyles.map(style => (
            <label key={style}>
              <input
                type="checkbox"
                checked={form.styles.includes(style)}
                onChange={() => handleCheckbox(style)}
              />
              {style}
            </label>
          ))}
        </div>

        <div className="checkbox-group">
          <h5>Fitness Styles 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 107.9L241 87.1C216 52.5 175.9 32 133.1 32 59.6 32 0 91.6 0 165.1l0 2.6c0 23.6 6.2 48 16.6 72.3l106 0c3.2 0 6.1-1.9 7.4-4.9l31.8-76.3c3.7-8.8 12.3-14.6 21.8-14.8s18.3 5.4 22.2 14.1l51.3 113.9 41.4-82.8c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3l23.2 46.3c1.4 2.7 4.1 4.4 7.2 4.4l123.6 0c10.5-24.3 16.6-48.7 16.6-72.3l0-2.6C512 91.6 452.4 32 378.9 32 336.2 32 296 52.5 271 87.1l-15 20.7zM469.6 288l-97.8 0c-21.2 0-40.6-12-50.1-31l-1.7-3.4-42.5 85.1c-4.1 8.3-12.7 13.5-22 13.3s-17.6-5.7-21.4-14.1l-49.3-109.5-10.5 25.2c-8.7 20.9-29.1 34.5-51.7 34.5l-80.2 0c47.2 73.8 123 141.7 170.4 177.9 12.4 9.4 27.6 14.1 43.1 14.1s30.8-4.6 43.1-14.1C346.6 429.7 422.4 361.8 469.6 288z"/></svg>

          </h5>
          {fitnessStyles.map(style => (
            <label key={style}>
              <input
                type="checkbox"
                checked={form.styles.includes(style)}
                onChange={() => handleCheckbox(style)}
              />
              {style}
            </label>
          ))}
        </div>

      </div>
      

       {/* Textarea */}
      <div className="form-group">
        <textarea
          className="form-textarea"
          placeholder="Your Location / Area / Any other information that you want to ask / share (Optional)"
        ></textarea>
      </div>

      {/* Excited Text */}
      <p className="excited-text">
        <b>Click the below button & be excited 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256 0-24.4-3.4-48.1-9.8-70.5 18.6-36.1-2.7-83.6-46.7-90-46.9-58.3-118.9-95.5-199.5-95.5S103.4 37.3 56.5 95.5c-44 6.4-65.3 53.9-46.7 90-6.4 22.4-9.8 46-9.8 70.5 0 141.4 114.6 256 256 256zM386.7 324.9c11.9-3.7 23.9 6.3 19.6 18.1-22.4 61.3-81.3 105.1-150.3 105.1S128.1 404.2 105.7 342.9c-4.3-11.8 7.7-21.8 19.6-18.1 39.2 12.2 83.7 19.1 130.7 19.1s91.5-6.9 130.7-19.1zm-31.6-231c5.3-10.7 20.5-10.7 25.8 0l20.9 42.4 46.7 6.8c11.8 1.7 16.5 16.2 8 24.5l-33.8 33 8 46.6c2 11.7-10.3 20.7-20.9 15.2l-41.8-22-41.8 22c-10.5 5.5-22.9-3.4-20.9-15.2l8-46.6-33.8-33c-8.5-8.3-3.8-22.8 8-24.5l46.7-6.8 20.9-42.4zm-198.2 0l20.9 42.4 46.7 6.8c11.8 1.7 16.5 16.2 8 24.5l-33.8 33 8 46.6c2 11.7-10.3 20.7-20.9 15.2l-41.8-22-41.8 22c-10.5 5.5-22.9-3.4-20.9-15.2l8-46.6-33.8-33c-8.5-8.3-3.8-22.8 8-24.5l46.7-6.8 20.9-42.4c5.3-10.7 20.5-10.7 25.8 0z"/></svg>


        </b>
      </p>

      {/* Button */}
      <button className="trial-button">
        BOOK MY FREE TRIAL(S)
      </button>

     <br/><br/><br/><br/><br/>
    </div>
  );
}



