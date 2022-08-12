import "../src/index.css";
import React from "react";
import { Background } from "./Decorators";

export const parameters = {
  actions: { argTypesRegex: '^on.*' },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },

  },
};
export const decorators = [
  Background
];

// export const decorators = [
//   (Story) => (
//     <div style={{ margin: "3em" }}>
//       <Story />
//     </div>
//   ),
// ];
// export const decorators = [
//   (story) => (
//     <>
//       <h1>hello</h1>
//       <story />
//     </>
//   ),
// ];
