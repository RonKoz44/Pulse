## Introduction

In giving candidates small tasks to complete as part of the job interview process, we like to choose a task that is relevant to the job. The task described below is a slightly simplified but genuine task we had at LonRes which we solved programmatically. We are interested to know how you'd solve the same problem.

## Task

We needed to create a pulse component that retrieved a list of properties on page load, but then establishes a web socket connection on the client to retrieve properties as they are added and/or modified in the system.

The task has been partially completed by another developer &ndash; however it needs completing and to be production ready. Below is a list of the outstanding tasks that need to be finished off:

- [ ] Establish a connection to the Socket.io instance using `socket.io-client`.
- [ ] Listen for `property` events and prepend to the list when new items arrive.
- [ ] Highlight new property map markers for a brief moment with a different colour.
- [ ] Hook up the "View Location" button to pan and zoom into the relevant property marker.
- [ ] Upon receiving a duplicate property, move it to the top of the list.
