---
title: Day 4 | Data Store
sidebar_position: 60
---

:::tip[What you will learn]
- [ ] DHIS2 Data stores
:::

:::danger[work in progress]
**Sakibou** will present on how to use the DHIS2 data stores.

This page is a draft copy from 2022 workshop: https://github.com/dhis2/academy-web-app-dev-2022/tree/main/workshop/06-generic-dhis2-apps
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
| 15:30 - 16:30 | Workshop | |
| 16:30 - 16:45 | Closing | |
| 16:45 - 17:00 | Q&A (with French support) | |

# Making generic DHIS2 apps

Some handy links:

-   [Data Store API Documentation](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-238/data-store.html)
-   [User Data Store API Documentation](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-238/data-store.html#webapi_user_data_store)
-   [App Service Data Store GitHub repo](https://github.com/dhis2/app-service-datastore)
-   [Data Store Management App](https://academy.demos.dhis2.org/web-app/dhis-web-datastore/index.html#/)

# Data Store Task Instructions

After you've completed the tasks below, please follow these [instructions](../resources/set_up_fork.md#how-to-submit-assignments) for submitting your assignment.

## TASK 1 - Initialize the DataStoreProvider

- In this task you will import a DataStoreProvider and render it as a wrapper around the application contents
- Specify the namespace "my-custom-app-namespace-1234"
- Check comments `@TODO-1`
- You will be working in the `src/App.js` component

## TASK 2 - Render a list of saved visualization objects

- Check the comments in the `src/VisualizationList.js` component starting with `@TODO-2`
- In this task you will use the `useSavedObjectList` hook to show a list of saved objects in your userDataStore namespace

## TASK 3 - Support adding new visualizations

- Here you will be working in the `src/VisualizationList.js` and `src/AddControl.js` components
- Check for comments starting with `@TODO-3`
- The goal of this task is to make the Add button work

## TASK 4 - Support deleting visualizations

- Here you will be working in the `src/RemoveButton.js` component
- Check for comments starting with `@TODO-4`
- The goal of this task is to make the Remove buttons work

## TASK 5 - Add offline support for your app

- Enabe PWA in d2.config.js
- Use the `useOnlineStatus` hook from `@dhis2/app-runtime` to disable all interactivity in the application when the user is offline

## Reference

- Check the [slides](https://docs.google.com/presentation/d/1OHwNn4TABl4dRoTTAAmyDw3GQo41HGgmAZ4MaTzbTmo/edit?usp=sharing) for code examples for these 4 tasks
- DataStore [API documentation](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-236/data-store.html)
- App Service Datastore [documentation](https://github.com/dhis2/app-service-datastore)
