

export const palettes_count = 17;

export const palettes_names = ["Maple","Lucky","Satisfaction","Calm","Winter","Supreme","Juice","Oak","Forest","Proud","new1","Joyful","Mono","Empathy","Love","p1","Peaceful"];

export const palettes = "F2F1DFF2BD1DD94711591812181212#e8d5b9c07a38df3146f5b3490e2430#f3efeff7b32b0c6291b80c09091e05#f1faeee63946a8ccdc457b9d1d3557#dff3e4bca2cd7d73c6684da2171738#dccfa39f8f6544443bc6110f12130b#fff7f4ffc6c6ff2f4ec60a5f820a5f#ccc9a1f0ffcea53f2b60290e280004#ecf39e90a9554f772d31572c132a13#e0fbfc98c1d9ee6c4d3d5a80293241#fffcf2ccc5b9503d39252422eb5e28#8ecae6219ebc023047ffb703fb8500#000000FFFFFFdddddd444444888888#f4ca55284862d6644a3a8acafffeef#C20F002374C6FFDD22ffffff000000#fbfffe96031a1b1b1e6d676efaa916#ffffff375ba9000000d6d6d6fca311"
    .split('#').map(e => e.match(/.{6}/g).map(e => '#'+e));
