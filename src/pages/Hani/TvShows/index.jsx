import { Navbar } from "../../../components/Hani/Navbar";
import { Landing } from "../../../components/Hani/Landing";
import { SwiperApp } from "../../../components/Hani/SwiperApp";
import { Grid } from "../../../components/Hani/Grid";

import { FooterInner } from '../../../components/Manar/FooterInner';


export const TvShows = () => {
    document.body.style.background = '#191b1b';

    return (
        <>
            <Navbar />
            <Landing />
            <SwiperApp axios_url='http://127.0.0.1:8000/api/serieses' slider_name='Trending Serieses' />
            <Grid axios_url='http://127.0.0.1:8000/api/serieses' slider_name='Serieses' />
            <FooterInner />
        </>
    )
}