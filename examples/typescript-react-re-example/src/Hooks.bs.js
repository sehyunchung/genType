// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ImportHooks from "./ImportHooks.bs.js";
import * as ImportHookDefault from "./ImportHookDefault.bs.js";

function Hooks(Props) {
  var vehicle = Props.vehicle;
  var match = React.useState(function () {
        return 0;
      });
  var setCount = match[1];
  var count = match[0];
  return React.createElement("div", undefined, React.createElement("p", undefined, "Hooks example " + (vehicle.name + (" clicked " + (String(count) + " times")))), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setCount, (function (param) {
                                    return count + 1 | 0;
                                  }));
                    })
                }, "Click me"), React.createElement(ImportHooks.make, {
                  person: {
                    name: "Mary",
                    age: 71
                  },
                  children: null,
                  renderMe: (function (x) {
                      return x.randomString;
                    })
                }, "child1", "child2"), React.createElement(ImportHookDefault.make, {
                  person: {
                    name: "DefaultImport",
                    age: 42
                  },
                  children: null,
                  renderMe: (function (x) {
                      return x.randomString;
                    })
                }, "child1", "child2"));
}

function Hooks$anotherComponent(Props) {
  var vehicle = Props.vehicle;
  var callback = Props.callback;
  Curry._1(callback, undefined);
  return React.createElement("div", undefined, "Another Hook " + vehicle.name);
}

function Hooks$Inner(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle.name);
}

function Hooks$Inner$anotherComponent(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle.name);
}

function Hooks$Inner$Inner2(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle.name);
}

function Hooks$Inner$Inner2$anotherComponent(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle.name);
}

var Inner2 = {
  make: Hooks$Inner$Inner2,
  anotherComponent: Hooks$Inner$Inner2$anotherComponent
};

var Inner = {
  make: Hooks$Inner,
  anotherComponent: Hooks$Inner$anotherComponent,
  Inner2: Inner2
};

function Hooks$NoProps(Props) {
  return React.createElement("div", undefined, null);
}

var NoProps = {
  make: Hooks$NoProps
};

function functionWithRenamedArgs(_to, _Type, cb) {
  Curry._1(cb, _to);
  return _to.name + _Type.name;
}

function Hooks$componentWithRenamedArgs(Props) {
  var _to = Props.to;
  var _Type = Props.Type;
  var cb = Props.cb;
  Curry._1(cb, _to);
  return _to.name + _Type.name;
}

function Hooks$makeWithRef(Props) {
  var vehicle = Props.vehicle;
  return function (ref) {
    if (ref == null) {
      return null;
    } else {
      return React.createElement("button", {
                  ref: ref
                }, vehicle.name);
    }
  };
}

var testForwardRef = React.forwardRef(function (param, param$1) {
      return Hooks$makeWithRef(param)(param$1);
    });

var input = React.forwardRef(function (Props, param) {
      var partial_arg = Props.r;
      return React.createElement("div", {
                  ref: param
                }, partial_arg.x);
    });

function Hooks$polymorphicComponent(Props) {
  var param = Props.p;
  return param[0].name;
}

function Hooks$functionReturningReactElement(Props) {
  return Props.name;
}

function Hooks$RenderPropRequiresConversion(Props) {
  var renderVehicle = Props.renderVehicle;
  return Curry._1(renderVehicle, {
              vehicle: {
                name: "Car"
              },
              number: 42
            });
}

var RenderPropRequiresConversion = {
  make: Hooks$RenderPropRequiresConversion
};

function Hooks$aComponentWithChildren(Props) {
  var vehicle = Props.vehicle;
  var children = Props.children;
  return React.createElement("div", undefined, "Another Hook " + vehicle.name, React.createElement("div", undefined, children));
}

var make = Hooks;

var $$default = Hooks;

var anotherComponent = Hooks$anotherComponent;

var componentWithRenamedArgs = Hooks$componentWithRenamedArgs;

var makeWithRef = Hooks$makeWithRef;

var polymorphicComponent = Hooks$polymorphicComponent;

var functionReturningReactElement = Hooks$functionReturningReactElement;

var aComponentWithChildren = Hooks$aComponentWithChildren;

export {
  make ,
  $$default ,
  $$default as default,
  anotherComponent ,
  Inner ,
  NoProps ,
  functionWithRenamedArgs ,
  componentWithRenamedArgs ,
  makeWithRef ,
  testForwardRef ,
  input ,
  polymorphicComponent ,
  functionReturningReactElement ,
  RenderPropRequiresConversion ,
  aComponentWithChildren ,
  
}
/* testForwardRef Not a pure module */