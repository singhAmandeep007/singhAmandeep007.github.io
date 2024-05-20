<div align='center'>
<svg
		height="100"
		width="100"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    >
<path stroke="#f7e018" stroke-width="3" d="M 6.4 69.8 L 31.2 0 L 39.4 0 L 64.5 69.8 L 71 70.7 L 71 75 L 46.6 75 L 46.6 70.7 L 55.4 69.8 L 50.1 53.9 L 18.9 53.9 L 13.6 69.7 L 22.5 70.7 L 22.5 75 L 0 75 L 0 70.7 L 6.4 69.8 Z M 48.3 48.7 L 37 15.4 L 34.2 5.9 L 31.5 15.7 L 20.6 48.7 L 48.3 48.7 Z" />
</svg>

</div>
<h1 align="center">
  <a href="https://singhamandeep.me/">singhamandeep.me</a>
</h1>
<p align="center">
  Built with <a href="https://react.dev/" target="_blank">React + Vite</a> and hosted with <a href="https://pages.github.com/" target="_blank">Github Pages</a>
	
</p>

<p align="center">
  <a href="https://github.com/singhAmandeep007/singhAmandeep007.github.io/actions/workflows/static.yml" target="_blank">
    <img src="https://github.com/singhAmandeep007/singhAmandeep007.github.io/actions/workflows/static.yml/badge.svg" alt="Netlify Status" />
  </a>
</p>

![demo](/public/demo.png)

## How to run the project ?

To run the project, you can follow these steps:

1. Clone the repository using the following command
   ```sh
   git clone https://github.com/singhAmandeep007/singhAmandeep007.github.io.git
   ```
2. Rename folder and navigate to the project directory
3. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)
   ```sh
   nvm install
   ```
4. Install the dependencies
   ```sh
   npm install
   ```
5. Start the development server
   ```sh
   npm run dev
   ```

## How to customize the project according to your profile ?

1. Change `VITE_APP_NAME` in `.env.development` and `.env.production` file.
2. Change `profilePic.png`, `favicon.ico`, `logo*.png`, `manifest.json` in `public` directory.
   1. You can use
      1. https://realfavicongenerator.net/
      2. https://www.pwabuilder.com/imageGenerator
3. Add/Remove icons in `src/Assets/icons` directory to suite your tech stack. Update their names and path in `src/Common/techIcons.ts` file.
   1. You can use https://worldvectorlogo.com/ to get SVG icons.
4. Add/Remove **Themes** in `src/Common/styles.config.ts` file.
   1. Default theme gets applied in `src/GlobalStyle.tsx` file.
5. Update path of `Loading Component` in `src/Components/Loading/index.tsx` file as per your initials.
   1. I used https://danmarshall.github.io/google-font-to-svg-path/
6. Update `SidebarMenuData`, `HomeData`, `AboutData`, `ProjectsData` files directory as per your information.

## How to check for typescript and eslint errors while developing ?

To toggle checking of TypeScript and ESLint errors while developing using Vite plugins and environment variables, you can follow these steps:

1. Open the `.env.development` file.
2. Toggle the `VITE_ESLINT_DEV_CHECK` | `VITE_TSC_DEV_CHECK` environment variable to `true` or `false` based on your requirement. This configuration enables or disables the TypeScript and ESLint error checking.
3. Save the changes and restart your development server.

## How to create github token to use Github Api ?

1. Github Account (obviously)
2. Github Access Token for your project
3. How to generate Github access token ?
   1. Go to your Github account settings
   2. Click on Developer Settings
   3. Click on Personal Access Token 4. Click on Fine-grained personal access tokens
   4. Click on Generate new token
   5. Give your token a name and select the scopes you want to grant to this token ( Read only )
   6. Click on Generate token
   7. Copy the token and save it `.env.local` file.
   8. Don't share your token with anyone or commit it to your repository.
4. How to add this token in secrets ?
   1. Go to your repository
   2. Click on Settings
   3. Click on Secrets and Variables -> Actions
   4. Click on New repository secret
   5. Add your token and give it the name `VITE_APP_GITHUB_TOKEN`
   6. Click on Add secret
   7. Use this secret in your workflow file

## How to deploy the project ?

## How to generate your own theme ?

## DOCS

### How to use Github Actions to deploy your project ?

### SPA Routing on Github Pages

### Custom Domain with Github Pages
