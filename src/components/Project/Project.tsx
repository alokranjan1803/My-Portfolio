import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
 import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/alokranjan1803/QuikStay" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://quik-stay.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Quik Stay</h3>
              <p> Built a comprehensive hotel booking system using Node.js, Express.js, MongoDB, and React, featuring user authentication, hotel management, and booking functionality. </p>
            </div>
            <footer> <ul className="tech-list"> <li>HTML</li> <li>CSS</li> <li>JavaScript</li> <li>ReactJs</li> <li>NodeJs</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/alokranjan1803/DukaanX" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://github.com/alokranjan1803/DukaanX" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>DukaanX</h3>
              <p>
              Developed an end-to-end e-commerce solution using Flutter for the frontend, Node.js
              for the backend, and MongoDB for real-time database functionality. Integrated Cloudinary for storage, enhancing
              performance and functionality.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flutter</li>
                <li>Dart</li>
                <li>NodeJs</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/alokranjan1803/WorldCup_Analysis2024" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/alokranjan1803/WorldCup_Analysis2024" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>T20 World Cup Analysis 2024</h3>
              <p>
              This project analyzes data from the ICC Men's T20 World Cup 2024 to uncover insights about team and player performances. By examining datasets related to matches, players, and scores, we aim to provide a comprehensive understanding of this premier international cricket event.


              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Numpy</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
                <li>Seaborn</li>
                <li>Jupyter Notebook</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/alokranjan1803/Credit_Card_Dashboard" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/alokranjan1803/Credit_Card_Dashboard" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Credit Card Dashboard</h3>
              <p>This project showcases an advanced Power BI dashboard designed to analyze credit card customer behavior, revenue generation, and transaction trends. With visually compelling charts and interactive filters, the dashboard delivers actionable insights for business decision-making and strategic planning.

</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Power BI</li>
                <li>PostgreSQL</li>
                <li>DAX</li>
                <li>Data Analysis</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/alokranjan1803/insight_blog" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/alokranjan1803/insight_blog" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Insight Blog</h3>
              <p>Insight Blog is a dynamic and user-friendly blogging application built using Flutter. It allows users to create, read, update, and delete blog posts with real-time updates. Users can also select images for their posts, choose topics, and write content. This project leverages the power of Supabase for backend services and Flutter Bloc for state management.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flutter</li>
                <li>Bloc</li>
                <li>Supabase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        

      </div>
    </Container>
  );
}