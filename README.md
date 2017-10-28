# Aspire Task Manager
>Note: Under development, not really working yet.

## Installation

You can clone this project from [GitHub](https://github.com/AlexFrozen/aspire-task-manager) via `SSH`
```sh
git clone git@github.com:AlexFrozen/aspire-task-manager.git
```
Or via `HTTPS`
```sh
git clone https://github.com/AlexFrozen/aspire-task-manager.git
```
Once it's done, change dir to project and download dependencies:
```sh
cd aspire-task-manager
npm install
```
Next step is building project
```sh
npm run build
```
>Note: Project made with `npm` version `3.10.10` and `node` version `v6.11.4`. Older version should work in theory but it's not tested.

To start project just type
```sh
npm start
```
If you see `Listening on 3000` string, all is good. To view current follow URL [http://localhost:3000/static/test.html](http://localhost:3000/static/test.html)<br>
To read development documentation visit [http://localhost:3000/static/docs/index.html](http://localhost:3000/static/docs/index.html)
## Project files

```
aspire-task-manager/
  README.md            This file
  Docs/                Development documentation folder
    images/            Images for documentation
      *.png
    index.html         Documentation main file
    *.html
  src/                 Source code folder
    api/               REST API
      mongodb-client/  Native MongoDB driver
        index.js       Collection of API functions interacting with DB
        *.js           API functions, one per file
    spapp/             SPA components
      *.jsx
      *.css
  static/              Assets files for express module
    docs -> ../Docs    Symlink to documentation
    test.html          SPA loader page
    app.js             Java Script bundle built with 'npm run build'
  index.js             Server-side entry point source
  server.js            Server application built with 'npm run build'
  webpack.config.js    Configuration file for webpack
  package.json         npm project file
```
