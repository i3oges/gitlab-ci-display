require('dotenv').config();
const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "nprocess.env": {
        GITLAB_URL: JSON.stringify(process.env.GITLAB_URL),
        GITLAB_PRIVATE_TOKEN: JSON.stringify(process.env.GITLAB_PRIVATE_TOKEN)
      }
    })
  ]
}