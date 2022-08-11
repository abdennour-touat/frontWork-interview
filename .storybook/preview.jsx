import "../src/index.css";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    // decorators: [
    //   (Story) => (
    //     <div style={{ margin: "3em" }}>
    //       <Story />
    //     </div>
    //   ),
    // ],
  },
};
export const decorators = [
  (Story) => (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10%",
        backgroundClolor: "#FEF2EE",
        padding: "30px"
      }}>
        <Story />
      </div>
    </>
  ),
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
