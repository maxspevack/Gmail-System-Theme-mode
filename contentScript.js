// Function to apply dark mode styles to Gmail
function applyDarkMode() {
  const style = document.createElement("style");
  style.id = "dark-mode-style";
  style.innerHTML = `
      html {
        filter: invert(.94) hue-rotate(180deg);
        background: #121212 !important;
      }

      // img, div  {
      //   filter: invert(1.06) hue-rotate(180deg) !important;;
      // }


      // img, video, picture, canvas {
      //   filter: invert(1) hue-rotate(180deg);
      // }


      // /* For the circle around the profile picture */
      // .gb_P {
      //   filter: invert(1) hue-rotate(180deg);
      }

      // /* applications on the right side of the window (Keep, Calendar, ... etc.) */
      // div.aT5-aOt-I-JX-Jw {
      //   filter: invert(1) hue-rotate(180deg);
      // }

      // img.HiaYvf-SmKAyb {
      //   filter: invert(1) hue-rotate(180deg);
      // }

      // div.qj.aEe {
      //   filter: invert(1) hue-rotate(180deg);
      // }


      // la-s, la-c, la-e, la-l, la-m, la-r {
      //   filter: invert(1) hue-rotate(180deg);
      // }


      img, video, picture, canvas {
        filter: invert(1) hue-rotate(180deg);
      }

      /* For the circle around the profile picture */
      .gb_P {
        filter: invert(1) hue-rotate(180deg);
      }


      /* For the circle around the profile picture */
      .gb_T {
        filter: invert(1) hue-rotate(180deg);
      }


      /* applications on the right side of the window (Keep, Calendar, ... etc.) */
      div.aT5-aOt-I-JX-Jw {
        filter: invert(1) hue-rotate(180deg);
      }

      img.HiaYvf-SmKAyb {
        filter: invert(1) hue-rotate(180deg);
      }

      div.qj.aEe{
        filter: invert(1) hue-rotate(180deg);
      }


      div.at{
        filter: invert(1) hue-rotate(180deg);
      }

      ::selection {
        background:rgb(0, 0, 0) !important;
        color: rgb(255, 255, 255) !important;
      }
    `;
  document.head.appendChild(style);
}


// Function to remove dark mode styles from Gmail
function removeDarkMode() {
  const existingStyle = document.getElementById("dark-mode-style");
  if (existingStyle) {
    existingStyle.remove();
  }
}

// Check for system dark mode
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Apply the correct mode based on the system preference
function updateMode(e) {
  if (e.matches) {
    applyDarkMode();
  } else {
    removeDarkMode();
  }
}

// Run once when the script loads
updateMode(mediaQuery);

// Listen for changes in the system theme
mediaQuery.addEventListener('change', updateMode);
