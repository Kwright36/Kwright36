document.addEventListener("DOMContentLoaded",() => {
    const form = document.getElementById("survey-form");
    const formWrapper = document.getElementById("form-wrapper");
    const courseContainer = document.getElementById("course-container");
    const addCourseBtn = document.getElementById("add-course-button");
    const resetLink = document.getElementById("reset-link");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      alert("Please check all fieldsfor completeness.");
      return;
    }

    const formData = new FormData(form);
    let summary = "<h2>Submission Summary</h2><ul>";

    for (let [name, value] of formData.entries()) {
      summary += `<li><strong>${name}:</strong> ${value}</li>`;
    }

    summary += "</ul>";

    formWrapper.innerHTML = summary;
    resetLink.innerHTML = `<a href="#" id="reset-page">Reset and Try Again</a>`;
  });

  form.addEventListener("reset", function () {
    courseContainer.innerHTML = "";
  });


  resetLink.addEventListener("click", function (e) {
    if (e.target.id === "reset-page") {
      location.reload();
    }
  });

  addCourseBtn.addEventListener("click", () => {
    const wrapper = document.createElement("div");
    wrapper.className = "course-field";

    const input = document.createElement("input");
    input.type = "text";
    input.name = "course";
    input.placeholder = "Course Name";
    input.required = true;

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.textContent = "Delete";
    delBtn.onclick = () => wrapper.remove();

    wrapper.appendChild(input);
    wrapper.appendChild(delBtn);
    courseContainer.appendChild(wrapper);
  });
  courseContainer.before(addCourseBtn);
});
