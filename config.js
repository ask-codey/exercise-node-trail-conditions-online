// The trails API's settings, read from the environment. For you to finish: this version works on a laptop and
// nowhere else, because it ignores the environment it's given.
//
// loadConfig(env) takes an object of environment variables (server.js passes it process.env) and gives back
// { port, mongodbUri }.
//
//   PORT          port: the number PORT holds, such as 10000 for "10000" (a number, not text).
//                 When PORT isn't set, or is empty, port is 3100.
//                 When PORT isn't a whole number, such as "abc", throw an Error with the message
//                   PORT must be a whole number, such as 3100.
//   MONGODB_URI   mongodbUri: the connection string, exactly as it was given.
//                 When MONGODB_URI isn't set, or is empty, throw an Error with the message
//                   MONGODB_URI is missing: set it in .env on your computer, or in your host's environment variables.
export function loadConfig(env) {
  return { port: 3100, mongodbUri: "mongodb://localhost:27017" };
}
