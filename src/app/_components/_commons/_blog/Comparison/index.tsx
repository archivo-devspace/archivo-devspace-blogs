"use client";

import React from "react";
import Props from "./index.type";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  darcula,
  atelierPlateauLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

function Comparison({ positive, negative }: Props) {
  return (
    <>
      <div className="p-4  flex flex-col gap-4">
        <span className="font-archivo text-md_bold text-dangerColor">
          {"Don't"}
        </span>
        <SyntaxHighlighter language="javascript" style={atelierPlateauLight}>
          {negative}
        </SyntaxHighlighter>
      </div>

      <div className="p-4 flex flex-col gap-4">
        <span className="font-archivo text-md_bold text-primaryTextColor">
          {"Do"}
        </span>
        <SyntaxHighlighter language="javascript" style={darcula}>
          {positive}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default Comparison;
