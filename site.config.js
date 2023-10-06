const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Kumar Yash",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "fullstack developer",
    bio: "I develop everything using node.",
    email: "yashkumar12125@gmail.com",
    linkedin: "yash-kumar-890b3b188",
    github: "CodeSyncr",
    instagram: "unreal_cto",
  },
  projects: [
    {
      name: `Adonis Whatsapp`,
      href: "https://github.com/CodeSyncr/adonisjs-whatsapp",
    },
    {
      name: `Adonis Transmit(SSE)`,
      href: "https://github.com/Bright-Hustle/adonis-transmit",
    },
    {
      name: `Flutter Zoom SDK`,
      href: "https://github.com/ark-brighthustle/flutter_zoom_sdk"
    },
    {
      name: `Flutter Instamojo`,
      href: "https://github.com/ark-brighthustle/instamojo"
    },
    {
      name: "React Native Usage Stats Manager",
      href: "https://github.com/Bright-Hustle/react-native-usage-stats-manager"
    }
  ],
  // blog setting (required)
  blog: {
    title: "codesyncr-blog",
    description: "welcome to CodeSyncr Blog!",
  },

  // CONFIG configration (required)
  link: "https://blog.kyash.in",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
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
  utterances: {
    enable: true,
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
      appid: "b2e52387-5af5-469b-878e-678c6892875a", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
