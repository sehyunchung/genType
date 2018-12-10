/* Untyped file generated by genType. */

import MyBanner from './MyBanner';

import * as React from 'react';

import * as ReasonReact from 'reason-react/src/ReasonReact.js';

// Export 'make' early to allow circular import from the '.bs.js' file.
export const make = function _(show, message, children) { return ReasonReact.wrapJsForReason(MyBanner, {show: show, message: (message == null ? message : {text:message[0]})}, children); };
