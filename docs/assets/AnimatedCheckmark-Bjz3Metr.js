import{j as e}from"./index-DXGxQ1bV.js";function a({isVisible:s=!0}){return s?e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsxs("svg",{className:"animate-checkmark",width:"80",height:"80",viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"40",cy:"40",r:"38",className:"stroke-brand",strokeWidth:"3",fill:"none",style:{animation:"drawCircle 0.6s ease-out forwards"}}),e.jsx("path",{d:"M28 40L36 48L52 32",className:"stroke-brand",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",style:{animation:"drawCheckmark 0.6s ease-out 0.3s forwards",strokeDasharray:"35",strokeDashoffset:"35"}})]}),e.jsx("style",{children:`
        @keyframes drawCircle {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes drawCheckmark {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes scaleInCenter {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-checkmark {
          animation: scaleInCenter 0.3s cubic-bezier(0.36, 0, 0.66, -0.56) forwards;
        }
      `})]}):null}export{a as A};
