document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL
    var currentUrl = window.location.href;

    // Check if the URL contains "sitemap"
    if (currentUrl.includes("/sitemap")) {
     
        
    }
    
  alert(true)
document.body.innerHTML += `
<div class="custom_sidebar" id="sidebar">
    <div class="Custsidebar_con">

        <div class="group_btn">
           <div class="permalink_btn">
            <button>Check Permalink</button>
           </div>

            <div class="validationBtn">
                <button class="html_btn">HTML Validation</button>
                <button class="css_btn">CSS Validation</button>
            </div>
        </div>
        
    </div>
</div>`;

//slide sidebar
document.addEventListener("keydown", function (event) {
    if (event.altKey && event.key.toLowerCase() === 'u') {
        event.preventDefault(); // Prevent default browser action
        toggleSidebar();
    }
});

function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show"); // Toggle sidebar class
}


});
