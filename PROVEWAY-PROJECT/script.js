
document.addEventListener("DOMContentLoaded", function () {

  // get the references to the three product boxes and their expandable content

  const productBox1 = document.getElementById("product-box1");
  const expandableContent1 = productBox1.querySelector(".expandable-content1");
  
  const productBox2 = document.getElementById("product-box2");
  const expandableContent2 = productBox2.querySelector(".expandable-content2");
  
  const productBox3 = document.getElementById("product-box3");
  const expandableContent3 = productBox3.querySelector(".expandable-content3");

  // Function to toggle expandable content

  function toggleExpandableContent(contentElement) {
    contentElement.style.display =
      contentElement.style.display === "none" ? "block" : "none";
  }

  // Adding click event listeners to each product box

  productBox1.addEventListener("click", function () {
    toggleExpandableContent(expandableContent1);
  });
  
  productBox2.addEventListener("click", function () {
    toggleExpandableContent(expandableContent2);
  });
  
  productBox3.addEventListener("click", function () {
    toggleExpandableContent(expandableContent3);
  });
});


