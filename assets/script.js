window.onscroll = function () {
  backgroundSlide();
};

function backgroundSlide() {
  const backgroundSlide = document.getElementById("background-slide");

  const facebookIcon = document.getElementById("facebook-icon");
  const twitterIcon = document.getElementById("twitter-icon");
  const instagramIcon = document.getElementById("instagram-icon");
  const linkedinIcon = document.getElementById("linkedin-icon");

  const freeTrail = document.getElementById("free-trail");
  const menuText = document.getElementById("menu-text");

  const menu = document.getElementById("menu");
  const menuContainer = document.getElementById("menu-container");

  const line1 = document.getElementById("line-1");
  const line2 = document.getElementById("line-2");
  const line3 = document.getElementById("line-3");

  const scroll_y = scrollY;

  if (scroll_y === 0) {
    backgroundSlide.style.transform = "translateY(-100%)";
    facebookIcon.style.filter =
      "invert(100%) sepia(4%) saturate(111%) hue-rotate(182deg) brightness(120%) contrast(100%)";
    twitterIcon.style.filter =
      "invert(100%) sepia(4%) saturate(111%) hue-rotate(182deg) brightness(120%) contrast(100%)";
    instagramIcon.style.filter =
      "invert(100%) sepia(4%) saturate(111%) hue-rotate(182deg) brightness(120%) contrast(100%)";
    linkedinIcon.style.filter =
      "invert(100%) sepia(4%) saturate(111%) hue-rotate(182deg) brightness(120%) contrast(100%)";
    freeTrail.style.color = "white";
    menuText.style.color = "white";

    line1.style.backgroundColor = "white";
    line2.style.backgroundColor = "white";
    line3.style.backgroundColor = "white";

    //HOVER EFFECTS
    //******************************************************************** */

    facebookIcon.addEventListener("mouseover", () => {
      facebookIcon.style.filter =
        "invert(82%) sepia(28%) saturate(5895%) hue-rotate(360deg) brightness(101%) contrast(106%)";
      facebookIcon.style.transition = "all .3s ease-in-out";
    });
    facebookIcon.addEventListener("mouseleave", () => {
      facebookIcon.style.filter =
        "invert(100%) sepia(4%) saturate(111%) hue-rotate(182deg) brightness(120%) contrast(100%)";
      facebookIcon.style.transition = "all .3s ease-in-out";
    });

    twitterIcon.addEventListener("mouseover", () => {
      twitterIcon.style.filter =
        "invert(82%) sepia(28%) saturate(5895%) hue-rotate(360deg) brightness(101%) contrast(106%)";
      twitterIcon.style.transition = "all .3s ease-in-out";
    });
    twitterIcon.addEventListener("mouseleave", () => {
      twitterIcon.style.filter =
        "invert(100%) sepia(4%) saturate(111%) hue-rotate(182deg) brightness(120%) contrast(100%)";
      twitterIcon.style.transition = "all .3s ease-in-out";
    });

    instagramIcon.addEventListener("mouseover", () => {
      instagramIcon.style.filter =
        "invert(82%) sepia(28%) saturate(5895%) hue-rotate(360deg) brightness(101%) contrast(106%)";
      instagramIcon.style.transition = "all .3s ease-in-out";
    });
    instagramIcon.addEventListener("mouseleave", () => {
      instagramIcon.style.filter =
        "invert(100%) sepia(4%) saturate(111%) hue-rotate(182deg) brightness(120%) contrast(100%)";
      instagramIcon.style.transition = "all .3s ease-in-out";
    });

    linkedinIcon.addEventListener("mouseover", () => {
      linkedinIcon.style.filter =
        "invert(82%) sepia(28%) saturate(5895%) hue-rotate(360deg) brightness(101%) contrast(106%)";
      linkedinIcon.style.transition = "all .3s ease-in-out";
    });
    linkedinIcon.addEventListener("mouseleave", () => {
      linkedinIcon.style.filter =
        "invert(100%) sepia(4%) saturate(111%) hue-rotate(182deg) brightness(120%) contrast(100%)";
      linkedinIcon.style.transition = "all .3s ease-in-out";
    });

    freeTrail.addEventListener("mouseover", () => {
      freeTrail.style.color = "#fcb900";
      freeTrail.style.transition = "all .3s ease-in-out";
    });
    freeTrail.addEventListener("mouseleave", () => {
      freeTrail.style.color = "white";
      freeTrail.style.transition = "all .3s ease-in-out";
    });

    menuContainer.addEventListener("mouseover", () => {
      line1.style.backgroundColor = "#fcb900";
      line2.style.backgroundColor = "#fcb900";
      line3.style.backgroundColor = "#fcb900";

      line1.style.transition = "all .3s ease-in-out";
      line2.style.transition = "all .5s ease-in-out";
      line3.style.transition = "all .7s ease-in-out";

      menu.style.transition = "all .3s ease-in-out";
      menuText.style.color = "#fcb900";
      menuText.style.transition = "all .3s ease-in-out";
    });
    menuContainer.addEventListener("mouseleave", () => {
      line1.style.backgroundColor = "white";
      line2.style.backgroundColor = "white";
      line3.style.backgroundColor = "white";

      line1.style.transition = "all .3s ease-in-out";
      line2.style.transition = "all .5s ease-in-out";
      line3.style.transition = "all .7s ease-in-out";

      menu.style.transition = "all .3s ease-in-out";
      menuText.style.color = "white";
      menuText.style.transition = "all .3s ease-in-out";
    });
  } else {
    backgroundSlide.style.transform = "translateY(0)";
    facebookIcon.style.filter =
      "invert(35%) sepia(3%) saturate(8%) hue-rotate(315deg) brightness(106%) contrast(87%)";
    twitterIcon.style.filter =
      "invert(35%) sepia(3%) saturate(8%) hue-rotate(315deg) brightness(106%) contrast(87%)";
    instagramIcon.style.filter =
      "invert(35%) sepia(3%) saturate(8%) hue-rotate(315deg) brightness(106%) contrast(87%)";
    linkedinIcon.style.filter =
      "invert(35%) sepia(3%) saturate(8%) hue-rotate(315deg) brightness(106%) contrast(87%)";
    freeTrail.style.color = "#646464";
    menuText.style.color = "#646464";

    line1.style.backgroundColor = "#646464";
    line2.style.backgroundColor = "#646464";
    line3.style.backgroundColor = "#646464";

    line1.style.transition = "all .3s ease-in-out";
    line2.style.transition = "all .5s ease-in-out";
    line3.style.transition = "all .7s ease-in-out";

    //HOVER EFFECTS
    //******************************************************************** */

    facebookIcon.addEventListener("mouseover", () => {
      facebookIcon.style.filter =
        "invert(36%) sepia(64%) saturate(1733%) hue-rotate(177deg) brightness(103%) contrast(95%)";
      facebookIcon.style.transition = "all .3s ease-in-out";
    });
    facebookIcon.addEventListener("mouseleave", () => {
      facebookIcon.style.filter =
        "invert(35%) sepia(3%) saturate(8%) hue-rotate(315deg) brightness(106%) contrast(87%)";
      facebookIcon.style.transition = "all .3s ease-in-out";
    });

    twitterIcon.addEventListener("mouseover", () => {
      twitterIcon.style.filter =
        "invert(36%) sepia(64%) saturate(1733%) hue-rotate(177deg) brightness(103%) contrast(95%)";
      twitterIcon.style.transition = "all .3s ease-in-out";
    });
    twitterIcon.addEventListener("mouseleave", () => {
      twitterIcon.style.filter =
        "invert(35%) sepia(3%) saturate(8%) hue-rotate(315deg) brightness(106%) contrast(87%)";
      twitterIcon.style.transition = "all .3s ease-in-out";
    });

    instagramIcon.addEventListener("mouseover", () => {
      instagramIcon.style.filter =
        "invert(36%) sepia(64%) saturate(1733%) hue-rotate(177deg) brightness(103%) contrast(95%)";
      instagramIcon.style.transition = "all .3s ease-in-out";
    });
    instagramIcon.addEventListener("mouseleave", () => {
      instagramIcon.style.filter =
        "invert(35%) sepia(3%) saturate(8%) hue-rotate(315deg) brightness(106%) contrast(87%)";
      instagramIcon.style.transition = "all .3s ease-in-out";
    });

    linkedinIcon.addEventListener("mouseover", () => {
      linkedinIcon.style.filter =
        "invert(36%) sepia(64%) saturate(1733%) hue-rotate(177deg) brightness(103%) contrast(95%)";
      linkedinIcon.style.transition = "all .3s ease-in-out";
    });
    linkedinIcon.addEventListener("mouseleave", () => {
      linkedinIcon.style.filter =
        "invert(35%) sepia(3%) saturate(8%) hue-rotate(315deg) brightness(106%) contrast(87%)";
      linkedinIcon.style.transition = "all .3s ease-in-out";
    });

    freeTrail.addEventListener("mouseover", () => {
      freeTrail.style.color = "#0693e3";
      freeTrail.style.transition = "all .3s ease-in-out";
    });
    freeTrail.addEventListener("mouseleave", () => {
      freeTrail.style.color = "#666";
      freeTrail.style.transition = "all .3s ease-in-out";
    });

    menuContainer.addEventListener("mouseover", () => {
      line1.style.backgroundColor = "#0693e3";
      line2.style.backgroundColor = "#0693e3";
      line3.style.backgroundColor = "#0693e3";

      line1.style.transition = "all .3s ease-in-out";
      line2.style.transition = "all .5s ease-in-out";
      line3.style.transition = "all .7s ease-in-out";

      menu.style.transition = "all .3s ease-in-out";
      menuText.style.color = "#0693e3";
      menuText.style.transition = "all .3s ease-in-out";
    });
    menuContainer.addEventListener("mouseleave", () => {
      line1.style.backgroundColor = "#666";
      line2.style.backgroundColor = "#666";
      line3.style.backgroundColor = "#666";

      line1.style.transition = "all .3s ease-in-out";
      line2.style.transition = "all .5s ease-in-out";
      line3.style.transition = "all .7s ease-in-out";

      menu.style.transition = "all .3s ease-in-out";
      menuText.style.color = "#666";
      menuText.style.transition = "all .3s ease-in-out";
    });
  }
}

