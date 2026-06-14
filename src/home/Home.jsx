import Header from '../components/header/Header'
import styles from './home.module.css'

function Home() {
  return (
    <div>
      <div className="container">

        <div className={styles.hero}>

          <div className={styles.hero_text}>
            <h5>Hello, I'm</h5>
            <h1>Abduvahob</h1>
            <h2><span>Frontend</span> Developer</h2>
            <p>I build modern, responsive and user-friendly websites
              whith React, HTML CSS and JavaScript.
            </p>
            <div className={styles.hero_btn}>
              <button className={styles.work_btn}>View My Work <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
              <button className={styles.contact_btn}>Contact Me <i className="fa-regular fa-comment"></i></button>
            </div>

            <div className={styles.hero_icons}>
              <div className={styles.git}> <i className="fa-brands fa-github"></i> </div>
              <div className={styles.twitter}> <i className="fa-brands fa-twitter"></i> </div>
              <div className={styles.instagram}> <i className="fa-brands fa-instagram"></i> </div>
              <div className={styles.telegram}> <i className="fa-brands fa-telegram"></i> </div>
            </div>

          </div>

          <div className={styles.hero_img}>
            <img src="./i'm.png" alt="i'm" width={700} />
          </div>

        </div>

        <div className={styles.section1}>


          <div className={styles.box1}>
            <div className={styles.complet}>
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <div className={styles.complet_tex}>
              <h1>10+</h1>
              <p>projects Completed</p>
            </div>
          </div>

          <div className={styles.box2}>
            <div className={styles.exp}><i className="fa-regular fa-user"></i></div>
            <div className={styles.exp_text}>
              <h1>1+</h1>
              <p>Years Experience</p>
            </div>
          </div>

          <div className={styles.box3}>
            <div className={styles.client}><i className="fa-solid fa-trophy"></i></div>
            <div className={styles.client_text}>
              <h1>100+</h1>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className={styles.box4}>
            <div className={styles.support}><i className="fa-solid fa-rocket"></i></div>
            <div className={styles.support_text}>
              <h1>24/7</h1>
              <p>Support</p>
            </div>
          </div>


        </div>

        <section className={styles.section2}>


          <div className={styles.about_me}>

            <h4>ABOUT ME</h4>
            <h1>I'm a passionate
              frontend developer</h1>
            <p>I love turning ideas info beautiful and functional
              web experiences. I focus on writing clean, efficient
              code and creating amazing user interfaces.
            </p>
            <button className={styles.more}>
              More About ME
            </button>


          </div>

          <div className={styles.my_skills}>

            <div className={styles.skills_1}>

              <div className={styles.react}>
                <img src="./react.png" alt="react" />
                <div className={styles.skills_text}>
                  <h1>React</h1>
                  <h3>60%</h3>
                </div>
              </div>

              <div className={styles.js}>
                <img src="./js.png" alt="js" />
                <div className={styles.skills_text}>
                  <h1>JavaScript</h1>
                  <h3>80%</h3>
                </div>
              </div>

              <div className={styles.github}>
                <img src="./github.png" alt="github" />
                <div className={styles.skills_text}>
                  <h1>GitHub</h1>
                  <h3>80%</h3>
                </div>
              </div>

            </div>

            <div className={styles.skills_2}>

              <div className={styles.tailwind}>
                <img src="./tailwind.svg" alt="tailwind" />
                <div className={styles.skills_text}>
                  <h1>Tailwind css</h1>
                  <h3>100%</h3>
                </div>
              </div>

              <div className={styles.html}>
                <img src="./html.png" alt="html" />
                <div className={styles.skills_text}>
                  <h1>HTML</h1>
                  <h3>100%</h3>
                </div>
              </div>

              <div className={styles.css}>
                <img src="./css.png" alt="css" />
                <div className={styles.skills_text}>
                  <h1>CSS</h1>
                  <h3>90%</h3>
                </div>
              </div>

            </div>



          </div>




        </section>

       

      </div>
      <footer>
        <div className="container">

          <div className={styles.footer_text}>

            <div className={styles.footer_text1}>
              <h1>Abduvahob</h1>
              <h2>Frontend Developer</h2>
            </div>

            <div className={styles.footer_text2}>
              <p>Home</p>
              <p>About Me</p>
              <p>My works</p>
            </div>

            <div className={styles.footer_text3}>
              <h5>@Instagram</h5>
              <h5>@Telegram</h5>
              <h5>@Youtube</h5>
            </div>
          </div>

          <h2 className={styles.h2}>© M.vahob.com</h2>

        </div>




      </footer>

    </div>
  )
}

export default Home
