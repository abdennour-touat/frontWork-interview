import React from 'react'
import {DecoratorFn} from "@storybook/react";
export  const  Background : DecoratorFn =  (Story)=> {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "5%",
      backgroundColor: "#FEF2EE"
    }}>
      <Story />
    </div>
  )
}
