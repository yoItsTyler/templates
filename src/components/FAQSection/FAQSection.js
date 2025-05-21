import React, { useState } from 'react';
import styles from './faq.module.css'; // Import the CSS module

export const FAQSection = () => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What do I need to get started with piano lessons?",
            answer: "To begin your piano journey, you'll need a piano or digital keyboard, a reliable internet connection, and a device with a camera and microphone for online lessons. I can provide recommendations for keyboards if you need guidance.",
        },
        {
            question: "How do online piano lessons work?",
            answer: "Online lessons are conducted via video call, where I can see and hear you play in real-time. I use multiple camera angles to demonstrate techniques clearly, and we'll use digital tools for sharing sheet music and practice materials. The experience is interactive and personalized to your learning style.",
        },
        {
            question: "What can I expect from the free consultation?",
            answer: "During our free consultation, we'll discuss your musical goals, experience level, and preferred learning style. I'll explain my teaching approach, answer any questions you have, and we can determine if we're a good fit. It's also a chance to test our video connection and setup.",
        },
        {
            question: "Are online lessons as effective as in-person lessons?",
            answer: "Yes! Online lessons have proven to be highly effective. They offer the convenience of learning from home while maintaining the quality of instruction. Many students find they're more comfortable practicing and learning in their familiar environment.",
        },
        {
            question: "What ages and skill levels do you teach?",
            answer: "I teach students of all ages and skill levels, from complete beginners to advanced players. My teaching method is adapted to each student's age, learning pace, and musical interests.",
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