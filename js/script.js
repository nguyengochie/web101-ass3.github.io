let listJobEl = document.querySelector("#list-job-info");
let mansory;
let isRunning = false;

window.addEventListener("load", function () {
  mansory = new Masonry(listJobEl, { percentPosition: true });
  isTriggerMansory = true;

  if (window.innerWidth >= 1080) {
    mansory.destroy();
    isRunning = false;
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth < 1080) {
      if (!isTriggerMansory) {
        mansory = new Masonry(listJobEl, { percentPosition: true });
        isRunning = true;
      }
    } else if (isTriggerMansory) {
      mansory.destroy();
      isRunning = false;
    }
  });
});

const onClickBtnViewMore = (event) => {
  const containerId = event.target.id?.split("_")[1];
  const btnLabel = event.target.querySelector("span");
  const iconEle = event.target.querySelector("i");
  const isCollapse = iconEle.classList.contains("icon-down-big");

  // get list parent container
  const listParentSkillContent =
    document.getElementsByClassName("skill-content");
  const parentContent = Array.from(listParentSkillContent)?.find(
    (item) => !!item.querySelector(`#${containerId}`)
  );

  // set container height 100% when expand
  if (parentContent && isCollapse) {
    parentContent.classList.add("h-100");
  } else {
    parentContent.classList.remove("h-100");
  }

  // change content button view more
  toggleViewMore(iconEle, btnLabel);

  // show/hide content
  const containerEl = document.getElementById(containerId);
  if (isCollapse) {
    containerEl.classList.remove("hidde-skill-info");
  } else {
    containerEl.classList.add("hidde-skill-info");
  }

  // trigger mansory layout to generate layout after change size of container
  if (window.innerWidth < 1080) {
    try {
      mansory.layout();
    } catch {}
  }
};

// function update content button view more
const toggleViewMore = (iconEle, btnLabel) => {
  if (iconEle.classList.contains("icon-down-big")) {
    iconEle.classList.remove("icon-down-big");
    iconEle.classList.add("icon-up-big");
    btnLabel.textContent = "VIEW LESS";
  } else {
    iconEle.classList.add("icon-down-big");
    iconEle.classList.remove("icon-up-big");
    btnLabel.textContent = "VIEW MORE";
  }
};
