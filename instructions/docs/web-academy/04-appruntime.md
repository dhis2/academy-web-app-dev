---
title: Day 3 | App Runtime
sidebar_position: 50
---

:::tip[What you will learn]
- [ ] An overview of the the App Platform and App Runtime toolset
- [ ] The philoshopy behind AppRuntime hooks (imperative vs declarative)
- [ ] Use Alerts and Config service
- [ ] Use Data Service: Lookup specific APIs and convert the API requests into queries and mutations
- [ ] Test queries and mutations in the playground
- [ ] Use `useDataQuery` and `useDataMutation` hooks
- [ ] Other advanced use cases for the Data Service hooks (dynamic queries, refetching, lazy mode etc..)
:::


## Presentation

> _**instructor note**: We will go through the presentation in four parts: the AppRuntime overview and basic hooks, data queries, data mutations, advanced data queries._

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSdtSEOUIBoql2XTrjEQPndvb6BAjnqcGiqhk841tZRivnTMNpn0PSFUEMElj1TK83hNsgGe811Qgjw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>


## Overview and Basic hooks

### Task 1.1 - useAlert
:::info[Requirement]
Replace the alert in the `Form` view with an [alert from the UI library](https://ui.dhis2.nu/components/alertbar) 
::: 

### Task 1.2 - useConfig
:::info[Requirement]
Get the DHIS2 configuration using [useConfig hook](https://developers.dhis2.org/docs/app-runtime/hooks/useConfig) and show it at the bottom of the side bar.
::: 


## Data Queries

> _**instructor note**:  Overview of the API and how to convert an API request to a query, and demonstrate the [Query playground](https://runtime.dhis2.nu/playground/)._

### Task 2.1 - useDataQuery

:::info[Requirement]
Replace the _hardcoded_ list of attributes with the list of attributes from the API
:::

### Task 2.2 - parallel queries


:::info[Requirement]
Add a query to get the current logged in user info, and show their name and email. 
:::

:::danger
@todo: update screenshot
@todo: clarify partial updates with PATCH
@todo: is there a more suitable (less contrived) query to run in parallel?
:::
![](../assets/indicators.png)


## Mutations

> _**instructor note**:  Show examples of create, update, and delete mutations in the [Query playground](https://runtime.dhis2.nu/playground/)._


### Task 3.1 - useDataMutation

:::info[Requirement]
- Update the form to create a mutation to create a new entity when submitting the form.
- Add a delete icon in the tables' rows to delete an entity using a Delete mutation.
:::

### Task 3.2 (optional bonus)

:::info[Requirement]
This application supports **creating** and **deleting** visualizations, but it doesn't support **renaming** them.  This is your task:

Add an `Rename` button to each row in `VisualizationsTable.js`.  This Edit button should open a `Dialog` component (from `@dhis2/ui`) which contains a form.  That form should allow the user to type a new name for the selected Visualization.  When submitted, the form should use a Data Mutation to send a POST request updating the visualization's name.  The dialog should then disappear and the table of visualizations should refresh to show the updated name.
:::


## Task 4 - Advanced use cases (dynamic queries)

> _**instructor note**:  Live code the advanced query options._


:::info[Requirements]
- Add paging to go through the different pages of the list.
- Add a refresh button to reload the table list.
:::


## Resources

- [REST API Documentation](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/introduction.html)
- [App Runtime Docs](https://developers.dhis2.org/docs/app-runtime/getting-started/)
- [Data Query Playground](https://runtime.dhis2.nu/playground)
- [App Runtime Example App](https://github.com/dhis2/app-runtime/tree/master/examples/cra)