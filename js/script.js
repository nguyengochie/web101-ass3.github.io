let listJobEl = document.querySelector("#list-job-info");
let mansory;
let isTriggerMansory = false;

mansory = new Masonry(listJobEl, { percentPosition: true });
isTriggerMansory = true;

if (window.innerWidth >= 1080) {
  mansory.destroy();
  isTriggerMansory = false;
}

window.addEventListener("resize", function () {
  if (window.innerWidth < 1080 && window.innerWidth > 578) {
    if (!isTriggerMansory) {
      mansory = new Masonry(listJobEl, { percentPosition: true });
      isTriggerMansory = true;
    }
  } else if (isTriggerMansory) {
    mansory.destroy();
    isTriggerMansory = false;
  }
});
