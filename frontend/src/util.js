export const formatResponse = (requestObj, dataFormatter) =>
  requestObj.then(response => ({
    ...response,
    data: dataFormatter(response.data),
  }));