backgroundSlide();

// ONCLICK MENU ANIMATION | MENU to X

const menuContainer = document.getElementById("menu-container");

menuContainer.addEventListener("click", () => {
  const line1 = document.getElementById("line-1");
  const line2 = document.getElementById("line-2");
  const line3 = document.getElementById("line-3");

  const body = document.body;

  const menuDrop = document.getElementById("menu-drop");

  const joinChat = document.getElementById("join-chat");

  if (line2.style.opacity !== "0") {
    line2.style.opacity = "0";
    line1.style.transform = "rotate(45deg)";
    line3.style.transform = "rotate(-45deg)";
    line3.style.position = "absolute";

    line1.style.transition = "all .4s ease-in-out";
    line2.style.transition = "all .2s ease-in-out";
    line3.style.transition = "all .4s ease-in-out";

    // Drop Header Backround
    window.scrollBy(0, 1);

    //Disable Scrollbar
    body.style.overflowY = "hidden";
    body.style.transition = "all .2s ease-in-out";

    //Drop Menu - show
    menuDrop.style.transform = "translateY(0)";
    menuDrop.style.opacity = "1";
    menuDrop.style.transition = "all .5s ease-in-out";

    //HIDE JOIN CHAT- ICON
    joinChat.style.opacity = "0";
    joinChat.style.transition = "all .5s ease-in-out";
  } else {
    line2.style.opacity = "1";
    line1.style.transform = "rotate(0)";
    line3.style.transform = "rotate(0)";
    line3.style.position = "static";

    line1.style.transition = "all .4s ease-in-out";
    line2.style.transition = "all 1s ease-in-out";
    line3.style.transition = "all .4s ease-in-out";
    // Drop Header Backround
    window.scrollBy(0, -1);

    //Disable Scrollbar
    body.style.overflowY = "";
    body.style.transition = "all .2s ease-in-out";

    //Drop Menu - Hide
    menuDrop.style.transform = "translateY(calc(-100% - 160px))";
    menuDrop.style.opacity = "0";
    menuDrop.style.transition = "all .5s ease-in-out";

    //SHOW JOIN CHAT- ICON
    joinChat.style.opacity = "1";
    joinChat.style.transition = "all .5s ease-in-out";
  }
});

