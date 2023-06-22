import React from 'react';
import FAQQuestion from "./FAQQuestion";
import {Link} from "gatsby";
import * as styles from '../styles/home.module.css'


export default function HomeServices() {
    return (
        <section className={styles.homeFaqContainer}>
            <div className={`section-inner secondary-section-padding ${styles.homeFaqMain}`}>
                <div className={styles.homeFaqText}>
                    <h2>Les questions fréquentes sur la plomberie</h2>
                    <p>Vous avez d'autres questions ?</p>
                    <Link to={'/contact'} className="btn-primary">Contactez-Nous</Link>
                </div>
                <ul className={styles.homeFaqList}>
                    <FAQQuestion
                        question="Quelles sont les normes à respecter pour une nouvelle installation ?"
                        answer="<p>Une installation de plomberie doit respecter plusieurs normes. Elles définissnet les éxigences en matiére de matériaux, dimensions, sécurité, évacuations et distribution d’eau potable. Les principales normes sont la NF DTU 60.11 (définition des règles de l’art), NF EN 1717 (pollution de l’eau potable) ou encore NF EN 806 (distribution de l’eau).</p>"
                    />
                    <FAQQuestion
                        question="Comment savoir si mon installation répond aux normes ?"
                        answer="<p>Pour vérifier si votre installation électrique est aux normes, il est recommandé de faire appel à un professionel. Celui - ci pourra effectuer un diagnostic complet de votre installation et vous conseiller sur les éventuelles améliorations à apporter. Vous pouvez aussi faire appel à un diagnostiqueur immobilier professionnel.</p>"
                    />
                    <FAQQuestion
                        question="Combien coûte un dépannage ?"
                        answer="<p>Le coût d'un dépannage peut varier en fonction de la nature du problème et de la complexité des travaux à réaliser. Pour tout dépannage ou urgences, n'hésitez pas à nous contacter pour obtenir un devis personnalisé.</p>"
                    />
                    <FAQQuestion
                        question="Quelle est la durée de vie d'un système de plomberie ?"
                        answer="<p>La durée de vie d'une installation électrique dépend de plusieurs facteurs, tels que la qualité des matériaux utilisés, l'entretien et les conditions d'utilisation. La robinetterie et les chauffes-eau ont une durée de vie moyenn de 15 à 20 ans. Les tuyaux en cuivre peuvent durer de 50 à 70 ans. Les tuyaux PVC ont une durée de vie de 25 à 40 ans.</p>"
                    />

                </ul>
            </div>
        </section>
    );
}
