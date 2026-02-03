import React from 'react'
import "./Info.css"

function Info() {
  return (


  
    <div className="bg">
      <br/> <br/>
      <section className="dance-section">
      {/* Header */}
        <div className="dance-header">
        <div>
        <p className="subheading">Find The One For You</p>
        <h1>Choose Your Dance Style</h1>
       </div>
       <div>
        <a href="#" className="primary-btn">View All Dance Styles</a>
        </div>
      </div>

      {/* Dance Card */}
      <div className="dance-card">
        {/* Text content */}
        <div className="dance-content">
          
          <h2>Salsa</h2>
          <p>
            SALSA is not easily defined. What is Salsa? A sauce, a recipe, a
            dance? Who invented salsa? The Cubans, Puerto Ricans? Salsa is a
            distillation of many Latin and Afro-Caribbean dances. Each played a
            large part in its evolution. It is not only Cuban; nevertheless we
            must give credit to Cuba for the origin and ancestry of creation.
          </p>
          <div className="dance-buttons">
            <a href="#" className="primary-btn">New Salsa Batches</a>
            <a href="#" className="secondary-btn">Book Your Free Trial !!</a>
            <a href="#" className="primary-btn">View All Dance Styles</a>
          </div>
        </div>

        {/* Image */}
        <div className="dance-image">
          <img src="./salsa.png" alt="Salsa Dance" />
          <div className="play-icon">▶</div>
        </div>
      </div>


      <div className="Belly">
       <div className="dance-image">
          <img src="./belly.png" alt="Salsa Dance" />
      
        </div>
       
      <div className="dance-content">
          
          <h2>Belly Dance</h2>
          <p>
            BELLY DANCE is a Western term for a traditional Middle Eastern dance form. Some American devotees 
            refer to it simply as “Middle Eastern Dance”. In the Arabic language it is known as raqs sharqi
           (literally “eastern dance”) or sometimes raqs baladi (literally “national” or “folk” dance).
          </p>
          <div className="dance-buttons">
            <a href="#" className="primary-btn">New Belly Dance Batches</a>
            <a href="#" className="secondary-btn">Book Your Free Trial !!</a>
            <a href="#" className="primary-btn">View All Dance Styles</a>
          </div>
        </div>
        </div>
         
    </section>
 

     <section className="features-section">
    <div className="features-container">
        
        <div className="feature-card">
          <img src="/moderndance.png" alt="icon" className="feature-icon" />
          <h3>Join Our Dance Class</h3>
          <p>
            Intrinsically predominate performance based total linkage
            and mission-critical.
          </p>
        </div>

        <div className="feature-card">
          <img src="/news4.jpg" alt="icon" className="feature-icon" />
          <h3>Dance Coreography</h3>
          <p>
            Vivamus suscipit tortor eget felis porttitor volutpat.
            porttitor lectus nibh.
          </p>
        </div>

        <div className="feature-card">
          <img src="salsa.png" alt="icon" className="feature-icon" />
          <h3>Perform Onstage</h3>
          <p>
            Nulla porttitor accumsan tincidunt.
            Donec sollicitudin volutpat lectus nibh.
          </p>
        </div>
        

      </div>
    
</section>

<section className="master">
   
       <div className="master-image">
          <img src="./master.jpg" alt="master image" />
        </div>

        <div className="masterinfo">
           <p className="tagline">We Provide Service Since 2009
          <span></span></p>
           <br/><br/>
         <div className="grace-container">
        <h1>
          Master The Grace Of <br />
          Movement
        </h1>

        <div className="quotes">
          <div className="quote">
            <span className="quote-bar" />
            <p>
              <strong>1)</strong> “Pursue A Skill Till You Push It Into The
              <em> REALMS OF MAGIC.</em>”
            </p>
          </div>

          <div className="quote">
            <span className="quote-bar" />
            <p>
              <strong>2)</strong> “And Those Who Were Seen Dancing Were
              Considered Insane By Those Who Couldn’t Hear The Music.” —
              <em> George Carlin</em>
            </p>
          </div>
        </div>

        <p className="description">
          Heels Dance Academy, located in the heart of Magarpatta City, Pune,
          has fostered a rich dance culture in the region since its inception
          in 2009. Dedicated to nurturing aspiring dancers of all ages and
          backgrounds, we offer a diverse curriculum, spanning various dance
          forms such as Salsa, Kizomba, Belly Dance, Bollywood, Bolly Hop,
          Hip Hop, Kathak, Bharatanatyam, Kids FreeStyle and Zumba.
          Our team of experienced and passionate dance instructors strive to
          make dance not just an art form but also a way of life, unlocking the
          full potential of each dancer. We endeavour to cultivate a positive
          and inclusive environment where creativity, rhythm, and
          self-expression flourish. So come and dance, without any inhibition!!
        </p>
        

        <br/><br/>
        
        <a href="#" className="master-btn">About More</a>
      </div>

       </div>

    </section>
    </div>
  )
}

export default Info
