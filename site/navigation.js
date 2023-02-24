const path = document.location.href;

const domains = [
    "strangerintheq.art/",
    "strangerintheq.github.io/"
];

let route;
if (path.includes("strangerintheq.art/")) {
    route = path.split("strangerintheq.art/")[1];
}
if (path.includes("strangerintheq.github.io/")) {
    route = path.split("strangerintheq.github.io/")[1];
}
if (route.endsWith("/")) {
    route = route.substring(0, route.length - 1);
}

// console.log('route', route)

const devCrutch = path.includes("localhost") ?
    "/strangerintheq.github.io" : ""

document.write(`
    <meta http-equiv="Refresh" content="0; url='${devCrutch}/?route=${route}" />
`)