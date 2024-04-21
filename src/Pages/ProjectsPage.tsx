import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { techIcons } from "@/Common/techIcons";

import { Slider } from "@/Components/Slider";

import { ExternalLinkWithIcon, SectionContainer, SectionTitle, Wrapper } from "../Components/CommonElements";

export const ProjectsPage = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <SectionTitle>Projects I’ve Developed</SectionTitle>
        <ul style={{ listStyle: "none" }}>
          {data.map(({ key, projectName, projectDescription, projectStack, projectSlides, projectLinks }) => {
            return (
              <Project key={key}>
                <div className="project-image">
                  <WindowFrame>
                    <div className="window-buttons">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p className="window-title">{projectName}</p>
                  </WindowFrame>
                  <Slider slides={projectSlides} />
                </div>
                <div className="project-content">
                  <div className="project-title">
                    <h3>&lt; {projectName} /&gt;</h3>
                  </div>
                  <div className="project-description">
                    <ReactMarkdown
                      children={projectDescription}
                      components={{
                        a: ({ node, ...props }) => (
                          <ExternalLinkWithIcon
                            {...props}
                            fontSize="1.2rem"
                          />
                        ),
                      }}
                    />
                  </div>
                  <div className="project-stack">
                    <ul>
                      {projectStack.map((tech, i) => {
                        return (
                          <li key={tech.label}>
                            <img
                              width={20}
                              height={20}
                              src={tech.logo}
                              alt={tech.label}
                              title={tech.label}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="project-links">
                    <a
                      href={projectLinks.live}
                      aria-label="external link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <RiExternalLinkFill />
                    </a>
                    <a
                      href={projectLinks.github}
                      aria-label="github link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <RiGithubFill />
                    </a>
                  </div>
                </div>
              </Project>
            );
          })}
        </ul>
      </Wrapper>
    </SectionContainer>
  );
};

const data = [
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
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902638/My%20Portfolio/Coders%20League/signup_jcu9bu.png",
        text: "Signup Page",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/login_nyycsc.png",
        text: "Login Page",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/homepage_lgpmdt.png",
        text: "Home Page",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902638/My%20Portfolio/Coders%20League/profilepage_lr0j9r.png",
        text: "Profile Page",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/createarticle_egmzh8.png",
        text: "Creating Article",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902639/My%20Portfolio/Coders%20League/previewarticle_q4v5cu.png",
        text: "Preview Article",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/commentsection_ym2lwu.png",
        text: "Comment Section",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902637/My%20Portfolio/Coders%20League/articlepage_tzfaye.png",
        text: "Article Page",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1639902648/My%20Portfolio/Coders%20League/settingpage_y7uzmx.png",
        text: "Settings Page",
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
      live: "https://codersleague.onrender.com/",
      github: "https://github.com/singhAmandeep007/codersLeague",
    },
  },
  {
    key: uuidv4(),
    projectName: "8 Queens Problem Visualizer",
    projectDescription: `An **interactive** 8 queen problem **visualizer**. User can simulate the solution or manually try solving the problem. It has **speed and board size control** as well to control the speed of simulation and change the chessboard size.`,
    projectSlides: [
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1651896099/My%20Portfolio/My%20Portfolio/p-3_wvyl9s.png",
        text: "Information Modal",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1651896099/My%20Portfolio/My%20Portfolio/p-2_eur9j9.png",
        text: "Manual Mode",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1651896099/My%20Portfolio/My%20Portfolio/p-1_xt4bkd.png",
        text: "Dashboard",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1651896280/My%20Portfolio/My%20Portfolio/p-4_wuddpw.png",
        text: "Simulation Mode",
      },
    ],
    projectStack: [techIcons.react, techIcons.styledComponents],
    projectLinks: {
      live: "https://8-queen-visualizer.netlify.app/",
      github: "https://github.com/singhAmandeep007/eight-queens-problem-visualizer",
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
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078132/My%20Portfolio/Covid%20Tracker%20India/Homepage_w7xucq.png",
        text: "Homepage Header",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078132/My%20Portfolio/Covid%20Tracker%20India/Public_Guidelines_cwviuw.png",
        text: "Interactive and Informative Slides",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/Infopage_s8955i.png",
        text: "Information Section",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/faq_ovuafi.png",
        text: `FAQ's Section`,
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/dashboardpage_fz2hmb.png",
        text: "Dashboard Page with theme toggler",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/dashboardtablehover_dkco2z.png",
        text: "Interactive Table",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640078131/My%20Portfolio/Covid%20Tracker%20India/dashboard-timelineserries_pqfu9d.png",
        text: "Interactive Timeline Series Graph",
      },
    ],
    projectStack: [techIcons.react, techIcons.styledComponents, techIcons.amcharts, techIcons.semanticui],
    projectLinks: {
      live: "https://covidindia2020.web.app/",
      github: "https://github.com/singhAmandeep007/Covid-19-Tracker_India",
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
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640184980/My%20Portfolio/Covid%20Tracker%20World/homepage_frb9cj.png",
        text: "Homepage",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640184980/My%20Portfolio/Covid%20Tracker%20World/newspage_heqzn3.png",
        text: "News Page",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640184981/My%20Portfolio/Covid%20Tracker%20World/precautionspage_xqwhi4.png",
        text: "Precautions Page",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640184980/My%20Portfolio/Covid%20Tracker%20World/usefulelinkspage_b7a9p0.png",
        text: `Useful Links Page`,
      },
    ],
    projectStack: [techIcons.react, techIcons.materialui, techIcons.css],
    projectLinks: {
      live: "https://covidtracker-34f49.web.app/dashboard",
      github: "https://github.com/singhAmandeep007/Covid-19-Tracker_World",
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
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640187008/My%20Portfolio/Movie%20Compare/movie-search_gx0hid.png",
        text: "Searching Movie",
      },
      {
        image:
          "https://res.cloudinary.com/dryiuvv1l/image/upload/v1640187008/My%20Portfolio/Movie%20Compare/movie-compare_a4mfbf.png",
        text: "Movie Comparision",
      },
    ],
    projectStack: [techIcons.javascript, techIcons.css, techIcons.html],
    projectLinks: {
      live: "https://movievsmovie.netlify.app/",
      github: "https://github.com/singhAmandeep007/MovieVsMovie",
    },
  },
];

