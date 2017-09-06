# rations.un.org

## Design Goals 
* Resilient to network disconnects / offline enabled (service workers)
* Responsive on slow networks (SPA, skeleton screens, cache first networking)
* Tablet friendly

## Why

Experiences in the missions:
* connections with slow throughput, high latency.
* internet cuts out while working
* multiple page transitions (erms frame -> ineed -> erms frame)

Those contribute to an embarassing user experience.


## Modules
* Ingredients
	* Need a grid ( [react-data-grid](http://adazzle.github.io/react-data-grid/) ? )
* Recipes
	* proof of concept for outgoing queue of edits
	* will display green (OK), yellow (queued), red (errors)
* Menu Plans
	* Most complex components, will do last
* Deliveries
	* Show both scheduled and completed
* Documents
	* Search
	* Upload

## Cross-cutting concerns
* Security: Unite Identity OpenID 
* Logging ( [js-logger](https://github.com/jonnyreeves/js-logger) ? + [stacktrace.js](https://www.stacktracejs.com/))

## Reading List
* [Offline Cookbook (Google)](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/)
* [IndexDB (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) or pouchdb-browser?
* redux-persist and [redux-offline](https://github.com/jevakallio/redux-offline/)
* [CQRS in occasionally connected systems](https://skillsmatter.com/skillscasts/1980-cqrs-not-just-for-server-systems)
* [Offline support](https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-3-offline-support-and-network-resilience-c84db889162c)