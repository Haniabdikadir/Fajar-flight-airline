// Initialize Lucide Icons
lucide.createIcons();

// Scroll Progress & Navbar Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    const scrollBar = document.getElementById('scrollBar');

    // Progress Calculation
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollBar) scrollBar.style.width = scrolled + "%";

    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinksContainer.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });
}

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Translation Data
const translations = {
    "so": {
        "nav_home": "Hoyga",
        "nav_booking": "Ballan duulimaad",
        "nav_destinations": "Duulimaadyada",
        "nav_services": "Adeegyada",
        "nav_contact": "Nala soo xiriir",
        "nav_register": "Is diiwangeli",
        "nav_about": "About Us",
        "nav_schedule": "Jadwalka",
        "nav_terms": "Sharuudaha",
        "hero_title_1": "Ku Safar Nabad & Raaxo",
        "hero_subtitle": "Diyaarada ugu casrisan gayiga Soomaaliya. Isku xirka gobolada dalka oo leh adeeg heer sare ah.",
        "label_from": "Ka yimid (From)",
        "label_to": "Ku socda (To)",
        "label_date": "Taariikhda",
        "label_passengers": "Rakaabka",
        "btn_search": "Raadi Duulimaad",
        "dest_title": "Gobolada aan aadno",
        "dest_desc": "Kasoo dooro meelaha ugu caansan oo aan duulimaadka tooska ah ku tagno.",
        "badge_capital": "Caasimada",
        "price_start": "Ka bilow",
        "btn_book": "Ballanso hadda",
        "about_title": "Ku saabsan Fajr Flight",
        "about_desc": "Waayo aragnimo dheer iyo adeeg hufan oo aan ugu adeegno bulshada.",
        "about_text": "Fajr Flight Airline waa shirkad at ugu horeysa duulimaadyada gudaha, waxaan u taaganahay inaan isku xirno gobolada dalka oo dhan anagoo bixina adeeg la isku halayn karo, raqiis ah, oo tayo sare leh.",
        "schedule_title": "Jadwalka Duulimaadyada",
        "schedule_desc": "Fadlan halkan ka eeg maalmaha aan baxno.",
        "table_day": "Maalinta",
        "table_from": "Ka yimid (From)",
        "table_to": "Ku socda (To)",
        "table_time": "Saacada",
        "day_sat": "Sabti (Sat)",
        "day_mon": "Isniin (Mon)",
        "day_wed": "Arbaco (Wed)",
        "day_fri": "Jimco (Fri)",
        "terms_title": "Sharuudaha Safarka",
        "terms_desc": "Muhiim: Aqri inta aadan safafrin.",
        "term_1": "Rakaabka waa inuu diyaar garoobaa 2 saac ka hor waqtiga bixitaanka.",
        "term_1_title": "Imaanashada Labo Saac Kahor",
        "term_2": "Miisaanka la ogolyahay waa 20kg (Boorso) iyo 7kg (Gacanta).",
        "term_2_title": "Xadka Miisaanka (Baggage)",
        "term_3": "Tikidhka lacagtiisa dib looma celinayo hadii la goosto (Non-refundable).",
        "term_3_title": "Lacag soo celinta (Refund)",
        "term_4": "Waa in rakaabku wataa aqoonsi sax ah (Baaasaboor ama ID).",
        "term_4_title": "Aqoonsiga Muhiimka ah",
        "contact_title": "Nala soo xiriir",
        "contact_desc": "Ma haysaa su'aal? Fariin noo soo dir.",
        "label_name": "Magacaaga",
        "label_email": "Email / Telefoon",
        "label_message": "Fariintaada",
        "btn_send": "Dir Fariinta",
        "footer_links": "Xiriir deg deg ah",
        "footer_follow": "Nagamala Soco",
        "btn_login": "Login",
        "btn_register": "Register",
        "btn_login_submit": "Gal Akoonka",
        "btn_register_submit": "Sameyso Akoon",
        "label_phone": "Telefoonka",
        "results_title": "Duulimaadyada la helay",
        "auth_welcome": "Ku soo dhawaaw!",
        "auth_login_desc": "Fadlan gal xogtaada si aad u sii wadato.",
        "auth_register_title": "Sameyso Akoon",
        "auth_register_desc": "Ku biir qoyska Fajr Flight maanta.",
        "auth_remember": "I xasuusno",
        "auth_forgot": "Ma halmaantay password-ka?",
        "auth_terms": "Markaad is diiwangaliso, waxaad ogolaatay Shuruudahayaga.",
        "service_1": "Business Class",
        "service_1_desc": "Kuraas raaxo leh oo sariir isu badasha, iyo cuntooyin macaan oo caalami ah.",
        "service_2": "Fast Track",
        "service_2_desc": "Si degdeg ah u mar garoonka adigoo iska dharbaaxaya safafka dhaadheer.",
        "service_3": "Luxury Lounge",
        "service_3_desc": "Ku naso qolalkayaga nasashada oo leh internet degdeg ah iyo cabitaano bilaash ah.",
        "table_status": "Xaaladda",
        "we_accept": "Waan aqbalnaa:",
        "search_alert": "Habka boos celinta dhabta ah dhawaan ayuu imaanayaa!",
        "searching": "Raadinaya..."
    },
    "en": {
        "nav_home": "Home",
        "nav_booking": "Booking",
        "nav_destinations": "Destinations",
        "nav_services": "Services",
        "nav_contact": "Contact Us",
        "nav_register": "Register",
        "nav_about": "About Us",
        "nav_schedule": "Schedule",
        "nav_terms": "Terms",
        "hero_title_1": "Travel with Peace & Comfort",
        "hero_subtitle": "The most modern airline in Somalia. Connecting regions with excellent service.",
        "label_from": "From",
        "label_to": "To",
        "label_date": "Date",
        "label_passengers": "Passengers",
        "btn_search": "Search Flight",
        "dest_title": "Our Destinations",
        "dest_desc": "Choose from the most popular places we fly directly to.",
        "badge_capital": "Capital",
        "price_start": "Starts from",
        "btn_book": "Book Now",
        "about_title": "About Fajr Flight",
        "about_desc": "Long experience and efficient service to serve the community.",
        "about_text": "Fajr Flight Airline is the leading domestic airline, dedicated to connecting all regions of the country by providing reliable, affordable, and high-quality service.",
        "schedule_title": "Flight Schedule",
        "schedule_desc": "Please check our flight days here.",
        "table_day": "Day",
        "table_from": "From",
        "table_to": "To",
        "table_time": "Time",
        "day_sat": "Saturday",
        "day_mon": "Monday",
        "day_wed": "Wednesday",
        "day_fri": "Friday",
        "terms_title": "Travel Terms",
        "terms_desc": "Important: Read before travelling.",
        "term_1": "Passengers must report 2 hours before departure time.",
        "term_1_title": "Arrive 2 Hours Early",
        "term_2": "Allowed baggage is 20kg (Checked) and 7kg (Carry-on).",
        "term_2_title": "Baggage Limit",
        "term_3": "Ticket price is non-refundable once booked.",
        "term_3_title": "Refund Policy",
        "term_4": "Passengers must carry valid ID (Passport or ID Card).",
        "term_4_title": "Valid Identification",
        "contact_title": "Contact Us",
        "contact_desc": "Have a question? Send us a message.",
        "label_name": "Your Name",
        "label_email": "Email / Phone",
        "label_message": "Your Message",
        "btn_send": "Send Message",
        "footer_links": "Quick Links",
        "footer_follow": "Follow Us",
        "btn_login": "Login",
        "btn_register": "Register",
        "btn_login_submit": "Login to Account",
        "btn_register_submit": "Create Account",
        "label_phone": "Phone Number",
        "results_title": "Available Flights",
        "auth_welcome": "Welcome back!",
        "auth_login_desc": "Please enter your details to continue.",
        "auth_register_title": "Create Account",
        "auth_register_desc": "Join the Fajr Flight family today.",
        "auth_remember": "Remember me",
        "auth_forgot": "Forgot password?",
        "auth_terms": "By registering, you agree to our Terms and Conditions.",
        "service_1": "Business Class",
        "service_1_desc": "Luxurious reclining seats that turn into beds, and international gourmet meals.",
        "service_2": "Fast Track",
        "service_2_desc": "Breeze through the airport by skipping long queues.",
        "service_3": "Luxury Lounge",
        "service_3_desc": "Relax in our exclusive lounges with fast Wi-Fi and complimentary refreshments.",
        "table_status": "Status",
        "we_accept": "We Accept:",
        "search_alert": "Real booking feature coming soon!",
        "searching": "Searching..."
    }
};

