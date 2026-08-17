"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (document.querySelector("script[data-m-town-forum]")) return;

    const script = document.createElement("script");
    script.src = "/script.js?v=4.11";
    script.async = true;
    script.dataset.mTownForum = "true";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="scanlines" aria-hidden="true" />
      <div className="desktop-wrapper">
        <header className="browser-header">
          <div className="browser-title">
            <span className="pixel-mark">◆</span> FOUND-DOG.ONLINE / M-TOWN BBS{" "}
            <span className="version">V4.11</span>
          </div>
          <div className="window-controls" aria-hidden="true">
            <span>_</span><span>□</span><span>×</span>
          </div>
          <div className="address-row">
            <button className="browser-mini" id="browserBack" title="返回">←</button>
            <button className="browser-mini" id="browserRefresh" title="刷新">↻</button>
            <div className="address-bar" id="addressBar">
              http://found-dog.online/m-town/bbs/index.html
            </div>
          </div>
        </header>

        <div className="mobile-topbar">
          <button className="mobile-brand" id="mobileBrand" aria-label="返回日行一善首页">
            <span className="mini-good-logo" aria-hidden="true">
              <img src="/assets/ui/logo.png?v=2" alt="" />
            </span>
            <span className="brand-copy">
              <strong>日行一善</strong>
              <small>FOUND-DOG.ONLINE // M-TOWN</small>
            </span>
          </button>
          <span className="mobile-status">
            <button id="mobileNotify" className="notify-mini" aria-label="通知">
              ✦<b id="mobileNotifyBadge">3</b>
            </button>
            <span id="mobileCoins">🐟 12500</span>
          </span>
        </div>

        <div className="layout">
          <aside className="sidebar">
            <div className="hanging-line" />
            <button className="side-item seal" id="homeBtn" title="首页">
              <img src="/assets/ui/logo.png?v=2" alt="日行一善" />
            </button>
            <div className="party-toggle side-item">
              <button className="pixel-btn toggle active" id="btnLand">陆党</button>
              <button className="pixel-btn toggle" id="btnWater">水党</button>
            </div>
            <button className="side-item pixel-btn text-link land-only" id="navProfile">主页</button>
            <button className="side-item pixel-btn text-link land-only" id="navMail">
              信箱 <span className="badge" id="mailBadge">1</span>
            </button>
            <button className="side-item pixel-btn text-link land-only" id="navNotify">
              通知 <span className="badge" id="notifyBadge">3</span>
            </button>
            <button className="side-item icon-link active" id="navCat">
              <span className="px-icon px-cat" aria-hidden="true" /><small>猫版</small>
            </button>
            <button className="side-item icon-link" id="navDog">
              <span className="px-icon px-dog" aria-hidden="true" /><small>狗版</small>
            </button>
            <button className="side-item icon-link locked" id="navBird" title="善币累计达到10000后开放">
              <span className="px-icon px-bird" aria-hidden="true" /><small>聚宝楼</small>
            </button>
            <button className="side-item pixel-btn text-link" id="navSearch">检索</button>
            <button className="side-item pixel-btn text-link land-only" id="navCompose">发帖</button>
            <div className="side-item coin-display land-only">🐟<br /><span id="coinCount">12500</span></div>
            <button className="side-item pixel-btn admin-switch land-only" id="adminToggle">
              BLACK<br />HAND
            </button>
            <button className="side-item pixel-btn text-link admin-only" id="adminBackendBtn">
              后台
            </button>
          </aside>

          <main className="content-shell">
            <div className="ticker">
              <span id="tickerText">◆ M町匿名互助论坛 ◆ 严禁人肉 ◆ 违规者由 BLACKHAND 亲自处理 ◆</span>
            </div>
            <button className="global-ad-banner" id="globalAdBanner" aria-label="查看暑假营销包宣传">
              <img src="/assets/ui/summer-banner.gif" alt="暑假营销包 Banner" />
            </button>
            <section className="content" id="appContent" aria-live="polite" />
          </main>
        </div>
      </div>

      <nav className="mobile-nav" aria-label="移动端导航">
        <button className="nav-btn active" id="mobileHome">
          <img className="nav-art" src="/assets/ui/nav-home.png" alt="" />
          <span className="sr-only">HOME</span>
        </button>
        <button className="nav-btn" id="mobileBoards">
          <img className="nav-art" src="/assets/ui/nav-playlist.png" alt="" />
          <span className="sr-only">PLAYLIST</span>
        </button>
        <button className="nav-btn" id="mobileHistory">
          <img className="nav-art" src="/assets/ui/nav-history.png" alt="" />
          <span className="sr-only">HISTORY</span>
        </button>
        <button className="nav-btn land-only" id="mobileMore">
          <img className="nav-art" src="/assets/ui/nav-me.png" alt="" />
          <span className="sr-only">ME</span>
        </button>
      </nav>

      <div className="modal-backdrop" id="modalBackdrop" hidden>
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <div className="modal-head">
            <b id="modalTitle">提示</b>
            <button id="modalClose" aria-label="关闭">×</button>
          </div>
          <div className="modal-body" id="modalBody" />
        </div>
      </div>
      <div className="toast-stack" id="toastStack" aria-live="polite" />
    </>
  );
}
