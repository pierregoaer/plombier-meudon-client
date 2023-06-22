import React from 'react';
import * as styles from '../styles/home.module.css'

export default function HomeAboutUs() {
    return (
        <section className={styles.homeAboutUsContainer}>
            <div className={`section-inner secondary-section-padding ${styles.homeAboutUsMain}`}>
                <div className={styles.homeAboutUsText}>
                    <h2>Qui sommes-nous ?</h2>
                    <p className="justified-text">Besoin d'un plombier fiable et compétent pour tous vos problèmes de
                        plomberie ? Ne cherchez plus ! Notre équipe d'experts est là pour vous aider. Que
                        ce soit pour l'installation, la réparation, le débouchage ou l'entretien, nous sommes là pour
                        vous. Avec notre savoir-faire, notre attention aux détails et notre engagement
                        envers votre satisfaction, vous pouvez être sûr que nous prendrons soin de tous vos besoins en
                        plomberie de manière professionnelle et efficace. Faites confiance à notre équipe de plombiers
                        qualifiés pour des résultats impeccables.</p>
                    <p className="justified-text">Vous avez des questions ? N'hésitez pas à nous contacter dès
                        maintenant pour une assistance rapide
                        et fiable !</p>
                </div>
            </div>
        </section>
    );
}
