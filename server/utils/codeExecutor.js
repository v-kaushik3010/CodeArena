// const axios = require("axios");

// const languageVersions = {
//   javascript: "18.15.0",
//   python: "3.10.0",
//   java: "15.0.2",
//   cpp: "10.2.0",
// };

// const executeCode = async (language, code, input) => {
//   try {

//     const response = await axios.post(
//       "https://emkc.org/api/v2/piston/execute",
//       {
//         language: language,
//         version: languageVersions[language],

//         files: [
//           {
//             content: code,
//           },
//         ],

//         stdin: input,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return {
//       output: response.data.run.output,
//       error: response.data.run.stderr,
//       executionTime: response.data.run.time || 0,
//       memoryUsed: response.data.run.memory || 0,
//     };

//   } catch (error) {

//     console.error(
//       "Code Execution Error:",
//       error.response?.data || error.message
//     );

//     return {
//       error: "Execution Failed",
//     };
//   }
// };

// module.exports = executeCode;




////Temporary code executor using a mock function until we integrate with a real code execution service
const executeCode = async (language, code, input) => {

  // Fake execution simulation

  return {
    output: "5",
    error: null,
    executionTime: 0.12,
    memoryUsed: 128,
  };
};

module.exports = executeCode;