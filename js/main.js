/**
 * MIZUHO BEVERAGES - Main JavaScript
 * Suntory-style corporate website interactions
 */

// ========================================
// Shared Header Injection
// ========================================
(function() {
  const header = document.getElementById('header');
  if (!header) return;

  // Detect path depth relative to site root
  const path = window.location.pathname;
  const depth = (path.match(/\/(products|enjoy|culture|sustainability|company)\//)) ? '../' : '';

  header.innerHTML = `
    <div class="header__inner">
      <a href="${depth}index.html" class="header__logo">
        <svg class="header__logo-svg" viewBox="0 0 240 40">
          <text x="0" y="30" class="logo-text">SUNTORY</text>
        </svg>
      </a>
      <nav class="header__nav pc-only">
        <ul class="header__nav-list">
          <li class="header__nav-item has-mega has-mega--click">
            <a href="${depth}products.html" class="js-mega-toggle">商品情報</a>
            <div class="mega-menu mega-menu--full mega-menu--grid">
              <div class="mega-grid-inner">
                <div class="mega-grid__top">
                  <a href="${depth}products.html" class="mega-grid__top-link">商品情報TOP<span class="mega-grid__arw">&rsaquo;</span></a>
                </div>
                <div class="mega-grid__featured-product">
                  <a href="${depth}products/strongzero.html" class="mega-featured-product">
                    <div class="mega-featured-product__visual">
                      <img src="${depth}images/strongzero-can.png" alt="-196 ストロングゼロ ダブルレモン" width="200" height="260" style="object-fit:contain; border-radius:8px; mix-blend-mode:multiply; filter:drop-shadow(0 8px 24px rgba(0,0,40,0.4));">
                    </div>
                    <div class="mega-featured-product__info">
                      <span class="mega-featured-product__label">PICK UP</span>
                      <h3 class="mega-featured-product__name">-196 ストロングゼロ</h3>
                      <p class="mega-featured-product__desc">果実まるごとの浸漬酒と、クリアウォッカで仕上げた本格チューハイ。甘くない、だからウマい。</p>
                      <span class="mega-featured-product__link">詳しく見る<span class="mega-grid__arw">&rsaquo;</span></span>
                    </div>
                  </a>
                </div>
                <div class="mega-grid__close">
                  <button class="mega-grid__close-btn js-mega-close">&times; 閉じる</button>
                </div>
              </div>
            </div>
          </li>
          <li class="header__nav-item has-mega">
            <a href="${depth}enjoy.html">知る・楽しむ</a>
            <div class="mega-menu mega-menu--full mega-menu--grid">
              <div class="mega-grid-inner">
                <div class="mega-grid__top">
                  <a href="${depth}enjoy.html" class="mega-grid__top-link">知る・楽しむTOP<span class="mega-grid__arw">&rsaquo;</span></a>
                </div>
                <div class="mega-grid__sections mega-grid__sections--four">
                  <div class="mega-grid__section">
                    <h4 class="mega-grid__heading">キャンペーン</h4>
                    <div class="mega-grid__cards mega-grid__cards--single">
                      <a href="${depth}index.html#campaigns" class="mega-grid__card">キャンペーン一覧<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}index.html#campaigns" class="mega-grid__card">プレゼントキャンペーン<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}index.html#campaigns" class="mega-grid__card">コラボキャンペーン<span class="mega-grid__arw">&rsaquo;</span></a>
                    </div>
                  </div>
                  <div class="mega-grid__section">
                    <h4 class="mega-grid__heading">知る・体感する</h4>
                    <div class="mega-grid__cards mega-grid__cards--single">
                      <a href="${depth}enjoy/distillery.html#details" class="mega-grid__card">工場見学へ行こう<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}enjoy/regional.html" class="mega-grid__card">地域情報<span class="mega-grid__arw">&rsaquo;</span></a>
                    </div>
                  </div>
                  <div class="mega-grid__section">
                    <h4 class="mega-grid__heading">お酒の愉しみ方</h4>
                    <div class="mega-grid__cards mega-grid__cards--single">
                      <a href="${depth}enjoy/whisky-guide.html#details" class="mega-grid__card">ウイスキーの愉しみ方<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}enjoy/beer-guide.html#details" class="mega-grid__card">ビールのおいしい注ぎ方<span class="mega-grid__arw">&rsaquo;</span></a>
                    </div>
                  </div>
                  <div class="mega-grid__section">
                    <h4 class="mega-grid__heading">レシピ・マリアージュ</h4>
                    <div class="mega-grid__cards mega-grid__cards--single">
                      <a href="${depth}enjoy/cocktail-guide.html#details" class="mega-grid__card">カクテル・おつまみレシピ<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}enjoy/wine-guide.html#details" class="mega-grid__card">ワインと食のマリアージュ<span class="mega-grid__arw">&rsaquo;</span></a>
                    </div>
                  </div>
                </div>
                <div class="mega-grid__close">
                  <button class="mega-grid__close-btn js-mega-close">&times; 閉じる</button>
                </div>
              </div>
            </div>
          </li>
          <li class="header__nav-item has-mega">
            <a href="${depth}culture.html">文化・スポーツ</a>
            <div class="mega-menu mega-menu--full mega-menu--grid">
              <div class="mega-grid-inner">
                <div class="mega-grid__top">
                  <a href="${depth}culture.html" class="mega-grid__top-link">文化・スポーツTOP<span class="mega-grid__arw">&rsaquo;</span></a>
                </div>
                <div class="mega-grid__sections">
                  <div class="mega-grid__section">
                    <h4 class="mega-grid__heading">芸術・文化・学術</h4>
                    <div class="mega-grid__cards">
                      <a href="${depth}culture/hall.html" class="mega-grid__card">サントリーホール<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}culture/museum.html" class="mega-grid__card">サントリー美術館<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}culture/foundation.html" class="mega-grid__card">サントリー芸術財団<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}culture/bunka-foundation.html" class="mega-grid__card">サントリー文化財団<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}culture/science-foundation.html" class="mega-grid__card">サントリー生命科学財団<span class="mega-menu__external" style="margin-left:6px;">↗</span><span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}culture/10000-daiku.html" class="mega-grid__card">サントリー1万人の第九<span class="mega-grid__arw">&rsaquo;</span></a>
                    </div>
                  </div>
                  <div class="mega-grid__section">
                    <h4 class="mega-grid__heading">スポーツ</h4>
                    <div class="mega-grid__cards">
                      <a href="${depth}culture/sports-sungoliath.html" class="mega-grid__card">ラグビーチーム<br><strong>東京サントリーサンゴリアス</strong><span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}culture/sports-sunbirds.html" class="mega-grid__card">バレーボールチーム<br><strong>サントリーサンバーズ大阪</strong><span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}culture/ladies-open.html" class="mega-grid__card">宮里藍<br><strong>サントリーレディスオープン</strong><span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}culture/dream-match.html" class="mega-grid__card">サントリードリームマッチ<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}culture/challenged-sports.html" class="mega-grid__card">チャレンジド・スポーツ<br><strong>プロジェクト</strong><span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}culture/sports-sponsorship.html" class="mega-grid__card">サントリーのスポーツ活動<span class="mega-grid__arw">&rsaquo;</span></a>
                    </div>
                  </div>
                </div>
                <div class="mega-grid__close">
                  <button class="mega-grid__close-btn js-mega-close">&times; 閉じる</button>
                </div>
              </div>
            </div>
          </li>
          <li class="header__nav-item has-mega">
            <a href="${depth}sustainability.html">サステナビリティ</a>
            <div class="mega-menu mega-menu--full mega-menu--grid">
              <div class="mega-grid-inner">
                <div class="mega-grid__top">
                  <a href="https://www.suntory.co.jp/sustainability/?ke=mn" class="mega-grid__top-link" target="_blank" rel="noopener">サステナビリティTOP<span class="mega-grid__arw">&rsaquo;</span></a>
                </div>
                <div class="mega-grid__sections">
                  <div class="mega-grid__section">
                    <h4 class="mega-grid__heading">サントリーグループのサステナビリティ経営</h4>
                    <div class="mega-grid__cards">
                      <a href="${depth}sustainability.html" class="mega-grid__card">ESG情報ポータルTOP<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}sustainability/message.html" class="mega-grid__card">トップメッセージ<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}sustainability/goals2030.html" class="mega-grid__card">2030年目標<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}sustainability/water.html" class="mega-grid__card">Our Focus Areas<span class="mega-grid__arw">&rsaquo;</span></a>
                    </div>
                  </div>
                  <div class="mega-grid__section">
                    <h4 class="mega-grid__heading">活動紹介サイト</h4>
                    <div class="mega-grid__cards">
                      <a href="${depth}sustainability/forest.html" class="mega-grid__card">サントリー 天然水の森<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}sustainability/birds.html" class="mega-grid__card">サントリーの愛鳥活動<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}sustainability/mizuiku.html" class="mega-grid__card">サントリー「水育」<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}sustainability/sustanamirail.html" class="mega-grid__card">サントリー サステなミライ<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}sustainability/stories.html" class="mega-grid__card">サステナビリティストーリーズ<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}sustainability/health.html" class="mega-grid__card">「人は資本」の経営<span class="mega-grid__arw">&rsaquo;</span></a>
                    </div>
                  </div>
                </div>
                <div class="mega-grid__close">
                  <button class="mega-grid__close-btn js-mega-close">&times; 閉じる</button>
                </div>
              </div>
            </div>
          </li>
          <li class="header__nav-item has-mega">
            <a href="${depth}company.html">企業情報</a>
            <div class="mega-menu mega-menu--full mega-menu--grid">
              <div class="mega-grid-inner">
                <div class="mega-grid__top">
                  <a href="${depth}company.html" class="mega-grid__top-link">企業情報TOP<span class="mega-grid__arw">&rsaquo;</span></a>
                </div>
                <div class="mega-grid__sections">
                  <div class="mega-grid__section">
                    <h4 class="mega-grid__heading">企業理念</h4>
                    <div class="mega-grid__cards mega-grid__cards--single">
                      <a href="${depth}company/message.html" class="mega-grid__card">トップメッセージ<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}company/philosophy.html" class="mega-grid__card">グループ企業理念<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}company/spirit.html" class="mega-grid__card">志がつなぐ<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}company/activities.html" class="mega-grid__card">サントリーの企業活動<span class="mega-grid__arw">&rsaquo;</span></a>
                    </div>
                  </div>
                  <div class="mega-grid__section">
                    <h4 class="mega-grid__heading">会社案内</h4>
                    <div class="mega-grid__cards mega-grid__cards--single">
                      <a href="${depth}company/overview.html" class="mega-grid__card">企業概要<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}company/group.html" class="mega-grid__card">グループ企業一覧<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}company/offices.html" class="mega-grid__card">事業所一覧<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}company/business.html" class="mega-grid__card">事業紹介<span class="mega-grid__arw">&rsaquo;</span></a>
                    </div>
                  </div>
                  <div class="mega-grid__section">
                    <h4 class="mega-grid__heading">財務・人材・採用</h4>
                    <div class="mega-grid__cards mega-grid__cards--single">
                      <a href="${depth}company/ir-financial.html" class="mega-grid__card">財務情報<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}company/recruit-newgrad.html" class="mega-grid__card">採用情報<span class="mega-grid__arw">&rsaquo;</span></a>
                      <a href="${depth}company/human-capital.html" class="mega-grid__card">「人は資本」の経営<span class="mega-grid__arw">&rsaquo;</span></a>
                    </div>
                  </div>
                </div>
                <div class="mega-grid__close">
                  <button class="mega-grid__close-btn js-mega-close">&times; 閉じる</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div class="header__actions pc-only">
        <button class="header__search-btn" id="searchBtn" aria-label="検索">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>
      </div>
      <button class="header__menu-btn sp-only" id="menuBtn" aria-label="メニュー">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="header__mobile-nav" id="mobileNav">
      <ul>
        <li class="mobile-nav__group">
          <button class="mobile-nav__toggle">商品情報<span class="mobile-nav__arrow">+</span></button>
          <ul class="mobile-nav__sub">
            <li class="mobile-nav__sub-heading">ウイスキー</li>
            <li><a href="${depth}products/yamazaki.html#details">山崎</a></li>
            <li><a href="${depth}products/hakushu.html#details">白州</a></li>
            <li><a href="${depth}products/hibiki.html#details">響</a></li>
            <li><a href="${depth}products/kakubin.html#details">角瓶</a></li>
            <li class="mobile-nav__sub-heading">ビール</li>
            <li><a href="${depth}products/premiummalts.html#details">ザ・プレミアム・モルツ</a></li>
            <li><a href="${depth}products/kinmugi.html#details">金麦</a></li>
            <li class="mobile-nav__sub-heading">チューハイ・RTD</li>
            <li><a href="${depth}products/minus196.html#details">-196</a></li>
            <li><a href="${depth}products/strongzero.html">ストロングゼロ</a></li>
            <li><a href="${depth}products/horoyoi.html#details">ほろよい</a></li>
            <li><a href="${depth}products.html" class="mobile-nav__viewall">すべての商品を見る →</a></li>
          </ul>
        </li>
        <li class="mobile-nav__group">
          <button class="mobile-nav__toggle">知る・楽しむ<span class="mobile-nav__arrow">+</span></button>
          <ul class="mobile-nav__sub">
            <li><a href="${depth}enjoy/distillery.html#details">蒸溜所・工場見学</a></li>
            <li><a href="${depth}enjoy/recipe.html#details">おつまみレシピ</a></li>
            <li><a href="${depth}enjoy/cm.html#details">CM・動画ギャラリー</a></li>
          </ul>
        </li>
        <li class="mobile-nav__group">
          <button class="mobile-nav__toggle">文化・スポーツ<span class="mobile-nav__arrow">+</span></button>
          <ul class="mobile-nav__sub">
            <li><a href="${depth}culture/hall.html">サントリーホール</a></li>
            <li><a href="${depth}culture/museum.html">サントリー美術館</a></li>
            <li><a href="${depth}culture/sports-sungoliath.html">東京サントリーサンゴリアス</a></li>
            <li><a href="${depth}culture/sports-sunbirds.html">サントリーサンバーズ大阪</a></li>
          </ul>
        </li>
        <li class="mobile-nav__group">
          <button class="mobile-nav__toggle">サステナビリティ<span class="mobile-nav__arrow">+</span></button>
          <ul class="mobile-nav__sub">
            <li><a href="${depth}sustainability/water.html">水理念</a></li>
            <li><a href="${depth}sustainability/forest.html">天然水の森</a></li>
            <li><a href="${depth}sustainability/envision.html">環境ビジョン2050</a></li>
            <li><a href="${depth}sustainability/drinking.html">責任ある飲酒</a></li>
          </ul>
        </li>
        <li class="mobile-nav__group">
          <button class="mobile-nav__toggle">企業情報<span class="mobile-nav__arrow">+</span></button>
          <ul class="mobile-nav__sub">
            <li><a href="${depth}company/philosophy.html">企業理念</a></li>
            <li><a href="${depth}company/overview.html">会社概要</a></li>
            <li><a href="${depth}company/ir-financial.html">IR情報</a></li>
            <li><a href="${depth}company/recruit-newgrad.html">採用情報</a></li>
          </ul>
        </li>
      </ul>
    </div>
  `;
})();

document.addEventListener('DOMContentLoaded', () => {
  // ========================================
  // Opening Splash Animation
  // ========================================
  const opening = document.getElementById('opening');
  if (opening) {
    setTimeout(() => {
      opening.classList.add('is-hidden');
      setTimeout(() => {
        opening.style.display = 'none';
        // Show floating products after splash
        document.querySelectorAll('.p-top-hero__goods-item').forEach((item, i) => {
          setTimeout(() => item.classList.add('is-visible'), i * 200);
        });
      }, 800);
    }, 2000);
  }

  // ========================================
  // Header Transparency & Scroll Behavior
  // ========================================
  const header = document.getElementById('header');
  let lastScrollY = 0;

  function updateHeader() {
    const scrollY = window.scrollY;
    const heroHeight = document.getElementById('hero')?.offsetHeight || 600;

    // Transparent when at top
    if (scrollY < heroHeight - 100) {
      header.classList.add('is-transparent');
    } else {
      header.classList.remove('is-transparent');
    }

    // Hide on scroll down, show on scroll up
    if (scrollY > lastScrollY && scrollY > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // ========================================
  // Mobile Menu Toggle
  // ========================================
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('is-active');
      mobileNav.classList.toggle('is-open');
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('is-active');
        mobileNav.classList.remove('is-open');
      });
    });

    // Mobile accordion submenus
    mobileNav.querySelectorAll('.mobile-nav__toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const sub = toggle.nextElementSibling;
        const isOpen = toggle.classList.contains('is-open');

        // Close all others
        mobileNav.querySelectorAll('.mobile-nav__toggle').forEach(t => {
          t.classList.remove('is-open');
          t.nextElementSibling?.classList.remove('is-open');
        });

        if (!isOpen) {
          toggle.classList.add('is-open');
          sub?.classList.add('is-open');
        }
      });
    });
  }

  // ========================================
  // Mega Category Accordion (商品情報)
  // ========================================
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.mega-category__toggle');
    if (!toggle) return;
    e.stopPropagation();
    e.preventDefault();

    const products = toggle.nextElementSibling;
    const isOpen = toggle.classList.contains('is-open');

    // Close all others
    document.querySelectorAll('.mega-category__toggle').forEach(t => {
      t.classList.remove('is-open');
      if (t.nextElementSibling) t.nextElementSibling.classList.remove('is-open');
    });

    if (!isOpen && products) {
      toggle.classList.add('is-open');
      products.classList.add('is-open');
    }
  });

  // ========================================
  // Mega Menu - close when clicking outside
  // ========================================
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header__nav-item')) {
      document.querySelectorAll('.mega-menu').forEach(m => {
        m.style.pointerEvents = '';
      });
    }
  });

  // Mega menu close buttons
  document.querySelectorAll('.js-mega-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const megaMenu = btn.closest('.mega-menu');
      if (megaMenu) {
        megaMenu.style.opacity = '0';
        megaMenu.style.visibility = 'hidden';
        megaMenu.style.pointerEvents = 'none';
        setTimeout(() => {
          megaMenu.style.opacity = '';
          megaMenu.style.visibility = '';
          megaMenu.style.pointerEvents = '';
        }, 300);
      }
    });
  });

  // ========================================
  // Click-only Mega Menu (商品情報)
  // ========================================
  document.querySelectorAll('.js-mega-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const navItem = toggle.closest('.has-mega--click');
      const megaMenu = navItem?.querySelector('.mega-menu');
      if (!megaMenu) return;

      const isOpen = megaMenu.classList.contains('is-open');

      // Close all click-menus first
      document.querySelectorAll('.has-mega--click .mega-menu').forEach(m => {
        m.classList.remove('is-open');
      });

      if (!isOpen) {
        megaMenu.classList.add('is-open');
      }
    });
  });

  // Close click-mega-menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-mega--click')) {
      document.querySelectorAll('.has-mega--click .mega-menu').forEach(m => {
        m.classList.remove('is-open');
      });
    }
  });

  // Close button inside click-mega-menu
  document.querySelectorAll('.has-mega--click .js-mega-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const megaMenu = btn.closest('.mega-menu');
      if (megaMenu) megaMenu.classList.remove('is-open');
    });
  });

  // ========================================
  // Hero Background Slide Show
  // ========================================
  const heroSlides = document.querySelectorAll('.slide__item');
  let currentSlide = 0;
  const slideInterval = 5000;

  function nextSlide() {
    if (heroSlides.length === 0) return;
    heroSlides[currentSlide].classList.remove('is-active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('is-active');
  }

  let slideTimer = setInterval(nextSlide, slideInterval);

  // Pause/Play control
  const heroControl = document.getElementById('heroControl');
  let isPaused = false;

  if (heroControl) {
    heroControl.addEventListener('click', () => {
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(slideTimer);
        heroControl.querySelector('.control__pause').style.display = 'none';
        heroControl.querySelector('.control__play').style.display = 'inline';
      } else {
        slideTimer = setInterval(nextSlide, slideInterval);
        heroControl.querySelector('.control__pause').style.display = 'inline';
        heroControl.querySelector('.control__play').style.display = 'none';
      }
    });
  }

  // ========================================
  // Scroll-triggered Animations
  // ========================================
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-inview');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe scroll-animate sections
  document.querySelectorAll('.js-scroll-animate').forEach(el => {
    scrollObserver.observe(el);
  });

  // Observe individual cards and news items
  document.querySelectorAll('.featured-card, .news__list li, .shiru-card, .culture-card, .sustainability-pillar, .sustainability-stat').forEach(el => {
    scrollObserver.observe(el);
  });

  // Purpose title lines
  const purposeLines = document.querySelectorAll('.purpose-line');
  const purposeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lines = entry.target.querySelectorAll('.purpose-line');
        lines.forEach((line, i) => {
          const delay = parseInt(line.dataset.delay) || 0;
          setTimeout(() => line.classList.add('is-visible'), delay);
        });
        purposeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const purposeTitle = document.querySelector('.p-top-purpose__title');
  if (purposeTitle) {
    purposeObserver.observe(purposeTitle);
  }

  // ========================================
  // Back to Top Button
  // ========================================
  const pageTop = document.getElementById('pageTop');

  if (pageTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        pageTop.classList.add('is-visible');
      } else {
        pageTop.classList.remove('is-visible');
      }
    }, { passive: true });
  }

  // ========================================
  // Swiper Campaign Carousel
  // ========================================
  if (typeof Swiper !== 'undefined') {
    new Swiper('.campaign-swiper', {
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2.5,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 24,
        },
      },
    });
  }

  // ========================================
  // Product Horizontal Scroll (auto-scroll)
  // ========================================
  const productScroll = document.querySelector('.js-product-scroll');
  if (productScroll) {
    let scrollSpeed = 0.5;
    let scrollPos = 0;
    let isAutoScrolling = true;

    function autoScroll() {
      if (!isAutoScrolling) {
        requestAnimationFrame(autoScroll);
        return;
      }
      scrollPos += scrollSpeed;
      if (scrollPos >= productScroll.scrollWidth - productScroll.clientWidth) {
        scrollPos = 0;
      }
      productScroll.scrollLeft = scrollPos;
      requestAnimationFrame(autoScroll);
    }

    // Pause auto-scroll on hover/touch
    productScroll.addEventListener('mouseenter', () => { isAutoScrolling = false; });
    productScroll.addEventListener('mouseleave', () => {
      isAutoScrolling = true;
      scrollPos = productScroll.scrollLeft;
    });
    productScroll.addEventListener('touchstart', () => { isAutoScrolling = false; }, { passive: true });
    productScroll.addEventListener('touchend', () => {
      isAutoScrolling = true;
      scrollPos = productScroll.scrollLeft;
    });

    requestAnimationFrame(autoScroll);
  }

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header?.offsetHeight || 70;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // Alcohol Category Tabs
  // ========================================
  const tabs = document.querySelectorAll('.alcohol-tab');
  const panels = document.querySelectorAll('.alcohol-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('is-active'));
      panels.forEach(p => p.classList.remove('is-active'));

      tab.classList.add('is-active');
      const panel = document.getElementById(`panel-${target}`);
      if (panel) panel.classList.add('is-active');
    });
  });

  // ========================================
  // Parallax effect on Purpose background
  // ========================================
  const purposeSection = document.querySelector('.p-top-purpose');
  if (purposeSection) {
    window.addEventListener('scroll', () => {
      const rect = purposeSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const bg = purposeSection.querySelector('.purpose-illustration');
        if (bg) {
          bg.style.transform = `translateY(${progress * -50}px)`;
        }
      }
    }, { passive: true });
  }
});