// SIDE_MENU | ON HOVER EFFECT

const sideMenu = document.getElementById("side-menu");

sideMenu.addEventListener("mouseover", () => {
  const siderClosedContent = document.getElementById("sider-closed-content");

  // SIDE MENU - OUT
  sideMenu.style.transform = "translateX(0)";
  sideMenu.style.transition = "all .4s ease-in-out";

  //Hide menu | Icons
  siderClosedContent.style.opacity = "0";
  siderClosedContent.style.transition = "all .3s ease-in-out";
});

sideMenu.addEventListener("mouseleave", () => {
  const siderClosedContent = document.getElementById("sider-closed-content");

  // SIDE MENU - IN
  sideMenu.style.transform = "translateX(100%)";
  sideMenu.style.transition = "all .4s ease-in-out";

  //Show menu | Icons
  siderClosedContent.style.opacity = "1";
  siderClosedContent.style.transition = "all .3s ease-in-out";
});

//SECTION- 1 DOUBLE ARROW CLICK
// ********************************************************************

function doubleArrow1() {
  const aboutPlanetfitnessDropContent = document.getElementById(
    "about-planetfitness-drop-content"
  );
  const threeBrandsDropContent = document.getElementById(
    "three-brands-drop-content"
  );
  const weKeepItDropContent = document.getElementById(
    "we-keep-it-drop-content"
  );

  const doubleArrow1 = document.getElementById("double-arrow-1");
  const doubleArrow3 = document.getElementById("double-arrow-3");
  const doubleArrow2 = document.getElementById("double-arrow-2");

  const section1 = document.getElementById("section-1");

  if (aboutPlanetfitnessDropContent.style.maxHeight === "0px") {
    aboutPlanetfitnessDropContent.style.maxHeight = "311px";
    aboutPlanetfitnessDropContent.style.opacity = "1";
    aboutPlanetfitnessDropContent.style.transition = "all 0.2s ease-in-out";

    // RotatingDoubleArrow - 180 deg
    doubleArrow1.style.transform = "rotate(180deg)";

    // CHANGE BACKGROUND IMAGE
    section1.style.backgroundImage =
      "url(assets/images/section-1/gym-img-2.jpg)";

    //CLOSE OtHER DROP CONTENT IF OPEN
    threeBrandsDropContent.style.maxHeight = "0px";
    threeBrandsDropContent.style.opacity = "0";

    weKeepItDropContent.style.maxHeight = "0px";
    weKeepItDropContent.style.opacity = "0";

    //CLOSE ARROW
    doubleArrow2.style.transform = "rotate(0deg)";
    doubleArrow3.style.transform = "rotate(0deg)";
  } else {
    aboutPlanetfitnessDropContent.style.maxHeight = "0px";
    aboutPlanetfitnessDropContent.style.opacity = "0";
    aboutPlanetfitnessDropContent.style.transition = "all 0.2s ease-in-out";

    // RotatingDoubleArrow - 0 degrees
    doubleArrow1.style.transform = "rotate(0deg)";
  }
}

