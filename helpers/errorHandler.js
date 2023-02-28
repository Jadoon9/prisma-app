export let requestSuccess = (response, status, data, message, token) => {
  let successResponse = {
    status: "Success",
    message: message,
  };

  if (data) {
    successResponse.data = data;
  }

  return response.status(status || 200).json(successResponse);
};

export let requestfailure = (response, status, jsonErr, message) => {
  if (typeof err === "object" && err.message) {
    jsonErr = err.message;
  } else {
    jsonErr = err;
  }

  return response.status(status || 404).json({
    status: "Fail",
    message: message,
    jsonErr: jsonErr,
  });
};
