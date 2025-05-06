import React, { useEffect, useState } from 'react';
import '../styles/AboutPage.css';
import team1 from '../asserts/images/team1.png';  
import team2 from '../asserts/images/team2.png';  
import team3 from '../asserts/images/team3.png';  

// Data for stats, testimonials, and team
const stats = [
    { label: 'Years of Excellence', value: 40 },
    { label: 'Clients Served', value: 500 },
    { label: 'Certifications', value: 20 }
];

const testimonials = [
    { name: 'Ravi Patel', comment: 'Platech’s quality and service are unmatched in the industry.' },
    { name: 'Neha Kapoor', comment: 'Their innovative PVC products streamlined our production significantly.' },
    { name: 'Global Tech Ltd.', comment: 'Reliable, responsive, and professional. Highly recommend.' }
];

const team = [
    { 
        name: 'Garima Parihar', 
        role: 'Founder & CEO', 
        funFact: 'Started with a single machine in 1983.',
        image: team1// Add the image path here
    },
    { 
        name: 'Anita Sharma', 
        role: 'COO', 
        funFact: 'Practices yoga daily for focus and energy.',
        image: team2 // Add the image path here
    },
    { 
        name: 'Sakshi Gupta', 
        role: 'R&D Head', 
        funFact: 'Loves working on eco-tech solutions.',
        image: team3  // Add the image path here
    }
];


const StatBox = ({ end, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // total duration of animation
        const increment = end / (duration / 50); // adjust speed

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, 50);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <div className="stat-box">
            <h3>{count}+</h3>
            <p>{label}</p>
        </div>
    );
};

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="hero">
                <h1>Welcome to Platec Industries</h1>
                <p>Redefining manufacturing excellence for over 40 years.</p>
            </div>

            {/* Animated Stats */}
            <section className="stats-section">
                <h2>At a Glance</h2>
                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <StatBox key={i} end={stat.value} label={stat.label} />
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonial-slider">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial">
                            <p>“{t.comment}”</p>
                            <h4>- {t.name}</h4>
                        </div>
                    ))}
                </div>
            </section>

          {/* Team Spotlight */}
<section className="team-section">
    <h2>Meet Our Team</h2>
    <div className="team-grid">
        {team.map((member, i) => (
            <div key={i} className="team-card">
                <img src={member.image} alt={member.name} className="team-image" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <small>{member.funFact}</small>
            </div>
        ))}
    </div>
</section>

        </div>
    );
};

export default AboutPage;
