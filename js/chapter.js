const PROJECT_ITEM = {
  project_id: "1",
  goals: [
    {
      title: "Giao diện CV",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      title: "Thay ảnh cá nhân",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      title: "Thêm javascipt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ],
  members: [
    { member_name: "Nguyen Van John" },
    { member_name: "Nguyen Van Kevin" },
    { member_name: "Nguyen Thi Cloud" },
  ],
  scope_in: [
    "Lorem ipsum dolor, eiusmod tempor incididunt..",
    "Lorem ipsum dolor sit amet, consectetur.",
  ],
  scope_out: [
    "Lorem ipsum dolor, eiusmod tempor incididunt..",
    "Lorem ipsum dolor sit amet, consectetur.",
  ],
  questions: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  timelines: [
    { title: "Project start", description: "Lorem ipsum dolor sit amet" },
    { title: "Project Date", description: "Lorem ipsum dolor sit amet" },
    { title: "Project End", description: "Lorem ipsum dolor sit amet" },
  ],
};
const PROJECTS_LIST = [
  { ...PROJECT_ITEM },
  {
    ...PROJECT_ITEM,
    project_id: "2",
    goals: [
      {
        title: "Giao diện quản lý thú cưng",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        title: "Thêm logic quản lí thú cưng",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        title: "Thêm chức năng filter theo pet_name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
    ],
  },
  {
    ...PROJECT_ITEM,
    project_id: "3",
    goals: [
      {
        title: "Giao diện trang tin tức",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        title: "SEO cho trang tin tức",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        title: "Tính năng upload article",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
    ],
  },
];

//  get param from URL
const windowURL = new URL(window.location.href.toLowerCase());
const projectId = windowURL.searchParams.get("project_id");
const projectDetail = PROJECTS_LIST.find(
  (item) => item?.project_id === projectId
);

if (!projectDetail) {
  // return message not found if projectDetail is null
  document.body.innerHTML = `<h1 style="
  text-align-last: center;
  margin-top: 100px;
">404| Project with id ${projectId} not found!</h1>`;
} else {
  // ----------fill data to Goals---------
  const renderGoalItem = (title, desc) => {
    return `
    <div class="col-lg-2 col-12 text-center">
        <i class="icon-flag-checkered fs-3"></i>
    </div>
    <div class="col-lg-10 col-12">
        <h3 class="fs-6 fw-bold">${title}</h3>
        <p class="fs-6">${desc}</p>
    </div>`;
  };

  const goalsListEle = document.getElementById("goals-list");
  const GOALS = projectDetail?.goals;

  GOALS?.forEach((goal, index) => {
    // Tạo phần tử HTML cho mục tiêu và mục tiêu
    const goalItemHTML = renderGoalItem(
      goal.title,
      goal.description,
      index !== GOALS?.length
    );

    // Tạo một div để chứa mục tiêu
    const goalDiv = document.createElement("div");
    goalDiv.className = "col-12 row";
    goalDiv.innerHTML =
      goalItemHTML +
      (index !== GOALS?.length - 1 ? `<hr class="w-100" />` : "");

    // Thêm mục tiêu vào phần tử "goals-list"
    goalsListEle.appendChild(goalDiv);
  });

  // ----------fill data to Team---------
  const membersListEle = document.getElementById("member-list");
  const MEMBERS = projectDetail?.members;

  const renderMemberItem = (member_name, index) => {
    return `
     <div class="col-lg-2 col-12 text-center p-0">
         <i class="icon-user-2 fs-3"></i>
    </div>
    <div class="col-lg-10 col-12">
        <h3 class="fs-6 fw-bold">Member ${index + 1}</h3>
        <p>Name: ${member_name}</p>
    </div>`;
  };

  MEMBERS?.forEach((member, index) => {
    // Tạo phần tử HTML cho mục tiêu và mục tiêu
    const itemHTML = renderMemberItem(member.member_name, index);

    // Tạo một div để chứa mục tiêu
    const itemDiv = document.createElement("div");
    itemDiv.className = "row row-cols-2  mb-2";
    itemDiv.innerHTML = itemHTML;

    // Thêm mục tiêu vào phần tử "member-list"
    membersListEle.appendChild(itemDiv);
  });

  // ----------fill data to Primary---------
  const primaryListEle = document.getElementById("questions-list");
  const QUESTIONS = projectDetail?.questions;

  const renderQSItem = (qs) => {
    return `
    <div class="col-lg-2 col-12 text-center p-0">
        <i class="icon-question fs-3"></i>
    </div>
    <div class="col-lg-10 col-12">
         <p>${qs}</p>
    </div>`;
  };

  QUESTIONS?.forEach((qs) => {
    // Tạo phần tử HTML cho mục tiêu và mục tiêu
    const itemHTML = renderQSItem(qs);

    // Tạo một div để chứa mục tiêu
    const itemDiv = document.createElement("div");
    itemDiv.className = "row row-cols-2  mb-2";
    itemDiv.innerHTML = itemHTML;

    // Thêm mục tiêu vào phần tử "questions-list"
    primaryListEle.appendChild(itemDiv);
  });

  // ----------fill data to Timeline---------
  const timelineListEle = document.getElementById("timeline-list");
  const TIMELINES = projectDetail?.timelines;

  const renderTLItem = (title, description, index) => {
    return `
    <div class="col-lg-2 col-12 p-lg-0 px-12">
        <div class="d-flex justify-content-center align-items-center circle-count-number">
             <p class="m-0">${String((index || 0) + 1).padStart(2, "0")}</p>
        </div>
    </div>
    <div class="col-lg-10 col-12 border-bottom-dashed">
        <h3 class="fs-6 fw-bold">${title}</h3>
        <p>${description}</p>
    </div>`;
  };

  TIMELINES?.forEach((tl, index) => {
    // Tạo phần tử HTML cho mục tiêu và mục tiêu
    const itemHTML = renderTLItem(tl.title, tl.description, index);

    // Tạo một div để chứa mục tiêu
    const itemDiv = document.createElement("div");
    itemDiv.className = "row row-cols-2 w-100 m-0 mb-4";
    itemDiv.innerHTML = itemHTML;

    // Thêm mục tiêu vào phần tử "timeline-list"
    timelineListEle.appendChild(itemDiv);
  });

  // ----------fill data to Scope---------
  const fillDataToScope = (eleId, listScopes) => {
    const scopeInEle = document.getElementById(eleId);
    const scopeList = listScopes;

    scopeList?.forEach((txt) => {
      const itemDP = document.createElement("p");
      itemDP.textContent = txt;

      scopeInEle.appendChild(itemDP);
    });
  };

  fillDataToScope("scope-in", projectDetail?.scope_in);
  fillDataToScope("scope-out", projectDetail?.scope_out);
}
