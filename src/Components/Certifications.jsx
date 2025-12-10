import cert1 from "../assets/machine_learning_complete_certificate.pdf";
import cert2 from "../assets/google_gen_ai.pdf";
import cert3 from "../assets/Data Science for Engineers.pdf";
import cert4 from "../assets/pythoncertificate.pdf";
import cert5 from "../assets/adobe.pdf";
// Add more imports as needed

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2>Certifications</h2>

      <div className="cert-grid">

        <div className="cert-card">
          <h3>Machine Learning Specialization — Stanford (Courseera)</h3>
          <a href={cert1} target="_blank" className="cert-btn">View Certificate</a>
        </div>

        <div className="cert-card">
          <h3>Generative AI Leader — Google (Courseera)</h3>
          <a href={cert2} target="_blank" className="cert-btn">View Certificate</a>
        </div>

        <div className="cert-card">
          <h3>Data Science for Engineers — IIT Madras (NPTEL)</h3>
          <a href={cert3} target="_blank" className="cert-btn">View Certificate</a>
        </div>

        <div className="cert-card">
          <h3>Complte Python Developer (Udemy)</h3>
          <a href={cert4} target="_blank" className="cert-btn">View Certificate</a>
        </div>

        <div className="cert-card">
          <h3>Adobe Hackathon Participation</h3>
          <a href={cert5} target="_blank" className="cert-btn">View Certificate</a>
        </div>

      </div>
    </section>
  );
}