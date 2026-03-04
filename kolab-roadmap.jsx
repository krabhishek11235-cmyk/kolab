import { useState } from "react";

const months = [
  {
    id: 1,
    label: "Month 1",
    theme: "BUILD & TEST",
    color: "#FF6B35",
    budget: "₹4,00,000",
    target: "80–100 downloads",
    cpi: "₹3,800–4,000",
    focus: "Foundation Setting",
    tactics: [
      { icon: "🎯", title: "Tracking Infrastructure", desc: "Set up AppsFlyer / Firebase attribution, Meta Pixel, Google Tag Manager. No campaign runs without clean data." },
      { icon: "🎨", title: "Creative Testing (A/B)", desc: "Launch 6–8 ad creatives across pain-point angles: 'Stop losing brand deals', 'Get paid faster as a creator', 'Find creators who convert'." },
      { icon: "📱", title: "Meta App Install Campaigns", desc: "Target small business owners (25–45), interests: D2C brands, retail, marketing tools. Budget: ₹1.6L" },
      { icon: "🔍", title: "Google UAC Launch", desc: "Universal App Campaigns targeting SMB keywords. Let Google optimize across Search, Play Store, YouTube. Budget: ₹1.4L" },
      { icon: "💼", title: "LinkedIn Lead Funnel", desc: "Brand managers, marketing heads at SMBs (10–100 employees). Drive to app download landing page. Budget: ₹0.6L" },
      { icon: "📊", title: "Baseline KPIs", desc: "CTR benchmark, CPI per channel, install-to-registration rate. Week 3 audit decides where to scale." },
    ],
    channels: [
      { name: "Meta Ads", pct: 40, color: "#FF6B35" },
      { name: "Google UAC", pct: 35, color: "#FFB347" },
      { name: "LinkedIn", pct: 15, color: "#4FC3F7" },
      { name: "Testing Buffer", pct: 10, color: "#78909C" },
    ],
  },
  {
    id: 2,
    label: "Month 2",
    theme: "SCALE WINNERS",
    color: "#00D4B4",
    budget: "₹4,50,000",
    target: "130–150 downloads",
    cpi: "₹3,000–3,500",
    focus: "Double Down on Performers",
    tactics: [
      { icon: "🚀", title: "Scale Top 2 Creatives", desc: "Kill underperformers. Put 70% of Meta budget into the 2 best-performing ad creatives from Month 1." },
      { icon: "🎬", title: "UGC Video Ads", desc: "Onboard 3–4 micro-influencers (small business owners) to create authentic 'how I found brand deals' reels. Budget: ₹0.5L" },
      { icon: "🔁", title: "Retargeting Layer", desc: "Retarget website visitors, app store page visitors, video viewers (50%+). These convert at 3–5x lower CPI." },
      { icon: "👥", title: "Lookalike Audiences", desc: "Build 1%, 2%, 3% LALs from existing installs. Seed audience with registered users for highest quality." },
      { icon: "📍", title: "Geo Prioritisation", desc: "Focus on Tier 1 cities (Mumbai, Delhi, Bengaluru, Hyderabad, Chennai) where SMB marketing budget is concentrated." },
      { icon: "📧", title: "Install-to-Activation Push", desc: "Set up Day 1 / Day 3 push notification flows to convert installs → active users (brands posting briefs)." },
    ],
    channels: [
      { name: "Meta Ads", pct: 38, color: "#00D4B4" },
      { name: "Google UAC", pct: 30, color: "#00BFA5" },
      { name: "UGC / Influencer", pct: 18, color: "#4FC3F7" },
      { name: "LinkedIn", pct: 14, color: "#78909C" },
    ],
  },
  {
    id: 3,
    label: "Month 3",
    theme: "OPTIMISE & EXPAND",
    color: "#A78BFA",
    budget: "₹4,50,000",
    target: "150–180 downloads",
    cpi: "₹2,500–3,000",
    focus: "Efficiency + New Channels",
    tactics: [
      { icon: "⚡", title: "Dynamic Creative Optimisation", desc: "Launch DCO campaigns — let Meta auto-combine headlines, images, CTAs. Reduces creative fatigue significantly." },
      { icon: "🎥", title: "YouTube Pre-Roll", desc: "30-sec skippable ads targeting SMB owners watching business, marketing, startup content. Strong for brand + downloads." },
      { icon: "🤝", title: "Partnership Downloads", desc: "Tie up with 2–3 SMB communities, WhatsApp groups, industry associations for co-promotions and direct outreach." },
      { icon: "🏪", title: "App Store Optimisation (ASO)", desc: "Optimise title, description, screenshots for 'brand collaboration app', 'influencer marketing platform for brands'." },
      { icon: "📈", title: "Bid Strategy Shift", desc: "Move from lowest cost to Cost Cap bidding on Meta — tells algorithm your target CPI, locks in efficiency." },
      { icon: "🔔", title: "Re-engagement Campaigns", desc: "Target churned installs (downloaded but never registered). Offer 'free first collaboration' to reactivate." },
    ],
    channels: [
      { name: "Meta Ads", pct: 35, color: "#A78BFA" },
      { name: "Google UAC", pct: 28, color: "#C084FC" },
      { name: "YouTube", pct: 15, color: "#F472B6" },
      { name: "Influencer", pct: 22, color: "#4FC3F7" },
    ],
  },
  {
    id: 4,
    label: "Month 4",
    theme: "PUSH TO GOAL",
    color: "#F59E0B",
    budget: "₹5,00,000",
    target: "160–200 downloads",
    cpi: "₹2,500–3,000",
    focus: "Maximum Velocity",
    tactics: [
      { icon: "🏁", title: "Full Budget Deployment", desc: "No testing this month. All ₹5L into proven channels at proven CPIs. Zero waste." },
      { icon: "🎁", title: "Referral Program Launch", desc: "In-app referral: 'Invite a brand, get 1 free boosted listing'. Word-of-mouth flywheel kicks in for SMBs." },
      { icon: "📣", title: "PR + Content Amplification", desc: "Publish case study: '3 Dubai brands that landed 10x creator deals via Kolab'. Seed in SMB media for organic downloads." },
      { icon: "🧲", title: "Lead Gen → App Funnel", desc: "Meta Lead Gen Ads → automated WhatsApp sequence → direct app download link. Reduces friction massively." },
      { icon: "🏆", title: "Social Proof Ads", desc: "Ads featuring real testimonials from brands already on platform. 'We ran 5 campaigns in 2 months.' Converts skeptics." },
      { icon: "📲", title: "Final Sprint Retargeting", desc: "Blast retargeting to every touchpoint: website, video viewers, app store visitors, lead gen respondents. Close the funnel." },
    ],
    channels: [
      { name: "Meta Ads", pct: 40, color: "#F59E0B" },
      { name: "Google UAC", pct: 28, color: "#FBBF24" },
      { name: "Influencer", pct: 20, color: "#F472B6" },
      { name: "WhatsApp Funnel", pct: 12, color: "#78909C" },
    ],
  },
];

