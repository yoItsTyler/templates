import React, { useState } from 'react';
import styles from './faq.module.css'; // Import the CSS module

export const FAQSection = () => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What do I need for virtual piano lessons?",
            answer: "You'll need a piano or keyboard, a reliable internet connection, and a device with a camera and microphone for video calls.",
        },
        {
            question: "Are virtual lessons suitable for beginners?",
            answer: "Absolutely! Virtual lessons are tailored to each student's skill level, whether you're a beginner or an advanced player.",
        },
        {
            question: "How long are the lessons?",
            answer: "Lessons typically last 30 to 60 minutes, depending on your chosen package and preferences.",
        },
        {
            question: "Can I schedule lessons at any time?",
            answer: "Yes, lessons are flexible and can be scheduled to fit your availability.",
        },
    ];

    return (
        <div className={styles.faqSection}>
            <h1>Frequently Asked Questions</h1>
            <div className={styles.faqContainer}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div
                            className={styles.faqQuestion}
                            onClick={() => toggleQuestion(index)}
                            aria-expanded={openQuestionIndex === index}
                        >
                            {faq.question}
                        </div>
                        {openQuestionIndex === index && (
                            <div className={styles.faqAnswer}>{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};