function doubleArrow2() {
  const threeBrandsDropContent = document.getElementById(
    "three-brands-drop-content"
  );
  const aboutPlanetfitnessDropContent = document.getElementById(
    "about-planetfitness-drop-content"
  );
  const weKeepItDropContent = document.getElementById(
    "we-keep-it-drop-content"
  );

  const doubleArrow2 = document.getElementById("double-arrow-2");
  const doubleArrow1 = document.getElementById("double-arrow-1");
  const doubleArrow3 = document.getElementById("double-arrow-3");

  const section1 = document.getElementById("section-1");

  if (threeBrandsDropContent.style.maxHeight === "0px") {
    threeBrandsDropContent.style.maxHeight = "311px";
    threeBrandsDropContent.style.opacity = "1";
    threeBrandsDropContent.style.transition = "all 0.2s ease-in-out";

    // RotatingDoubleArrow - 180 deg
    doubleArrow2.style.transform = "rotate(180deg)";

    // CHANGE BACKGROUND IMAGE
    section1.style.backgroundImage =
      "url(assets/images/section-1/gym-img-3.jpg)";

    //CLOSE OtHER DROP CONTENT IF OPEN
    aboutPlanetfitnessDropContent.style.maxHeight = "0px";
    aboutPlanetfitnessDropContent.style.opacity = "0";

    weKeepItDropContent.style.maxHeight = "0px";
    weKeepItDropContent.style.opacity = "0";

    //CLOSE ARROW
    doubleArrow1.style.transform = "rotate(0deg)";
    doubleArrow3.style.transform = "rotate(0deg)";
  } else {
    threeBrandsDropContent.style.maxHeight = "0px";
    threeBrandsDropContent.style.opacity = "0";
    threeBrandsDropContent.style.transition = "all 0.2s ease-in-out";

    // RotatingDoubleArrow - 0 degrees
    doubleArrow2.style.transform = "rotate(0deg)";
  }
}

