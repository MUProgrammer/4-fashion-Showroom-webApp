// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss({
//       theme: {
//         extend: {
//           colors: {
//             wine: "#5C1A2B",
//             "wine-dark": "#3E101C",
//             "wine-light": "#7A2740",
//             blush: "#F1D9D3",
//             "blush-deep": "#E7C0B8",
//             cream: "#FBF6F1",
//             charcoal: "#2A2224",
//             gold: "#B8874F",
//             success: "#3F7A5C",
//             "success-bg": "#E7F1EB",
//             danger: "#B5432E",
//             "danger-bg": "#FBE9E4",
//             muted: "#8a7b74",
//             line: "#E7DCD3",
//           },
//           fontFamily: {
//             serif: ["Georgia", '"Times New Roman"', "serif"],
//             sans: [
//               "-apple-system",
//               "BlinkMacSystemFont",
//               '"Segoe UI"',
//               "Roboto",
//               "Helvetica",
//               "Arial",
//               "sans-serif",
//             ],
//           },
//           boxShadow: {
//             card: "0 2px 10px rgba(42,34,36,0.06)",
//           },
//           keyframes: {
//             fadein: {
//               from: { opacity: 0, transform: "translateY(4px)" },
//               to: { opacity: 1, transform: "translateY(0)" },
//             },
//           },
//           animation: {
//             fadein: "fadein .2s ease",
//           },
//         },
//       },
//     }),
//   ],
// });
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          colors: {
            wine: '#5C1A2B',
            'wine-dark': '#3E101C',
            'wine-light': '#7A2740',
            blush: '#F1D9D3',
            'blush-deep': '#E7C0B8',
            cream: '#FBF6F1',
            charcoal: '#2A2224',
            gold: '#B8874F',
            success: '#3F7A5C',
            'success-bg': '#E7F1EB',
            danger: '#B5432E',
            'danger-bg': '#FBE9E4',
            muted: '#8a7b74',
            line: '#E7DCD3', // 👈 yeh zaroori hai
          },
          boxShadow: {
            card: '0 2px 10px rgba(42,34,36,0.06)',
          },
        },
      },
    }),
  ],
})
