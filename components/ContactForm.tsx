"use client";

export default function ContactForm() {
  return (
    <section id="community" className="py-24 px-6 max-w-3xl mx-auto">
      <div className="bg-charcoal p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald to-transparent"></div>
        
        <h2 className="text-3xl font-heading font-bold mb-6 text-center">Join the Discourse</h2>
        <p className="text-gray-400 text-center mb-8">Suggest a topic, collaborate, or share your insights.</p>
        
        <form action="https://formsubmit.co/renganathr2135@gmail.com" method="POST" className="space-y-6">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Submission from Speak to Rise Website!" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" required placeholder="Your Name" className="w-full bg-background border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-emerald transition-colors" />
            <input type="email" name="email" required placeholder="Your Email" className="w-full bg-background border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-emerald transition-colors" />
          </div>
          <input type="text" name="topic" placeholder="Suggested Video Topic" className="w-full bg-background border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-emerald transition-colors" />
          <textarea name="message" required rows={5} placeholder="Your Message" className="w-full bg-background border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-emerald transition-colors resize-none"></textarea>
          
          <button type="submit" className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-emerald hover:text-white transition-all duration-300">
            Transmit Message
          </button>
        </form>
      </div>
    </section>
  );
}