let rangeInput = document.querySelector(".feedback-form_range");

let rangeValueDiv = document.querySelector(".range-percents");

rangeValueDiv.textContent = rangeInput.value + "%";

rangeInput.addEventListener("change", (e) => {
  rangeValueDiv.textContent = e.currentTarget.value + "%";
  console.log(e.currentTarget.value);
});

$(document).ready(function () {
  $(".feedback-form_select").select2({
    minimumResultsForSearch: -1,
    placeholder: "Select the system type",
    //  allowClear: true
    width: "100%",
  });
});

$(".feedback-form_file input[type=file]").on("change", function () {
  let file = this.files[0];
  $(this).next().html(file.name);
});
