import React from 'react';
import styles from './styles.module.css';
import { Navbar } from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export const Resources = () => {
    const resources = [
        {
            title: "Practice Tips",
            content: [
                "Set aside dedicated practice time daily.",
                "Start with warm-ups to improve finger flexibility.",
                "Break challenging pieces into smaller sections.",
                "Use a metronome to improve timing and rhythm.",
            ],
        },
        {
            title: "Free Sheet Music",
            links: [
                { name: "IMSLP (Public Domain Music)", url: "https://imslp.org/" },
                { name: "8notes.com", url: "https://www.8notes.com/" },
                { name: "MuseScore", url: "https://musescore.com/" },
            ],
        },
        {
            title: "Recommended Apps & Tools",
            content: [
                "Simply Piano – Fun and interactive piano learning app.",
                "Perfect Ear – Improve your ear training skills.",
                "MuseScore – Free music notation software.",
                "Pro Metronome – A professional metronome app.",
            ],
        },
    ];

    return (
        <div className={styles.resourcesPage}>
            <Navbar />
            <h1 className={styles.title}>Piano Student Resources</h1>
            {resources.map((resource, index) => (
                <div key={index} className={styles.resourceSection}>
                    <h2 className={styles.resourceTitle}>{resource.title}</h2>
                    {resource.content && (
                        <ul className={styles.resourceList}>
                            {resource.content.map((item, idx) => (
                                <li key={idx} className={styles.resourceItem}>{item}</li>
                            ))}
                        </ul>
                    )}
                    {resource.links && (
                        <ul className={styles.resourceList}>
                            {resource.links.map((link, idx) => (
                                <li key={idx} className={styles.resourceItem}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
             <Footer/>
        </div>
    );
};
