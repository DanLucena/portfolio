# Hello Everyone 👋 !

Welcome to my portfolio, with the development of this small project I sought to improve some development techniques and take the opportunity to show some of the knowledge I acquired throughout my learning process on a website.

## Technologies

To build the application, the NextJS framework was used and for the styling part, the tailwind library was used.

For the architecture, Atomic Design was used, which seeks to apply a system similar to that of an organism where we have the smallest possible parts that are **atoms** and using these parts we can create larger parts such as **molecules** and the junction of this other part creates **organisms**. This makes it easy to reuse components. In addition, the storybook library was also used for the documentation of the components.

And to have a little more reliability in the functioning of the code, automated tests were made for each component.

CI configured so that every time a new PR is opened, run all the tests and ensure that there was no regression and CD using Vercel to make a new deployment as the changes are merged into the main branch.

## How to run

To run the project just follow the next steps.

- Clone the repository
- Run yarn install
- Run `yarn dev` to run development environment
- Run `yarn storybook` to run storybook documentation
- Run `yarn test` to run the test suites.
