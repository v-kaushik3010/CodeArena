const axios = require("axios");

// 🚀 Execute code using Piston API
const executeCode = async (language, code, input) => {
  try {

    const response = await axios.post(
      "https://emkc.org/api/v2/piston/execute",
      {
        language,
        version: "*",
        files: [
          {
            content: code,
          },
        ],
        stdin: input,
      }
    );

    return {
      output: response.data.run.output.trim(),
      error: response.data.run.stderr,
    };

  } catch (error) {

    return {
      output: null,
      error: error.message,
    };
  }
};

module.exports = executeCode;