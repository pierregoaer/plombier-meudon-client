import React from 'react';
import TestimonialCard from "./TestimonialCard.jsx";
import * as styles from '../styles/testimonials.module.css'

export default function Testimonials({testimonials}) {
    const testimonialElements = testimonials.map(testimonial => {
        return (
            <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                image={testimonial.image}
            />
        )
    })

    return (
        <section className={styles.testimonialsContainer}>
            <div className={`section-inner secondary-section-padding ${styles.testimonialsMain}`}>
                <div className={styles.testimonialsText}>
                    <h2>Nos clients sont satisfaits</h2>
                    <p>Découvrez ce que nos clients ont à dire sur nos services de plomberie. Nous sommes fiers de
                        travailler avec eux et partager leurs avis positifs.</p>
                    <p>Leur expérience reflète notre engagement de vous fournir un service de qualité, notre réactivité et notre
                        professionnalisme. Nous sommes reconnaissants envers nos clients pour leur confiance et nous
                        vous invitons à vous joindre à eux en choisissant notre expertise pour tous vos besoins en
                        plomberie.</p>
                </div>
                <ul className={styles.testimonialsList}>
                    {testimonialElements}
                </ul>
            </div>
        </section>
    );
}
