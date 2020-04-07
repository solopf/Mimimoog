"use strict";
var audioContext = new AudioContext();
window.onload = function() {
	var onOffTri = document.getElementById("trisw");
	var onOffSaw = document.getElementById("sawsw");
	var onOffSqu = document.getElementById("squsw");
	var oscTri = false;
	var oscSaw = false;
	var oscSqu = false;
	var gainTri = audioContext.createGain();
	var gainSaw = audioContext.createGain();
	var gainSqu = audioContext.createGain();
	var freqTri = document.getElementById("trifreq").value;
	var freqSaw = document.getElementById("sawfreq").value;
	var freqSqu = document.getElementById("squfreq").value;
	var ampTri = document.getElementById("triamp").value;
	var ampSaw = document.getElementById("sawamp").value;
	var ampSqu = document.getElementById("squamp").value;
	var freqfilter = document.getElementById("filterfreq").value;
	var gainOscSum = audioContext.createGain();
	var filter = audioContext.createBiquadFilter();
		setInterval(function() {
			if (!oscTri) {
			} else {
			freqTri = document.getElementById("trifreq").value;
			ampTri = document.getElementById("triamp").value;
			freqfilter = document.getElementById("filterfreq").value;
			oscTri.frequency.value = freqTri * 20;
			gainTri.gain.value = Math.pow (ampTri / 100, 2.5);
			filter.frequency.value = Math.pow (7.5, (freqfilter / 2 + 50) * 0.05);
			}
		}, 50);
	onOffTri.addEventListener("click", function() {
		if (!oscTri) {
			oscTri = audioContext.createOscillator();
			oscTri.type = "triangle";
			oscTri.frequency.value = freqTri * 20;
			gainTri.gain.value = Math.pow (ampTri / 100, 2.5);
			oscTri.connect(gainTri);
			oscTri.start(audioContext.currentTime);
			onOffTri.value = "ON";
		} else {
			oscTri.stop(audioContext.currentTime);
		oscTri = false;
		onOffTri.value = "OFF";
		}
	});
		setInterval(function() {
			if (!oscSaw) {
			} else {
			freqSaw = document.getElementById("sawfreq").value;
			ampSaw = document.getElementById("sawamp").value;
			freqfilter = document.getElementById("filterfreq").value;
			oscSaw.frequency.value = freqSaw * 20;
			gainSaw.gain.value = Math.pow (ampSaw / 100, 2.5);
			filter.frequency.value = Math.pow (7.5, (freqfilter / 2 + 50) * 0.05);
			}
		}, 50);
	onOffSaw.addEventListener("click", function() {
		if (!oscSaw) {
			oscSaw = audioContext.createOscillator();
			oscSaw.type = "sawtooth";
			oscSaw.frequency.value = freqSaw * 20;
			gainSaw.gain.value = Math.pow (ampSaw / 100, 2.5);
			oscSaw.connect(gainSaw);
			oscSaw.start(audioContext.currentTime);
			onOffSaw.value = "ON";
		} else {
			oscSaw.stop(audioContext.currentTime);
		oscSaw = false;
		onOffSaw.value = "OFF";
		}
	});
		setInterval(function() {
			if (!oscSqu) {
			} else {
			freqSqu = document.getElementById("squfreq").value;
			ampSqu = document.getElementById("squamp").value;
			freqfilter = document.getElementById("filterfreq").value;
			oscSqu.frequency.value = freqSqu * 20;
			gainSqu.gain.value = Math.pow (ampSqu / 100, 2.5);
			filter.frequency.value = Math.pow (7.5, (freqfilter / 2 + 50) * 0.05);
			}
		}, 50);
	onOffSqu.addEventListener("click", function() {
		if (!oscSqu) {
			oscSqu = audioContext.createOscillator();
			oscSqu.type = "square";
			oscSqu.frequency.value = freqSqu * 20;
			gainSqu.gain.value = Math.pow (ampSqu / 100, 2.5);
			oscSqu.connect(gainSqu);
			oscSqu.start(audioContext.currentTime);
			onOffSqu.value = "ON";
		} else {
			oscSqu.stop(audioContext.currentTime);
		oscSqu = false;
		onOffSqu.value = "OFF";
		}
	});
	gainOscSum.gain.value = 0.1;
	gainTri.connect(gainOscSum);
	gainSaw.connect(gainOscSum);
	gainSqu.connect(gainOscSum);
	gainOscSum.connect(filter);
	filter.connect(audioContext.destination);
	filter.type = "lowpass";
	filter.frequency.value = Math.pow (7.5, (freqfilter / 2 + 50) * 0.05);
};
