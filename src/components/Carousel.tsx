// import { useRef } from "react";

// export default function Carousel() {
//   const containerRef = useRef<null | HTMLDivElement>(null);
//   const clickHandler = (id: any) => (event: any) => {
//     if (containerRef.current) {
//       containerRef.current.scrollTo({
//         left: containerRef.current.clientWidth * id,
//         behavior: "smooth"
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col items-center w-screen">
//       <h1>Hello CodeSandbox</h1>
//       <div
//         className="flex w-full relative"
//       >
//         <div ref={containerRef} className="flex overflow-x-hidden w-full">
//           <div
//             className="w-80 shrink-0 h-60"
//             style={{
//               backgroundColor: "gray"
//             }}
//           >
//             First
//           </div>
//           <div
//             className="w-80 shrink-0 h-60"
//             style={{
//               backgroundColor: "red"
//             }}
//           >
//             Second
//           </div>
//           <div
//             className="w-80 shrink-0 h-60"
//             style={{
//               backgroundColor: "blue"
//             }}
//           >
//             Third
//           </div>
//           <div
//             className="w-80 shrink-0 h-60"
//             style={{
//               backgroundColor: "green"
//             }}
//           >
//             Four
//           </div>
//         </div>
//         <div className="absolute w-full h-full flex justify-between items-center pb-2">
//           <button className="border border-slate-700 bg-slate-700 text-white h-12 w-12 rounded-full ml-2" id="1" onClick={clickHandler(-1)}>
//             P
//           </button>
//           <button className="border border-slate-700 bg-slate-700 text-white h-12 w-12 rounded-full mr-2" id="2" onClick={clickHandler(1)}>
//             N
//           </button>
//         </div>
//       </div>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import React from "react";

export default function App() {
  return (
    <div className="w-screen h-screen bg-green-300 flex justify-center items-center">
      <div className="rounded rounded-full bg-white h-[44px] flex overflow-hidden">
        <input
          placeholder="Your E-mail Address"
          className="rounded-full bg-green-300 w-56 m-px text-xs outline-none pl-5 tracking-wide placeholder-black placeholder:font-light"
        />
        <button className="text-xs font-medium px-3 pr-5 outline outline-0 outline-transparent">
          SEND
        </button>
      </div>
    </div>
  );
}
