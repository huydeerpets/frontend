import {createGlobalStyle} from 'styled-components'
import {themeGet} from 'styled-system'
import {mobileMedia} from 'constants/media'
import * as colors from 'constants/colors'

export default createGlobalStyle`
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  src: local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v8/iJWKBXyIfDnIV7nBrXyw023e.woff2) format('woff2');
}

@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  src: local('Rubik Medium'), local('Rubik-Medium'), url(https://fonts.gstatic.com/s/rubik/v8/iJWHBXyIfDnIV7Eyjmmd8WD07oB-.woff2) format('woff2');
}

html {
  color: ${colors.text};
  font-size: 100%;
  -webkit-font-smoothing: antialiased;
}

html.wf-active {
}

body {
  margin: 0;
  padding: 0;

  font-family: ${themeGet('fontFamily')};
  font-size: 1rem;
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

main {
  justify-content: flex-start;
}

a.GTAG {
  text-decoration: none;
  color: inherit;
}

.btn {
  background-color: ${colors.blue.medium};
  border: 1px solid ${colors.blue.darker};
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  padding: 10px 20px 12px;
  text-decoration: none;
  transition: background-color 0.1s ease;
  transform: 0.25;
  &:hover {
    background-color: ${colors.blue.dark};
    text-decoration: none;
  }
}
button.gray {
  background: ${colors.lightGray};
  &:hover {
    background: ${colors.lightGray};
  }
}
button.green {
  background: ${colors.green.medium};
  border: 1px solid ${colors.green.dark};
  color: white;
  &:hover {
    background: ${colors.green.dark};
  }
}
button.white {
  background: ${colors.offWhite};
  border: 1px solid ${colors.mediumGray};
  color: ${colors.text};
  &:hover {
    background: ${colors.lightestGray};
  }
}
button:disabled {
  opacity: 0.5;
}
form {
  div.control-group {
    margin-bottom: 20px;
  }
  input {
    border: 1px solid ${colors.lightGray};
    border-radius: 6px;
    font-size: 18px;
    padding: 14px;
    width: calc(100% - 30px);
  }
  button {
    font-size: 18px;
    padding: 10px 0;
    width: 100%;
  }
}

@media ${mobileMedia} {
  h1 {
    font-size: 22px;
  }
}


/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: ${themeGet('colors.pink')};

  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;

  width: 100%;
  height: 3px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: none;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: none;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
  animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


/**
 * React Select
 * ============
 * Created by Jed Watson and Joss Mackison for KeystoneJS, http://www.keystonejs.com/
 * https://twitter.com/jedwatson https://twitter.com/jossmackison https://twitter.com/keystonejs
 * MIT License: https://github.com/JedWatson/react-select
*/
.Select {
  position: relative;
}
.Select input::-webkit-contacts-auto-fill-button,
.Select input::-webkit-credentials-auto-fill-button {
  display: none !important;
}
.Select input::-ms-clear {
  display: none !important;
}
.Select input::-ms-reveal {
  display: none !important;
}
.Select,
.Select div,
.Select input,
.Select span {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.Select.is-disabled .Select-arrow-zone {
  cursor: default;
  pointer-events: none;
  opacity: 0.35;
}
.Select.is-disabled > .Select-control {
  background-color: #f9f9f9;
}
.Select.is-disabled > .Select-control:hover {
  box-shadow: none;
}
.Select.is-open > .Select-control {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background: #fff;
  border-color: #b3b3b3 #ccc #d9d9d9;
}
.Select.is-open > .Select-control .Select-arrow {
  top: -2px;
  border-color: transparent transparent #999;
  border-width: 0 5px 5px;
}
.Select.is-searchable.is-open > .Select-control {
  cursor: text;
}
.Select.is-searchable.is-focused:not(.is-open) > .Select-control {
  cursor: text;
}
.Select.is-focused > .Select-control {
  background: #fff;
}
.Select.is-focused:not(.is-open) > .Select-control {
  border-color: #007eff;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 0 3px rgba(0, 126, 255, 0.1);
  background: #fff;
}
.Select.has-value.is-clearable.Select--single > .Select-control .Select-value {
  padding-right: 42px;
}
.Select.has-value.Select--single
  > .Select-control
  .Select-value
  .Select-value-label,
.Select.has-value.is-pseudo-focused.Select--single
  > .Select-control
  .Select-value
  .Select-value-label {
  color: #333;
}
.Select.has-value.Select--single
  > .Select-control
  .Select-value
  a.Select-value-label,
.Select.has-value.is-pseudo-focused.Select--single
  > .Select-control
  .Select-value
  a.Select-value-label {
  cursor: pointer;
  text-decoration: none;
}
.Select.has-value.Select--single
  > .Select-control
  .Select-value
  a.Select-value-label:hover,
.Select.has-value.is-pseudo-focused.Select--single
  > .Select-control
  .Select-value
  a.Select-value-label:hover,
.Select.has-value.Select--single
  > .Select-control
  .Select-value
  a.Select-value-label:focus,
.Select.has-value.is-pseudo-focused.Select--single
  > .Select-control
  .Select-value
  a.Select-value-label:focus {
  color: #007eff;
  outline: none;
  text-decoration: underline;
}
.Select.has-value.Select--single
  > .Select-control
  .Select-value
  a.Select-value-label:focus,
.Select.has-value.is-pseudo-focused.Select--single
  > .Select-control
  .Select-value
  a.Select-value-label:focus {
  background: #fff;
}
.Select.has-value.is-pseudo-focused .Select-input {
  opacity: 0;
}
.Select.is-open .Select-arrow,
.Select .Select-arrow-zone:hover > .Select-arrow {
  border-top-color: #666;
}
.Select.Select--rtl {
  direction: rtl;
  text-align: right;
}
.Select-control {
  background-color: #fff;
  border-color: #d9d9d9 #ccc #b3b3b3;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #333;
  cursor: default;
  display: table;
  border-spacing: 0;
  border-collapse: separate;
  height: 36px;
  outline: none;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.Select-control:hover {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}
.Select-control .Select-input:focus {
  outline: none;
  background: #fff;
}
.Select-placeholder,
.Select--single > .Select-control .Select-value {
  bottom: 0;
  color: #aaa;
  left: 0;
  line-height: 34px;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  right: 0;
  top: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.Select-input {
  height: 34px;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
}
.Select-input > input {
  width: 100%;
  background: none transparent;
  border: 0 none;
  box-shadow: none;
  cursor: default;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  outline: none;
  line-height: 17px;
  /* For IE 8 compatibility */
  padding: 8px 0 12px;
  /* For IE 8 compatibility */
  -webkit-appearance: none;
}
.is-focused .Select-input > input {
  cursor: text;
}
.has-value.is-pseudo-focused .Select-input {
  opacity: 0;
}
.Select-control:not(.is-searchable) > .Select-input {
  outline: none;
}
.Select-loading-zone {
  cursor: pointer;
  display: table-cell;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 16px;
}
.Select-loading {
  -webkit-animation: Select-animation-spin 400ms infinite linear;
  -o-animation: Select-animation-spin 400ms infinite linear;
  animation: Select-animation-spin 400ms infinite linear;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-right-color: #333;
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
.Select-clear-zone {
  -webkit-animation: Select-animation-fadeIn 200ms;
  -o-animation: Select-animation-fadeIn 200ms;
  animation: Select-animation-fadeIn 200ms;
  color: #999;
  cursor: pointer;
  display: table-cell;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 17px;
}
.Select-clear-zone:hover {
  color: #d0021b;
}
.Select-clear {
  display: inline-block;
  font-size: 18px;
  line-height: 1;
}
.Select--multi .Select-clear-zone {
  width: 17px;
}
.Select-arrow-zone {
  cursor: pointer;
  display: table-cell;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 25px;
  padding-right: 5px;
}
.Select--rtl .Select-arrow-zone {
  padding-right: 0;
  padding-left: 5px;
}
.Select-arrow {
  border-color: #999 transparent transparent;
  border-style: solid;
  border-width: 5px 5px 2.5px;
  display: inline-block;
  height: 0;
  width: 0;
  position: relative;
}
.Select-control > *:last-child {
  padding-right: 5px;
}
.Select--multi .Select-multi-value-wrapper {
  display: inline-block;
}
.Select .Select-aria-only {
  position: absolute;
  display: inline-block;
  height: 1px;
  width: 1px;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
  float: left;
}
@-webkit-keyframes Select-animation-fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes Select-animation-fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.Select-menu-outer {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top-color: #e6e6e6;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 200px;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
}
.Select-menu {
  max-height: 198px;
  overflow-y: auto;
}
.Select-option {
  box-sizing: border-box;
  background-color: #fff;
  color: #666666;
  cursor: pointer;
  display: block;
  padding: 8px 10px;
}
.Select-option:last-child {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.Select-option.is-selected {
  background-color: #f5faff;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 126, 255, 0.04);
  color: #333;
}
.Select-option.is-focused {
  background-color: #ebf5ff;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 126, 255, 0.08);
  color: #333;
}
.Select-option.is-disabled {
  color: #cccccc;
  cursor: default;
}
.Select-noresults {
  box-sizing: border-box;
  color: #999999;
  cursor: default;
  display: block;
  padding: 8px 10px;
}
.Select--multi .Select-input {
  vertical-align: middle;
  margin-left: 10px;
  padding: 0;
}
.Select--multi.Select--rtl .Select-input {
  margin-left: 0;
  margin-right: 10px;
}
.Select--multi.has-value .Select-input {
  margin-left: 5px;
}
.Select--multi .Select-value {
  background-color: #ebf5ff;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 126, 255, 0.08);
  border-radius: 2px;
  border: 1px solid #c2e0ff;
  /* Fallback color for IE 8 */
  border: 1px solid rgba(0, 126, 255, 0.24);
  color: #007eff;
  display: inline-block;
  font-size: 0.9em;
  line-height: 1.4;
  margin-left: 5px;
  margin-top: 5px;
  vertical-align: top;
}
.Select--multi .Select-value-icon,
.Select--multi .Select-value-label {
  display: inline-block;
  vertical-align: middle;
}
.Select--multi .Select-value-label {
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  cursor: default;
  padding: 2px 5px;
}
.Select--multi a.Select-value-label {
  color: #007eff;
  cursor: pointer;
  text-decoration: none;
}
.Select--multi a.Select-value-label:hover {
  text-decoration: underline;
}
.Select--multi .Select-value-icon {
  cursor: pointer;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
  border-right: 1px solid #c2e0ff;
  /* Fallback color for IE 8 */
  border-right: 1px solid rgba(0, 126, 255, 0.24);
  padding: 1px 5px 3px;
}
.Select--multi .Select-value-icon:hover,
.Select--multi .Select-value-icon:focus {
  background-color: #d8eafd;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 113, 230, 0.08);
  color: #0071e6;
}
.Select--multi .Select-value-icon:active {
  background-color: #c2e0ff;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 126, 255, 0.24);
}
.Select--multi.Select--rtl .Select-value {
  margin-left: 0;
  margin-right: 5px;
}
.Select--multi.Select--rtl .Select-value-icon {
  border-right: none;
  border-left: 1px solid #c2e0ff;
  /* Fallback color for IE 8 */
  border-left: 1px solid rgba(0, 126, 255, 0.24);
}
.Select--multi.is-disabled .Select-value {
  background-color: #fcfcfc;
  border: 1px solid #e3e3e3;
  color: #333;
}
.Select--multi.is-disabled .Select-value-icon {
  cursor: not-allowed;
  border-right: 1px solid #e3e3e3;
}
.Select--multi.is-disabled .Select-value-icon:hover,
.Select--multi.is-disabled .Select-value-icon:focus,
.Select--multi.is-disabled .Select-value-icon:active {
  background-color: #fcfcfc;
}
@keyframes Select-animation-spin {
  to {
    transform: rotate(1turn);
  }
}
@-webkit-keyframes Select-animation-spin {
  to {
    -webkit-transform: rotate(1turn);
  }
}

`
