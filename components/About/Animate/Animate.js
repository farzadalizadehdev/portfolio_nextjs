import gsap from "gsap";
import { useEffect } from "react";
const Animate = (props) => {
  useEffect(() => {
    window.onresize = window.onload = function () {
      gsap.set(".m1_stage", { x: "50%", opacity: 1 });
    };

    gsap
      .timeline({ defaults: { duration: 45 } })
      .from(".main1", { duration: 1, autoAlpha: 0, ease: "power1.inOut" }, 0)
      .fromTo(
        ".m1_cGroup",
        { opacity: 0 },
        { duration: 0.3, opacity: 1, stagger: -0.1 },
        0
      )
      .from(
        ".m1_cGroup",
        {
          duration: 2.5,
          scale: -0.3,
          transformOrigin: "50% 50%",
          stagger: -0.05,
          ease: "elastic",
        },
        0
      )
      .fromTo(
        ".m1Bg",
        { opacity: 0 },
        { duration: 1, opacity: 1, ease: "power2.inOut" },
        0.2
      )

      .add("orbs", 1.2)


      .fromTo(
        ".orb1",
        { xPercent: -35, yPercent: -5 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line1", false)[0];
            },
            start: 1.03,
            end: 1.22,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".orb2",
        { xPercent: -45, yPercent: -10 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line2", false)[0];
            },
            start: 0.98,
            end: 1.2,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".orb3",
        { xPercent: -50, yPercent: -15 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
            },
            start: 1.06,
            end: 1.31,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".orb3b",
        { xPercent: -50, yPercent: -25 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
            },
            start: 1.49,
            end: 1.65,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".orb3c",
        { xPercent: -45, yPercent: -15 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
            },
            start: 0.95,
            end: 1.2,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".orb4",
        { xPercent: -50, yPercent: -25 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line4", false)[0];
            },
            start: 1.14,
            end: 1.26,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".orb4b",
        { xPercent: -50, yPercent: -25 },
        {
          motionPath: {
            path: function () {
              return MotionPathPlugin.convertToPath(".c1_line4", false)[0];
            },
            start: 1.41,
            end: 1.6,
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
        },
        "orbs"
      )

      .fromTo(
        ".m1Orb",
        { scale: 0, transformOrigin: "50% 50%" },
        {
          duration: 0.8,
          scale: 1.5,
          ease: "back.out(3)",
          stagger: 0.15,
          overwrite: "auto",
        },
        "orbs"
      )
      .fromTo(
        ".m1OrbBlank",
        { opacity: 0 },
        {
          duration: 0.8,
          opacity: function (i) {
            return 0.2 + i / 7;
          },
          stagger: 0.1,
          overwrite: "auto",
        },
        "orbs"
      )
      .fromTo(
        ".m1OrbBlank",
        {
          x: function (i) {
            return 620 - (i / 4) * 380;
          },
          transformOrigin: function (i) {
            return -(620 - (i / 4) * 380) + "px 0px";
          },
          rotation: function (i) {
            return [99, -10, 55, 110, 120][i];
          },
        },
        { rotation: "+=75", yoyo: true, repeat: -1 },
        "orbs"
      );
  }, []);

  return (
    <svg className="main1" width="100%" height="100%">
      <defs>
        <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop
            offset="10%"
            style={{ stopColor: 'rgb(255, 255, 0)', stopOpacity: 0.9 }}
          />
          <stop
            offset="99%"
            style={{ stopColor: 'rgb(0, 255, 0)', stopOpacity: 0.1 }}
          />
        </linearGradient>
        <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop
            offset="25%"
            style={{ stopColor: 'rgb(0, 255, 200)', stopOpacity: 0.1 }}
          />
          <stop
            offset="99%"
            style={{ stopColor: 'rgb(200, 255, 0)', stopOpacity: 0.2 }}
          />
        </linearGradient>
      </defs>

      <rect className="m1Bg" fill="url(#grad2)" width="100%" height="100%" />

      <g className="m1_stage" opacity="0">
        <g className="m1_cGroup">
          <circle className="m1OrbBlank" cx="0" cy="50" r="50" fill="#1290ff" />

          <circle
            className="c1_line c1_line4"
            cx="0"
            cy="50"
            r="550"
            fill="none"
            strokeWidth="2"
            stroke="url(#grad1)"
            opacity="0.4"
          />
          <g className="m1Orb orb4b">
            <image xlinkHref="/images/logoVue.png" width="40" height="40" />
          </g>

          <g className="m1Orb orb4">
            <circle cx="15" cy="10.5" r="20" fill="#006bca" />
            <path
              fill="#fff"
              opacity="0.75"
              d="M5.29,14.59l-0.01-0.89v-2.32c0.23-0.05,0.53-0.07,0.9-0.07c0.36,0,0.66,0.02,0.9,0.07v8.17
                                            c-0.24,0.05-0.54,0.07-0.9,0.07s-0.65-0.02-0.9-0.07v-2.57l0.01-0.89l-0.6,0.01H3.25l-0.6-0.01l0.01,0.89v2.57
                                            c-0.23,0.05-0.54,0.07-0.9,0.07c-0.37,0-0.66-0.02-0.89-0.07v-8.17c0.23-0.05,0.52-0.07,0.89-0.07c0.37,0,0.67,0.02,0.9,0.07v2.32
                                            l-0.01,0.89l0.6-0.01h1.44L5.29,14.59z M11.74,12.89l0.01,0.89v5.78c-0.24,0.05-0.54,0.07-0.9,0.07c-0.36,0-0.65-0.02-0.9-0.07
                                            v-5.78l0.01-0.89H9.96L9.23,12.9H7.99c-0.04-0.23-0.06-0.48-0.06-0.76c0-0.28,0.02-0.53,0.06-0.76h5.75
                                            c0.06,0.21,0.09,0.45,0.09,0.73c0,0.28-0.07,0.48-0.22,0.6c-0.15,0.12-0.39,0.19-0.72,0.19h-0.41l-0.73-0.01H11.74z M14.19,19.53
                                            l0.62-8.14c0.3-0.06,0.69-0.08,1.18-0.08c0.49,0,0.88,0.03,1.17,0.08l0.75,3.04c0.21,0.89,0.36,1.6,0.45,2.14h0.07
                                            c0.09-0.54,0.23-1.26,0.45-2.14l0.75-3.04c0.3-0.06,0.69-0.08,1.17-0.08c0.48,0,0.87,0.03,1.16,0.08l0.62,8.14
                                            c-0.22,0.06-0.5,0.1-0.84,0.1s-0.63-0.02-0.84-0.06L20.7,16.1c-0.06-1.1-0.09-2.01-0.09-2.72h-0.08l-1.22,4.97
                                            c-0.21,0.04-0.51,0.06-0.91,0.06c-0.39,0-0.71-0.02-0.93-0.06l-1.21-4.97h-0.08c-0.02,0.97-0.05,1.88-0.09,2.72l-0.19,3.47
                                            c-0.22,0.04-0.5,0.06-0.84,0.06C14.7,19.63,14.42,19.6,14.19,19.53z M26.92,18.01H29c0,0.26-0.02,0.49-0.05,0.68
                                            c-0.09,0.6-0.48,0.9-1.17,0.9h-2.7c-0.32,0-0.57-0.1-0.76-0.29c-0.19-0.19-0.28-0.45-0.28-0.79v-7.13l0.08-0.07h0.66
                                            c0.7,0,1.06,0.38,1.06,1.15v5.59C26.23,18.03,26.59,18.01,26.92,18.01z M5.59,3.67c0-0.04,0-0.08,0-0.13c0-0.53-0.11-0.98-0.32-1.36
                                            C5.05,1.82,4.67,1.63,4.13,1.63S3.19,1.89,2.94,2.39C2.69,2.9,2.56,3.63,2.56,4.59c0,0.96,0.16,1.67,0.47,2.15
                                            c0.31,0.47,0.77,0.71,1.36,0.71c0.6,0,1.3-0.3,2.12-0.9C6.7,6.68,6.89,6.87,7.07,7.11c0.18,0.24,0.29,0.47,0.34,0.68
                                            c-0.38,0.38-0.88,0.7-1.49,0.96C5.3,9,4.7,9.13,4.11,9.13c-0.59,0-1.08-0.09-1.48-0.26C2.23,8.7,1.9,8.47,1.64,8.19
                                            C1.38,7.9,1.17,7.56,1,7.17C0.69,6.44,0.53,5.6,0.53,4.65c0-1.51,0.34-2.65,1.03-3.41C2.25,0.48,3.1,0.1,4.12,0.1
                                            c1.01,0,1.82,0.25,2.41,0.75c0.6,0.5,0.89,1.12,0.89,1.86c0,0.71-0.37,1.06-1.1,1.06C6.08,3.77,5.84,3.74,5.59,3.67z M7.9,8.18
                                            c0.03-0.27,0.11-0.54,0.25-0.8C8.3,7.11,8.47,6.9,8.66,6.74c0.92,0.56,1.77,0.84,2.56,0.84c0.36,0,0.64-0.09,0.83-0.26
                                            c0.19-0.17,0.28-0.38,0.28-0.63c0-0.42-0.28-0.76-0.85-1.01L9.99,5.04c-1.2-0.52-1.8-1.3-1.8-2.32c0-0.77,0.29-1.4,0.87-1.89
                                            c0.58-0.49,1.35-0.73,2.3-0.73c0.95,0,1.89,0.24,2.82,0.72c-0.04,0.58-0.26,1.07-0.66,1.46c-0.86-0.41-1.62-0.62-2.28-0.62
                                            c-0.35,0-0.61,0.08-0.8,0.25c-0.19,0.16-0.28,0.35-0.28,0.56c0,0.34,0.26,0.62,0.78,0.85l1.52,0.63c0.61,0.26,1.08,0.61,1.41,1.03
                                            c0.33,0.43,0.5,0.91,0.5,1.45c0,0.8-0.28,1.45-0.85,1.95c-0.57,0.5-1.39,0.75-2.45,0.75c-0.52,0-1.07-0.08-1.64-0.25
                                            C8.87,8.71,8.36,8.48,7.9,8.18z M14.83,8.18c0.03-0.27,0.11-0.54,0.25-0.8c0.14-0.27,0.31-0.48,0.51-0.64
                                            c0.92,0.56,1.77,0.84,2.56,0.84c0.36,0,0.64-0.09,0.83-0.26c0.19-0.17,0.28-0.38,0.28-0.63c0-0.42-0.28-0.76-0.85-1.01l-1.49-0.63
                                            c-1.2-0.52-1.8-1.3-1.8-2.32c0-0.77,0.29-1.4,0.87-1.89c0.58-0.49,1.35-0.73,2.3-0.73c0.95,0,1.89,0.24,2.82,0.72
                                            c-0.04,0.58-0.26,1.07-0.66,1.46c-0.86-0.41-1.62-0.62-2.28-0.62c-0.35,0-0.61,0.08-0.8,0.25c-0.19,0.16-0.28,0.35-0.28,0.56
                                            c0,0.34,0.26,0.62,0.78,0.85l1.52,0.63c0.61,0.26,1.08,0.61,1.41,1.03c0.33,0.43,0.5,0.91,0.5,1.45c0,0.8-0.28,1.45-0.85,1.95
                                            c-0.57,0.5-1.39,0.75-2.45,0.75c-0.52,0-1.07-0.08-1.64-0.25C15.8,8.71,15.29,8.48,14.83,8.18z M24.1,4.42l-0.01-0.85V2.43
                                            c0.24-0.04,0.51-0.06,0.82-0.06c0.31,0,0.58,0.02,0.8,0.06v1.14L25.7,4.42l0.82-0.01h1.06c0.05,0.27,0.08,0.53,0.08,0.77
                                            c0,0.25-0.03,0.49-0.08,0.75h-1.06L25.7,5.91l0.01,0.81v1.15c-0.23,0.04-0.5,0.06-0.81,0.06s-0.58-0.02-0.81-0.06V6.72l0.01-0.81
                                            l-0.82,0.01h-1.06c-0.05-0.24-0.08-0.49-0.08-0.76s0.03-0.52,0.08-0.76h1.06L24.1,4.42z"
            />
          </g>
        </g>
        <g className="m1_cGroup">
          <circle className="m1OrbBlank" cx="0" cy="50" r="25" fill="#983334" />

          <circle
            className="c1_line c1_line3"
            cx="0"
            cy="50"
            r="450"
            fill="none"
            strokeWidth="2"
            stroke="url(#grad1)"
            opacity="0.4"
          />

          <g className="m1Orb orb3c">
            <image xlinkHref="/images/logoReact.png" width="40" height="40" />
          </g>

          <g className="m1Orb orb3b">
            <image xlinkHref="/images/logoReact.png" width="40" height="40" />
          </g>
          <g className="m1Orb orb3">
            <circle
              cx="20"
              cy="8"
              r="24"
              stroke="#bc7c00"
              strokeWidth="3"
              fill="#cc971b"
            />
            <path
              fill="#fff"
              opacity="0.7"
              d="M5.82,6.1c0-0.05,0-0.09,0-0.14c0-0.57-0.11-1.06-0.34-1.46c-0.23-0.4-0.62-0.6-1.19-0.6S3.32,4.18,3.05,4.73
                                           c-0.27,0.55-0.4,1.34-0.4,2.37c0,1.03,0.16,1.81,0.49,2.31c0.33,0.51,0.8,0.76,1.43,0.76c0.62,0,1.36-0.32,2.22-0.97
                                           C7,9.35,7.19,9.55,7.38,9.81c0.19,0.26,0.31,0.5,0.35,0.73c-0.4,0.41-0.92,0.75-1.57,1.03c-0.65,0.28-1.28,0.42-1.89,0.42
                                           c-0.61,0-1.13-0.09-1.55-0.28c-0.42-0.19-0.77-0.43-1.03-0.74c-0.27-0.3-0.49-0.67-0.67-1.1C0.7,9.09,0.53,8.18,0.53,7.16
                                           c0-1.63,0.36-2.85,1.08-3.67c0.72-0.82,1.61-1.23,2.67-1.23c1.06,0,1.9,0.27,2.53,0.81C7.44,3.6,7.75,4.27,7.75,5.07
                                           c0,0.76-0.38,1.15-1.15,1.15C6.35,6.21,6.09,6.18,5.82,6.1z M14.18,10.84c-0.04,0.18-0.12,0.38-0.25,0.59
                                           c-0.13,0.21-0.25,0.36-0.38,0.46c-0.61-0.03-1.07-0.27-1.38-0.72c-0.57,0.55-1.19,0.82-1.88,0.82c-0.69,0-1.2-0.21-1.55-0.63
                                           c-0.35-0.42-0.52-0.9-0.52-1.43c0-0.77,0.25-1.36,0.75-1.76c0.5-0.4,1.12-0.6,1.86-0.6c0.29,0,0.62,0.01,0.99,0.04v-0.3
                                           c0-0.6-0.3-0.9-0.9-0.9c-0.38,0-1.04,0.15-1.98,0.44C8.69,6.52,8.53,6.05,8.48,5.42c0.42-0.18,0.91-0.33,1.48-0.44
                                           c0.57-0.11,1.08-0.16,1.52-0.16c0.66,0,1.22,0.19,1.66,0.57c0.45,0.38,0.67,0.96,0.67,1.76v2.79
                                           C13.81,10.36,13.93,10.66,14.18,10.84z M10.8,10.47c0.34,0,0.69-0.15,1.03-0.45V8.89c-0.19-0.01-0.46-0.01-0.8-0.01
                                           c-0.59,0-0.89,0.31-0.89,0.92c0,0.19,0.06,0.35,0.18,0.48C10.45,10.41,10.6,10.47,10.8,10.47z M20.52,7.27v2.84
                                           c0,0.58,0.11,1.03,0.32,1.35c-0.34,0.29-0.73,0.44-1.16,0.44c-0.43,0-0.73-0.1-0.89-0.31c-0.16-0.21-0.25-0.53-0.25-0.96V7.65
                                           c0-0.34-0.04-0.58-0.13-0.74c-0.09-0.15-0.24-0.23-0.46-0.23c-0.38,0-0.74,0.18-1.09,0.53v4.58c-0.27,0.05-0.6,0.08-0.98,0.08
                                           c-0.38,0-0.71-0.03-1-0.08v-6.8l0.09-0.1h0.74c0.55,0,0.9,0.27,1.05,0.82c0.65-0.56,1.27-0.85,1.88-0.85c0.61,0,1.07,0.22,1.39,0.66
                                           C20.36,5.95,20.52,6.54,20.52,7.27z M24.2,10.23l1.22-5.24c0.19-0.05,0.46-0.07,0.8-0.07c0.34,0,0.65,0.05,0.94,0.15l0.07,0.1
                                           c-0.87,3.17-1.49,5.38-1.87,6.62c-0.44,0.05-0.9,0.08-1.37,0.08s-0.8-0.07-1.01-0.2c-0.2-0.13-0.36-0.39-0.48-0.78l-1.62-5.75
                                           c0.43-0.18,0.8-0.27,1.11-0.27c0.31,0,0.55,0.07,0.73,0.22c0.18,0.15,0.31,0.39,0.39,0.72l0.64,2.61c0.06,0.23,0.13,0.55,0.2,0.96
                                           c0.07,0.41,0.11,0.66,0.13,0.74C24.09,10.19,24.13,10.23,24.2,10.23z M33.3,10.84c-0.04,0.18-0.12,0.38-0.25,0.59
                                           c-0.13,0.21-0.25,0.36-0.38,0.46c-0.61-0.03-1.07-0.27-1.38-0.72c-0.57,0.55-1.19,0.82-1.88,0.82c-0.69,0-1.2-0.21-1.55-0.63
                                           c-0.35-0.42-0.52-0.9-0.52-1.43c0-0.77,0.25-1.36,0.75-1.76c0.5-0.4,1.12-0.6,1.86-0.6c0.29,0,0.62,0.01,0.99,0.04v-0.3
                                           c0-0.6-0.3-0.9-0.9-0.9c-0.38,0-1.04,0.15-1.98,0.44c-0.27-0.32-0.42-0.79-0.48-1.42c0.42-0.18,0.91-0.33,1.48-0.44
                                           c0.57-0.11,1.08-0.16,1.52-0.16c0.66,0,1.22,0.19,1.66,0.57c0.45,0.38,0.67,0.96,0.67,1.76v2.79C32.92,10.36,33.05,10.66,33.3,10.84
                                           z M29.91,10.47c0.34,0,0.69-0.15,1.03-0.45V8.89c-0.19-0.01-0.46-0.01-0.8-0.01c-0.59,0-0.89,0.31-0.89,0.92
                                           c0,0.19,0.06,0.35,0.18,0.48C29.56,10.41,29.72,10.47,29.91,10.47z M33.72,11.31c0.01-0.22,0.07-0.46,0.18-0.74
                                           c0.11-0.27,0.24-0.48,0.38-0.63c0.69,0.37,1.3,0.56,1.84,0.56c0.27,0,0.47-0.05,0.62-0.14c0.15-0.1,0.22-0.22,0.22-0.38
                                           c0-0.29-0.21-0.51-0.64-0.67l-0.73-0.27c-1.11-0.42-1.67-1.1-1.67-2.03c0-0.68,0.23-1.22,0.69-1.63s1.07-0.6,1.84-0.6
                                           c0.38,0,0.8,0.05,1.26,0.16c0.46,0.11,0.84,0.24,1.15,0.4c0.01,0.25-0.04,0.51-0.15,0.81c-0.11,0.29-0.25,0.5-0.4,0.61
                                           c-0.73-0.34-1.34-0.51-1.83-0.51c-0.19,0-0.35,0.05-0.45,0.14s-0.16,0.21-0.16,0.35c0,0.23,0.19,0.41,0.56,0.56l0.81,0.3
                                           C38.41,8.05,39,8.78,39,9.78c0,0.67-0.24,1.21-0.73,1.61c-0.49,0.4-1.17,0.6-2.06,0.6C35.33,11.99,34.5,11.76,33.72,11.31z"
            />
          </g>
        </g>
        <g className="m1_cGroup">
          <circle className="m1OrbBlank" cx="0" cy="50" r="15" fill="#653997" />

          <circle
            className="c1_line c1_line2"
            cx="0"
            cy="50"
            r="360"
            fill="none"
            strokeWidth="2"
            stroke="url(#grad1)"
            opacity="0.5"
          />

          <g className="m1Orb orb2">
            <circle
              cx="18.5"
              cy="7"
              r="24.5"
              fill="#983334"
              strokeWidth="2.5"
              stroke="#b9393a"
            />
            <path
              fill="#fff"
              opacity="0.7"
              d="M1.75,10.47L0.24,2.78c0.35-0.15,0.69-0.23,1.03-0.23c0.34,0,0.58,0.08,0.74,0.23s0.26,0.43,0.32,0.83l0.57,3.4
                                           c0.19,1.07,0.29,1.77,0.32,2.1c0.03,0.33,0.05,0.51,0.06,0.53s0.04,0.03,0.1,0.03l1.09-6.85c0.35-0.06,0.77-0.09,1.25-0.09
                                           s0.89,0.03,1.24,0.09l1,6.67C7.97,9.59,7.98,9.64,8,9.65c0.02,0.02,0.05,0.03,0.1,0.03C8.18,8.9,8.31,8.01,8.48,6.99l0.76-4.32
                                           c0.24-0.05,0.52-0.08,0.85-0.08c0.33,0,0.64,0.04,0.94,0.13l0.09,0.13l-1.7,8.42c-0.52,0.06-1.01,0.09-1.47,0.09
                                           c-0.46,0-0.79-0.06-0.99-0.18c-0.19-0.12-0.32-0.35-0.38-0.71L6.12,7.66C5.92,6.3,5.8,5.32,5.74,4.71h-0.1
                                           C5.53,5.64,5.38,6.62,5.21,7.66l-0.6,3.61c-0.55,0.06-1.05,0.09-1.5,0.09s-0.77-0.06-0.97-0.17C1.95,11.07,1.81,10.83,1.75,10.47z
                                           M16.42,8.74h-3.36c0.03,0.4,0.13,0.72,0.3,0.94c0.18,0.22,0.49,0.33,0.94,0.33c0.45,0,0.98-0.13,1.6-0.39
                                           c0.26,0.25,0.43,0.63,0.52,1.12c-0.68,0.48-1.51,0.72-2.48,0.72c-0.52,0-0.98-0.09-1.36-0.27c-0.38-0.18-0.67-0.43-0.87-0.75
                                           c-0.37-0.61-0.56-1.4-0.56-2.36s0.23-1.74,0.7-2.36c0.46-0.61,1.14-0.92,2.02-0.92s1.55,0.25,2.02,0.75c0.47,0.5,0.7,1.14,0.7,1.92
                                           C16.59,7.92,16.53,8.34,16.42,8.74z M14.62,6.47c-0.14-0.21-0.37-0.32-0.67-0.32c-0.3,0-0.52,0.11-0.66,0.32
                                           C13.16,6.67,13.08,7,13.05,7.45h1.79V7.29C14.84,6.96,14.77,6.68,14.62,6.47z M22.64,5.74c0.38,0.58,0.58,1.37,0.58,2.36
                                           s-0.28,1.79-0.84,2.39c-0.56,0.6-1.31,0.9-2.24,0.9s-1.76-0.14-2.5-0.43V2.09L17.73,2h0.71c0.38,0,0.65,0.09,0.81,0.26
                                           c0.16,0.17,0.24,0.46,0.24,0.88v2.19c0.46-0.3,0.96-0.45,1.48-0.45C21.7,4.87,22.26,5.16,22.64,5.74z M20.43,6.39
                                           c-0.35,0-0.67,0.15-0.94,0.44v3.15c0.23,0.04,0.44,0.06,0.65,0.06c0.77,0,1.15-0.66,1.15-1.97C21.29,6.97,21,6.4,20.43,6.39z
                                           M27.96,6.44l1.98-0.01c0.01,0,0.02,0,0.03,0c0.84,0,1.27,0.4,1.27,1.21v3.3c-1.05,0.35-2.18,0.53-3.4,0.53
                                           c-1.22,0-2.14-0.39-2.78-1.18c-0.63-0.79-0.95-1.87-0.95-3.25c0-0.74,0.11-1.41,0.34-2c0.22-0.59,0.53-1.07,0.91-1.44
                                           c0.76-0.74,1.69-1.11,2.79-1.11s2.12,0.3,3.07,0.91c-0.03,0.26-0.12,0.52-0.3,0.79s-0.37,0.46-0.58,0.6
                                           c-0.69-0.46-1.39-0.69-2.09-0.69c-1.44,0-2.16,0.98-2.16,2.93c0,1.95,0.72,2.93,2.16,2.93c0.36,0,0.75-0.04,1.17-0.11V8.91
                                           c0-0.38,0.01-0.67,0.03-0.87h-0.7c-0.32,0-0.55-0.06-0.7-0.18c-0.14-0.12-0.22-0.33-0.22-0.62C27.82,6.94,27.87,6.67,27.96,6.44z
                                           M35.99,9.65h2.24c0,0.28-0.02,0.52-0.05,0.72c-0.1,0.63-0.52,0.95-1.27,0.95H34c-0.35,0-0.62-0.1-0.82-0.3
                                           c-0.2-0.2-0.3-0.48-0.3-0.83V2.67l0.09-0.08h0.71c0.76,0,1.14,0.4,1.14,1.21v5.89C35.24,9.66,35.63,9.65,35.99,9.65z"
            />
          </g>
        </g>
        <g className="m1_cGroup">
          <circle className="m1OrbBlank" cx="0" cy="50" r="20" fill="#653997" />
          <circle
            className="m1OrbBlank"
            cx="0"
            cy="50"
            r="40"
            fill="rgba(125,200,32,0.19)"
          />

          <circle
            className="c1_solid"
            cx="0"
            cy="50"
            r="280"
            fill="url(#grad1)"
            opacity="0.2"
          />
          <circle
            className="c1_line c1_line1"
            cx="0"
            cy="50"
            r="279"
            fill="none"
            strokeWidth="3"
            stroke="url(#grad1)"
            opacity="0.5"
          />
          <g className="m1Orb orb1">
            <circle cx="12.5" cy="7" r="17" fill="#653997" />
            <circle cx="12.5" cy="7" r="20" fill="none" stroke="#653997" />
            <path
              fill="#fff"
              opacity="0.7"
              d="M0.24,10.94c0.03-0.3,0.12-0.6,0.28-0.89s0.35-0.53,0.56-0.71c1.02,0.62,1.96,0.92,2.83,0.92
                                           c0.4,0,0.71-0.1,0.92-0.29c0.21-0.19,0.31-0.42,0.31-0.69c0-0.47-0.31-0.84-0.94-1.12l-1.65-0.7C1.22,6.89,0.56,6.04,0.56,4.91
                                           c0-0.85,0.32-1.54,0.97-2.09c0.64-0.54,1.49-0.81,2.54-0.81c1.05,0,2.09,0.27,3.12,0.8C7.14,3.45,6.89,3.99,6.45,4.42
                                           C5.5,3.96,4.66,3.73,3.93,3.73C3.55,3.73,3.26,3.82,3.05,4C2.85,4.19,2.74,4.39,2.74,4.63c0,0.37,0.29,0.69,0.87,0.94l1.68,0.7
                                           c0.67,0.29,1.19,0.67,1.56,1.14s0.55,1.01,0.55,1.6c0,0.89-0.31,1.61-0.94,2.16c-0.63,0.55-1.53,0.83-2.71,0.83
                                           c-0.58,0-1.18-0.09-1.81-0.28C1.31,11.52,0.74,11.27,0.24,10.94z M12.19,9.99l1.9-7.77c0.24-0.06,0.55-0.08,0.93-0.08
                                           s0.7,0.05,0.97,0.14l0.1,0.13l-2.65,9.38c-0.5,0.06-1.01,0.08-1.53,0.08s-0.88-0.07-1.11-0.2c-0.23-0.13-0.4-0.39-0.51-0.78
                                           L7.94,2.41C8.44,2.2,8.86,2.09,9.2,2.09s0.59,0.08,0.77,0.25s0.32,0.44,0.42,0.81l1.12,4.13c0.19,0.65,0.37,1.49,0.55,2.52
                                           C12.07,9.93,12.12,9.99,12.19,9.99z M21.01,6.4l2.18-0.01c0.01,0,0.02,0,0.03,0c0.93,0,1.4,0.45,1.4,1.34v3.67
                                           c-1.16,0.39-2.41,0.59-3.75,0.59c-1.34,0-2.37-0.44-3.07-1.32s-1.05-2.08-1.05-3.61c0-0.82,0.12-1.56,0.37-2.22
                                           c0.25-0.66,0.58-1.19,1-1.6c0.84-0.82,1.87-1.23,3.08-1.23s2.34,0.34,3.39,1.01c-0.03,0.29-0.14,0.58-0.33,0.88s-0.4,0.52-0.64,0.67
                                           c-0.77-0.51-1.54-0.77-2.31-0.77c-1.59,0-2.38,1.08-2.38,3.26c0,2.17,0.79,3.25,2.38,3.25c0.4,0,0.83-0.04,1.29-0.13V9.15
                                           c0-0.42,0.01-0.74,0.03-0.97h-0.77c-0.35,0-0.61-0.07-0.77-0.2s-0.24-0.37-0.24-0.69C20.86,6.96,20.91,6.67,21.01,6.4z"
            />
          </g>
        </g>

        <g className="m1_cGroup">
          <circle
            className="c1_solid"
            cx="0"
            cy="50"
            r="220"
            fill="url(#grad1)"
            opacity="0.4"
          />
        </g>
        <g className="m1_cGroup">
          <circle
            className="c1_solid"
            cx="0"
            cy="50"
            r="150"
            fill="url(#grad1)"
            opacity="0.5"
          />
        </g>
        <g className="m1_cGroup">
          <circle
            className="c1_solid"
            cx="0"
            cy="50"
            r="80"
            fill="#9e0"
            opacity="0.6"
          />
        </g>
      </g>
    </svg>
  );
};

export default Animate;
