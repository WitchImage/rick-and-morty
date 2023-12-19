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
-   Calls to external APIs are stored inside **services/** folder

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

## How to use the API

For the purposes of this project, there are two major models to query with GraphQL in the Rick and Morty API: **Character** and **Characters**. Type definitions for both models can be found in this file: https://github.com/WitchImage/rick-and-morty/blob/main/src/types/index.ts

-   The query for **Characters** looks like the following:

```
query Characters {
  characters(page: $page, filter: { name: $name, species: $species, status: $status, gender: $gender }) {
    results {
      id
      name
      status
      species
      type
      gender
      image
    }
    info {
      pages
      next
      prev
    }
  }
}
```

Where page, name, species and status can be passed dynamically

-   The query for **Character** looks like the following:

```
query Character {
  character(id: $id) {
    id
    name
    status
    species
    gender
    image
  }
}
```

Where id can be passed dynamically

## Deployment

This app was deployed in AWS using Amplify. You can access the deployed app using this link: https://main.d1dsa2po4tzunr.amplifyapp.com

