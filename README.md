# Rick and Morty web app

## Design

This project uses the following folder structure:

```
ROOT DIR
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── index.html
├── __tests__/
├── public/
└── src
    ├── index.css
    ├── main.tsx
    ├── router.tsx
    ├── types/
    ├── hooks/
    ├── components/
    ├── services/
    ├── store/
    ├── layouts/
    └── lib
        ├── utils/
        └── constants/
    └── pages
        └── home
          ├── home.tsx
          └── components/
        └── character
          ├── character.tsx
          └── components/
```

#### Key aspects:

-   Component-Based architecture
-   Functional components
-   CSS variables defined in **index.css** and used in **tailwind.config** in case they are needed outside tailwind context
-   Every page is a mini-project which means every page sub-folder can potentially have the
    same folders as the src folder
-   Every folder inside **src/** and outside **pages/** represents common features for the whole project

## Tech stack

-   Vite as bundler
-   Typescript
-   TailwindCSS
-   React 18 and React Router DOM
-   GraphQL and Apollo
-   React Testing Library
-   Zustand for global state manager

## Pre-requisites

-   This project was created with Node v20
-   This project uses yarn as package manager. To install yarn run: `npm i -g yarn`

## Installation

To run this project locally run the following commands on your terminal:

-   Clone the repository: `git clone https://github.com/WitchImage/rick-and-morty.git`
-   Navigate to the clones repository folder: `cd rick-and-morty`
-   Install the dependencies: `yarn`
-   Run project: `yarn dev`
-   To run tests: `yarn test`

## Deployment

This app was deployed in AWS using Amplify. You can access the deployed app using this link: https://main.d1dsa2po4tzunr.amplifyapp.com

