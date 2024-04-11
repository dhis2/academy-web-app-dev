---
title: Before the Academy (setup)
sidebar_position: 5
---

# DHIS2 Web App Academy Setup

In this academy, we will use the DHIS2 App Platform to build DHIS2 apps. To do this you need to get the `d2` CLI working. We will also be working in GitHub, and you need to have a GitHub account.


:::danger[Important!]
Before the academy, please make sure:

- [ ] You have `d2` CLI installed and running using [the instructions](#setting-up-d2-cli) below. If you have any issues, then reach out on the Slack channel.
- [ ] You have a [GitHub](https://github.com/) account ready to use, and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) is installed  and running locally.
:::

We also _recommend_ that you [setup a local DHIS2 instance](#running-a-local-backend-instance). This will ensure that you can work independently locally and don't depend on the the internet connection to reach the backend. It's also a good way to explore DHIS2 generally beyond the academy.


## Setting up d2 CLI

We will make use of the DHIS2 command-line interface, d2, for initializing apps. Before we start the academy, it is therefore _strongly_ recommended that you set this up.

While yarn 1 and node are necessary to install d2, there are a number of options for setting up your development environment. We provide some suggestions below; you may set up your development environment in another way (as long as d2 is properly installed and is working).

### Basic setup

#### Windows users: install Window Linux Subsystem

If you have a Windows machine, it is _strongly_ recommended that you use Windows Linux Subsystem. DHIS2 tools are built for Unix-based systems (e.g. Linux or MacOS), and will generally be more stable when using a Unix-based environment. Windows Linux Subsystem allows you to run a Linux environment directly from your Windows machine. You can find out more at the WSL documentation [here](https://learn.microsoft.com/en-us/windows/wsl/about). [Installation instructions](https://learn.microsoft.com/en-us/windows/wsl/install) are provided in that documentation.


#### Node

You can download the latest LTS version of Node on [Node's download page](https://nodejs.org/en/download). Follow the instructions, to complete the installation.

:::note[Node versions]
If you run into any problems when using the LTS version of Node, it might be useful to try using Node 16.
:::


#### NVM
We recommend that you use nvm to manage Node versions. See the [nvm documentation](https://github.com/nvm-sh/nvm?tab=readme-ov-file#about) for instructions on how to install.

#### Yarn

We will use yarn for package management.

:::warning[Yarn 1]
- Note that we are using yarn 1. yarn 2 is _not_ supported currently.
:::

If you do not have installed already, you can run the following:

```sh
npm install --global yarn
```

See [yarn installation documentation](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) for more details.



### d2

When you have your development environment set up, you can run the following to add the d2 cli/

```sh
yarn global add @dhis2/cli
```


### Verifying d2 setup

To test that d2 is successfully installed, open a new terminal window and run the following:

```sh
d2 --version
```

If you get the version back (e.g. `4.2.3`), your d2 is installed correctly.


## Running a local backend instance

DHIS2 web apps are designed to be connected to a DHIS2 backend. Throughout the academy, we will have a dedicated DHIS2 instance, https://dev.im.dhis2.org/academy-web, that can be used as a backend instance. However, this instance requires an internet connection. For long-term development, it might be useful to set up your own local DHIS2 instance, so that you can build apps even without an internet connection.

The easiest way to set up a local DHIS2 instance is to use Docker. [This page](https://developers.dhis2.org/docs/tutorials/dhis2-docker) has details on how to set up your local instance with Docker. 


## GitHub Account

In this course, we will be working with GitHub. If you do not already have a personal GitHub account, please sign up for an account at https://github.com/.

