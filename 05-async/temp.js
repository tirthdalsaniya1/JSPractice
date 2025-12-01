function hi(cb) {
  console.log("hi");
  cb();
}

function hello(cb) {
  console.log("hello");
  cb();
}

function howRYou(cb) {
  console.log("howru");
  cb();
}

function bye() {
  console.log("bye");
}

hi(function () {
  hello(function () {
    howRYou(function () {
      bye(function () {
        console.log("done");
      });
    });
  });
});
