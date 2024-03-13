// Animate h1

const headerAnimate = document.getElementById('header-animate');

headerAnimate.style.color = 'transparent'; 

function showTitle1() { 
    headerAnimate.style.color = "white"; 
    headerAnimate.style.transition = '4s ease';
}

setTimeout("showTitle1()", 1500);


// Animate subheader

const subheaderAnimate = document.getElementById('subheader-animate');

subheaderAnimate.style.color = 'transparent';

function showTitle2() { 
    subheaderAnimate.style.color = "white"; 
    subheaderAnimate.style.transition = '3s ease';
}

setTimeout("showTitle2()", 2500);

// Animate button

const button1 = document.getElementById('btn-header');

button1.style.color = 'transparent';
button1.style.backgroundColor = 'transparent';

function showTitleButton() { 
    button1.style.backgroundColor = 'white'; 
    button1.style.color = 'black';
    button1.style.transition = '2s ease';
}

setTimeout("showTitleButton()", 3500);

// then button hover

// button1.style.backgroundColor = 'white';

button1.addEventListener('mouseover', () => {
    button1.style.backgroundColor = 'blue';
    button1.style.color = 'white';
    button1.style.transition = '1s ease';
    button1.style.cursor = 'pointer';
  });
  
  button1.addEventListener('mouseout', () => {
      button1.style.backgroundColor = 'white';
      button1.style.color = 'black';
      button1.style.transition = '1s ease';
    });
    

//  Destinations new

const stationContainer = document.getElementById('space-station-container');
const stationImage = document.getElementById('station-img-bg');
const upperCaptionStation = document.getElementById('station-title');
const hiddenStationCaption = document.getElementById('hidden-station-caption');
hiddenStationCaption.style.color = 'transparent';

const orbitContainer = document.getElementById('earth-orbit-container');
const orbitImage = document.getElementById('orbit-img-bg');
const hiddenOrbitCaption = document.getElementById('hidden-orbit-caption');
const upperCaptionOrbit = document.getElementById('orbit-title');
hiddenOrbitCaption.style.color = 'transparent';

const moonContainer = document.getElementById('the-moon-container');
const moonImage = document.getElementById('moon-img-bg');
const hiddenMoonCaption = document.getElementById('hidden-moon-caption');
const upperCaptionMoon = document.getElementById('moon-title');
hiddenMoonCaption.style.color = 'transparent';

stationContainer.addEventListener('mouseover', () => {
    stationImage.style.opacity = '25%';
    stationImage.style.transition = '2s';
    stationContainer.style.width = '3500px';
    stationContainer.style.transition = '2s ease';
    hiddenStationCaption.style.transitionDelay = '1.5s';
    hiddenStationCaption.style.transitionDuration = '2s';
    hiddenStationCaption.style.color = "white"; 
    upperCaptionStation.style.color = 'transparent';
    upperCaptionStation.style.transition = '1s ease';
    upperCaptionStation.style.textDecorationColor = 'transparent';
    });

  stationImage.addEventListener('mouseout', () => {
    stationImage.style.transition = '3s';
    stationImage.style.opacity = '100%';
    stationContainer.style.transitionDuration = '2s';
    stationContainer.style.width = '100%';
    hiddenStationCaption.style.transition = '0s';
    hiddenStationCaption.style.color = "transparent"; 
    upperCaptionStation.style.transition = '2s ease';
    upperCaptionStation.style.color = 'white';
    upperCaptionStation.style.textDecorationColor = 'yellow';
  });

// orbit hover

orbitContainer.addEventListener('mouseover', () => {
    orbitImage.style.opacity = '40%';
    orbitImage.style.transition = '2s';
    orbitContainer.style.width = '3500px';
    orbitContainer.style.transition = '2s ease';
    hiddenOrbitCaption.style.transitionDelay = '1.5s';
    hiddenOrbitCaption.style.transitionDuration = '2s';
    hiddenOrbitCaption.style.color = "white"; 
    upperCaptionOrbit.style.color = 'transparent';
    upperCaptionOrbit.style.transition = '1s ease';
    upperCaptionOrbit.style.textDecorationColor = 'transparent';
    });

orbitContainer.addEventListener('mouseout', () => {
    orbitImage.style.transition = '3s';
    orbitImage.style.opacity = '100%';
    hiddenOrbitCaption.style.transition = '0s';
    hiddenOrbitCaption.style.color = "transparent"; 
    upperCaptionOrbit.style.transition = '2s ease';
    upperCaptionOrbit.style.color = 'white';
    upperCaptionOrbit.style.textDecorationColor = 'yellow';
    orbitContainer.style.transitionDuration = '2s';
    orbitContainer.style.width = '100%';
  });


  // moon hover

moonContainer.addEventListener('mouseover', () => {
    moonImage.style.opacity = '45%';
    moonImage.style.transition = '2s';
    moonContainer.style.width = '3500px';
    moonContainer.style.transition = '2s ease';
    hiddenMoonCaption.style.transitionDelay = '1.5s';
    hiddenMoonCaption.style.transitionDuration = '2s';
    hiddenMoonCaption.style.color = "white"; 
    upperCaptionMoon.style.color = 'transparent';
    upperCaptionMoon.style.transition = '1s ease';
    upperCaptionMoon.style.textDecorationColor = 'transparent';
    });

    moonContainer.addEventListener('mouseout', () => {
    moonImage.style.transition = '3s';
    moonImage.style.opacity = '100%';
    moonContainer.style.transitionDuration = '2s ease';
    moonContainer.style.width = '100%';
    hiddenMoonCaption.style.transition = '0s';
    hiddenMoonCaption.style.color = "transparent"; 
    upperCaptionMoon.style.transition = '4s ease';
    upperCaptionMoon.style.color = 'white';
    upperCaptionMoon.style.transition = '4s ease';
    upperCaptionMoon.style.textDecorationColor = 'yellow';
  });








