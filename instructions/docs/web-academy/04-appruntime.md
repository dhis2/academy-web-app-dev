---
title: App Runtime
sidebar_position: 50
---

## Workshop - App Runtime Task 1

### Tasks

* Here you would need to write a query and define some parameters

```js
const query = {
    results: {
        // @TODO: Writa a query to show 5 indicators with their name and description
    },
}
```
* Finally, you would need to use that query defined above to render your data 👇

```js
export const IndicatorsList = () => {
    // @TODO: Replace this line with a hook to perform the above query!
    const { loading, error, data } = { loading: false, error: 'Unimplemented', data: undefined }
}
```
### Solution:

* After you've completed these tasks, your application should look like this:

![](./assets/indicators.png)

#### Submit your assignment

When you're ready, please follow these [instructions](./before-we-start/GET_STARTED.md#how-to-submit-assignments) to submit your assignment.

### Workshop - App Runtime Task 2

#### Fill in mutations

This application uses mutations in 2 React components:

```
- [DeleteVisualizationButton](./src/components/DeleteVisualizationButton.js)
- [NewVisualizationButton](./src/components/NewVisualizationButton.js)
```

The application is almost complete, all you need to do is fill in the mutations in those two files.  You can use the [Data Query Playground](https://runtime.dhis2.nu/playground) to test different mutations.

### OPTIONAL BONUS

If you've completed everything and want a challenge, you can **add a new feature to this application**.  This is **completely optional**, so don't worry about it if you haven't completed all the other tasks yet.

#### The Bonus Feature

This application supports **creating** and **deleting** visualizations, but it doesn't support **renaming** them.  This is your task:

Add an `Rename` button to each row in `VisualizationsTable.js`.  This Edit button should open a `Dialog` component (from `@dhis2/ui`) which contains a form.  That form should allow the user to type a new name for the selected Visualization.  When submitted, the form should use a Data Mutation to send a POST request updating the visualization's name.  The dialog should then disappear and the table of visualizations should refresh to show the updated name.  Good luck!


## Advanced Application Runtime and Data Queries

Some handy links:

- [REST API Documentation](https://docs.dhis2.org/2.34/en/dhis2_developer_manual/web-api.html)
- [App Runtime Docs](https://runtime.dhis2.nu)
- [Data Query Playground](https://runtime.dhis2.nu/playground)
- [App Runtime Example App](https://github.com/dhis2/app-runtime/tree/master/examples/cra)

### Tasks intructions

1. There are three simple tasks to be completed. The comments that are important are the ones containing `@TODO` in `src/ProgramsList.js` and `src/DeleteProgram.js`
2. After you've completed these tasks, please follow these [instructions](./before-we-start/GET_STARTED.md#how-to-submit-assignments) for submitting your assignment.

#### TASK 1 - Using Dynamic queries and variables

In this task you will convert a static query into a dynamic one. You will be working in the `src/ProgramsList.js` component (check first comments `@TODO-1`)

#### TASK 2 - Using `Alerts`

Check the comments in the `src/ProgramList.js` component starting with `@TODO-3`.

In this task you will use a simple `useAlert` to show alerts when a program has been created

#### TASK 3 - Define a dynamic delete mutation

Here you will be working mostly in the `src/DeleteProgram.js` component. Check for comments starting with `@TODO-2`. The goal of this task is to make the Delete button work.

You will implement a delete mutation using dynamic query techniques.
