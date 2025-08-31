const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Shion",
    image: "/profile.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "데이터로 더 나은 사용자 경험을 설계하는 프론트엔드 개발자",
    email: "seoy1108@gmail.com",
    linkedin: "shionpark",
    github: "shionpark",
    instagram: "",
  },
  projects: [
    {
      name: `shion-log`,
      href: "https://github.com/shionpark/shion-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "shion-log",
    description: "welcome to shion-log!",
  },

  // CONFIG configration (required)
  link: "https://shion-log.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: process.env.REVALIDATE_TIME
    ? parseInt(process.env.REVALIDATE_TIME, 10)
    : 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