// Language Switching Logic
const langSelector = document.getElementById('language-selector');
if (langSelector) {
    langSelector.addEventListener('change', (e) => {
        const lang = e.target.value;
        document.documentElement.lang = lang;

        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // If it's a button or link with no children, use innerText
                if (el.children.length === 0) {
                    el.innerText = translations[lang][key];
                } else {
                    // If it has children (like icons), update only the text node
                    const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                    if (textNode) {
                        textNode.textContent = translations[lang][key];
                    }
                }
            }
        });
        lucide.createIcons(); // Refresh icons after text changes
    });
}

// Modal Logic
const modal = document.getElementById('login-modal');
const loginBtn = document.getElementById('login-btn');
const closeBtn = document.querySelector('.close-modal');
const tabBtns = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Tab Switching (Login/Register)
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        tabBtns.forEach(b => b.classList.remove('active'));
        authForms.forEach(f => f.classList.remove('active'));

        // Add active to clicked
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(`${tabId}-form`).classList.add('active');
    });
});

// Flight Search Mock Logic
const searchForm = document.getElementById('flight-search-form');
const resultsSection = document.getElementById('flight-results');
const resultsContainer = document.getElementById('results-container');

if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const from = document.getElementById('from-loc').value;
        const to = document.getElementById('to-loc').value;
        const currentLang = document.documentElement.lang || 'so';

        // Show loading state
        const btn = searchForm.querySelector('button');
        const originalContent = btn.innerHTML;
        btn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> ${translations[currentLang].searching}`;
        lucide.createIcons();

        setTimeout(() => {
            btn.innerHTML = originalContent;
            resultsSection.style.display = 'block';

            // Generate Dummy Results with localization
            const bookBtnText = translations[currentLang].btn_book;
            const alertText = translations[currentLang].search_alert;

            resultsContainer.innerHTML = `
                <div class="result-card reveal active">
                    <div class="flight-main-info">
                        <div class="flight-badge">FAJR PREMIUM</div>
                        <div class="flight-info">
                            <h4>${from} <i data-lucide="move-right"></i> ${to}</h4>
                            <div class="flight-meta">
                                <i data-lucide="clock"></i> 08:00 AM - 09:30 AM | Direct
                            </div>
                        </div>
                    </div>
                    <div class="flight-action">
                        <div class="result-price">$120</div>
                        <button class="card-btn premium-btn" onclick="alert('${alertText}')">${bookBtnText}</button>
                    </div>
                </div>
                <div class="result-card reveal active">
                     <div class="flight-main-info">
                        <div class="flight-badge">FAJR ECONOMY</div>
                        <div class="flight-info">
                            <h4>${from} <i data-lucide="move-right"></i> ${to}</h4>
                            <div class="flight-meta">
                                <i data-lucide="clock"></i> 04:00 PM - 05:30 PM | Direct
                            </div>
                        </div>
                    </div>
                    <div class="flight-action">
                        <div class="result-price">$135</div>
                        <button class="card-btn premium-btn" onclick="alert('${alertText}')">${bookBtnText}</button>
                    </div>
                </div>
            `;
            lucide.createIcons();

            // Scroll to results
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        }, 1500);
    });
}

// Book Now Buttons (Destinations)
const bookButtons = document.querySelectorAll('.book-now-btn');
bookButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const bookingSection = document.getElementById('booking');
        bookingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Optional: Highlight the search form
        const searchForm = document.getElementById('flight-search-form');
        searchForm.style.transition = "transform 0.3s";
        searchForm.style.transform = "scale(1.02)";
        setTimeout(() => {
            searchForm.style.transform = "scale(1)";
        }, 300);
    });
});

// Newsletter Subscription Mock
const newsletterForm = document.querySelector('.sub-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        if (input.value) {
            alert('Waad ku mahadsantahay ku biiristaada! (Thank you for subscribing!)');
            input.value = '';
        }
    });
}
