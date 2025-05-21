import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import keys from '../../images/darkPianoKeys60.webp';
import logo from '../../images/PianoLogoClear.png';
import headShot from '../../images/headShotLinkd.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Navbar } from '../Navbar/Navbar';
import pianoStudent from '../../images/studentPlayingPiano.png';
import sharieWithStudent from '../../images/sharieWithStudent.png';
import { useEffect, useState } from 'react';
import { ArrowBack, ArrowForward, ArrowRight, Star } from '@mui/icons-material';
import { FAQSection } from '../FAQSection';
import Footer from '../Footer/Footer';
export const Home = () => {
    const history = useHistory();


    //Reviews
    const reviews = [
        {
            text: `As an older student (70+), with some previous piano experience in her youth, I wanted to relearn/refresh my ability to play the piano. Sharie has been wonderful in helping me along this journey. She has been incredibly supportive and encouraging of my efforts. And when I went away for the 3 months in the winter, we were able to continue lessons with the use of technology. She’s also has been teaching my young granddaughter.

She clearly loves the piano, giving lessons and her students.She makes it fun to learn!`, author: "Susan Kirkham"
        },

        { text: "I've learned so much in just a few months. Highly recommend!", author: "James L." },
        { text: "Sharie's patience and expertise are unmatched. A true professional.", author: "Laura K." },
    ];

    const [currentReview, setCurrentReview] = useState(0);

    const handleNextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const handlePreviousReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };
    /* 
      <div className={styles.navBar}>
                <div className={styles.lSCont}>

                   
                </div>
            </div>
    
    
    <button onClick={() => history.push('/signup')}
                > Sign Up </button>*/
    //

    /* Example Bullets
      <ul>
               <li className={styles.heroBullet}>🎹 Over 33 years of piano teaching experience for all ages and skill levels.</li>
                                <li className={styles.heroBullet}>🌍 Virtual piano lessons tailored to your goals, accessible from anywhere.</li>
                                <li className={styles.heroBullet}>🎼 Specializing in classical, contemporary, and personalized music instruction.</li>
                                <li className={styles.heroBullet}>🏆 Proven track record of helping students master technique and performance.</li>
                                <li className={styles.heroBullet}>🎵 Beginner to advanced lessons with a focus on creativity and confidence.</li>
                                <li className={styles.heroBullet}>📆 Flexible scheduling to fit your busy lifestyle.</li>
                            </ul>

                            ///////////////////////////////

                             <ul className={styles.heroList}>
                            <li className={styles.heroBullet}>🎹 Over 30 years of piano teaching experience</li>
                            <li className={styles.heroBullet}>🌍 Virtual piano lessons tailored to your goals</li>
                            <li className={styles.heroBullet}>🎼 Specializing in classical, and contemporary, music instruction</li>
                            <li className={styles.heroBullet}>🏆 Proven track record of helping students master technique and performance</li>
                            <li className={styles.heroBullet}>🎵 Beginner to advanced lessons with a focus on creativity and confidence</li>
                            <li className={styles.heroBullet}>📆 Flexible scheduling</li>
                        </ul>
     *///   // <img className={styles.logo} src={logo} />

    //Old Hero container
    /*     <div className={styles.heroContainer}>
                   <div className={styles.left}>
                       <div className={styles.profileBorder} >
                           <img className={styles.headShot} src={headShot} />
                       </div>
                       <div className={styles.profileName}>Sharie Samuelson</div>
                   </div>

                   <div className={styles.heroTextContainer}>
                       <ul className={styles.heroList}>
                           <li className={styles.heroBullet}> Over 30 years of piano teaching experience</li>
                           <li className={styles.heroBullet}> Virtual piano lessons tailored to your goals</li>
                           <li className={styles.heroBullet}> Specializing in classical, and contemporary, music instruction</li>
                           <li className={styles.heroBullet}> Proven track record of helping students master technique and performance</li>
                           <li className={styles.heroBullet}> Beginner to advanced lessons with a focus on creativity and confidence</li>
                           <li className={styles.heroBullet}> Flexible scheduling</li>
                       </ul>
                   </div>

               </div>

               <button className={styles.whiteBtn} onClick={() => history.push('/consultation')}
               > Book A Free Consultation
               </button>*/

    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.tOne} style={{ backgroundImage: 'url(' + keys + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw' }}>

                <div className={styles.title}>Creative Play Piano Studio</div>
                <h2 className={styles.subtitle} style={{ fontSize: '1.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontFamily: 'Poppins, sansSerif', fontFamily: 'Julius Sans One, sans-serif' }}>
                    Unlock Your Musical Potential – Learn Piano Online with Sharie Samuelson.
                </h2>

                <div className={styles.tOneBottom}>
                    <Button
                        aria-label="Book a free consultation"
                        variant="contained"
                        onClick={() => history.push('/consultation')}
                        style={{
                            marginTop: '20px',
                            backgroundColor: '#ffffff',
                            color: '#000',
                            padding: '10px 20px',
                            borderRadius: '25px',
                            fontWeight: 'bold',
                            transition: 'transform 0.2s, background-color 0.2s',

                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#f0e68c')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#ffffff')}
                    >
                        Book a Free Consultation
                    </Button>
                    <ExpandMoreIcon className={styles.scrollDown} fontSize='40px' />
                </div>
            </div>

            <div className={styles.tTwo}//About Section
            >
                <div className={styles.aboutRow}>
                    <div className={styles.aboutLeft}>
                        <img className={styles.studentPlayingPiano} src={sharieWithStudent} loading='lazy' alt='Private Piano Teacher, Sharie Samuelson' />
                    </div>


                    <div className={styles.aboutRight}>
                        <h1>About Sharie Samuelson</h1>
                        <h3>Inspiring a Love for Music Through Piano Education</h3>
                        <p styles="">Sharie Samuelson is a passionate piano instructor with over 30 years of experience teaching students of all ages and skill levels. Her journey began at the age of six in Cannon Falls, Minnesota, and led to a Bachelor’s Degree in Music Education from Lawrence University. Over her career, Sharie has taught hundreds of students, sharing her love for piano through personalized lessons and with a patient, encouraging approach.

                            Ready to embark on your musical journey?
                            Learn more about Sharie.</p>

                    </div>

                </div>
            </div>{/* End of About Section */}

            {/* Why Choose Virtual Piano Lessons Section */}
            <div className={styles.tThree}>
                <h1>Why Choose Virtual Piano Lessons?</h1>
                <h3>The Benefits of Learning Piano Online</h3>
                <div className={styles.benefitsContainer}>
                    <div className={styles.benefitItem}>
                        <span className={styles.icon}>🎹</span>
                        <h4>Flexibility</h4>
                        <p>Learn and grow from the comfort of your own home. No need to commute—your piano journey is just a click away.</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <span className={styles.icon}>🌟</span>
                        <h4>Personalized Attention</h4>
                        <p>Enjoy one-on-one lessons designed around your unique goals and skill level. Every session is tailored to help you succeed.</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <span className={styles.icon}>🌍</span>
                        <h4>Accessible for All</h4>
                        <p>Whether you're balancing a busy schedule or living in a remote area, virtual lessons make quality piano education available wherever you are.</p>
                    </div>
                </div>
            </div>
            {/* End Lesson Section */}
            <FAQSection/>
            {/* Reviews Section */}
            <div className={styles.tFour}>
                <h1>Reviews</h1>
                <div className={styles.reviewBox}>
                    <p>"{reviews[currentReview].text}"</p>
                    <h4>- {reviews[currentReview].author}</h4>
                </div>
                <div className={styles.stars}>
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} className={styles.starIcon} />
                    ))}
                </div>
                <div className={styles.carouselButtons}>
                    <Button
                        variant="contained"
                        onClick={handlePreviousReview}
                        aria-label="View previous review"
                        sx={{
                            backgroundColor: "black",
                            '&:hover': {
                                backgroundColor: "black",
                            },
                            '&:focus': {
                                backgroundColor: "black",
                            },
                        }}
                    >
                        <ArrowBack />
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleNextReview}
                        aria-label="View next review"
                        sx={{
                            backgroundColor: "black",
                            '&:hover': {
                                backgroundColor: "black",
                            },
                            '&:focus': {
                                backgroundColor: "black",
                            },
                        }}
                    >
                        <ArrowForward />
                    </Button>
                </div>
            </div>

                        <Footer/>
        </div>
    );
};