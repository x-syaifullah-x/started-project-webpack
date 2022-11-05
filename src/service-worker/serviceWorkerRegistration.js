// to enable service worker add this code in config/webpack.common.js
// export const plugins = [
//     new InjectManifest({
//         swSrc: "./src/service-worker/sw.js",
//         swDest: "sw.js",
//     })
// ]

const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      // un
      // navigator.serviceWorker.register("sw.js").then(registration => {
      //     console.log(`SW registration :  ${registration.scope}`)
      // }).catch(registrationError => {
      //     console.log("SW registration failed: ", registrationError)
      // })
    })
  } else {
    console.log("Service Worker Is Not Support")
  }
}

export default registerServiceWorker()