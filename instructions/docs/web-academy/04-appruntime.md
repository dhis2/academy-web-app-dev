---
title: Day 3 | App Runtime
sidebar_position: 50
---

:::tip[What you will learn]
- [ ] An overview of the App Platform and App Runtime toolset
- [ ] The philoshopy behind AppRuntime hooks (imperative vs declarative)
- [ ] Use Alerts and Config service
- [ ] Use Data Service: Lookup specific APIs and convert the API requests into queries and mutations
- [ ] Test queries and mutations in the playground
- [ ] Use `useDataQuery` and `useDataMutation` hooks
- [ ] Other advanced use cases for the Data Service hooks (dynamic queries, refetching, lazy mode etc..)
:::

## Agenda
| Time | Topic | |
| --- | --- | --- |
| 09:00 - 10:30 | Opening Workshop | Overview and Basic Hooks (`useConfig` and `useAlert`) |
| 10:30 - 11:00 | _coffee break_ | |
| 11:00 - 12:30 | Workshop | App Runtime: API overview, Query Playground and Data Queries |
| 12:30 - 13:30 | _lunch break_ | |
| 13:30 - 15:00 | Workshop | App Runtime: Mutations |
| 15:00 - 15:30 | _coffee break_ | |
| 15:30 - 16:30 | Workshop | App Runtime: Advanced Data Queries |
| 16:30 - 16:45 | Closing | |
| 16:45 - 17:00 | Q&A (with French support) | |

## Presentation

> _**instructor note**: We will go through the presentation in four parts: the AppRuntime overview and basic hooks, data queries, data mutations, advanced data queries._

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSdtSEOUIBoql2XTrjEQPndvb6BAjnqcGiqhk841tZRivnTMNpn0PSFUEMElj1TK83hNsgGe811Qgjw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>


## Overview and Basic hooks


### Task 1.1 - useConfig
:::info[Requirement]
Get the DHIS2 configuration using [useConfig hook](https://developers.dhis2.org/docs/app-runtime/hooks/useConfig) and show the API version on the home page similar to the screenshot below (look up the correct UI component).

- **Hint**: Lookup the correct UI component in the [documentation](https://ui.dhis2.nu/), and don't forget about internationalisation (if you've set it up in the previous day)
::: 

#### The expected result
![Display the API version from the server config](../assets/appruntime-workshop/task-useconfig.png)


### Task 1.2 - useAlert
:::info[Requirement]
Replace the alert in the `Form` view with an [alert from the UI library](https://ui.dhis2.nu/components/alertbar). You _should_ use the [useAlert](https://developers.dhis2.org/docs/app-runtime/hooks/useAlert) hook which wraps the UI component and makes it easier to a DHIS2 application.
::: 

#### The expected result
You should display a **success** message with the stringified values of the form (similar to what the _alert_ used to show previously).

![Show success message on submitting form](../assets/appruntime-workshop/task-alert.png)

You should also handle the **error** state. For this exercise, you can simulate an error in the code.

![Show error message on submitting form](../assets/appruntime-workshop/task-alert-error.png)


## Data Queries

> _**instructor note**:  Overview of the API and how to convert an API request to a query, and demonstrate the [Query playground](https://runtime.dhis2.nu/playground/)._

### Task 2.1 - useDataQuery

:::info[Requirement]
Replace the _hardcoded_ list of attributes with the list of attributes from the API. For the API call, we want to:
- only display 5 attributes per page
- order by `displayName` in descending order
:::

#### The expected result
The expected result should not look much different except that it's in the reverse order and displaying a smaller number of attributes. The result should be coming from the API rather than the hardcoded list.

![Show list of attributes from the API](../assets/appruntime-workshop/task-use-data-query.png)


### Task 2.2 - parallel queries


:::info[Requirement]
Add a query to get the current logged in user info, and show their name and email. 
:::

#### The expected result
On top of the table, show the current user `displayName` and `email`. This information can be retrieved from calling `api/me` endpoint (but you should use the same data query for attributes for this exercise).

![Show user info from the API](../assets/appruntime-workshop/task-user-info.png)


## Mutations

> _**instructor note**:  Show examples of create, update, and delete mutations in the [Query playground](https://runtime.dhis2.nu/playground/)._


### Task 3.1 - useDataMutation

:::info[Requirement]
- Update the form to create a mutation to create a new entity when submitting the form.
- Add a delete icon in the tables' rows to delete an entity using a Delete mutation.
:::

:::danger
@todo: clarify partial updates with PATCH
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