function doubleArrow3() {
  const weKeepItDropContent = document.getElementById(
    "we-keep-it-drop-content"
  );
  const threeBrandsDropContent = document.getElementById(
    "three-brands-drop-content"
  );
  const aboutPlanetfitnessDropContent = document.getElementById(
    "about-planetfitness-drop-content"
  );

  const doubleArrow3 = document.getElementById("double-arrow-3");
  const doubleArrow2 = document.getElementById("double-arrow-2");
  const doubleArrow1 = document.getElementById("double-arrow-1");

  const section1 = document.getElementById("section-1");

  if (weKeepItDropContent.style.maxHeight === "0px") {
    weKeepItDropContent.style.maxHeight = "311px";
    weKeepItDropContent.style.opacity = "1";
    weKeepItDropContent.style.transition = "all 0.2s ease-in-out";

    // RotatingDoubleArrow - 180 deg
    doubleArrow3.style.transform = "rotate(180deg)";

    // CHANGE BACKGROUND IMAGE
    section1.style.backgroundImage =
      "url(assets/images/section-1/gym-img-4.jpg)";

    //CLOSE OtHER DROP CONTENT IF OPEN
    threeBrandsDropContent.style.maxHeight = "0px";
    threeBrandsDropContent.style.opacity = "0";

    aboutPlanetfitnessDropContent.style.maxHeight = "0px";
    aboutPlanetfitnessDropContent.style.opacity = "0";

    //CLOSE ARROW
    doubleArrow1.style.transform = "rotate(0deg)";
    doubleArrow2.style.transform = "rotate(0deg)";
  } else {
    weKeepItDropContent.style.maxHeight = "0px";
    weKeepItDropContent.style.opacity = "0";
    weKeepItDropContent.style.transition = "all 0.2s ease-in-out";

    // RotatingDoubleArrow - 0 degrees
    doubleArrow3.style.transform = "rotate(0deg)";
  }
}

//SECTION- 2 RIGHT ARROW HOVER
// ********************************************************************
// ********************************************************************

const engagingClass = document.getElementById("engaging-class");
const freeTrial = document.getElementById("free-trial");
const teensTrainFree = document.getElementById("teens-train-free");

