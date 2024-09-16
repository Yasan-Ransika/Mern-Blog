// export const errorHandler = (statusCode, message) => {
//     const error = new Error();
//     error.statusCode = statusCode;
//     error.message = message;
//     return error;
//   };
  
  export const errorHandler = (status, message) => {
    console.error(message);
    return res.status(status).json({ error: message });
  };
  