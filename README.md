# React useEffect Cleanup Function Error

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a return statement for cleanup in the `useEffect` function. This issue can lead to memory leaks and unexpected behavior.

## Bug Description

The `bug.js` file shows a component that fetches data using `useEffect`. However, it's missing the return statement in the `useEffect` which is responsible for cleanup.  Without this cleanup function, any resources acquired within the effect (like subscriptions, timers, or network requests) are not properly released when the component unmounts or updates.

## Solution

The `bugSolution.js` file corrects this by adding a return function within the `useEffect` to clean up the request to prevent memory leaks.