// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// 메뉴 클릭 시 닫기
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});

// ===== PORTFOLIO TABS =====
const tabBtns = document.querySelectorAll('.tab-btn');
const timelineContents = document.querySelectorAll('.timeline-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const year = btn.dataset.year;

        // 탭 버튼 active 처리
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // 콘텐츠 active 처리
        timelineContents.forEach(content => {
            content.classList.remove('active');
        });

        const target = document.getElementById('year-' + year);
        if (target) target.classList.add('active');
    });
});

// ===== SCROLL ANIMATION =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 애니메이션 대상 요소들
document.querySelectorAll(
    '.career-card, .cert-card, .portfolio-item, .contact-item'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== PROFILE IMAGE 처리 =====
const profileImg = document.getElementById('profileImg');
const profilePlaceholder = document.getElementById('profilePlaceholder');

if (profileImg) {
    // src가 비어있으면 바로 placeholder 표시
    if (!profileImg.src || profileImg.src === window.location.href) {
        profileImg.style.display = 'none';
        if (profilePlaceholder) profilePlaceholder.style.display = 'flex';
    }
}