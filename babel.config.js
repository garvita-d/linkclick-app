module.exports = {
  presets: [
    "react-app", // keeps react-app preset
    "@babel/preset-env" // ensures modern JavaScript features are handled
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ]
};
