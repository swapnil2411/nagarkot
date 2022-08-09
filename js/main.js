// Common Header
class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="floating_call_btn">
            <a href="tel:02267719900">
                <span class="iconify" data-icon="eva:phone-call-outline"></span>
            </a>
        </div>
        <div class="navbar_area">
            <div class="left_navbar">
                <div class="logo_area">
                    <img src="images/Header Logo.png" alt="Nagarkot" class="img-fluid">
                </div>
            </div>
            <div class="rigt_navbar">
                <nav class="desktop-navbar">
                    <ul>
                        <li>
                            <a href="javascript:void(0)">Services</a>
                            <div class="menu_dropdown">
                                <ul>
                                    <li><a href="customclearance.html" data-src="images/Services/Customs Clearance.png">Customs Clearing</a></li>
                                    <li><a href="freightforwarding.html" data-src="images/Services/Freight Forwarding.png">Freight Forwarding</a></li>
                                    <li><a href="warehouseing.html" data-src="images/Services/Warehousing _ 3PL.png">Warehousing & 3PL</a></li>
                                    <li><a href="firsttimeexim.html" data-src="images/Services/First-time Exim.png">First-Time Exim</a></li>
                                    <li><a href="cfs.html" data-src="images/Services/Container Freight Station (CFS).png">Container Freight Station (CFS)</a></li>
                                    <li><a href="transportation.html" data-src="images/Services/Transportation.png">Transportation</a></li>
                                    <li><a href="customadvisor.html" data-src="images/Services/Customs Advisory.png">Custom Advisory</a></li>
                                    <li><a href="insurancelicensing.html" data-src="images/Services/Insurance _ Licensing.png">Insurance & Licensing</a></li>
                                </ul>
                                <div class="serviceImgChange">
                                    <img src="images/Services/Customs Clearance.png" alt="Customs Clearance" class="img-fluid">
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:void(0)">About Us</a>
                            <div class="menu_dropdown">
                                <ul>
                                    <li><a href="overview.html" data-src="images/About/Overview.png">Overview</a></li>
                                    <li><a href="industryaffiliations.html" data-src="images/About/Industry Affiliations.png">Industry Affiliations</a></li>
                                    <li><a href="servicemodel" data-src="images/About/Service Model.png">Service Model</a></li>
                                    <li><a href="team.html" data-src="images/About/Leadership Team.png">Leadership Team</a></li>
                                    <li><a href="casestudies.html" data-src="images/About/Case Studies.png">Case Studies</a></li>
                                    <li><a href="testimonials.html" data-src="images/About/Customer Testimonials.png">Customer Testimonials</a></li>
                                </ul>
                                <div class="serviceImgChange">
                                    <img src="images/About/Overview.png" alt="Customs Clearance" class="img-fluid">
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:void(0)">Industries</a>
                            <div class="menu_dropdown">
                                <ul>
                                    <li><a href="automobiles.html" data-src="images/Industries/Automobiles.png">Automobiles</a></li>
                                    <li><a href="chemicals.html" data-src="images/Industries/Chemicals.png">Chemicals</a></li>
                                    <li><a href="firsttimeexporter.html" data-src="images/Industries/exporters.png">First time exporter</a></li>
                                    <li><a href="logisticscompanies.html" data-src="images/Industries/Logistics Companies.png">Logistics Companies</a></li>
                                    <li><a href="manufacturing.html" data-src="images/Industries/Manufacturing.png">Manufacturing</a></li>
                                    <li><a href="pharma.html" data-src="images/Industries/Pharma.png">Pharma</a></li>
                                    <li><a href="textiles.html" data-src="images/Industries/Textiles.png">Textiles</a></li>
                                </ul>
                                <div class="serviceImgChange">
                                    <img src="images/Industries/Automobiles.png" alt="Customs Clearance" class="img-fluid">
                                </div>
                            </div>
                        </li>
                        <li><a href="blogs.html">Blog</a></li>
                        <li><a href="partnerships.html">Partnership</a></li>
                        <li>
                            <a href="javascript:void(0)">Resources</a>
                            <div class="menu_dropdown">
                                <ul>
                                    <li><a href="exchange.html" data-src="images/Resources/Exchange Rates.png">Exchange Rates</a></li>
                                    <li><a href="dimensions.html" data-src="images/Resources/Container Dimensions.png">Container Dimensions</a></li>
                                    <li><a href="conversion.html" data-src="images/Resources/Conversion.png">Conversion</a></li>
                                    <li><a href="tracking.html" data-src="images/Resources/Tracking.png">Tracking</a></li>
                                    <li><a href="incoterms.html" data-src="images/Resources/Incoterms.png">Incoterms</a></li>
                                    <li><a href="downloads.html" data-src="images/Resources/Documents Download.png">Documents Download</a></li>
                                </ul>
                                <div class="serviceImgChange">
                                    <img src="images/Resources/Exchange Rates.png" alt="Customs Clearance" class="img-fluid">
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div class="btn appointment_btn">
                    <a href="javascript:void(0)" target="_blank">
                        <span class="iconify" data-icon="uil:calender"></span>
                        <span>Book An Apppointment</span>
                    </a>
                </div>
                <div class="btn call_btn">
                    <a href="tel:02267719900">
                        <span class="iconify" data-icon="eva:phone-call-outline"></span>
                        <span>02267719900</span>
                    </a>
                </div>
                <div class="trans-section">
                    <div id="google_translate_element" style="display: none;"></div>
                    <select class="selectpicker" data-width="fit" onchange="translateLanguage(this.value);">
                        <option data-content='<span class="flag-icon flag-icon-gb"></span>' value="English">English</option>
                        <option  data-content='<span class="flag-icon flag-icon-ch"></span>' value="Chinese">China</option>
                        <!--<option  data-content='<span class="flag-icon flag-icon-jp"></span> Japanese' value="Japanese">Japanese</option>
                        <option  data-content='<span class="flag-icon flag-icon-fr"></span> French' value="French">French</option>
                        <option  data-content='<span class="flag-icon flag-icon-ar"></span> Arabic' value="Arabic">Arabic</option>
                        <option  data-content='<span class="flag-icon flag-icon-es"></span> Spanish' value="Spanish">Spanish</option>-->
                        
                    </select>
                </div>
                <div class="hamburger">
                    <span class="iconify" data-icon="eva:menu-fill"></span>
                </div>
            </div>
            <aside class="mobile_navbar">
                <div class="closeMenu">
                    <span>Close X</span>
                </div>
                <div class="logo_area">
                    <img src="images/Header Logo.png" alt="Nagarkot" class="img-fluid">
                </div>
                <nav class="mobileMenu">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="more-less glyphicon glyphicon-plus"></i>
                                        Services
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                <div class="panel-body">
                                      <ul class="mobileLinks">
                                        <li><a href="" data-src="images/Services/Customs Clearance.png">Customs Clearing</a></li>
                                        <li><a href="" data-src="images/Services/Freight Forwarding.png">Freight Forwarding</a></li>
                                        <li><a href="" data-src="images/Services/Warehousing _ 3PL.png">Warehousing & 3PL</a></li>
                                        <li><a href="" data-src="images/Services/First-time Exim.png">First-Time Exim</a></li>
                                        <li><a href="" data-src="images/Services/Container Freight Station (CFS).png">Container Freight Station (CFS)</a></li>
                                        <li><a href="" data-src="images/Services/Transportation.png">Transportation</a></li>
                                        <li><a href="" data-src="images/Services/Customs Advisory.png">Custom Advisory</a></li>
                                        <li><a href="" data-src="images/Services/Insurance _ Licensing.png">Insurance & Licensing</a></li>
                                      </ul>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingTwo">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <i class="more-less glyphicon glyphicon-plus"></i>
                                        About Us
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="panel-body">
                                    <ul>
                                        <li><a href="" data-src="images/About/Overview.png">Overview</a></li>
                                        <li><a href="" data-src="images/About/Industry Affiliations.png">Industry Affiliations</a></li>
                                        <li><a href="" data-src="images/About/Service Model.png">Service Model</a></li>
                                        <li><a href="" data-src="images/About/Leadership Team.png">Leadership Team</a></li>
                                        <li><a href="" data-src="images/About/Case Studies.png">Case Studies</a></li>
                                        <li><a href="" data-src="images/About/Customer Testimonials.png">Customer Testimonials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingThree">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <i class="more-less glyphicon glyphicon-plus"></i>
                                        Industries
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div class="panel-body">
                                    <ul>
                                        <li><a href="" data-src="images/Industries/Automobiles.png">Automobiles</a></li>
                                        <li><a href="" data-src="images/Industries/Chemicals.png">Chemicals</a></li>
                                        <li><a href="" data-src="images/Industries/exporters.png">First time exporter</a></li>
                                        <li><a href="" data-src="images/Industries/Logistics Companies.png">Logistics Companies</a></li>
                                        <li><a href="" data-src="images/Industries/Manufacturing.png">Manufacturing</a></li>
                                        <li><a href="" data-src="images/Industries/Pharma.png">Pharma</a></li>
                                        <li><a href="" data-src="images/Industries/Textiles.png">Textiles</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingFour">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Blog
                                    </a>
                                </h4>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingFive">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Partnership
                                    </a>
                                </h4>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingSix">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        <i class="more-less glyphicon glyphicon-plus"></i>
                                        Resources
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                <div class="panel-body">
                                    <ul>
                                        <li><a href="" data-src="images/Resources/Exchange Rates.png">Exchange Rates</a></li>
                                        <li><a href="" data-src="images/Resources/Container Dimensions.png">Container Dimensions</a></li>
                                        <li><a href="" data-src="images/Resources/Conversion.png">Conversion</a></li>
                                        <li><a href="" data-src="images/Resources/Tracking.png">Tracking</a></li>
                                        <li><a href="" data-src="images/Resources/Incoterms.png">Incoterms</a></li>
                                        <li><a href="" data-src="images/Resources/Documents Download.png">Documents Download</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div><!-- panel-group -->
                    <div class="btn appointment_btn">
                    <a href="javascript:void(0)" target="_blank">
                        <span class="iconify" data-icon="uil:calender"></span>
                        <span>Book An Apppointment</span>
                    </a>
                </div>
                </nav>
            </aside>

        </div>
        </header>
        `
    }
}
customElements.define('my-header', MyHeader);

// Common Footer
class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
        <section class="footer_section plr">
            <div class="inner_footer">
                <div class="footer_industries_section">
                    <div class="industry_column">
                        <div class="industry_icon">
                            <img src="images/icon/exchange.svg" alt="Exchange Rate" class="img-fluid">
                        </div>
                        <div class="industry_name">
                            <a href="exchange.html" class="body_typography">Exchange<br>Rates</a>
                        </div>
                    </div>
                    <div class="industry_column">
                        <div class="industry_icon">
                            <img src="images/icon/ship-container.svg" alt="Ship Containe" class="img-fluid">
                        </div>
                        <div class="industry_name">
                            <a href="dimensions.html" class="body_typography">Container<br>Dimensions</a>
                        </div>
                    </div>
                    <div class="industry_column">
                        <div class="industry_icon">
                            <img src="images/icon/filter.svg" alt="Conversion" class="img-fluid">
                        </div>
                        <div class="industry_name">
                            <a href="conversion.html" class="body_typography">Conversion</a>
                        </div>
                    </div>
                    <div class="industry_column">
                        <div class="industry_icon">
                            <img src="images/icon/map.svg" alt="Tracking" class="img-fluid">
                        </div>
                        <div class="industry_name">
                            <a href="tracking.html" class="body_typography">Tracking</a>
                        </div>
                    </div>
                    <div class="industry_column">
                        <div class="industry_icon">
                            <img src="images/icon/clipboard.svg" alt="Incoterms" class="img-fluid">
                        </div>
                        <div class="industry_name">
                            <a href="incoterms.html" class="body_typography">Incoterms</a>
                        </div>
                    </div>
                    <div class="industry_column">
                        <div class="industry_icon">
                            <img src="images/icon/download.svg" alt="Document Download" class="img-fluid">
                        </div>
                        <div class="industry_name">
                            <a href="downloads.html" class="body_typography">Document<br>Download</a>
                        </div>
                    </div>
                </div>

                <div class="footer_company_info">
                    <div class="footer_column">
                        <div class="footer_logo">
                            <a href="index.html">
                                <img src="images/Footer Logo.png" alt="Nagarkot" class="img-fluid">
                            </a>
                        </div>
                        <div class="footer_telephone">
                            <span class="heaing">Tel</span>
                            <a href="tel:02267719900">022 67719900</a>
                        </div>
                        <div class="footer_email">
                            <span class="heaing">Email</span>
                            <a href="mailto:info@nagarkot.co.in">info@nagarkot.co.in</a>
                        </div>
                    </div>
                    <div class="footer_column">
                        <div class="column_heading">
                            <h3>Services</h3>
                        </div>
                        <div class="column_links">
                            <ul>
                                <li><a href="customclearance.html">Customs Clearing</a></li>
                                <li><a href="freightforwarding.html">Freight Forwarding</a></li>
                                <li><a href="warehousing.html">Warehousing & 3PL</a></li>
                                <li><a href="firsttimeexim.html">First Time Exim</a></li>
                                <li><a href="cfs.html">Container Freight Station (CFS)</a></li>
                                <li><a href="transportation.html">Transportation</a></li>
                                <li><a href="customadvisor.html">Customs Advisory</a></li>
                                <li><a href="insurancelicensing.html">Insurance & Licensing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer_column">
                        <div class="column_heading">
                            <h3>About Us</h3>
                        </div>
                        <div class="column_links">
                            <ul>
                                <li><a href="overview.html">Overview</a></li>
                                <li><a href="team.html">Leadership Team</a></li>
                                <li><a href="industryaffiliations.html">Accreditations & Affiliations</a></li>
                                <li><a href="testimonials.html">Customer Testimonials</a></li>
                                <li><a href="casestudies.html">Case Studies</a></li>
                                <li><a href="servicemodel.html">Service Model</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer_column invisiblefooterColumn">
                    </div>
                    <div class="footer_column">
                        <div class="column_heading">
                            <h3>Industry Solutions</h3>
                        </div>
                        <div class="column_links">
                            <ul>
                                <li><a href="automobiles.html">Automobiles</a></li>
                                <li><a href="textiles.html">Textiles</a></li>
                                <li><a href="pharma.html">Pharma</a></li>
                                <li><a href="chemicals.html">Chemicals</a></li>
                                <li><a href="manufacturing.html">Manufacturing</a></li>
                                <li><a href="firsttimeexporter.html">First time importers/ exporters</a></li>
                                <li><a href="logisticscompanies.html">Logistics Companies</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer_column quick_links">
                        <div class="column_heading">
                            <a href="partnerships.html">Partnership Opportunities</a>
                        </div>
                        <div class="column_heading">
                            <a href="blog.html">Blog</a>
                        </div>
                        <div class="column_heading">
                            <a href="contactus.html">Contact Us</a>
                        </div>
                    </div>
                </div>

                <div class="footer_other_link">
                    <div class="column_heading" style="visibility: hidden;">
                        <a href="partnerships.html">Partnership Opportunities</a>
                    </div>
                    <div class="column_heading">
                        <a href="partnerships.html">Partnership Opportunities</a>
                    </div>
                    <div class="column_heading">
                        <a href="blog.html">Blog</a>
                    </div>
                    <div class="column_heading">
                        <a href="contactus.html">Contact Us</a>
                    </div>
                </div>

                <div class="footer_basic_info">
                    <div class="basic_info_column">
                        <div class="copyright">
                            <p>Copyrights 2022. All Rights Reserved.<br>
                                Site Credit <a href="https://www.reversethought.com/"></a>RT</p>
                        </div>
                    </div>
                    <div class="basic_info_column">
                        <div class="heading">
                            <h3>Address</h3>
                        </div>
                        <div class="address_row">
                            <p>Corporate HQ: </p>
                            <p>207, 2nd Floor, Mahinder Chambers, W.T. Patil Marg, Chembur, Mumbai 400071</p>
                        </div>
                        <div class="address_row">
                            <p>South HQ: </p>
                            <p>Sagas Amar Court, 59, GN Chetty Rd, T. Nagar, Chennai 600017</p>
                        </div>
                    </div>
                    <div class="basic_info_column">
                        <div class="heading">
                            <h3>Follow us on</h3>
                        </div>
                        <ul class="social_links">
                            <li><a href="#"><span class="iconify" data-icon="bxl:facebook"></span></a></li>
                            <li><a href="#"><span class="iconify" data-icon="bxl:twitter"></span></a></li>
                            <li><a href="#"><span class="iconify" data-icon="bxl:instagram"></span></a></li>
                            <li><a href="#"><span class="iconify" data-icon="bxl:linkedin"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer_arc">
                <img src="images/double_arc.svg" alt="Arc Image" class="img-fluid">
            </div>
        </section>
    </footer>
        `
    }
}
customElements.define('my-footer', MyFooter);


