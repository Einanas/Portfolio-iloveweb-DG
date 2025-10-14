# Sprint 14
## Sprint 14

## Installment
Install the project with [eleventy](https://11ty.rocks/posts/create-your-first-basic-11ty-website/) once you're done.

### Begin the Project
Open a new directory in your editor of choice, and then in your terminal do the following command to start a brand new project:

`npm init -y`

Then, install Eleventy. For a basic site like this, eleventy itself is our only dependency!

`npm install @11ty/eleventy`

Once the installs complete, open package.json and update the default scripts section to the following. This enables a start command to run 11ty with hot-reload, which is provided by Browsersync that comes bundled as part of 11ty's --serve directive.

 ```JSON 
  "scripts": {
    "start": "npx @11ty/eleventy --serve",
    "build": "npx @11ty/eleventy"
  },
```