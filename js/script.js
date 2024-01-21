// Insert Header & Footer

   // Header
   class AppHeader extends HTMLElement {
      connectedCallback() {
         this.innerHTML = `
               <nav class="app-header navbar navbar-expand-lg navbar-light bg-white">
                  <div class="container">
                     <!-- Logo -->
                     <a class="navbar-band" href="./index.html"><img src="./img/site_logo_big.png" alt="Site Logo" /></a>
               
                     <!-- Toggle Button for mobile navbar -->
                     <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
               
                     <!-- Page Link -->
                     <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                           <li class="nav-item"><a class="nav-link" href="./index.html">主頁</a></li>
                           <li class="nav-item"><a class="nav-link" href="./attractions_japan.html">日本</a></li>
                           <li class="nav-item"><a class="nav-link" href="./attractions_south_korea.html">南韓</a></li>
                           <li class="nav-item"><a class="nav-link" href="./attractions_thailand.html">泰國</a></li>
                           <li class="nav-item"><a class="nav-link" href="./attractions_finland.html">芬蘭</a></li>
                        </ul>
                     </div>
                  </div>
               </nav>
            `
      }
   }
   window.customElements.define('app-header', AppHeader);

   // Footer
   class AppFooter extends HTMLElement {
      connectedCallback() {
         this.innerHTML = `
               <!-- Footer -->
               <footer class="app-footer mt-auto pt-4 text-light">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-4">
                           <!-- Logo with description -->
                           <a class="navbar-band" href="./index.html"><img src="./img/site_logo_big_white.png" alt="Site Logo" /></a>
                           <div class="logo_desc mt-2">一站式旅遊資訊網站</div>
                        </div>
                        
                        <div class="col-md-4">
                           <!-- Trend City -->
                           <div class="footInfoArea">
                              <div class="row">
                                 <div class="footTitle">熱門城市</div>
                                 <a class="text-light" href="./attractions_japan.html">名古屋</a>
                                 <a class="text-light" href="./attractions_south_korea.html">濟州</a>
                                 <a class="text-light" href="./attractions_thailand.html">清邁</a>
                                 <a class="text-light" href="./attractions_finland.html">羅凡尼米</a>
                              </div>
                           </div>
                        </div>

                        <div class="col-md-4">
                           <!-- Social Media -->
                           <div class="footInfoArea">
                              <div class="row">
                                 <div class="footTitle">社交媒體</div>
                                 <a class="footIcon" href=""><img src="./img/ic_facebook.png" alt="facebook" /></a>
                                 <a class="footIcon" href=""><img src="./img/ic_instagram.png" alt="instagram" /></a>
                                 <a class="footIcon" href=""><img src="./img/ic_youtube.png" alt="youtube" /></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Copyright Area  -->
                  <div class="copyrightArea mt-4 p-3 text-center">
                     <p>Copyright &#xA9; <span id="copyrightYear"></span> Trip Info 旅遊資訊有限公司 版權所有</p>
                  </div>
               </footer>

               <!-- Back to Top Button -->
               <div class="backTop_button" onclick="backTop()"><span class="material-icons">arrow_upward</span></div>
            `
      }
   }
   window.customElements.define('app-footer', AppFooter);

// Header Active Link
document.querySelectorAll(".nav-link").forEach((link) => {
   if (link.href.indexOf(window.location.href) > -1)
      link.classList.add("active");
});

// Footer - Set Copyright Year
document.getElementById("copyrightYear").innerText = new Date().getFullYear();

// Scroll Back To Top
   let backTopBtn = document.querySelector(".backTop_button");

   // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = () => { scrollFunction() };
   function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
         backTopBtn.classList.add("show");
      else
         backTopBtn.classList.remove("show");
   }

   // When the user clicks on the button, scroll to the top of the document
   function backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
   }