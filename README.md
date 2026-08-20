# Portfolio Website

This repo contains code for my portfolio website at [roanyeh.com](https://roanyeh.com).


## Deployment

Hosted on [Vercel](https://vercel.com), connected directly to this GitHub repo
(`roanye/portfolio_website`).

1. **Push to `main`.** Any commit merged/pushed to `main` triggers a new deploy.
   (Other branches and PRs get their own preview deployment URLs.)
2. **Picked up by Vercel.** Vercel's GitHub integration watches the repo, pulls
   the new commit, and runs the build — detected automatically as a Vite app
   (`npm run build`, output in `dist/`). No CI config needed on the repo side.
3. **Hosted on Vercel.** The build output is deployed to Vercel's edge network
   under the project's default `*.vercel.app` URL. `vercel.json` includes a
   rewrite rule (`/(.*)` → `/index.html`) so client-side routes (React Router)
   resolve correctly instead of 404ing on refresh/direct navigation.
4. **Custom domain.** `roanyeh.com` was purchased through
   [Squarespace Domains](https://domains.squarespace.com/), and added as a
   custom domain in the Vercel project settings. DNS records for the domain
   are managed in the Squarespace domain dashboard, pointed at Vercel (per
   Vercel's custom domain setup instructions). Vercel handles SSL
   automatically, and production deploys on `main` are what serves that
   domain.


# Credits

Thank you [PedroTech](https://github.com/machadop1407) for your awesome 
[tutorial](https://www.youtube.com/watch?v=ifOJ0R5UQOc) to get me started! 
I'm primarily a backend engineer, so I appreciated learning your methods for 
designing, organizing, and coding frontend software with ReactJS and Tailwind CSS.
 

## Adding Images:

To ensure that images take up the least amount of space as possible, use
[Squoosh](https://squoosh.app/editor). Select **resize** with **width** set to 
**920 px** using the **Lanczos3** method and convert to **webp**.