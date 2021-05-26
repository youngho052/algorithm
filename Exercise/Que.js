function log(...args) {
  return () => console.log(...args);
}

log("start")();
Promise.resolve().then(log("1"));
log(
  !void (function () {
    print().then(log("2"));
    async function print() {
      setTimeout(log("3"), 0);
      queueMicrotask(log("4"));
      new Promise((resolve) => {
        setTimeout(log("5"));
        const s = new Date();
        while (new Date() - s < 500);
        resolve();
      }).then(() => {
        log("6")();
        Promise.resolve().then(log("7"));
        setTimeout(log("8"));
        log("9")();
      });
    }
    setTimeout(log("10"));
  })()
)();
log("end")();

// 큐 흐름

// 실행 순서
// 'start'
// true
// 'end'
// '1'
// '4'
// '6'
// '9'
// '2'
// '7'
// undefined
// '3'
// '5'
// '10'
// '8'
