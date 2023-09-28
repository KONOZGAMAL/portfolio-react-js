import React from 'react'
import Style from './About.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function About() {
  return (
    <div className={Style.about}>
      <div className={Style.name}>
        <div>
          <h1 className={Style.txtTwo}> AB  <br/> OU  </h1>
        </div>
        <h2 className={Style.lg}>T</h2>
        <div className={Style.me}>ME</div>
      </div>
      <div className={Style.info}>
        <div className={Style.info_card}>
          <h3>Front End Developer</h3>
            <span>Hello, I'm Konuz Gamal, a sharia and law graduate from Alazher University. I have a strong passion for creating innovative and user-friendly web applications. With my experience in Front-end web development using .React js, I have gained a solid understanding of software development principles.</span>
            <span>I thrive in collaborative team environments and have a proven track record of delivering projects on time and within budget. My goal is to leverage my technical skills and creativity to develop cutting-edge web solutions that meet the needs of users. I believe in continuous learning and staying up-to-date with the latest trends and technologies in the industry. I am always excited to take on new challenges and contribute to meaningful projects.</span>
            <span>Feel free to explore my portfolio to see some of my work and get in touch if you have any opportunities or projects you'd like to discuss. Let's work together to bring innovative web applications to life!"</span>
            <span className={Style.social}>
             <a href="https://www.linkedin.com/in/konuz-gamal" className="li"><LinkedInIcon/></a>
             <a href="https://github.com/KONOZGAMAL" className="gh"><GitHubIcon/></a>
             <a href="https://www.facebook.com/profile.php?id=100038599728019"
              className="fb"><FacebookIcon/></a>
           </span>
        </div>
      </div> 
      </div>
  )
}