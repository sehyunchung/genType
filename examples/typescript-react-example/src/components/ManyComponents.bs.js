// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

var component = ReasonReact.statelessComponent("InnerComponent");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              return React.createElement("div", undefined, "Inner Component");
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var InnerComponent = /* module */[
  /* someValueSoModuleOffsetsAreShifted */77,
  /* component */component,
  /* make */make
];

var component$1 = ReasonReact.statelessComponent("ManyProps");

function make$1(param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, _children) {
  return /* record */[
          /* debugName */component$1[/* debugName */0],
          /* reactClassInternal */component$1[/* reactClassInternal */1],
          /* handedOffState */component$1[/* handedOffState */2],
          /* willReceiveProps */component$1[/* willReceiveProps */3],
          /* didMount */component$1[/* didMount */4],
          /* didUpdate */component$1[/* didUpdate */5],
          /* willUnmount */component$1[/* willUnmount */6],
          /* willUpdate */component$1[/* willUpdate */7],
          /* shouldUpdate */component$1[/* shouldUpdate */8],
          /* render */(function (param) {
              return React.createElement("div", undefined, "Many Props");
            }),
          /* initialState */component$1[/* initialState */10],
          /* retainedProps */component$1[/* retainedProps */11],
          /* reducer */component$1[/* reducer */12],
          /* jsElementWrapped */component$1[/* jsElementWrapped */13]
        ];
}

var ManyProps = /* module */[
  /* component */component$1,
  /* make */make$1
];

var component$2 = ReasonReact.statelessComponent("ManyComponents");

function make$2(_children) {
  return /* record */[
          /* debugName */component$2[/* debugName */0],
          /* reactClassInternal */component$2[/* reactClassInternal */1],
          /* handedOffState */component$2[/* handedOffState */2],
          /* willReceiveProps */component$2[/* willReceiveProps */3],
          /* didMount */component$2[/* didMount */4],
          /* didUpdate */component$2[/* didUpdate */5],
          /* willUnmount */component$2[/* willUnmount */6],
          /* willUpdate */component$2[/* willUpdate */7],
          /* shouldUpdate */component$2[/* shouldUpdate */8],
          /* render */(function (param) {
              return React.createElement("div", undefined, "Outer Component", ReasonReact.element(undefined, undefined, make(/* array */[])));
            }),
          /* initialState */component$2[/* initialState */10],
          /* retainedProps */component$2[/* retainedProps */11],
          /* reducer */component$2[/* reducer */12],
          /* jsElementWrapped */component$2[/* jsElementWrapped */13]
        ];
}

export {
  InnerComponent ,
  ManyProps ,
  component$2 as component,
  make$2 as make,
  
}
/* component Not a pure module */
