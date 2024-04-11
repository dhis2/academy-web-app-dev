---
title: Day 4 | Data Store
sidebar_position: 60
---

:::tip[What you will learn]
- [ ] DHIS2 Data stores
- [ ] Offline support
:::

:::danger[work in progress]
Work In Progress - owned by **Sakibou**.
:::

## Agenda
| Time | Topic | |
| --- | --- | --- |
| 09:00 - 10:30 | Opening Workshop | Data Store |
| 10:30 - 11:00 | _coffee break_ | |
| 11:00 - 12:30 | Workshop | Data Store |
| 12:30 - 13:30 | _lunch break_ | |
| 13:30 - 15:00 | Workshop | Generalizability with Data stores |
| 15:00 - 15:30 | _coffee break_ | |
| 15:30 - 16:30 | Workshop | Offline capabilities |
| 16:30 - 16:45 | Closing | |
| 16:45 - 17:00 | Q&A (with French support) | |

## Presentation
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQLPboeTmPi_dpvfOcAE1LaiXmdjX-5-d6LKMjGssBgKlre8O0ZwDfr_Krf7DsMxXneeuVCdkn_NyVS/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>


## Data Store Task Instructions

:::warning
For this task, we will use a separate branch `datastore-workshop` rather than _main_ as in the previous days.
:::

To get started, make sure to set `upstream` to point to the original repository you forked:

```shell
git remote add upstream git@github.com:dhis2/academy-web-app-dev.git
```

then run

```
git fetch upstream
```

and finally

```
git checkout datastore-workshop
```

For for this task, always make sure you're always working on the correct branch `datastore-workshop` and when you've completed the tasks below, please follow the [instructions](../resources/set_up_fork#work-on-this-branch-and-commit-changes-as-you-work-on-tasks) for submitting your assignment.

## Task 1 - Initialize the DataStoreProvider

- In this task you will import a DataStoreProvider and render it as a wrapper around the application contents
- Specify the namespace "my-custom-app-namespace-1234"
- Check comments `@TODO-1`
- You will be working in the `src/App.js` component

## Task 2 - Render a list of saved visualization objects

- Check the comments in the `src/VisualizationList.js` component starting with `@TODO-2`
- In this task you will use the `useSavedObjectList` hook to show a list of saved objects in your userDataStore namespace

## Task 3 - Support adding new visualizations

- Here you will be working in the `src/VisualizationList.js` and `src/AddControl.js` components
- Check for comments starting with `@TODO-3`
- The goal of this task is to make the Add button work

## Task 4 - Support deleting visualizations

- Here you will be working in the `src/RemoveButton.js` component
- Check for comments starting with `@TODO-4`
- The goal of this task is to make the Remove buttons work

## Task 5 - Add offline support for your app

- Enabe PWA in `d2.config.js`
- Use the `useOnlineStatus` hook from `@dhis2/app-runtime` to disable all interactivity in the application when the user is offline


## Resources

Some handy links:

-   [Data Store API Documentation](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-238/data-store.html)
-   [User Data Store API Documentation](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-238/data-store.html#webapi_user_data_store)
-   [App Service Data Store GitHub repo](https://github.com/dhis2/app-service-datastore)
-   [Data Store Management App](https://academy.demos.dhis2.org/web-app/dhis-web-datastore/index.html#/)