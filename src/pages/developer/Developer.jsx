import React, {useState} from 'react'
import './developer.css';
import Terminal from 'react-console-emulator';
import {SimpleGauge} from 'react-gauges';
import {Link} from 'react-router-dom';
import {boscotsav, agrimitravid} from '../../assets/projects';

const commandsList = {
  echo: {
    name: "echo",
    description: "Echoes a passed string"
  },

  cd: {
    name: "cd",
    description: "changes current directory"
  },

  whoami: {
    name: "whoami",
    description: "know about me"
  },

  help: {
    name: "help",
    description: "you know what it does right"
  },

  video: {
    name: "video",
    description: "view youtube video"
  },

  social: {
    name: "social",
    description: "displays social networks"
  },

  email: {
    name: "email",
    description: "don't email me"
  },

  projects: {
    name: "projects",
    description: "yeah i've a lot of them"
  },
  skills: {
    name: "skills",
    description: "get to know my skills"
  },
  secret: {
    name: "secret --reveal",
    description: "secret~ shhh!!!"
  }
}


const Developer = () => {
  const [prompt, setPrompt] = useState('venky@portfolio:~$');
  const terminal = React.createRef();

  const commands = {
    echo: {
      description: 'Echo a passed string',
      usage: 'echo <String>',
      fn: (...args) => args.join(' ')
    },
    cd: {
      description: '',
      usage: 'cd <directory>',
      fn: (...args) => {
        setPrompt(args.join('/'))
      }
    },
    whoami: {
        description: 'short note',
        usage: 'whoami',
        fn: () => {
            return (
              <>
                <div className="venky__whereabouts">
                  <div className="venky__whereabouts_left">
                    <div className="venky__whereabouts_texts">
                      <h2>Venky</h2>
                      <p>Venky is a developer, as usual, with a friend <strike>circle</strike> straight line who with his skills can build up your entire business and shape your dream website into reality.</p>
                    </div>
                    <p>(◔◡◔) hecker wala feel nhi aaya?</p>
                    <div className="venky__whereabouts_stats">
                      <h3>Venky's Dev Vitals</h3>
                      <div className="venky__whereabouts_stats-info">

                        <div className="venky__whereabouts_stats-info-texts">
                            <li>⭐ Total Stars Earned : <b className='highlighter'>100+</b></li>
                            <li>⭐ Total Questions Solved : <b className='highlighter'>204</b></li>
                            <li>📽️ Projects Made: <b className='highlighter'>20+</b></li>
                            <li>⭐ Articles Published: <b className='highlighter'>5</b></li>
                            <li>⭐ Hours of Content curated: <b className='highlighter'>15</b></li>
                            <li><strike>⭐ Friends he has : <b className='highlighter'>unknown</b>..</strike></li>
                        </div>

                        <div className="venky__gauge">
                          <SimpleGauge value={78} indicatorColor="#C2AFF0" isTotal={true} barWidth={5} labelTemplate="A+" labelFontSize="1.4rem" labelFontFamily="Russo One" labelColor="#DBBADD" barColor="#fbe4d8" barBaseColor="#150015"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="venky__whereabouts_right">
                    <div className="education">
                      <h3>Podhashona</h3>
                      <div className="education-1">
                        <div>
                          <h4>Donbosco School, Liluah</h4>
                          <p>Timeline: <b className="highlighter">June 2022 to April 2024</b></p>
                          <p>Majors: <b className="highlighter">Computer Science</b></p>
                          <p>Achievements: 

                            <li><b className="highlighter-1">1st Runner Up @Youthopia'23 Hackathon</b></li>
                            <li><b className="highlighter-1">1st in Bosco Scientifica Tech</b></li>
                            <li><b className="highlighter-1">1st Runner Up @Boscotsav Web Dev</b></li>
                            <li><b className="highlighter-1">Built Boscotsav's website</b></li>
                          </p>
                        </div>
                        <div className="venky__gauge-ed">
                          <SimpleGauge value={91} indicatorColor="#C2AFF0" isTotal={true} barWidth={3} labelTemplate="91%" labelFontSize="1.4rem" labelFontFamily="Russo One" labelColor="#DBBADD" barColor="#2f80ed" barBaseColor="#150015"/>
                        </div>
                      </div>

                      <div className="education-1">
                        <div>
                          <h4>M.C.Kejriwal Vidyapeeth</h4>
                          <p>Timeline: <b className="highlighter">April 2009 to May 2022</b></p>
                          <p>Majors: <b className="highlighter">Computer Science</b></p>
                        </div>
                        <div className="venky__gauge-ed">
                          <SimpleGauge value={92} indicatorColor="#C2AFF0" isTotal={true} barWidth={3} labelTemplate="92%" labelFontSize="1.4rem" labelFontFamily="Russo One" labelColor="#DBBADD" barColor="#2f80ed" barBaseColor="#150015"/>
                        </div>
                      </div>
                    </div>
                  </div>              
                </div>
              </>
            )
        }
    },

    help: {
      description: 'shows the list of commands available',
      usage: 'help',
      fn: () => {
        return (
          <div className='helpitems'>
              {Object.keys(commandsList).map(command => (
              <li key={commandsList[command].name} >
                <strong>{commandsList[command].name}</strong>: {commandsList[command].description}
              </li>
            ))}
        </div>
        )
      }
    },

    clear: {
      description: 'clear the list of commands',
      usage: 'clear',
      fn: () => {
        terminal.current.clearStdout()
      }
    },

    video: {
      description: 'go check out my videos',
      usage: 'video',
      fn: () => {
        return (<>
          <div className="venky__videos">
            <div className="venky__videos_channel">
              <img src="https://yt3.googleusercontent.com/QXYMpCnmqR25knhE3eywqp9gVaAKmRBTrb8hfTeGlZgkfEP9AncA__Nwk4-sm1WpyUTyDIwc=s176-c-k-c0x00ffffff-no-rj" />
              <Link to="https://www.youtube.com/@projectjava"><strong>→ Project Java</strong></Link>
            </div>

            <div className="venky__videos_latest">
              <Link to="https://www.youtube.com/playlist?list=PLwUKL5gjmb7Qzizorauy33cRZIfbqNLE-"><strong>1. Moving Ahead of Java 8  → </strong></Link> 
              <Link to="https://www.youtube.com/playlist?list=PLwUKL5gjmb7ToXqGDFbuRgkxYRqO0rObe"><strong>2. Digital Electronics → </strong></Link> 
              <Link to="https://www.youtube.com/playlist?list=PLwUKL5gjmb7RVlS_6BjIW7ECZxcVMLNRD"><strong>3. Problem Solving with Java → </strong></Link> 
            </div>
          </div>
        </>)
      }
    },

    social: {
      description: "want my socials?",
      usage: 'social',
      fn: ()=> {
        return (<div className="venky__socials">
          <div className="venky__socials-header">
            <img src="https://avatars.githubusercontent.com/u/87254400?v=4"/>
            <strong>Social Keeda</strong>
          </div>
          <div className="venky__socials-links">
            <Link to="venkynotfound"><p>Discord</p></Link>
            <Link to="https://www.instagram.com/https.venkat"><p>Instagram</p></Link>
            <Link to="https://twitter.com/https_venkat"><p>Twitter</p></Link>
            <Link to="https://github.com/venkat1701"><p>Github</p></Link>
            <Link to="https://leetcode.com/thejeastdev/"><p>Leetcode</p></Link>
            <Link to="https://www.geeksforgeeks.org/user/venky1701/"><p>GeeksForGeeks</p></Link>
          </div>
        </div>)
      }
    },

    email:{
      description: 'oh please send me an email',
      usage: 'email',
      fn: () => {
        return(
          <>
            <div className="venky__email">
              <p>💌 Email me Now ;): <b className="highlighter">krishjaiswal1701@gmail.com</b></p>
            </div>
          </>
        )
      }
    },

    projects: {
      description: 'explore my projects',
      usage: 'projects',
      fn: () => {
        return (
          <>
            <div className="venky__projects">

              <div className='venky__projects-container'>
                <div className="venky__projects-project">
                  <img src={boscotsav}/>
                  <div className="venky__projects-project-information">
                    <h2>Boscotsav 2k23</h2>
                    <p>Boscotsav 2023 website is one of my greatest website builds. Being built on React framework, it served for the information and purpose of 75+ events and 20+ schools. With an interactive UI, the entire website contributed a lot towards the success of Boscotsav'23.</p>
                    <div className='venky__projects-buttons'>
                      <div className="button">
                        <p>View Demo</p>
                      </div>

                      <div className="button">
                        <p>Source Code</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="venky__projects-project2">
                  <video src={agrimitravid} autoPlay loop/>
                  <div className="venky__projects-project2-information">
                    <h2>Agrimitra</h2>
                    <p>AgriMitra is your Indian personal soil guide and your soil's best friend. He caters you with everything that your soil needs. He is your soil's words, thereby the best buddy your soil can have.</p>
                    <div className='venky__projects2-buttons'>
                      <div className="button">
                        <p>View Demo</p>
                      </div>

                      <div className="button">
                        <p>Source Code</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </>
        )
      }
    },

    skills: {
      description: 'oh, my skills?',
      usage: 'skills',
      fn: () => {
        return (
          <>
            <div className='venky__skills'>
              <h4>venky has skills, gives chills which thrills</h4>
            </div>
          </>
        )
      }
    },

    secret: {
      description: 'secret~ shhh!!!',
      usage: 'secret --reveal',
      fn: (...args) => {
        return (
          <>
            <div className='venky__secret'>
              <h4>Here's some pickup lines you can use as devs</h4>
              <div className="venky__secret-frontend">
                <li>I must be a CSS file because I'm feeling the need to style our relationship.</li>
                <li>You're like React to my frontend; without you, I just don't render properly.</li>
                <li>If you were a JavaScript variable, you'd be declared with const because you're so unchangeable in my heart.</li>
                <li>Our love is like a flex container; it adapts and fits no matter the size of the challenges.</li>
                <li>You must be an API call because you've got me waiting in anticipation.</li>
                <li>I'm not a font-face, but I sure would like to be included in your style sheets.</li>
                <li>You're the index.html to my website; without you, I just don't function.</li>
                <li>I'd never put you in a <code>div</code>; you deserve your own unique <code>section</code> in my life.</li>
                <li>Are you a media query? Because you make my heart respond at all the right points.</li>
                <li>I'd cache you in my L1 cache so I could have access to you instantly.</li>
              </div>

              <h4>Want more? Mail venky right now 😂</h4>
            </div>
          </>
        )
      }
    }
  }

  const welcomeMessage = (
    <div>
      <h4>Type <b className="highlighter">help</b> if you are lost!</h4>
    </div>
  );

  return (
    <div className="venky__developer">
      <Terminal
        welcomeMessage={welcomeMessage}
        ref={terminal}
        commands={commands}
        promptLabel={prompt}  
        style={{
          width: "100%",
          height: "100%",
          minHeight: null,
          maxHeight: null
        }}

        contentStyle={{ color: '#ffb86c' , fontWeight: 'normal', paddingLeft: null}} // Text colour
        promptLabelStyle={{ color: '#ff5555' , fontWeight:'normal'}} // Prompt label colour
        inputTextStyle={{ color: '#f1fa8c' , fontWeight: 'normal'}}
        messageStyle={{ color: '#DBBADD' , fontWeight: 'normal',   paddingLeft: '30px'}}
        noDefaults

      />

    </div>
  )
}

export default Developer