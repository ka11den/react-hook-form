# react-hook-form

## Table of Contents

- [Technologies Used](#technologies-used)
- [Naming Convention](#naming-convention)
- [Directory Structure](#directory-structure)
- [Install project](#install-project)

## Technologies Used

- Vite
- React
- Typescript
- React-hook-form

## Project architecture / Directory Structure

The architecture of the project was carried out according to the [Future Slice Design methodology](https://feature-sliced.design/)

- `src/shared` — reusable functionality, detached from the specifics of the project/business.
- `src/entities` — business entities.
- `src/features` - user interactions, actions that bring business value to the user.
- `src/widgets` - compositional layer to combine entities and features into meaningful blocks.
- `src/pages` - compositional layer to construct full pages from entities, features and widgets.
- `src/app` - app-wide settings, styles and providers.

## Prerequisites

- [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Install project

1. Clone repository `git` clone https://github.com/ka11den/react-hook-form.git
2. Run `npm` to install project dependencies.
3. Run `npm run dev` to run dev server.