import React from 'react';
import {Link} from "gatsby";

import Testimonials from "../../components/Testimonials";
import ImageSlider from "../../components/ImageSlider";
import Layout from "../../components/Layout";

import * as styles from '../../styles/support-page.module.css'

export function Head() {
    return (
        <>
            <html lang="fr"/>
            <title>Projets Électriques Résidentiels à Nîmes | Photos & Témoignages | Électricien Nîmes</title>
            <meta name="description"
                  content="Parcourez nos projets électriques résidentiels à Nîmes : galerie de photos et témoignages de clients satisfaits. Confiez-nous vos projets !"/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/realisations/projets-residentiels"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title"
                  content="Projets Électriques Résidentiels à Nîmes | Photos & Témoignages |  Électricien Nîmes"/>
            <meta property="og:description"
                  content="Parcourez nos projets électriques résidentiels à Nîmes : galerie de photos et témoignages de clients satisfaits. Confiez-nous vos projets !"/>
            <meta property="og:image"
                  content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849344/website-lending/electricien-nimes/meta-images/projet-residentiel.png"/>
        </>
    )
}

export default function ResidentialProjects() {
    const newConstructionSlides = [
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682695420/website-lending/electricien-nimes/images/maison-moderne.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Installation d\'un tableau électrique moderne et fonctionnel dans une maison individuelle.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682631078/website-lending/electricien-nimes/images/salon-moderne-1.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Mise en place de prises et d\'interrupteurs design dans un salon contemporain.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659622/website-lending/electricien-nimes/images/maison-connectee.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Installation de luminaires encastrés pour créer une ambiance chaleureuse dans une cuisine ouverte.'
        }
    ]

    const renovationSlides = [
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682630773/website-lending/electricien-nimes/images/armoire-electrique-a-remplacer.jpg',
            slideAlt: "Rénovation d'installation électrique",
            slideText: 'Installation d\'un tableau électrique moderne et fonctionnel dans une maison individuelle.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659617/website-lending/electricien-nimes/images/cables-electriques-1.jpg',
            slideAlt: "Rénovation d'installation électrique",
            slideText: 'Mise en place de prises et d\'interrupteurs design dans un salon contemporain.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1681828281/website-lending/electricien-nimes/images/electricien-sur-chantier-3.jpg',
            slideAlt: "Rénovation d'installation électrique",
            slideText: 'Installation de luminaires encastrés pour créer une ambiance chaleureuse dans une cuisine ouverte.'
        }
    ]

    const extensionSlides = [
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659624/website-lending/electricien-nimes/images/veranda-extension.jpg',
            slideAlt: 'Extension et aménagement d\'habitations',
            slideText: 'Installation d\'un tableau électrique moderne et fonctionnel dans une maison individuelle.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659623/website-lending/electricien-nimes/images/panneaux-solaires.jpg',
            slideAlt: 'Extension et aménagement d\'habitations',
            slideText: 'Mise en place de prises et d\'interrupteurs design dans un salon contemporain.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659613/website-lending/electricien-nimes/images/allee-lumineuse.jpg',
            slideAlt: 'Extension et aménagement d\'habitations',
            slideText: 'Installation de luminaires encastrés pour créer une ambiance chaleureuse dans une cuisine ouverte.'
        }
    ]

    return (
        <Layout>
            <main className="support-page-container">
                <section className="support-page-hero">
                    <div className="hero-section-padding">
                        <div className="support-page-text-block">
                            <h1>Projets résidentiels réalisés par votre électricien à Nîmes : Qualité et satisfaction
                                garanties</h1>
                            <p>Vous recherchez un électricien de confiance à Nîmes pour vos projets résidentiels ?
                                Découvrez nos réalisations et l'expertise de notre équipe pour vous accompagner dans la
                                réussite de vos <Link to={'/realisations/projets-commerciaux/'}>projets électriques <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                                </svg></Link>. En tant qu'électricien à Nîmes, nous mettons un
                                point d'honneur à offrir un service de qualité, à la hauteur de vos attentes. Notre
                                galerie de photos de projets résidentiels et les témoignages de nos clients satisfaits
                                témoignent de notre engagement envers l'excellence et la satisfaction de nos
                                clients.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Construction neuve</h2>
                            <p>Dans le cadre de la construction de maisons neuves, notre équipe d'électriciens à Nîmes
                                intervient pour concevoir et réaliser des installations électriques conformes aux normes
                                en vigueur et adaptées à vos besoins. Découvrez quelques exemples de nos réalisations en
                                matière d'<strong>installations électriques pour des constructions neuves</strong> :</p>
                        </div>
                        <ImageSlider slides={newConstructionSlides}/>
                    </div>
                </section>
                <section className="inverted-section">
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Rénovation électrique</h2>
                            <p>La rénovation électrique est essentielle pour garantir la sécurité et la performance de
                                votre installation électrique. Notre équipe d'électriciens à Nîmes est spécialisée dans
                                les travaux de rénovation électrique pour améliorer la qualité de vie de nos clients.
                                Découvrez quelques exemples de nos <strong>réalisations en matière de rénovation
                                    électrique</strong>
                                :</p>
                        </div>
                        <ImageSlider slides={renovationSlides}/>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Extension et aménagement</h2>
                            <p>Les extensions et aménagements de votre habitation nécessitent souvent une adaptation de
                                votre installation électrique. En tant qu'électricien à Nîmes, nous vous accompagnons
                                dans ces projets pour garantir une intégration harmonieuse et sécurisée de vos
                                équipements électriques. Découvrez quelques exemples de nos <strong>réalisations en
                                    matière
                                    d'extension et d'aménagement</strong> :</p>
                        </div>
                        <ImageSlider slides={extensionSlides}/>
                    </div>
                </section>
                <Testimonials testimonials={[
                    {
                        quote: "Du début à la fin, l'équipe a été à l'écoute de nos besoins et a su nous conseiller sur les meilleures solutions pour notre installation électrique. Nous les recommandons sans hésiter !",
                        name: "Stéphanie et Laurent",
                        image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80/v1683642961/website-lending/electricien-nimes/testimonials/testimonial-1.webp"
                    },
                    {
                        quote: "Leurs conseils et leur expertise nous ont permis de moderniser notre installation tout en respectant le cachet de notre habitation. Merci à toute l'équipe !",
                        name: "Mathilde et Pierre",
                        image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80/v1683642961/website-lending/electricien-nimes/testimonials/testimonial-2.webp"
                    },
                    {

                        quote: "Suite à l'agrandissement de notre maison, nous avons fait appel à cette entreprise. Ils ont su nous proposer des solutions adaptées à notre projet et à notre budget et le résultat est impeccable !",
                        name: "Sandrine et Guillaume",
                        image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80/v1683642961/website-lending/electricien-nimes/testimonials/testimonial-3.webp"
                    }
                ]}/>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text-block">
                            <p>En tant qu'électricien à Nîmes, nous sommes fiers de vous présenter nos réalisations en
                                matière de projets résidentiels. La satisfaction de nos clients est notre priorité. Nous
                                mettons tout en œuvre pour vous offrir un service de qualité, adapté à vos besoins et à
                                vos attentes.</p>

                            <p>N'hésitez pas à nous contacter pour discuter de votre projet résidentiel et obtenir un
                                devis personnalisé. En choisissant notre entreprise d'électriciens à Nîmes, vous
                                bénéficierez d'une expertise reconnue et d'un accompagnement personnalisé tout au long
                                de votre projet. Ensemble, concrétisons vos projets électriques et assurons la sécurité,
                                la performance et le confort de votre habitation ou de <Link
                                    to={'/realisations/projets-industriels/'}>votre entreprise <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                                </svg></Link> !
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
