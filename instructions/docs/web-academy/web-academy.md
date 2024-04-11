---
title: Day 1 | Introductions
sidebar_position: 20
---

:::tip[What you will learn]
- [ ] An overview of the coming week
- [ ] An introduction to DHIS2
- [ ] Fundamental DHIS2 UI Principles
- [ ] Basics of the DHIS2 API
- [ ] Introduction to how we use Git at DHIS2
- [ ] Getting your local developer environment set up
- [ ] How to initialize an app using d2
:::

## Agenda
| Time          | Topic                                                                                                                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8:30          | **Registration and name tags**                                                                                                                                                                           |
| 09:00         | **General introduction**<br/>During the welcome and opening of the Academy, we’ll explain the agenda, give a general overview of what everyone can expect to learn, and how certificates will be issued. |
| 09:15         | **Welcome by Ministry of Health Côte d’Ivoire**                                                                                                                                                           |
| 09:30         | **General introductions**                                                                                                                                                                                |
| 10:30 - 11:00 | _Coffee Break_                                                                                                                                                                                           |
| 11:00 - 13:00 | **Common courses and presentations**<br/><ul><li>DHIS2 Overview - Victor</li><li>UI principles and patterns - Rene</li><li>[API Basics - Mozafar](https://docs.google.com/presentation/d/150mn6WJy7Qcy5DeAd5bbTughn6sqkMWh0dJfYHCBmR4/edit#slide=id.p1)</li><li>Git - Rene</li></ul>                   |
| 13:00 - 14:00 | _Lunch break_                                                                                                                                                                                            |
| 14:00 - 15:00 | **Workshop Day 1 (Environment Setup)**                                                                                                                                                                   |
| 15:00 - 15:30 | _coffee break_                                                                                                                                                                                            |  |
| 15:30 - 16:45 | **Workshop Day 1 (Environment Setup)**                                                                                                                                                                   |

## Environment Setup

In this session, we will make sure your environment is set up correctly, and go through creating a new DHIS2 app using the `d2` CLI. 

:::danger[Important]
Are you able to run `d2 --version` on your terminal? If not, make sure to setup `d2` following the [setup instructions](../before-academy/before-academy.md).
:::

### Initialize a new DHIS2 app

**Note:** Before you initialize your app, please make sure that you navigate using the terminal to the correct directory where you want your work to be saved.

For example, on your terminal, navigate to the directory where you'll be working:

```
cd academy
```

Now that you're in the correct directory, you're ready to create a new DHIS2 app.

#### Create `my-app`

We'll use the [d2-app-scripts init command](https://platform.dhis2.nu/#/scripts/init) to **create a new DHIS2 app**:

```sh
d2 app scripts init my-app
cd my-app
ls
```

:::tip[Note]
If you call `d2 app scripts init my-app`, a new directory will be created at `./my-app` with a pre-populated `package.json`.  You can also run `d2 app scripts init .` to upgrade an existing app in the current directory.
:::

Once you've created `my-app`, your directory structure should look like this:

```
 ── root
    └── my-app
```

### Set up code-style with DHIS2 style

[d2-style](https://cli-style.dhis2.nu/) is a tool that runs [`prettier`](https://prettier.io/) and [`eslint`](https://eslint.org) under the hood with [a standardized configuration](https://github.com/dhis2/cli-style/tree/master/config/js).  It also installs git hooks with [husky](https://github.com/typicode/husky) which will automatically check your code style before making a `git` commit.

Following the DHIS2 styleguide isn't strictly required, but it can be very helpful in ensuring you write clean, readable, and functional code for your DHIS2 apps.

```sh
yarn add @dhis2/cli-style --dev
yarn d2-style add eslint react
yarn d2-style add prettier
yarn d2-style install
```

This will set up the project to automatically follow the DHIS2 style guidelines.

### Add lint and format scripts

Then, add the following scripts to `package.json`:

```js
// package.json
{
    // ...
    "scripts": {
        // ...
        "lint": "yarn d2-style check",
        "lint:staged": "yarn lint --staged",
        "format": "yarn d2-style apply",
        "format:staged": "yarn format --staged"
    }
}
```

And try out your new scripts!

```sh
yarn lint
yarn format
```
### Start your DHIS2 application locally

Please follow [these steps](../resources/set_up_fork.md#start-your-dhis2-application-locally) to start your application on your browser.