const Project = styled.li`
  display: grid;

  gap: 2rem;

  :nth-child(odd) {
    grid-template-areas: "image content";
    grid-template-columns: 3fr 2fr;
  }
  :nth-child(even) {
    grid-template-areas: "content image";
    grid-template-columns: 2fr 3fr;
  }

  margin: 5rem 0;
  min-height: calc(100dvh - 10rem);

  @media (max-width: ${({ theme }) => theme.bpMedium}) {
    min-height: calc(100vh - 20rem);

    :nth-child(odd) {
      grid-template-areas:
        "image"
        "content";
      grid-template-columns: 1fr;
    }
    :nth-child(even) {
      grid-template-areas:
        "image"
        "content";
      grid-template-columns: 1fr;
    }

    grid-template-rows: min-content 1fr;
  }

  .project-image {
    grid-area: image;
  }

  .project-content {
    grid-area: content;
  }

  .project-title {
    font-size: 2rem;
    color: var(--color-primary);
    margin-bottom: 2rem;
  }

  .project-description {
    p {
      margin-bottom: 0.8rem;
      font-size: 1.3rem;
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      margin: 0.5rem 1rem 0 0;
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      border: 2px solid var(--color-primary);

      &:hover,
      &:focus {
        color: var(--color-primary);
        svg {
          transform: scale(1.5);
        }
      }
    }
  }

  .project-stack {
    margin: 1rem 0;
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      list-style: none;

      li {
        margin: 0.5rem 1rem 0 0;

        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover,
        &:focus {
          background-color: transparent;
          img {
            transform: scale(2);
          }
        }
        transition: background-color 0.2s ease-in-out;
      }

      img {
        width: 50%;
        height: 100%;
        transition: transform 0.4s ease;
      }
    }
  }
`;

const WindowFrame = styled.div`
  width: 100%;
  background-color: #393939;
  color: #ffffff;
  display: flex;
  padding: 0.5rem;
  align-items: center;

  .window-buttons {
    display: flex;
    align-items: center;

    span {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      margin: 0 2px;
      display: inline-block;
      &:nth-child(1) {
        background-color: #ff5f57;
      }
      &:nth-child(2) {
        background-color: #ffbd2e;
      }
      &:nth-child(3) {
        background-color: #28ca41;
      }
    }
  }
  .window-title {
    flex: 1;
    text-align: right;
    font-size: 1rem;
    color: #ffffff;
  }
`;
