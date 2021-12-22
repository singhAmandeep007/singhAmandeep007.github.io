import techIcons from './../../Common/techIcons';
import { v4 as uuidv4 } from 'uuid';

const data = [
   {
      key: uuidv4(),
      projectName: 'Coders League',
      projectDescription: `A full-fledged interactive social network of **coders** to **share knowledge**.
		\n Users can **create**, **search**, **like**, **bookmark**, **share articles**, **comment**, **follow** and **unfollow**, **update settings** and **subscribe** to top 10 articles weekly.
		\n Developed secure and performant **RESTful API** with error handling, pagination, filter, sort and rate limiting.
		\n Implemented token-based authentication system using **[JWT](https://jwt.io/)**. Users can Signup / Login using email and password or google account and password reset.
		\n Used **[react-hook-form](https://react-hook-form.com/)** for validation, **[redux](https://redux.js.org/)** for state management, **[cloudinary](https://cloudinary.com/)** for media management, and **[sendgrid](https://sendgrid.com/)** to send email.
		`,
      projectSlides: [
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902638/My%20Portfolio/Coders%20League/signup_jcu9bu.png',
            text: 'Signup Page',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/login_nyycsc.png',
            text: 'Login Page',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/homepage_lgpmdt.png',
            text: 'Home Page',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902638/My%20Portfolio/Coders%20League/profilepage_lr0j9r.png',
            text: 'Profile Page',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/createarticle_egmzh8.png',
            text: 'Creating Article',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902639/My%20Portfolio/Coders%20League/previewarticle_q4v5cu.png',
            text: 'Preview Article',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/commentsection_ym2lwu.png',
            text: 'Comment Section',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/articlepage_tzfaye.png',
            text: 'Article Page',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902648/My%20Portfolio/Coders%20League/settingpage_y7uzmx.png',
            text: 'Settings Page',
         },
      ],
      projectStack: [
         techIcons.react,
         techIcons.redux,
         techIcons.semanticui,
         techIcons.mongodb,
         techIcons.nodejs,
         techIcons.expressjs,
         techIcons.postman,
      ],
      projectLinks: {
         live: 'https://codersleague.herokuapp.com',
         github: 'https://codersleague.herokuapp.com/signup',
      },
   },
   {
      key: uuidv4(),
      projectName: 'Covid Tracker India',
      projectDescription: `An **interactive** and **responsive** website with Covid-19 related information and dashboard which displays real time coronavirus statistics for all states of India using map, line chart, donut chart, and table with **theming**.
		\n Used **[styled-components](https://styled-components.com/)** for flexibility, performance and reusability,  **[amcharts](https://www.amcharts.com/)** to build modern, fast and interactive charts, **[semantic-ui-react](https://react.semantic-ui.com/)** in dashboard page, **lazy loading** for performance and **smooth scrolling**.
		\n Used [COVID19-India](https://data.covid19india.org/)API for data.
		`,
      projectSlides: [
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078132/My%20Portfolio/Covid%20Tracker%20India/Homepage_w7xucq.png',
            text: 'Homepage Header',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078132/My%20Portfolio/Covid%20Tracker%20India/Public_Guidelines_cwviuw.png',
            text: 'Interactive and Informative Slides',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/Infopage_s8955i.png',
            text: 'Information Section',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/faq_ovuafi.png',
            text: `FAQ's Section`,
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/dashboardpage_fz2hmb.png',
            text: 'Dashboard Page with theme toggler',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/dashboardtablehover_dkco2z.png',
            text: 'Interactive Table',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/dashboard-timelineserries_pqfu9d.png',
            text: 'Interactive Timeline Series Graph',
         },
      ],
      projectStack: [
         techIcons.react,
         techIcons.styledComponents,
         techIcons.amcharts,
         techIcons.semanticui,
      ],
      projectLinks: {
         live: 'https://covidindia2020.web.app/',
         github: 'https://github.com/amandeepmicro/Covid-19-Tracker_India',
      },
   },
   {
      key: uuidv4(),
      projectName: 'Covid Tracker India',
      projectDescription: `An **interactive** and **responsive** web application which displays the information and statistics of Covid-19 cases for every country.
		\n Has **map** representation of **Covid-19 impact** in each country built using **[leaflet](https://leafletjs.com/)**, sortable table and linear graph.
		\n News page shows the latest news related to the searched term using **[gnews-api](https://gnews.io/)**.
		\n Displays the latest confirmed cases, recovered and deaths for each country using **[disease.sh](https://disease.sh/)** API.
		`,
      projectSlides: [
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640184980/My%20Portfolio/Covid%20Tracker%20World/homepage_frb9cj.png',
            text: 'Homepage',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640184980/My%20Portfolio/Covid%20Tracker%20World/newspage_heqzn3.png',
            text: 'News Page',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640184981/My%20Portfolio/Covid%20Tracker%20World/precautionspage_xqwhi4.png',
            text: 'Precautions Page',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640184980/My%20Portfolio/Covid%20Tracker%20World/usefulelinkspage_b7a9p0.png',
            text: `Useful Links Page`,
         },
      ],
      projectStack: [techIcons.react, techIcons.materialui, techIcons.css],
      projectLinks: {
         live: 'https://covidtracker-34f49.web.app/dashboard',
         github: 'https://github.com/amandeepmicro/Covid-19-Tracker_World',
      },
   },
   {
      key: uuidv4(),
      projectName: 'Movie Vs Movie',
      projectDescription: `A website where user can search and compare 2 movies side by side.
		\n Used **[omdb-api](https://omdbapi.com/)** for movie data.
		`,
      projectSlides: [
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640187008/My%20Portfolio/Movie%20Compare/movie-search_gx0hid.png',
            text: 'Searching Movie',
         },
         {
            image:
               'https://res.cloudinary.com/dryiuvv1l/image/upload/v1640187008/My%20Portfolio/Movie%20Compare/movie-compare_a4mfbf.png',
            text: 'Movie Comparision',
         },
      ],
      projectStack: [techIcons.javascript, techIcons.css, techIcons.html],
      projectLinks: {
         live: 'https://movievsmovie.netlify.app/',
         github: 'https://github.com/amandeepmicro/MovieVsMovie',
      },
   },
];

export default data;
