import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-base-100 text-base-content">


            <div className="hero bg-base-200 py-20">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6 text-lg">
                            We are a passionate team dedicated to building beautiful, accessible, and high-performance digital experiences. Our mission is to make the web a better place, one line of code at a time.
                        </p>
                        <button className="btn btn-primary">Join Our Team</button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card bg-base-100 shadow-xl border border-base-200">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary text-2xl mb-2">Our Mission</h2>
                            <p>To empower creators and businesses with tools that simplify complexity and accelerate growth.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl border border-base-200">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-secondary text-2xl mb-2">Our Vision</h2>
                            <p>A future where technology bridges gaps and creates equal opportunities for everyone globally.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl border border-base-200">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-accent text-2xl mb-2">Our Values</h2>
                            <p>Transparency, relentless innovation, empathy, and a commitment to open-source collaboration.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card bg-base-100 py-6 shadow-xl border border-base-200 flex items-center justify-center gap-2">
                        <div className="stat-title">Projects Delivered</div>
                        <div className="text-primary stat-value">1.2K+</div>
                        <div className="stat-desc">From Jan 2020 to present</div>
                    </div>

                    <div className="card bg-base-100 py-6 shadow-xl border border-base-200 flex items-center justify-center gap-2">
                        <div className="stat-title">Happy Clients</div>
                        <div className="stat-value text-secondary">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%) this year</div>
                    </div>

                    <div className="card bg-base-100 py-6 shadow-xl border border-base-200 flex items-center justify-center gap-2">
                        <div className="stat-title">Team Members</div>
                        <div className="stat-value">50+</div>
                        <div className="stat-desc">Across 12 timezones</div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center mb-12">Meet the Leaders</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Team Member 1 */}
                    <div className="flex flex-col items-center">
                        <div className="avatar mb-4">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.pravatar.cc/150?img=68" alt="Team Member" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold">Jane Doe</h3>
                        <p className="text-sm opacity-70">CEO & Founder</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="avatar mb-4">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.pravatar.cc/150?img=11" alt="Team Member" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold">John Smith</h3>
                        <p className="text-sm opacity-70">CTO</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="avatar mb-4">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.pravatar.cc/150?img=5" alt="Team Member" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold">Alice Johnson</h3>
                        <p className="text-sm opacity-70">Head of Design</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="avatar mb-4">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.pravatar.cc/150?img=33" alt="Team Member" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold">Bob Williams</h3>
                        <p className="text-sm opacity-70">Lead Developer</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;