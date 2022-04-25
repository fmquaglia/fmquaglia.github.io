# fabricio.cloud

Github pages repo for https://fabricio.cloud.

## Architecture

### Overview

The website is hosted at Github Pages, and tt uses Gatsby.js to build static 
content. 

### Running it locally

**Prerequisites**: Node v14.+ 

  1. Clone this repo
  2. Run `npm install`
  3. Run `npm run develop`
     1. head over http://localhost:8000/
     2. graphql development backend at http://localhost:8000/___graphql

### Build and Deployment

Github Pages is configured to grab its content from the `docs` folder on the 
`master` branch.

Generate the website pages running `npm build`.

**Important**: The `docs` folder must always contain a file named `CNAME` with 
the following content: `fabricio.cloud`. This is to ensure that the custom 
domain works.

Github Pages can take up to 20 minutes to pick up the latest content.
