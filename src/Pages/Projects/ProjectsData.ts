import { v4 as uuidv4 } from "uuid";

import { techLogos, TTechLogo } from "@/Common/techlogos";

import { TSlide } from "@/Components/Slider";

export type TData = {
  key: string;
  projectName: string;
  projectDescription: string;
  projectSlides?: TSlide[];
  projectStack: TTechLogo[keyof TTechLogo][];
  projectLinks: {
    live?: string;
    github?: string;
  };
}[];

export const data: TData = [
  {
    key: uuidv4(),
    projectName: "Reminder App",
    projectDescription: `A **production grade** reminder application following best practices and modern technologies aimed to bring delightful developer experience.
		\n Users can **organize** reminders into lists, set up one-time or recurring **notifications**, track focus time, and **manage** tasks with intuitive CRUD operations.
		\n The project maintains high quality through comprehensive **CI/CD** with GitHub Actions, running **unit** and **e2e** tests with **mock server** integration and automated **coverage** reporting.
		\n Built with **[Redux toolkit and RTK query](https://redux-toolkit.js.org/)** for efficient data fetching and state management, **[React Router](https://reactrouter.com/)** for routing, styled with Tailwind + shadcn/ui.
		\n DX is enhanced with TypeScript for type safety, **[Storybook](https://storybook.js.org/)** for component development, **[ESLint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** for code quality, and **[Husky](https://typicode.github.io/husky/)** for pre-commit hooks.
		`,
    projectSlides: [
      {
        src: "https://res.cloudinary.com/dryiuvv1l/video/upload/v1732476046/reminder-app/reminder-app-small_afenqb.mov",
        text: "Reminder App Demo",
        type: "video",
      },
    ],
    projectStack: [
      techLogos.react,
      techLogos.redux,
      techLogos.tailwind,
      techLogos.msw,
      techLogos.cypress,
      techLogos.playwright,
      techLogos.typescript,
      techLogos.jest,
      techLogos.storybook,
      techLogos.github,
    ],
    projectLinks: {
      live: "https://singhamandeep007.github.io/reminder-app/",
      github: "https://github.com/singhAmandeep007/reminder-app",
    },
  },
  {
    key: uuidv4(),
    projectName: "Coders League",
    projectDescription: `A full-fledged interactive social network of **coders** to **share knowledge**.
		\n Users can **create**, **search**, **like**, **bookmark**, **share articles**, **comment**, **follow** and **unfollow**, **update settings** and **subscribe** to top 10 articles weekly.
		\n Developed secure and performant **RESTful API** with error handling, pagination, filter, sort and rate limiting.
		\n Implemented token-based authentication system using **[JWT](https://jwt.io/)**. Users can Signup / Login using email and password or google account and password reset.
		\n Used **[react-hook-form](https://react-hook-form.com/)** for validation, **[redux](https://redux.js.org/)** for state management, **[cloudinary](https://cloudinary.com/)** for media management, and **[sendgrid](https://sendgrid.com/)** to send email.
		`,
    projectSlides: [
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902638/My%20Portfolio/Coders%20League/signup_jcu9bu.png",
        text: "Signup Page",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/login_nyycsc.png",
        text: "Login Page",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/homepage_lgpmdt.png",
        text: "Home Page",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902638/My%20Portfolio/Coders%20League/profilepage_lr0j9r.png",
        text: "Profile Page",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/createarticle_egmzh8.png",
        text: "Creating Article",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902639/My%20Portfolio/Coders%20League/previewarticle_q4v5cu.png",
        text: "Preview Article",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/commentsection_ym2lwu.png",
        text: "Comment Section",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/articlepage_tzfaye.png",
        text: "Article Page",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902648/My%20Portfolio/Coders%20League/settingpage_y7uzmx.png",
        text: "Settings Page",
        type: "image",
      },
    ],
    projectStack: [
      techLogos.react,
      techLogos.redux,
      techLogos.semanticui,
      techLogos.mongodb,
      techLogos.nodejs,
      techLogos.express,
      techLogos.postman,
    ],
    projectLinks: {
      live: "https://codersleague.onrender.com/",
      github: "https://github.com/singhAmandeep007/coders-league",
    },
  },
  {
    key: uuidv4(),
    projectName: "8 Queens Problem Visualizer",
    projectDescription: `An **interactive** 8 queen problem **visualizer**. User can simulate the solution or manually try solving the problem. It has **speed and board size control** as well to control the speed of simulation and change the chessboard size. Users can experiment with other chess pieces like **rooks**, **bishops**, and **knights** to explore different puzzle variations.`,
    projectSlides: [
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1725087663/eight-queen-problem-visualizer/eight-queen-problem-visualizer-11_w6steb.png",
        text: "Instructions",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/video/upload/v1725087671/eight-queen-problem-visualizer/eight-queen-problem-visualizer-1_hp8psz.mov",
        text: "Demo",
        type: "video",
      },
    ],
    projectStack: [techLogos.react, techLogos.styledcomponents],
    projectLinks: {
      live: "https://singhamandeep007.github.io/eight-queens-problem-visualizer/",
      github: "https://github.com/singhAmandeep007/eight-queens-problem-visualizer",
    },
  },
  {
    key: uuidv4(),
    projectName: "Social Media Feed",
    projectDescription: `A **responsive** Instagram like social media feed. 
		\n The application features a list of **lazy loaded** posts which the user could interact with.
		\n Broken images and videos are handled gracefully, and users can effortlessly navigate through media using the built-in carousel.
		\n Notably, no **external** UI libraries were used in the development of this application."
		`,
    projectSlides: [
      {
        src: "https://res.cloudinary.com/dryiuvv1l/video/upload/v1716229715/social-media-feed/social-media-feed_jtykic.mp4",
        text: "Demo",
        type: "video",
      },
    ],
    projectStack: [techLogos.react, techLogos.typescript, techLogos.vitejs, techLogos.css],
    projectLinks: {
      live: "https://singhamandeep007.github.io/social-media-feed/",
      github: "https://github.com/singhAmandeep007/social-media-feed",
    },
  },
  {
    key: uuidv4(),
    projectName: "Covid Tracker India",
    projectDescription: `An **interactive** and **responsive** website with Covid-19 related information and dashboard which displays real time coronavirus statistics for all states of India using map, line chart, donut chart, and table with **theming**.
		\n Used **[styled-components](https://styled-components.com/)** for flexibility, performance and reusability,  **[amcharts](https://www.amcharts.com/)** to build modern, fast and interactive charts, **[semantic-ui-react](https://react.semantic-ui.com/)** in dashboard page, **lazy loading** for performance and **smooth scrolling**.
		\n Used [COVID19-India](https://data.covid19india.org/)API for data.
		`,
    projectSlides: [
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078132/My%20Portfolio/Covid%20Tracker%20India/Homepage_w7xucq.png",
        text: "Homepage Header",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078132/My%20Portfolio/Covid%20Tracker%20India/Public_Guidelines_cwviuw.png",
        text: "Interactive and Informative Slides",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/Infopage_s8955i.png",
        text: "Information Section",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/faq_ovuafi.png",
        text: `FAQ's Section`,
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/dashboardpage_fz2hmb.png",
        text: "Dashboard Page with theme toggler",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/dashboardtablehover_dkco2z.png",
        text: "Interactive Table",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/dashboard-timelineserries_pqfu9d.png",
        text: "Interactive Timeline Series Graph",
        type: "image",
      },
    ],
    projectStack: [techLogos.react, techLogos.styledcomponents, techLogos.amcharts, techLogos.semanticui],
    projectLinks: {
      live: "https://singhamandeep007.github.io/covid-tracker-india/",
      github: "https://github.com/singhAmandeep007/covid-tracker-india",
    },
  },
  {
    key: uuidv4(),
    projectName: "Rate Limited Fuzzy Search",
    projectDescription: `An application demonstrating **rate limiting** for an API that performs **fuzzy search** on a list of names. 
		\n The configurable rate limiting middleware restricts the number of API requests within a specified time window and allows customization of **whitelisted** and **blacklisted** routes.`,

    projectSlides: [
      {
        src: "https://res.cloudinary.com/dryiuvv1l/video/upload/v1716447304/rate-limit-fuzzy-search/rate-limited-fuzzy-search-1716377105542_abcek0_lncdi0.webm",
        text: "Demo",
        type: "video",
      },
    ],
    projectStack: [techLogos.express, techLogos.nodejs, techLogos.jest],
    projectLinks: {
      github: "https://github.com/singhAmandeep007/rate-limited-fuzzy-search",
    },
  },
  {
    key: uuidv4(),
    projectName: "Covid Tracker World",
    projectDescription: `An **interactive** and **responsive** web application which displays the information and statistics of Covid-19 cases for every country.
		\n Has **map** representation of **Covid-19 impact** in each country built using **[leaflet](https://leafletjs.com/)**, sortable table and linear graph.
		\n News page shows the latest news related to the searched term using **[gnews-api](https://gnews.io/)**.
		\n Displays the latest confirmed cases, recovered and deaths for each country using **[disease.sh](https://disease.sh/)** API.
		`,
    projectSlides: [
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640184980/My%20Portfolio/Covid%20Tracker%20World/homepage_frb9cj.png",
        text: "Homepage",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640184980/My%20Portfolio/Covid%20Tracker%20World/newspage_heqzn3.png",
        text: "News Page",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640184981/My%20Portfolio/Covid%20Tracker%20World/precautionspage_xqwhi4.png",
        text: "Precautions Page",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640184980/My%20Portfolio/Covid%20Tracker%20World/usefulelinkspage_b7a9p0.png",
        text: `Useful Links Page`,
        type: "image",
      },
    ],
    projectStack: [techLogos.react, techLogos.materialui, techLogos.css],
    projectLinks: {
      live: "https://singhamandeep007.github.io/covid-tracker-world",
      github: "https://github.com/singhAmandeep007/covid-tracker-world",
    },
  },
  {
    key: uuidv4(),
    projectName: "Movie Vs Movie",
    projectDescription: `A website where user can search and compare 2 movies side by side.
		\n Used **[omdb-api](https://omdbapi.com/)** for movie data.
		`,
    projectSlides: [
      {
        src: "https://res.cloudinary.com/dryiuvv1l/video/upload/v1716382367/movieVsMovie/movie-vs-movie_kvalt3.mp4",
        text: "Demo",
        type: "video",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640187008/My%20Portfolio/Movie%20Compare/movie-search_gx0hid.png",
        text: "Searching Movie",
        type: "image",
      },
      {
        src: "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640187008/My%20Portfolio/Movie%20Compare/movie-compare_a4mfbf.png",
        text: "Movie Comparision",
        type: "image",
      },
    ],
    projectStack: [techLogos.javascript, techLogos.css, techLogos.html],
    projectLinks: {
      live: "https://singhamandeep007.github.io/movie-vs-movie",
      github: "https://github.com/singhAmandeep007/movie-vs-movie",
    },
  },
];
