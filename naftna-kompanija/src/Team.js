import React from 'react';

const Team = () => (
  <section id="team">
    <h2>Our Team</h2>
    <div id="team-members">
      <div className="team-member">
        <img src="/images/john_doe.jpg" alt="John Doe - CEO" />
        <h3>John Doe</h3>
        <p>CEO</p>
      </div>
      <div className="team-member">
        <img src="/images/jane_smith.jpg" alt="Jane Smith - CFO" />
        <h3>Jane Smith</h3>
        <p>CFO</p>
      </div>
      <div className="team-member">
        <img src="/images/mark_johnson.jpg" alt="Mark Johnson - CTO" />
        <h3>Mark Johnson</h3>
        <p>CTO</p>
      </div>
    </div>
  </section>
);

export default Team;