const kpis = [
  { label: "Total Budget", value: "₹18L", sub: "4-month deployment" },
  { label: "Target Downloads", value: "550+", sub: "Small businesses" },
  { label: "Avg. Blended CPI", value: "₹3,272", sub: "Cost per install" },
  { label: "Primary KPI", value: "Installs → Registrations", sub: "Quality over quantity" },
];

function BarChart({ channels }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
      {channels.map((c) => (
        <div key={c.name} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "110px", fontSize: "11px", color: "#94A3B8", textAlign: "right", fontFamily: "'DM Mono', monospace" }}>{c.name}</div>
          <div style={{ flex: 1, background: "#1E293B", borderRadius: "3px", height: "20px", overflow: "hidden" }}>
            <div style={{ width: `${c.pct}%`, background: c.color, height: "100%", borderRadius: "3px", display: "flex", alignItems: "center", paddingLeft: "8px", transition: "width 0.8s ease" }}>
              <span style={{ fontSize: "10px", fontWeight: "700", color: "#0F172A", fontFamily: "'DM Mono', monospace" }}>{c.pct}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function KolabRoadmap() {
  const [activeMonth, setActiveMonth] = useState(0);
  const m = months[activeMonth];

  return (
    <div style={{
      fontFamily: "'Sora', sans-serif",
      background: "#050D1A",
      minHeight: "100vh",
      color: "#E2E8F0",
      padding: "0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0F172A; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        .month-btn { transition: all 0.25s ease; cursor: pointer; border: none; }
        .month-btn:hover { transform: translateY(-2px); }
        .tactic-card { transition: all 0.2s ease; }
        .tactic-card:hover { transform: translateX(4px); background: #1E293B !important; }
        @keyframes fadeIn { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.4s ease forwards; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
        .pulse { animation: pulse 2s infinite; }
      `}</style>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0F1E35 0%, #050D1A 60%)",
        borderBottom: "1px solid #1E293B",
        padding: "32px 40px 28px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "400px", height: "200px", background: "radial-gradient(ellipse at top right, rgba(0,212,180,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#00D4B4" }} className="pulse" />
              <span style={{ fontSize: "11px", fontFamily: "'DM Mono', monospace", color: "#00D4B4", letterSpacing: "3px", textTransform: "uppercase" }}>Performance Marketing Roadmap</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "800", margin: "0 0 6px", letterSpacing: "-1px", lineHeight: 1.1 }}>
              <span style={{ color: "#FFFFFF" }}>Kolab </span>
              <span style={{ color: "#00D4B4" }}>Growth Strategy</span>
            </h1>
            <p style={{ color: "#64748B", fontSize: "14px", margin: 0, fontWeight: "300" }}>
              500–600 Small Business Downloads · 4-Month Sprint · ₹18L Total Budget
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {kpis.map((k) => (
              <div key={k.label} style={{ background: "#0F1E35", border: "1px solid #1E293B", borderRadius: "10px", padding: "14px 18px", minWidth: "120px" }}>
                <div style={{ fontSize: "18px", fontWeight: "700", color: "#00D4B4" }}>{k.value}</div>
                <div style={{ fontSize: "10px", color: "#64748B", fontFamily: "'DM Mono', monospace", marginTop: "2px" }}>{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Month Tabs */}
      <div style={{ padding: "24px 40px 0", display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {months.map((mo, i) => (
          <button
            key={mo.id}
            className="month-btn"
            onClick={() => setActiveMonth(i)}
            style={{
              background: activeMonth === i ? mo.color : "#0F1E35",
              border: `1px solid ${activeMonth === i ? mo.color : "#1E293B"}`,
              borderRadius: "8px",
              padding: "12px 22px",
              color: activeMonth === i ? "#050D1A" : "#64748B",
              fontWeight: activeMonth === i ? "700" : "500",
              fontFamily: "'Sora', sans-serif",
              fontSize: "13px",
            }}
          >
            <span style={{ display: "block", fontSize: "10px", fontFamily: "'DM Mono', monospace", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "2px", opacity: 0.7 }}>{mo.label}</span>
            {mo.theme}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div key={activeMonth} className="fade-in" style={{ padding: "24px 40px 40px", display: "grid", gridTemplateColumns: "1fr 320px", gap: "24px" }}>

        {/* Left: Tactics */}
        <div>
          {/* Month Header */}
          <div style={{ background: "#0F1E35", border: `1px solid ${m.color}22`, borderLeft: `3px solid ${m.color}`, borderRadius: "10px", padding: "20px 24px", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <div style={{ fontSize: "11px", fontFamily: "'DM Mono', monospace", color: m.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>{m.label} · {m.focus}</div>
              <div style={{ fontSize: "22px", fontWeight: "700" }}>{m.theme}</div>
            </div>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "20px", fontWeight: "700", color: m.color }}>{m.budget}</div>
                <div style={{ fontSize: "10px", color: "#64748B", fontFamily: "'DM Mono', monospace" }}>AD SPEND</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "20px", fontWeight: "700", color: "#FFFFFF" }}>{m.target}</div>
                <div style={{ fontSize: "10px", color: "#64748B", fontFamily: "'DM Mono', monospace" }}>DOWNLOADS</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "20px", fontWeight: "700", color: "#94A3B8" }}>{m.cpi}</div>
                <div style={{ fontSize: "10px", color: "#64748B", fontFamily: "'DM Mono', monospace" }}>TARGET CPI</div>
              </div>
            </div>
          </div>

          {/* Tactics Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {m.tactics.map((t, i) => (
              <div key={i} className="tactic-card" style={{ background: "#0A1628", border: "1px solid #1E293B", borderRadius: "10px", padding: "16px 18px" }}>
                <div style={{ fontSize: "22px", marginBottom: "8px" }}>{t.icon}</div>
                <div style={{ fontSize: "13px", fontWeight: "600", color: "#F1F5F9", marginBottom: "6px" }}>{t.title}</div>
                <div style={{ fontSize: "12px", color: "#64748B", lineHeight: "1.6", fontWeight: "300" }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Budget + Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* Budget Allocation */}
          <div style={{ background: "#0F1E35", border: "1px solid #1E293B", borderRadius: "10px", padding: "20px" }}>
            <div style={{ fontSize: "11px", fontFamily: "'DM Mono', monospace", color: "#64748B", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Budget Allocation</div>
            <div style={{ fontSize: "16px", fontWeight: "700", color: m.color, marginBottom: "4px" }}>{m.budget} / month</div>
            <BarChart channels={m.channels} />
          </div>

          {/* Timeline Progress */}
          <div style={{ background: "#0F1E35", border: "1px solid #1E293B", borderRadius: "10px", padding: "20px" }}>
            <div style={{ fontSize: "11px", fontFamily: "'DM Mono', monospace", color: "#64748B", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>4-Month Progress</div>
            {months.map((mo, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "14px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: i <= activeMonth ? mo.color : "#1E293B",
                    border: `2px solid ${i <= activeMonth ? mo.color : "#334155"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px", fontWeight: "700", color: i <= activeMonth ? "#050D1A" : "#475569",
                    flexShrink: 0,
                  }}>{mo.id}</div>
                  {i < months.length - 1 && <div style={{ width: "2px", height: "20px", background: i < activeMonth ? mo.color : "#1E293B", marginTop: "2px" }} />}
                </div>
                <div style={{ paddingTop: "4px" }}>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: i === activeMonth ? mo.color : i < activeMonth ? "#94A3B8" : "#475569" }}>{mo.theme}</div>
                  <div style={{ fontSize: "11px", color: "#475569", fontFamily: "'DM Mono', monospace" }}>{mo.target}</div>
                </div>
              </div>
            ))}
          </div>

          {/* North Star Metric */}
          <div style={{ background: `linear-gradient(135deg, ${m.color}18, ${m.color}05)`, border: `1px solid ${m.color}33`, borderRadius: "10px", padding: "18px" }}>
            <div style={{ fontSize: "11px", fontFamily: "'DM Mono', monospace", color: m.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>North Star Metrics</div>
            {[
              { label: "Install → Register Rate", target: "> 60%" },
              { label: "Register → Brief Posted", target: "> 30%" },
              { label: "Weekly Retention (D7)", target: "> 25%" },
              { label: "Blended CPI", target: "< ₹3,500" },
            ].map((metric) => (
              <div key={metric.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "11px", color: "#94A3B8" }}>{metric.label}</span>
                <span style={{ fontSize: "11px", fontFamily: "'DM Mono', monospace", color: m.color, fontWeight: "600" }}>{metric.target}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