engagingClass.addEventListener("mouseover", () => {
  const section2Arrow1 = document.getElementById("section-2-arrow-1");
  section2Arrow1.style.display = "flex";

  //HIDDING OTHER ARROWS
  const section2Arrow2 = document.getElementById("section-2-arrow-2");
  section2Arrow2.style.display = "none";
  const section2Arrow3 = document.getElementById("section-2-arrow-3");
  section2Arrow3.style.display = "none";

  //RIGHT SIDE CONTENT
  //CHANGE RIGHT CONTENT
  const engagingClassContent = document.getElementById(
    "engaging-class-content"
  );
  engagingClassContent.style.display = "flex";

  //Hide RiGHT CONTENT
  const freeTrialContent = document.getElementById("free-trial-content");
  freeTrialContent.style.display = "none";
  const teensTrainFreeContent = document.getElementById(
    "teens-train-free-content"
  );
  teensTrainFreeContent.style.display = "none";
});

freeTrial.addEventListener("mouseover", () => {
  const section2Arrow2 = document.getElementById("section-2-arrow-2");
  section2Arrow2.style.display = "flex";

  //HIDDING OTHER ARROWS
  const section2Arrow1 = document.getElementById("section-2-arrow-1");
  section2Arrow1.style.display = "none";
  const section2Arrow3 = document.getElementById("section-2-arrow-3");
  section2Arrow3.style.display = "none";

  //RIGHT SIDE CONTENT
  //CHANGE RIGHT CONTENT
  const freeTrialContent = document.getElementById("free-trial-content");
  freeTrialContent.style.display = "flex";

  //Hide RiGHT CONTENT
  const teensTrainFreeContent = document.getElementById(
    "teens-train-free-content"
  );
  teensTrainFreeContent.style.display = "none";
  const engagingClassContent = document.getElementById(
    "engaging-class-content"
  );
  engagingClassContent.style.display = "none";
});

teensTrainFree.addEventListener("mouseover", () => {
  const section2Arrow3 = document.getElementById("section-2-arrow-3");
  section2Arrow3.style.display = "flex";

  //HIDDING OTHER ARROWS
  const section2Arrow1 = document.getElementById("section-2-arrow-1");
  section2Arrow1.style.display = "none";
  const section2Arrow2 = document.getElementById("section-2-arrow-2");
  section2Arrow2.style.display = "none";

  //RIGHT SIDE CONTENT
  //CHANGE RIGHT CONTENT
  const teensTrainFreeContent = document.getElementById(
    "teens-train-free-content"
  );
  teensTrainFreeContent.style.display = "flex";

  //Hide RiGHT CONTENT
  const engagingClassContent = document.getElementById(
    "engaging-class-content"
  );
  engagingClassContent.style.display = "none";
  const freeTrialContent = document.getElementById("free-trial-content");
  freeTrialContent.style.display = "none";
});

//SECTION- 2 - SMALL - onclick-background
// ********************************************************************
// ********************************************************************

const dumbbellIcon = document.getElementById("dumbbell-icon");
const runningManIcon = document.getElementById("running-man-icon");
const groupIcon = document.getElementById("group-icon");

dumbbellIcon.addEventListener("click", () => {
  const onclickBackground = document.getElementById("onclick-background");
  const onclickBackground2 = document.getElementById("onclick-background-2");
  const onclickBackground3 = document.getElementById("onclick-background-3");

  // ADD BACKGROUND AND COLOR CHANGE ON CLICK
  dumbbellIcon.style.filter = "none";
  onclickBackground.style.border = "3px solid #005baa";
  onclickBackground.style.backgroundColor = "#00a0f0";

  // REMOVE BACKGROUND FOR OTHER ICONS

  onclickBackground2.style.border = "none";
  onclickBackground2.style.backgroundColor = "transparent";
  runningManIcon.style.filter =
    "brightness(0) saturate(100%) invert(31%) sepia(14%) saturate(1%) hue-rotate(38deg) brightness(95%) contrast(82%)";
  onclickBackground3.style.border = "none";
  onclickBackground3.style.backgroundColor = "transparent";
  groupIcon.style.filter =
    "brightness(0) saturate(100%) invert(31%) sepia(14%) saturate(1%) hue-rotate(38deg) brightness(95%) contrast(82%)";

  // Change Left Content OnClick
  // *************************************
  const engagingClassSmaller = document.getElementById(
    "engaging-class-smaller"
  );
  const freeTrialSmaller = document.getElementById("free-trial-smaller");
  const teensTrainFreeSmaller = document.getElementById(
    "teens-train-free-smaller"
  );

  engagingClassSmaller.style.display = "flex";
  freeTrialSmaller.style.display = "none";
  teensTrainFreeSmaller.style.display = "none";
});

