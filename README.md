<div align="center">
<h1 align="center">Github README Check</h1>

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ajmarkow/readme-api-reboot.svg)](https://github.com/ajmarkow/readme-api-reboot/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/ajmarkow/readme-api-reboot.svg)](https://github.com/ajmarkow/readme-api-reboot/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Check all your public GitHub repositories for a README.md in seconds. Try it out at <a href='https://readme.ajm.codes'>https://readme.ajm.codes</a>.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Ever wanted to see if you had any public Github repositories without a README, so you could make sure they're all your public code is well-documented? Now you can! This is the front end for an API that takes your github username and returns a list of your public repositories, as well as if a README exists for that repository.

## 🏁 Getting Started <a name = "getting_started"></a>

- Git clone the project to your system and set up an instance of the API that backs this front-end

### Prerequisites

You'll need to have the API that pairs with this front end deployed on AWS.  Repository for that API at [this repository](https://www.github.com/ajmarkow/readme-stats-api).
### Installing

- Run this command to set up, or deploy to your favorite hosting provider like AWS Amplify or Vercel.

```
npm install
```

## 🎈 Usage <a name="usage"></a>

- Enter github username into the form on the main page.
- Hit check and a list of repositories for a given Github user, as well as whether or not they have READMEs is generated.

## 🚀 Deployment <a name = "deployment"></a>

Deploying requires defining a few secrets in .env or the environmental variables of your hosting provider.  You must define the following values
```
REACT_APP_README_API_KEY = API Key for your AWS API Gateway README API
```

## ⛏️ Built Using <a name = "built_using"></a>

- [Serverless Framework](https://www.serverless.com/) - Back End
- [React](https://reactjs.org/) - Front End
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Create React App](https://github.com/facebook/create-react-app)


## ✍️ Authors <a name = "authors"></a>

- [@ajmarkow](https://github.com/ajmarkow) - Idea & Initial work


## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Octokit was such a pleasure to work with and indispensable to build this project.
- Serverless Stack really helped me learn building the API for this application using the serverless framework.