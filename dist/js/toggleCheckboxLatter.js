// toggle-checkbox-latter

const toggleCheckboxLatter = () => {
 $("#toggle-checkbox-latter").on("change", function () {
  if ($(this).is(":checked")) {
   console.log("checked");
   $(".callout-title").css("text-transform", "lowercase");
  }
  else {
   $(".latter").css("display", "none");
   $(".callout-title").css("text-transform", "uppercase");
  }
 });
}


export default toggleCheckboxLatter;