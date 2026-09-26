// Shared Tailwind theme — loaded on every page after the Tailwind CDN script.
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container": "#201f21", "tertiary-fixed": "#f0dbff", "secondary-fixed": "#acedff",
        "surface-variant": "#353437", "on-primary-container": "#0d0096", "surface-bright": "#39393b",
        "primary-fixed": "#e1e0ff", "surface": "#131315", "secondary": "#4cd7f6",
        "tertiary-container": "#b76dff", "tertiary": "#ddb7ff", "background": "#131315",
        "secondary-fixed-dim": "#4cd7f6", "inverse-primary": "#494bd6", "secondary-container": "#03b5d3",
        "on-primary": "#1000a9", "on-surface": "#e5e1e4", "surface-dim": "#131315",
        "inverse-on-surface": "#313032", "on-tertiary": "#490080", "on-tertiary-fixed": "#2c0051",
        "surface-container-high": "#2a2a2c", "surface-container-highest": "#353437",
        "error-container": "#93000a", "surface-tint": "#c0c1ff", "primary-container": "#8083ff",
        "tertiary-fixed-dim": "#ddb7ff", "inverse-surface": "#e5e1e4", "error": "#ffb4ab",
        "primary-fixed-dim": "#c0c1ff", "surface-container-lowest": "#0e0e10", "on-error": "#690005",
        "outline-variant": "#464554", "outline": "#908fa0", "surface-container-low": "#1c1b1d",
        "on-secondary": "#003640", "on-error-container": "#ffdad6", "on-primary-fixed-variant": "#2f2ebe",
        "on-secondary-fixed-variant": "#004e5c", "on-background": "#e5e1e4",
        "on-tertiary-container": "#400071", "on-tertiary-fixed-variant": "#6900b3",
        "on-secondary-fixed": "#001f26", "primary": "#c0c1ff", "on-primary-fixed": "#07006c",
        "on-surface-variant": "#c7c4d7", "on-secondary-container": "#00424e"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: {
        "margin-mobile": "1.25rem", gutter: "1.5rem", "space-xs": "0.25rem", "space-lg": "1.5rem",
        "space-xl": "2.5rem", margin: "2rem", "space-sm": "0.5rem", "gutter-mobile": "1rem", "space-md": "1rem"
      },
      fontFamily: {
        "code-sm": ["JetBrains Mono"], "label-caps": ["JetBrains Mono"], "code-md": ["JetBrains Mono"],
        "display-mobile": ["Plus Jakarta Sans"], "headline-lg-mobile": ["Plus Jakarta Sans"],
        "headline-sm": ["Plus Jakarta Sans"], display: ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"], "headline-md": ["Plus Jakarta Sans"],
        "body-lg": ["Inter"], "body-sm": ["Inter"], "body-md": ["Inter"]
      },
      fontSize: {
        "code-sm": ["12px", { lineHeight: "18px", fontWeight: "500" }],
        "label-caps": ["11px", { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "600" }],
        "display-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.025em", fontWeight: "800" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "400" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", letterSpacing: "-0.015em", fontWeight: "700" }],
        "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "code-md": ["14px", { lineHeight: "22px", fontWeight: "500" }],
        "body-md": ["15px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }],
        display: ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "800" }],
        "headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["28px", { lineHeight: "36px", letterSpacing: "-0.015em", fontWeight: "600" }]
      }
    }
  }
};