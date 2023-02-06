/*
* preSavePageFunction stub:
*
* The name of the function can be changed to anything you like.
*
* The function will be passed one 'options' argument that has the following fields:
*   'bearerToken' - a one-time bearer token which can be used to invoke selected integrator.io API routes.
*   'data' - an array of records representing one page of data. A record can be an object {} or array [] depending on the data source.
*   'errors' - an array of errors where each error has the structure {code: '', message: '', source: '', retryDataKey: ''}.
*   'files' - file exports only. files[i] contains source file metadata for data[i]. i.e. files[i].fileMeta.fileName.
*   'retryData' - a dictionary object containing the retry data for all errors: {retryDataKey: { data: <record>, stage: '', traceKey: ''}}.
*   '_exportId' - the _exportId currently running.
*   '_connectionId' - the _connectionId currently running.
*   '_flowId' - the _flowId currently running.
*   '_integrationId' - the _integrationId currently running.
*   '_parentIntegrationId' - the parent of the _integrationId currently running.
*   'pageIndex' - 0 based. context is the batch export currently running.
*   'lastExportDateTime' - delta exports only.
*   'currentExportDateTime' - delta exports only.
*   'settings' - all custom settings in scope for the export currently running.
*
* The function needs to return an object that has the following fields:
*   'data' - your modified data.
*   'errors' - your modified errors.
*   'abort' - instruct the batch export currently running to stop generating new pages of data.
*   'newErrorsAndRetryData' - return brand new errors linked to retry data: [{retryData: <record>, errors: [<error>]}].
*
* Throwing an exception will signal a fatal error and stop the flow.
*/
exports.preSavePageFunction = function (options, callback) {
    // sample code that simply passes on what has been exported
    return callback(error, {
      data: options.data,
      errors: options.errors,
      abort: false,
      newErrorsAndRetryData: []
    })
  } 