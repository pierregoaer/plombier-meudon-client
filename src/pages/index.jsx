import React from 'react';

import Layout from "../components/Layout";
import HomeHero from '../components/HomeHero.jsx';
import HomeAboutUs from '../components/HomeAboutUs';
import HomeServices from '../components/HomeServices';
import Testimonials from '../components/Testimonials';
import HomeFAQ from '../components/HomeFAQ';

import '../styles/global.css'

export function Head() {
    return (
        <>
            <html lang="fr"/>
            <title>Électricien Nîmes : Services & Réalisations | Votre Expert en électricité</title>
            <meta name="description"
                  content="Découvrez nos électriciens à Nîmes : installations, rénovations, dépannages et plus encore. Faites confiance à notre équipe pour vos projets électriques."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title"
                  content="Électricien Nîmes : Services & Réalisations | Votre Expert en électricité"/>
            <meta property="og:description"
                  content="Découvrez nos électriciens à Nîmes : installations, rénovations, dépannages et plus encore. Faites confiance à notre équipe pour vos projets électriques."/>
            <meta property="og:image"
                  content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849342/website-lending/electricien-nimes/meta-images/electricien.png"/>
        </>
    )
}

export default function Home() {
    return (
        <>
            <Layout>
                <HomeHero/>
                <HomeAboutUs/>
                <HomeServices/>
                <Testimonials testimonials={[
                    {
                        quote: "Ce plombier a résolu rapidement la fuite d'eau dans notre salle de bains. Le résultat est impeccable! Recommandés vivement !",
                        name: "Stéphanie et Laurent",
                        image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80,f_auto/v1687371284/website-lending/plombier-meudon/testimonials/testimonial-1.webp"
                    },
                    {
                        quote: "Service exceptionnel ! Mon nouveau chauffe-eau a été installé en un clin d'œil. Vraiment satisfait et recommande vivement !",
                        name: "Mathilde et Pierre",
                        image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80,f_auto/v1687371284/website-lending/plombier-meudon/testimonials/testimonial-2.webp"
                    },
                    {

                        quote: "Nous avons trouvée une fuite dans notre cuisine. 2 heures plus tard, la fuite était réparée et le plombier nous a donné de précieux conseils. Nous recommandons sans hésitation !",
                        name: "Sandrine et Guillaume",
                        image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80,f_auto/v1687371284/website-lending/plombier-meudon/testimonials/testimonial-3.webp"
                    }
                ]}/>
                <HomeFAQ/>
            </Layout>
        </>
    );
}
