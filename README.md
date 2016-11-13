# react-redux-router-firebase

Boilerplate for React & Redux, integrated with Firebase authentication.

* [`react`](https://github.com/facebook/react)
* [`redux`](https://github.com/reactjs/redux) (with [`react-redux`](https://github.com/reactjs/react-redux))
* [`react-router-redux`](https://github.com/reactjs/react-router-redux) (with [`react-router`](https://github.com/ReactTraining/react-router))
* [`firebase`](https://firebase.google.com)

## Setup

1. Clone this repo (and reset git by deleting `.git`) then install dependencies with `yarn install` or `npm install`.

2. Login to the [Firebase Console](https://console.firebase.google.com) then choose or create a project:
    * Select *Authentication* in the sidebar then select the *Sign-in method* tab
    * Enable *Email/Password*
    * Click *Web Setup* (top-right corner)
    * Copy config statement to `firebase.config.js`

3. Install the [Firebase CLI](https://firebase.google.com/docs/cli/) with `yarn global add firebase-tools` or `npm install -g firebase-tools`.

4. Login with `firebase login` then initialize a Firebase project with `firebase init`:
    * Choose your Firebase features (all on recommended, default)
    * Choose your Firebase project
    * Use `database.rules.json` (default) for database rule file
    * Do not override database rule file (default)
    * Use **`build`** for public folder
    * Configure as a single-page app (**`y`**)
    * Do not override index file (default)

5. Build with `yarn run build` or `npm run build` and deploy to Firebase Hosting with `firebase deploy`.

## Usage

Same as a [`create-react-app`](https://github.com/facebookincubator/create-react-app) project:

* Run with `yarn start` or `npm start`
* Build with `yarn run build` or `npm run build`
