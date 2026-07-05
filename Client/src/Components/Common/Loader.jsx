import React, { useEffect, useState, useRef } from "react";

export function CurtainLoader({
  children,
  holdMs = 1100, // how long the curtains stay closed before opening
  openMs = 1900, // how long the opening motion takes
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(true);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion.current) {
      // Skip the theatrics for people who've asked for less motion.
      setOpen(true);
      const t = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(t);
    }

    const openTimer = setTimeout(() => setOpen(true), holdMs);
    const unmountTimer = setTimeout(
      () => setMounted(false),
      holdMs + openMs + 300,
    );
    return () => {
      clearTimeout(openTimer);
      clearTimeout(unmountTimer);
    };
  }, [holdMs, openMs]);

  const transitionMs = reducedMotion.current ? 200 : openMs;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#efe7d8]">
      {/* Page content underneath the curtains */}
      {children}

      {mounted && (
        <div
          className="pointer-events-none fixed inset-0 z-50"
          aria-hidden="true"
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Jost:wght@400;500&display=swap');
          `}</style>

          {/* ---------- Wooden rod + finials, spans the full width ---------- */}
          <div
            className="absolute left-0 right-0 top-0 z-20 h-4 sm:h-5"
            style={{
              background:
                "linear-gradient(180deg,#6b4a30 0%,#4a3220 45%,#2e1e12 100%)",
              boxShadow: "0 3px 10px rgba(0,0,0,0.45)",
            }}
          >
            <span
              className="absolute -left-2 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full sm:h-8 sm:w-8"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #e6c27a, #a97c2f 60%, #6b4a1f 100%)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
              }}
            />
            <span
              className="absolute -right-2 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full sm:h-8 sm:w-8"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #e6c27a, #a97c2f 60%, #6b4a1f 100%)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
              }}
            />
          </div>

          {/* ---------- Soft light spilling through as the gap widens ---------- */}
          <div
            className="absolute inset-0 z-10 transition-opacity"
            style={{
              transitionDuration: `${transitionMs}ms`,
              opacity: open ? 1 : 0,
              background:
                "radial-gradient(ellipse 40% 70% at 50% 45%, rgba(255,244,214,0.55), rgba(255,244,214,0) 70%)",
            }}
          />

          {/* ---------- Left panel ---------- */}
          <CurtainPanel side="left" open={open} durationMs={transitionMs} />
          {/* ---------- Right panel ---------- */}
          <CurtainPanel side="right" open={open} durationMs={transitionMs} />

          {/* ---------- Brand mark on the seam, fades as curtains part ---------- */}
          <div
            className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 transition-opacity"
            style={{
              transitionDuration: `${Math.round(transitionMs * 0.5)}ms`,
              opacity: open ? 0 : 1,
            }}
          >
            <span
              className="text-2xl tracking-[0.35em] text-[#f1e3c2] sm:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              AMARA&nbsp;&amp;&nbsp;OAK
            </span>
            <span
              className="h-px w-16 bg-[#d4af6a]/70"
              style={{ boxShadow: "0 0 6px rgba(212,175,106,0.6)" }}
            />
            <span
              className="text-[11px] uppercase tracking-[0.4em] text-[#d4af6a]/80"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Raising the curtain
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function CurtainPanel({ side, open, durationMs }) {
  const isLeft = side === "left";

  // Velvet body: layered gradients build vertical pleats + an overall sheen,
  // rather than a flat fill.
  const velvetBackground = [
    // fine pleat ridges
    "repeating-linear-gradient(90deg," +
      "rgba(0,0,0,0.32) 0px, rgba(0,0,0,0.32) 3px," +
      "rgba(255,255,255,0.07) 3px, rgba(255,255,255,0.07) 6px," +
      "transparent 6px, transparent 17px," +
      "rgba(0,0,0,0.18) 17px, rgba(0,0,0,0.18) 21px," +
      "transparent 21px, transparent 30px)",
    // broad sheen sweep, catches light off-center like real velvet
    "radial-gradient(ellipse 70% 120% at " +
      (isLeft ? "80%" : "20%") +
      " 0%, rgba(255,255,255,0.16), rgba(255,255,255,0) 55%)",
    // base color, darker toward the outer edge for depth
    "linear-gradient(" +
      (isLeft ? "90deg" : "270deg") +
      ", #123326 0%, #1c4a37 55%, #0b2018 100%)",
  ].join(",");

  return (
    <div
      className={`absolute top-3 bottom-0 z-20 w-1/2 sm:top-4 ${
        isLeft ? "left-0 origin-left" : "right-0 origin-right"
      }`}
      style={{
        background: velvetBackground,
        boxShadow: isLeft
          ? "inset -18px 0 40px rgba(0,0,0,0.45), 6px 0 24px rgba(0,0,0,0.35)"
          : "inset 18px 0 40px rgba(0,0,0,0.45), -6px 0 24px rgba(0,0,0,0.35)",
        borderRadius: isLeft ? "0 0 40% 0" : "0 0 0 40%",
        transform: `scaleX(${open ? 0.26 : 1})`,
        transitionProperty: "transform",
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.62, 0, 0.34, 1)",
      }}
    >
      {/* Trailing highlight right at the leading (inner) edge, sharpens the fold */}
      <span
        className={`absolute top-0 bottom-0 w-3 ${
          isLeft ? "right-0" : "left-0"
        }`}
        style={{
          background: isLeft
            ? "linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0.5))"
            : "linear-gradient(270deg, rgba(0,0,0,0), rgba(0,0,0,0.5))",
        }}
      />

      {/* Gold tie-back rope + tassel, appears once the curtain is gathered open */}
      <div
        className={`absolute top-1/2 flex -translate-y-1/2 flex-col items-center transition-opacity ${
          isLeft ? "right-2" : "left-2"
        }`}
        style={{
          transitionDelay: `${Math.round(durationMs * 0.6)}ms`,
          transitionDuration: `${Math.round(durationMs * 0.4)}ms`,
          opacity: open ? 1 : 0,
        }}
      >
        <span
          className="h-1.5 w-16 rounded-full sm:w-24"
          style={{
            background: "linear-gradient(180deg,#f1d089,#a9792f)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
          }}
        />
        <span
          className="mt-1 h-5 w-3 rounded-b-full"
          style={{
            background: "linear-gradient(180deg,#e6c27a,#8a611f)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
          }}
        />
      </div>

      {/* Bottom hem trim */}
      <span
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{
          background:
            "repeating-linear-gradient(90deg,#d4af6a 0px,#d4af6a 3px,transparent 3px,transparent 9px)",
          opacity: 0.85,
        }}
      />
    </div>
  );
}