runningManIcon.addEventListener("click", () => {
  const onclickBackground2 = document.getElementById("onclick-background-2");
  const onclickBackground = document.getElementById("onclick-background");
  const onclickBackground3 = document.getElementById("onclick-background-3");

  // ADD BACKGROUND AND COLOR CHANGE ON CLICK
  runningManIcon.style.filter = "none";
  onclickBackground2.style.border = "3px solid #005baa";
  onclickBackground2.style.backgroundColor = "#00a0f0";

  // REMOVE BACKGROUND FOR OTHER ICONS

  onclickBackground.style.border = "none";
  onclickBackground.style.backgroundColor = "transparent";
  dumbbellIcon.style.filter =
    "brightness(0) saturate(100%) invert(31%) sepia(14%) saturate(1%) hue-rotate(38deg) brightness(95%) contrast(82%)";
  onclickBackground3.style.border = "none";
  onclickBackground3.style.backgroundColor = "transparent";
  groupIcon.style.filter =
    "brightness(0) saturate(100%) invert(31%) sepia(14%) saturate(1%) hue-rotate(38deg) brightness(95%) contrast(82%)";

  // Change Left Content OnClick
  // *************************************
  const engagingClassSmaller = document.getElementById(
    "engaging-class-smaller"
  );
  const freeTrialSmaller = document.getElementById("free-trial-smaller");
  const teensTrainFreeSmaller = document.getElementById(
    "teens-train-free-smaller"
  );

  engagingClassSmaller.style.display = "none";
  freeTrialSmaller.style.display = "flex";
  teensTrainFreeSmaller.style.display = "none";
});

groupIcon.addEventListener("click", () => {
  const onclickBackground3 = document.getElementById("onclick-background-3");
  const onclickBackground = document.getElementById("onclick-background");
  const onclickBackground2 = document.getElementById("onclick-background-2");

  // ADD BACKGROUND AND COLOR CHANGE ON CLICK
  groupIcon.style.filter = "none";
  onclickBackground3.style.border = "3px solid #005baa";
  onclickBackground3.style.backgroundColor = "#00a0f0";

  // REMOVE BACKGROUND FOR OTHER ICONS

  onclickBackground.style.border = "none";
  onclickBackground.style.backgroundColor = "transparent";
  dumbbellIcon.style.filter =
    "brightness(0) saturate(100%) invert(31%) sepia(14%) saturate(1%) hue-rotate(38deg) brightness(95%) contrast(82%)";
  onclickBackground2.style.border = "none";
  onclickBackground2.style.backgroundColor = "transparent";
  runningManIcon.style.filter =
    "brightness(0) saturate(100%) invert(31%) sepia(14%) saturate(1%) hue-rotate(38deg) brightness(95%) contrast(82%)";

  // Change Left Content OnClick
  // *************************************
  const engagingClassSmaller = document.getElementById(
    "engaging-class-smaller"
  );
  const freeTrialSmaller = document.getElementById("free-trial-smaller");
  const teensTrainFreeSmaller = document.getElementById(
    "teens-train-free-smaller"
  );

  engagingClassSmaller.style.display = "none";
  freeTrialSmaller.style.display = "none";
  teensTrainFreeSmaller.style.display = "flex";
});
