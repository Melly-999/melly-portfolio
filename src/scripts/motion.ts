/**
 * The only JavaScript on the site (handoff §24.2). Vanilla, no dependencies.
 *
 *  - one IntersectionObserver for `flow + in`, `reveal`, line-draws and `count`
 *  - one shared rAF scroll writer for the hero planes and the evidence trace
 *  - the KOYE project-entry threshold (sessionStorage-gated)
 *
 * Everything animation-related returns early under reduced motion. The final
 * state is the CSS default, so a script failure can never strand content.
 */

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;

/* ------------------------------------------------------------------ */
/* Entrances: flow + in · reveal · line-draw · count                    */
/* ------------------------------------------------------------------ */

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function runCount(el: HTMLElement): void {
  const target = Number(el.dataset.count);
  const vis = el.querySelector<HTMLElement>("[data-count-visual]");
  if (!vis || Number.isNaN(target)) return;
  const delay = Number(el.dataset.delay ?? 0);
  const duration = 700;
  let start = 0;
  vis.textContent = "0";
  const tick = (now: number): void => {
    if (!start) start = now + delay;
    const t = Math.min(Math.max((now - start) / duration, 0), 1);
    vis.textContent = String(Math.round(easeOut(t) * target));
    if (t < 1) requestAnimationFrame(tick);
    else vis.textContent = String(target);
  };
  requestAnimationFrame(tick);
}

function initEntrances(): void {
  const targets = document.querySelectorAll<HTMLElement>(
    "[data-flow], [data-reveal], [data-draw], [data-count]",
  );
  if (targets.length === 0) return;

  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }

  // A fully clip-path'd element never reports as intersecting, so `reveal`
  // targets are observed via their parent and revealed together with siblings.
  const revealGroups = new Map<Element, HTMLElement[]>();

  const io = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const group = revealGroups.get(el);
        if (group) group.forEach((g) => g.classList.add("is-in"));
        else el.classList.add("is-in");
        if (el.hasAttribute("data-count")) runCount(el);
        observer.unobserve(el); // once, never replayed on scroll-back
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );

  targets.forEach((el) => {
    if (el.hasAttribute("data-reveal") && el.parentElement) {
      const parent = el.parentElement;
      const group = revealGroups.get(parent) ?? [];
      group.push(el);
      revealGroups.set(parent, group);
      io.observe(parent);
    } else {
      io.observe(el);
    }
  });
}

/* ------------------------------------------------------------------ */
/* Shared rAF writer: hero planes + evidence trace                      */
/* ------------------------------------------------------------------ */

const hero = document.querySelector<HTMLElement>("[data-hero]");
const trace = document.querySelector<HTMLElement>("[data-trace]");
const chapters = Array.from(
  document.querySelectorAll<HTMLElement>("[data-chapter]"),
);
const stamps = trace
  ? Array.from(trace.querySelectorAll<HTMLElement>("[data-stamp]"))
  : [];
const folio = trace?.querySelector<HTMLElement>("[data-folio]") ?? null;

let ticking = false;

function writeFrame(): void {
  ticking = false;
  const vh = window.innerHeight;

  // Hero plane parallax: scroll progress through the hero, transform only.
  if (hero && !reduced) {
    const rect = hero.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < vh) {
      const p = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
      hero.style.setProperty("--hero-p", p.toFixed(3));
    }
  }

  // Evidence trace: stamp a claim when its section passes 60% of the viewport.
  if (trace && stamps.length) {
    let current: HTMLElement | null = null;
    for (const chapter of chapters) {
      if (chapter.getBoundingClientRect().top < vh * 0.4) current = chapter;
    }
    if (folio) {
      folio.textContent = current?.dataset.title ?? "";
    }

    let lastStamped: HTMLElement | null = null;
    for (const stamp of stamps) {
      const section = document.getElementById(stamp.dataset.section ?? "");
      const passed =
        reduced ||
        (section !== null && section.getBoundingClientRect().top < vh * 0.6);
      stamp.classList.toggle("is-stamped", passed);
      stamp.querySelector("a")?.removeAttribute("aria-current");
      if (passed) lastStamped = stamp;
    }
    // The active stamp is the last one in view — the rail's only accent.
    if (lastStamped) {
      const link = lastStamped.querySelector("a");
      link?.setAttribute("aria-current", "true");
      lastStamped.classList.add("is-active");
    }
    stamps.forEach((s) => {
      if (s !== lastStamped) s.classList.remove("is-active");
    });
    trace.classList.toggle("has-stamps", lastStamped !== null);
  }
}

function requestFrame(): void {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(writeFrame);
}

if (hero || trace) {
  window.addEventListener("scroll", requestFrame, { passive: true });
  window.addEventListener("resize", requestFrame, { passive: true });
  requestFrame();
}

/* ------------------------------------------------------------------ */
/* KOYE threshold — the transition into the Yuzuki case study, only     */
/* ------------------------------------------------------------------ */

function markThreshold(state: "pending" | "seen"): void {
  try {
    sessionStorage.setItem("koye", state);
  } catch {
    /* storage unavailable: skip the threshold, navigation still works */
  }
}

// From the homepage: arm the threshold once per session. Navigation itself is
// an ordinary, undelayed link — the transition plays on arrival.
document
  .querySelectorAll<HTMLElement>("[data-threshold-link]")
  .forEach((link) => {
    link.addEventListener("click", () => {
      try {
        if (sessionStorage.getItem("koye") !== "seen" && !reduced) {
          markThreshold("pending");
        }
      } catch {
        /* ignore */
      }
    });
  });

const threshold = document.querySelector<HTMLElement>("[data-threshold]");
if (threshold) {
  const finish = (): void => {
    threshold.remove();
    root.classList.remove("koye-on");
    markThreshold("seen");
    // No focus trap; land the reader on the <h1>.
    const h1 = document.getElementById("yuzuki-title");
    if (h1) {
      h1.setAttribute("tabindex", "-1");
      h1.focus({ preventScroll: true });
    }
  };
  if (root.classList.contains("koye-on")) {
    threshold
      .querySelector("[data-threshold-enter]")
      ?.addEventListener("click", finish);
    window.setTimeout(finish, 760); // CSS auto-hides at 720ms; this cleans up
  } else {
    threshold.remove();
  }
}

// Keyboard safety: focus can scroll an element to the viewport edge, inside the
// observer's bottom margin, where it would never intersect. Anything focused (or
// containing focus) is revealed immediately so focus is never on an invisible node.
document.addEventListener("focusin", (event) => {
  const target = event.target as Element | null;
  target
    ?.closest<HTMLElement>("[data-flow], [data-reveal], [data-draw]")
    ?.classList.add("is-in");
});

initEntrances();
