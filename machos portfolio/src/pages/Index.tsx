import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-teal-400">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Tharun's Portfolio
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-blue-600 transition duration-300">Home</a>
            <a href="#about" className="text-gray-800 hover:text-blue-600 transition duration-300">About</a>
            <a href="#achievements" className="text-gray-800 hover:text-blue-600 transition duration-300">Achievements</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi there,</h1>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">This is <span className="text-black">Tharun</span></h1>
              <h2 className="text-2xl md:text-3xl font-light mb-4">A creative Developer</h2>
              <h2 className="text-2xl md:text-3xl font-light mb-8">Making Innovative things</h2>
              <a href="#about" className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition duration-300 inline-block transform hover:-translate-y-1 hover:shadow-lg">
                About Me
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full blur-lg opacity-70 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Tharun" 
                  className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-white relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            About Me
            <span className="block w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mt-4"></span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80" 
                  alt="College campus" 
                  className="w-full h-auto rounded-lg relative z-10 border-2 border-white"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I am an 18-year-old student currently studying in SSC, in my first year. I'm passionate about technology and development, constantly exploring new ideas and creating innovative solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With a creative mindset and problem-solving abilities, I strive to make a positive impact through my work. I'm always eager to learn and grow, taking on new challenges to expand my knowledge and skills.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  When I'm not coding or studying, I enjoy exploring new technologies, collaborating on interesting projects, and expanding my professional network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            My Achievements
            <span className="block w-48 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sports Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-teal-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl">
                    🏆
                  </span>
                  <h3 className="ml-4 text-xl font-bold text-gray-800">Sports</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="pl-6 border-l-2 border-blue-500">
                    <p className="text-gray-700">
                      <strong>CARROM:</strong> I have got 1st prize in inter school <strong>STATE LEVEL</strong> competition and I went to many district tournament won certificates.
                    </p>
                  </div>
                  
                  <div className="pl-6 border-l-2 border-teal-500">
                    <p className="text-gray-700">
                      <strong>CRICKET:</strong> From my childhood I love cricket. I am a good <strong>Allrounder</strong>, I have played many district and state matches. I have won man of the match in district level for getting <strong>5 Wickets</strong> in single match.
                    </p>
                  </div>
                  
                  <div className="pl-6 border-l-2 border-blue-500">
                    <p className="text-gray-700">
                      <strong>VOLLEYBALL:</strong> This is my favourite game. I am a good <strong>Attacker and Defender</strong>, I went to CBSE[U19]cluster Two times. Two times our team went to <strong>Quater finals</strong> out of more than <strong>200</strong> schools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fine Arts Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-teal-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl">
                    🎻
                  </span>
                  <h3 className="ml-4 text-xl font-bold text-gray-800">Fine Arts</h3>
                </div>
                
                <div className="pl-6 border-l-2 border-blue-500">
                  <p className="text-gray-700">
                    <strong>VIOLIN:</strong> I have learned violin for 5 years and completed <strong>2 Grades in bridge academy</strong> and I have participated in <strong>National Level</strong> bridge academy workshops.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Others Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-teal-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl">
                    🌟
                  </span>
                  <h3 className="ml-4 text-xl font-bold text-gray-800">Others</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="pl-6 border-l-2 border-teal-500">
                    <p className="text-gray-700">
                      <strong>BALVIKAS:</strong> In my school I have learned many slokas and bhajans by this I could complete <strong>9 Years</strong> of Diploma course in Balvikas. Now I am a Balvikas Teacher.
                    </p>
                  </div>
                  
                  <div className="pl-6 border-l-2 border-blue-500">
                    <p className="text-gray-700">
                      <strong>NEWSPAPER:</strong> When I was studying in 8th class, I have written essay on <strong>IMPORTANCE OF EXTRACURRICULAR ACTIVITIES</strong>. My essay was selected by <strong>Hindu newspaper</strong>. My name and essay came in Hindu newspaper.
                    </p>
                  </div>
                  
                  <div className="pl-6 border-l-2 border-teal-500">
                    <p className="text-gray-700">
                      <strong>ABACUS:</strong> I have completed <strong>3 Levels</strong> in abacus and went to district level abacus competition won certificates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Keeping original 3D contact form but adding container */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-500 to-teal-400">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16 relative">
            Contact Me
            <span className="block w-32 h-1 bg-white mx-auto mt-4"></span>
          </h2>
          
          <div className="contact-3d-container">
            <div className="form-card">
              <div className="form-content">
                <h2>Get In Touch</h2>
                <p>I'd love to hear from you!</p>
                <form id="contactForm">
                  <div className="input-group">
                    <input type="text" name="name" id="name" placeholder=" " required />
                    <label htmlFor="name">Your Name</label>
                  </div>
                  <div className="input-group">
                    <input type="email" name="email" id="email" placeholder=" " required />
                    <label htmlFor="email">Your Email</label>
                  </div>
                  <div className="input-group">
                    <textarea name="message" id="message" rows={4} placeholder=" " required></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>
                  <button type="submit" className="glow-button">Send Message</button>
                </form>
              </div>
            </div>
            <div className="animated-bg"></div>
          </div>

          <div className="mt-16 text-center text-white">
            <p className="text-lg mb-4">You can also reach me at:</p>
            <div className="space-y-2">
              <p><strong>Email:</strong> tharun@example.com</p>
              <p><strong>Phone:</strong> +91 123-456-7890</p>
              <p><strong>Location:</strong> Chennai, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Tharun's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
