import React from 'react';
import {Link} from "gatsby";

import * as styles from '../../styles/support-page.module.css'
import Layout from "../../components/Layout";

export function Head() {
    return (
        <>
            <html lang="fr" />
            <title>Installation Électrique à Nîmes | Résidentiel, Commercial & Industriel |  Électricien Nîmes</title>
            <meta name="description" content="Confiez-nous vos installations électriques à Nîmes pour des projets résidentiels, commerciaux et industriels. Expertise et qualité garanties."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/services/installation"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Installation Électrique à Nîmes | Résidentiel, Commercial & Industriel |  Électricien Nîmes"/>
            <meta property="og:description" content="Confiez-nous vos installations électriques à Nîmes pour des projets résidentiels, commerciaux et industriels. Expertise et qualité garanties."/>
            <meta property="og:image" content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849343/website-lending/electricien-nimes/meta-images/installation-electrique.png"/>
        </>
    )
}

export default function Installation() {
    return (
        <Layout>
            <main className="support-page-service-container">
                <section className="support-page-hero">
                    <div className="hero-section-padding">
                        <div className="support-page-text-block">
                            <h1>Installation électrique à Nîmes : Expertise résidentielle, commerciale et
                                industrielle</h1>
                            <p>Vous recherchez un électricien compétent à Nîmes pour vos <strong>installations électriques</strong> ?
                                Notre entreprise vous offre des solutions complètes et personnalisées pour tous vos besoins.
                                Que ce soit : en installation électrique résidentielle, commerciale et industrielle, nous
                                répondrons à votre besoin. Forts de notre expérience et de notre expertise, nous vous
                                garantissons un travail <Link to={'/services/renovation-et-mise-aux-normes/'}> soigné et conforme aux normes électriques en vigueur <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg></Link>. Ainsi,
                                nous
                                vous garantissons une sécurité optimale.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Installation électrique résidentielle</h2>
                            <p>Lors de la construction ou de la rénovation d'une maison, il est essentiel de confier
                                <strong>l'installation électrique</strong> à un professionnel qualifié et expérimenté. En tant
                                qu'électricien à Nîmes, nous sommes spécialisés dans les installations électriques
                                résidentielles. Qu'il s'agisse d'une habitation neuve, d'une rénovation ou d'une
                                extension, votre installation est garantie.</p>

                            <p>Notre équipe d'électriciens qualifiés vous accompagne tout au long de votre projet
                                d’installation électrique. En partant de l'étude des plans jusqu’à la réalisation des
                                travaux en passant par la sélection des équipements adaptés à vos besoins. Nous nous
                                assurons de respecter la norme <a href='https://www.legrand.fr/pro/normes-et-reglementations/norme-nf-c-15-100/norme-nf-c-15-100-suivez-le-guide' target='_blank'>NF C 15-100 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg></a> ainsi que les réglementations en vigueur.
                                Nous garantissons ainsi la sécurité de votre installation électrique.</p>

                            <p>Nos services en installation électrique résidentielle à Nîmes incluent :</p>
                        </div>
                        <ul className="bulleted-list-cards">
                            <li className="bulleted-list-card bulleted-list-card-6">
                                <h4></h4>
                                <p>La pose de tableaux électriques et la mise en place des circuits électriques</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-6">
                                <h4></h4>
                                <p>La mise en place des circuits électriques</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-6">
                                <h4></h4>
                                <p>L'installation de prises, interrupteurs et points lumineux</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-6">
                                <h4></h4>
                                <p><Link to={'/services/domotique-et-objets-connectes/'}>La mise en place de systèmes de domotique et de gestion de l'énergie <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg></Link></p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-6">
                                <h4></h4>
                                <p>Le câblage pour le téléphone, la télévision et Internet</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-6">
                                <h4></h4>
                                <p>L'installation de systèmes d'éclairage intérieur et extérieur</p>
                            </li>
                        </ul>

                    </div>
                </section>
                <section className="inverted-section">
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Installation électrique commerciale</h2>
                            <p>Les installations électriques commerciales requièrent une expertise spécifique. Cette
                                expertise permet d’assurer la sécurité, l'efficacité énergétique et le confort de vos
                                clients et employés. En tant qu'électricien à Nîmes, nous mettons notre savoir-faire à
                                votre disposition pour réaliser des <strong>installations électriques adaptées</strong> à vos locaux
                                commerciaux.</p>

                            <p>Que vous possédiez un magasin, un restaurant, un hôtel ou un bureau, nous vous proposons
                                des solutions sur-mesure. <Link to={'/blog/conseils-pour-economiser-l-energie-et-reduire-votre-facture-d-electricite/'}>Celles - ci permettent d’optimiser votre consommation
                                énergétique <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg></Link> et garantir un fonctionnement optimal de vos équipements. Nous respectons
                                scrupuleusement les normes en vigueur pour les installations électriques commerciales.
                                De plus, nous vous conseillons sur les meilleures pratiques en matière d'économie
                                d'énergie.</p>

                            <p>Nos services en <strong>installation électrique commerciale</strong> à Nîmes incluent :</p>
                        </div>
                        <ul className="bulleted-list-cards">
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p>La <strong>conception et l'installation</strong> de tableaux électriques
                                    spécifiques aux besoins de
                                    votre commerce</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p>La <strong>mise en place</strong> d'éclairages adaptés à votre activité
                                    et à
                                    vos espaces</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p><strong>L'installation</strong> de systèmes de sécurité, de prises et de
                                    câblage pour les équipements informatiques et de communication</p>
                            </li>
                        </ul>

                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Installation électrique industrielle</h2>
                            <p>Les installations électriques industrielles sont complexes et requièrent une connaissance
                                approfondie des normes et des contraintes spécifiques à ce secteur. En tant
                                qu'électricien expérimenté à Nîmes, nous avons développé une expertise solide en matière
                                d'<strong>installations électriques industrielles</strong>. Cette expertise nous permet d’assurer la
                                sécurité, la fiabilité et la performance de vos équipements.</p>

                            <p>Nous intervenons auprès des usines, des entrepôts, des ateliers et des centres de
                                production. Ainsi, nous concevons et mettons en œuvre des installations électriques
                                adaptées à votre activité et à vos besoins. Notre équipe d'électriciens qualifiés
                                travaille en étroite collaboration avec vous pour comprendre vos exigences. Ainsi, nous
                                vous proposerons des solutions personnalisées et évolutives.</p>

                            <p>Nos services en installation électrique industrielle à Nîmes incluent :</p>
                        </div>
                        <ul className="bulleted-list-cards">
                            <li className="bulleted-list-card bulleted-list-card-6">
                                <h4></h4>
                                <p>La réalisation d'études techniques et l'élaboration de plans électriques</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-6">
                                <h4></h4>
                                <p>L'installation de tableaux électriques industriels et la gestion des circuits de
                                    puissance et de contrôle</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-6">
                                <h4></h4>
                                <p>La gestion des circuits de puissance et de contrôle</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-6">
                                <h4></h4>
                                <p>La mise en place de systèmes d'alimentation électrique pour les machines et les
                                    équipements de production</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-6">
                                <h4></h4>
                                <p><Link to={'/services/eclairage/'}>L'installation de systèmes d'éclairage <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg></Link> et de sécurité adaptés aux environnements
                                    industriels</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-6">
                                <h4></h4>
                                <p><Link to={'/services/depannage-et-maintenance/'}>La maintenance préventive et curative <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg></Link> de vos installations
                                    électriques</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text-block">
                            <p>En tant qu'électricien à Nîmes, nous mettons notre expertise en <strong>installation électrique
                                résidentielle, commerciale et industrielle</strong> à votre service pour vous offrir des
                                solutions adaptées à vos besoins. Notre engagement envers la qualité, la sécurité et la
                                satisfaction de nos clients fait de nous le partenaire idéal pour tous vos projets
                                d'installations électriques à Nîmes et ses environs. N'hésitez pas à nous contacter pour
                                discuter de votre projet et obtenir un devis personnalisé. Ensemble, donnons vie à vos
                                ambitions électriques !</p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>);
}
