import React from 'react';
import {Link} from 'gatsby';

import * as styles from '../styles/home.module.css'
import {StaticImage} from "gatsby-plugin-image";

export default function HomeHero() {
    return (
        <section className={styles.homeHeroContainer}>
            <StaticImage
                src='https://res.cloudinary.com/dg8awj55m/image/upload/v1684328207/website-lending/electricien-nimes/images/electricien-nimes-background-image-small.webp'
                alt="Image de fond"
                style={{position: 'absolute'}}
                className='background-image'
            />
            <div className={`section-inner hero-section-padding ${styles.homeHeroMain}`}>
                <div className={styles.homeHeroText}>
                    <h1>Votre expert électricien <span className="text-highlight">à Nîmes</span>.</h1>
                    <p>Forts de notre expérience et de notre expertise, nous vous proposons une gamme complète de
                        services électriques adaptés à vos besoins. Vous êtes au bon endroit pour un service de qualité,
                        réalisé par des <strong>électriciens à Nîmes</strong>, compétents et passionnés. Ensemble, faisons de vos projets
                        électriques une réussite !</p>
                    <Link to={'/contact'} className={`btn-primary`}>Obtenir un devis gratuitement</Link>
                </div>
                <div className={styles.heroImage}>
                    <StaticImage
                        src="https://res.cloudinary.com/dg8awj55m/image/upload/v1684272434/website-lending/electricien-nimes/images/home-hero.png"
                        alt="Electricien Nîmes"
                        width={500}
                    />
                </div>
            </div>
        </section>
    );
}
