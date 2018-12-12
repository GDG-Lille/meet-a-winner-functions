# Cloud Functions / Meet a Winner // GDG Lille ([@GDGLille](https://twitter.com/GDGLille)) 

PROD - https://meet-a-winner.gdglille.org

[![CircleCI](https://circleci.com/gh/GDG-Lille/meet-a-winner-functions/tree/master.svg?style=svg)](https://circleci.com/gh/GDG-Lille/meet-a-winner-functions/tree/master)

STAGING - https://meet-a-winner-staging.gdglille.org

[![CircleCI](https://circleci.com/gh/GDG-Lille/meet-a-winner-functions/tree/develop.svg?style=svg)](https://circleci.com/gh/GDG-Lille/meet-a-winner-functions/tree/develop) 

## Made with ...
* [NPM](https://www.npmjs.com/) 
* [Typescript](https://www.typescriptlang.org/)
* [Firebase](https://firebase.google.com)

## How to build in production ?

Nothing to do, [Circle CI](https://circleci.com/gh/GDG-Lille) does it :) (@see .circleci/config.yml)

## How to test locally ?

* Run `npm install` to install all dependancies.
* Run `npm run serve` to deploy a dev server.

## What's in the box ?

### findAllTweetsByQuery (callable)

Retrieve all tweets with the given query.

### findAndShuffleAllParticipantsForTwitterDraw (callable)

Retrieve all retweets of the given tweet and shuffle them 3 times by default.


## Contact via [Issues](https://github.com/GDG-Lille/meet-a-winner-functions/issues) on the [meet-a-winner](https://github.com/GDG-Lille/meet-a-winner) project
Helpful for **question**, **bug** and **contribution request**.

