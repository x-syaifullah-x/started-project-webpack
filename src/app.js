import Test from "./components/test/index.js"
import { } from "./service-worker/serviceWorkerRegistration.js"

export default function main() {
  const elementBody = document.getElementsByTagName("body")[0]
  const testElement = Test.createElement()
  elementBody.appendChild(testElement)
}
document.addEventListener("DOMContentLoaded", main)