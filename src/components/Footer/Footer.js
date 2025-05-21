import React from "react";
import styles from "./Footer.module.css";
import { LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Footer = () => {
    const history = useHistory();
    return (
        <footer className={styles.footer}>
            <div className={styles.iconContainer}>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
                >
                    <LinkedIn />
                </a>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
                >
                    <Facebook />
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
                >
                    <Instagram />
                </a>
            </div>
            <div><button className={styles.contactButton}
                onClick={() => history.push('/consultation')}
            >Contact</button></div>
        </footer>
    );
};

export default Footer;
