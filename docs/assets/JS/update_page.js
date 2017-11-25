/*eslint-disable no-unused-vars*/
/*global document */
/*global window */

// Current toggle state of the accordions
var codeChangeIsVisible = true,
	autoChangelogIsVisible = false,
	analysisIsVisible = true;

var arrowRightSrc =
	"../Resource/ArrowRight.svg",
	arrowDownSrc =
	"../Resource/ArrowDown.svg";

// Toggle the accordion visibility:
function toggleCodeChanges() {
	"use strict";
	var li = document.getElementById("CCLi"),
		arrow = document.getElementById("CCArrow");


	if (codeChangeIsVisible) {
		arrow.src = arrowRightSrc;
	} else {
		arrow.src = arrowDownSrc;
	}
	codeChangeIsVisible = !codeChangeIsVisible;
	li.classList.toggle("hidden");

}

// Toggle the accordion visibility:
function toggleAutoChangelog() {
	"use strict";
	var li = document.getElementById("ACLi"),
		arrow = document.getElementById("ACArrow");


	if (autoChangelogIsVisible) {
		arrow.src = arrowRightSrc;
	} else {
		arrow.src = arrowDownSrc;
	}
	autoChangelogIsVisible = !autoChangelogIsVisible;
	li.classList.toggle("hidden");
}

// Toggle the accordion visibility:
function toggleAnalysis() {
	"use strict";
	var li = document.getElementById("ALi"),
		arrow = document.getElementById("AArrow");


	if (analysisIsVisible) {
		arrow.src = arrowRightSrc;
	} else {
		arrow.src = arrowDownSrc;
	}
	analysisIsVisible = !analysisIsVisible;
	li.classList.toggle("hidden");
}
