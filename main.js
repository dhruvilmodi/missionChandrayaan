/*
    N A M E :
    Dhruvil Modi

    I D :
    100727467

    P U R P O S E :
    Make planet earth and moon. Both will rotate and a satellite will approach towards moon.

    T H E M E:
    Universe containing twinkling stars.
    Earth will launch a satellite towards moon and it will make a round among earth and will go far towards-
    moon. But before reaching land it will go damaged and will lost the signal. So will go visually disapear.
*/

// twinking stars
TweenMax.fromTo("#smallStars", 1, {
    opacity: 1
},{
    opacity: 0.5,
    yoyo: true,
    repeat: -1
});

TweenMax.fromTo("#bigStars", 2, {
    opacity: 1
},{
    opacity: 0,
    yoyo: true,
    repeat: -1
});

// to rotate earth
TweenMax.to("#theEarth", 50, {
    rotation:360, 
    transformOrigin:"50% 50%",
    repeat: -1,
    x:400
});

// to set the earth on viewport
TweenMax.to("#theEarth", 0.1, {
    x:160,
    y:200
});

// to rotate moon
TweenMax.to("#theMoon", 50, {
    rotation:-360, 
    transformOrigin:"50% 50%",
    repeat: -1
});

// to set the monn on viewport
TweenMax.to("#theMoon", 0.1, {
    scale: 0.5,
    x:860,
    y:50,
});

// to display satellite
TweenMax.fromTo("#satelliteToMove", 3, {
    opacity: 0,
    scale: 0
},{
    opacity: 1,
    scale: 1,
});

// to rotate satellite among earth
TweenMax.fromTo("#satelliteToMove", 5, {
    rotation: 0,
},{
    rotation: '360_cw',
    transformOrigin: "center 100",
    ease: Power0.easeNone,
    delay: 3
});

// to move satellite
TweenMax.fromTo("#satelliteToMove", 10, {
    Scale: 1,
    x: 0,
    opacity: 1,
},{
    scale: 0.5,
    x: 690,
    y: -200,
    opacity: 1,
    rotation: 45,
    delay: 8
});

// to shake satellite
TweenMax.to("#satelliteToMove", 0.1, {
    x:"+=10", 
    yoyo:true, 
    repeat:Infinity,
    delay: 16
});

// to disapear satellite
TweenMax.to("#satelliteToMove", 1, {
    opacity: 0,
    delay: 17
});
