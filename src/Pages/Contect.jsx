import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content py-12">
      

      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg opacity-80">
          Have a question, feedback, or want to work together? We'd love to hear from you. Drop us a message below!
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 bg-base-200 rounded-3xl p-8 lg:p-12 shadow-xl">
          

          <div className="lg:w-1/3 flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="opacity-80 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary text-primary-content p-3 rounded-full">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Our Office</h3>
                <p className="opacity-80">123 Tech Avenue, Suite 400<br/>San Francisco, CA 94105</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-secondary text-secondary-content p-3 rounded-full">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="opacity-80">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-accent text-accent-content p-3 rounded-full">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="opacity-80">hello@ourcompany.com</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
*/}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-semibold">Your Name</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="input input-bordered w-full focus:input-primary" 
                    />
                  </div>

                  {/* Email Input */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-semibold">Email Address</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="input input-bordered w-full focus:input-primary" 
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-semibold">Subject</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="How can we help you?" 
                      className="input input-bordered w-full focus:input-primary" 
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-semibold">Message</span>
                    </label>
                    <textarea 
                      className="textarea textarea-bordered h-32 focus:textarea-primary" 
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="form-control mt-6">
                    <button className="btn btn-primary w-full text-lg">Send Message</button>
                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;