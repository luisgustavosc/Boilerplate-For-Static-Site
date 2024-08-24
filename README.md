# Boilerplate For Static Site

This boilerplate setup makes it easier to start building static sites with modern build tools. 

## Features

- [Webpack 5](https://webpack.js.org/) set up for a development environment that includes live reloading with webpack-dev-server, as well as a production environment where code is minified and optimized with caching techniques to ensure files produced by webpack compilation can remain cached unless their content has changed.
- [Bootstrap v5](https://getbootstrap.com/docs/5.3/getting-started/introduction/) preinstalled as UI framework.
- Modern Technologies: Full support for HTML5, JavaScript (Vanilla and ES6) and CSS (Sass)
- SASS - Modular Folder Structure.

## Getting Started

You can create a new repository from this template by clicking on this link. [Generate Repo](https://github.com/luisgustavosc/static-site-boilerplate/generate).

After you clone your repository and you are in the root of the project you'll need to install the dependencies.


   ```bash
   npm install
   ```

## Available Scripts 
In the project directory, you can run:

   ```bash
   npm start
   ```

Runs the project in the development mode.<br>
Open [http://localhost](http://localhost) to view it in the browser.<br>
The page will automatically reload if you change any of the source files.
<br><br>

   ```bash
   npm run build
   ```
Generates the production build.<br>
The build artifacts will be stored in the `build/` directory.<br>

## 🐋 Docker 
First, make sure you have [Docker](https://www.docker.com/products/docker-desktop) installed and running on your system to proceed.

This repository includes a Docker Compose config file to test your static site. Both the production or development environment work in the container.
This is based on the `APP_ENV` variable that is set in the [.env](.env) file. Allowed values are `dev` and `prod`.

To run it, simply run:
   ```bash
   docker-compose up --build
   ```
And then you can open [http://localhost](http://localhost) to view it in the browser.
## License
[MIT](LICENSE)
