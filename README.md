# Winton Road Nursery School Site

The **Winton Road Nursery School** (WRNS) site is designed primarily as a marketing platform for the school. Additional functionality includes parent information, documents, and communications. It includes features such as announcements, an events calendar, teacher profiles, and downloadable forms.

## Table of Contents

- [Installation Instructions](#installation-instructions)
- [NextJS and REACT](#nextjs-and-react)
- [Development Tools](#development-tools)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Common Tasks and Troubleshooting](#common-tasks-and-troubleshooting)
- [Deployment Instructions](#deployment-instructions)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)

## Installation Instructions

1. Ensure Node.js and NPM are installed.
2. Clone the repository: `git clone https://github.com/WRNS/wrns.github.io.git`
3. Navigate to the project directory: `cd wrns.github.io`
4. Install dependencies: `npm install`
5. Run the development server: `npm run dev`
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## NextJS and REACT

This project uses NextJS and REACT framework to streamline the development process.

### Overview of NextJS

Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. It is widely used for its performance and ease of use.

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

### Overview of React

React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.

- [React Documentation](https://reactjs.org/docs/getting-started.html) - Learn about React features and API.

### Development Tools

- **JavaScript**: As this project will be maintained by people of various skill levels in the future, the use of JavaScript (JS) was chosen over using TypeScript (TS).
- **SASS**: The site's styling has been done using SASS to make the CSS more compact. [SASS Documentation](https://sass-lang.com/documentation/#:~:text=Contents&text=Sass%20is%20a%20stylesheet%20language,a%20fully%20CSS%2Dcompatible%20syntax.) - learn about SASS.
- **JEST**: Unit testing for the application is handled by JEST, the preferred REACT testing library. [JEST Documentation](https://jestjs.io/docs/getting-started)
- **Husky**: Husky adds pre-commit functionality to the application. If linting or unit testing fails due to change that have been made, Husky will block that commit until all issues have been resolved.

### Project Structure

- **Pages**: Located in `src/app`, these define the different routes of the app. Each folder within `src/app` that includes a `page.js` file dynamically create a page route in NextJS.
- **Components**: Located in `src/app/_components`, these are reusable parts of the UI.
- **Styles**: The mixins and global styles are located in `src/styles`. These define the standard site styles. Page-specific styles are located within the page folder, such as `src/app/teachers/teachers.scss`.
- **Data**: Located in `src/data`, these JSON files store static data for the app. The data for the announcements component and the calendar page can be found here.
- **Static Assets**: Located in `/public/`. Images, documents and PDFs, fonts, SVGs, and other static site assets should be placed here. During production builds, items in the public folder are added to the root level of the `/out` folder. Public folder assets should be linked to with a simple slash followed by the asset folder name: i.e. `/images/example.jpg`

### Making Changes

- To edit a page, modify the corresponding file in `src/app`.
- To update styles, edit the SCSS files in `src/styles`.
- To add a new announcement, update `src/data/announcements.json`.

## Common Tasks and Troubleshooting

### Common Tasks

#### Updating Announcements

Modify `src/data/announcements.json`.

There are six kinds of announcements, each with its own icon that is used in the announcement banner.

- general: "📢"
- event: "📅"
- alert: "⚠️"
- hiring: "🔍"
- promotion: "🎉"
- weather: "🌦️"

The schema for announcements is as follows:

<code>{
"type": "general", // string - determines the icon to display from the list above. If no type is provided, defaults to general.
"message": "School starting soon!", // string - the announcement message. Can take HTML tag inputs such as \<a> for links.
"startDate": "07-01-2024", // string - the first day the announcement should appear.
"endDate": "08-01-2024" // string - the final day the announcement should appear.
}</code>

#### Adding New Calendar Events

Update the events JSON file located in `src/data`.

The schema for events is as follows:

<code>{
"fromDate": "09/13/2024", // string - date of an event OR starting date of a multi-day event, such as school closures.
"toDate": null, // string or null - end date of multi-day events.
"time": "7pm", // string or null - time for a specific, single-day event
"title": "Event Title", // string - title of the event.
"description": "Description of event." // string - the descriptive text of the event. rendered as a single paragraph. does not accept HTML tags. Suggested limit of roughly 200 characters.
}</code>

#### Modifying Teacher Profiles

Add or remove `<ProfileCard />` components in `src/app/teachers/page.js`.

### Production Builds

When an update to the project is ready to be deployed to http://www.wintonroad.org, developers should do the following:

1. Create a new branch: `git checkout -b feature/YourFeature`
2. Run a build via `npm run build`.
   - The build command requires all JEST tests _and_ the linter to pass in order to create a new PROD build.
   - A successful build creates an `/out` folder, which is the NextJS version of a `/dist` folder.
3. Smoke test the app locally on [http://localhost:3000](http://localhost:3000)
4. Commit your changes: `git commit -m 'Add some feature'`.
5. Push to the branch: `git push`.
6. Open a Pull Request (PR) to merge your feature branch into the `master` branch.

### Troubleshooting

- **Development Server Not Starting**: Ensure all dependencies are installed (`npm install`). Check for any error messages in the console.
- **Styles Not Updating**: Make sure you are editing the correct SCSS file and that the changes are saved. Restart the development server if necessary.
- **Images Not Loading**: Verify the image paths and ensure the images are located in the `public/images` directory.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact Information

For any questions or concerns, please contact Winton Road's (webmaster)[mailto:mcurtis2@gmail.com] or operations manager [operationsmanager@wintonroad.org](mailto:operationsmanager@wintonroad.org).
