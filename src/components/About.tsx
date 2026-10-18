import './About.css';

function About () {
    document.title = 'About';
    return (
      <div id="about-me">
        <img id="headshot-img" alt="headshot" src="https://docs.google.com/uc?export=download&id=18DTuew25JsOMr8DL_tMqA6WO1uWLzr0R"></img>
        <div id="about-me-text">
        <h1>About Me</h1>
        <p className="paragraph">Hello! My name is Haleluya Asfaw and I am 22 years old.
        I was born in Addis Abeba, Ethiopia and lived there for seven years before coming to the States. 
        I recently graduated from Northeastern University as a Data Science Major. I am currently working
        as a Software Engineer at Etsy, where I interned at previously.
        Some of my hobbies include drawing, reading, watching & dissecting movies, sitting in the sun, and walking.</p>
        </div>
    </div>
      
    );
}
export default About;