// Common floating contact form
class MyContactForm extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <section class="floating_contact_area">
        <div class="contact_button">
            <span class="contact_txt body_typography_medium">Contact</span>
            <span class="line"></span>
            <span class="closeIt">
                <span class="iconify" data-icon="eva:close-fill"></span>
            </span>
        </div>
        <div class="floating_contact_form">
            <div class="form-element">
                <label for="name" class="body_typography_medium">I am</label>
                <input type="text" name="name" id="name" placeholder="Name*" class="form-control">
            </div>
            <div class="form-element">
                <label for="country" class="body_typography_medium">from</label>
                <input type="text" name="country" id="country" placeholder="Company, Country*" class="form-control">
            </div>
            <div class="form-element">
                <label for="name" class="body_typography_medium">Looking for</label>
                <input type="text" name="name" id="name" placeholder="Service" class="form-control">
            </div>
            <div class="form-element">
                <label for="name" class="body_typography_medium">Call me at</label>
                <input type="text" name="name" id="name" placeholder="Phone Number*" class="form-control">
            </div>
            <div class="form-element">
                <button type="submit" class="btnus">
                    <span class="iconify" data-icon="bi:send"></span>
                    <span>RECIEVE A CALLBACK</span>
                </button>
            </div>
            <p>We’ll call you within one business day</p>
        </div>
    </section>
        `
    }
}
customElements.define('my-contact-form', MyContactForm);

// On Scroll header background
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 150){
        $('.navbar_area').css('background','#fff');
        // $('.navbar_area .rigt_navbar nav.desktop-navbar ul li a').css('color','#000');
    }
    else{
        $('.navbar_area').css('background','transparent');
        // $('.navbar_area .rigt_navbar nav.desktop-navbar ul li a').css('color','#fff');
    }
})

//Mobile Toggle Menu
$('.hamburger').on('click', function(){
    $('.mobile_navbar').addClass('showMobNav');
})

$('.closeMenu').on('click', function(){
    $('.mobile_navbar').removeClass('showMobNav');
})

$(window).resize(function(){
    var windowSize = $(window).width();
    if (windowSize > 991){
        $('.mobile_navbar').removeClass('showMobNav');
    }
})

// Sub Menu Hover Img Change
$('.menu_dropdown ul li a').on('mouseover', function(){
    var $showImgSrc = $(this).attr('data-src');
    $('.serviceImgChange img').attr('src',$showImgSrc)
})

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

// Banner Swiper js
var swiper = new Swiper(".mySwiper", {
    loop: true,
    fadeEffect: { crossFade: true },
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
               '/' +
               '<span class="' + totalClass + '"></span>';
    }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

});

var swiper = new Swiper(".freight_slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});

// dropdown click get quote
$('.quote_section .quote_form .quote_dropdown .dropdown_head').on('click', function(){
    $(this).siblings('.value_dropdown').toggleClass('show_value_dropdown');
})

$('.quote_section .quote_form .quote_dropdown .value_dropdown ul li').on('click', function(){
    var changeTxt = $(this).text();
    var currentDrop = $(this).parent().parent().siblings().children('.value_selected');
    currentDrop.text(changeTxt);
    // $('.quote_section .quote_form .quote_dropdown .dropdown_head .value_selected').text(changeTxt)
    $(this).parent().parent().toggleClass('show_value_dropdown');
})

// team area
$('.leadership_team_area .leadership_content .team_member_column .person_box').on('click', function(){
    $(this).siblings('.member_desription').addClass('show_description');
    $(this).parent().siblings().find('.member_desription').removeClass('show_description');
})


$('.leadership_team_area .leadership_content .team_member_column .member_desription .close_popup').on('click', function(){
    $('.member_desription').removeClass('show_description');
})

// Dimensions Accordion
$('.container_dimensions_section .panel-title > a').on('click', function(){
    console.log($(this).parent().parent().parent().siblings().children('.panel-collapse').removeClass('show'))
})

// warehouse tab click

$('.tab_panels .tabs li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    var panelToShow = $(this).attr('rel');

    $('.tab_panels .panel.active').fadeOut(500, function(){
        $(this).removeClass('active');
        $('#' + panelToShow).fadeIn(500, function(){
            $(this).addClass('active');
        })
    })
})

// contact floating click
$('.floating_contact_area .contact_button').on('click', function(){
    $('.floating_contact_area').toggleClass('slideout');
    $('.floating_contact_area .contact_button .closeIt').toggleClass('showClose');
})