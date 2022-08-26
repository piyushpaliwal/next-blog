const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app ipiyush-analytics.vercel.app;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
  frame-src giscus.app https://www.youtube.com
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
  async redirects() {
    return [
      {
        source: '/tag/:slug',
        destination: '/tags/:slug',
        permanent: true,
      },
      {
        source: '/application-user-logic-apps-dynamics-365',
        destination: '/blog/application-user-logic-apps-dynamics-365',
        permanent: true,
      },
      {
        source: '/check-access-for-record-model-driven-apps',
        destination: '/blog/check-access-for-record-model-driven-apps',
        permanent: true,
      },
      {
        source: '/check-null-or-empty-power-automate',
        destination: '/blog/check-null-or-empty-power-automate',
        permanent: true,
      },
      {
        source: '/dynamics-365-power-platform-icons-finally-available',
        destination: '/blog/dynamics-365-power-platform-icons-finally-available',
        permanent: true,
      },
      {
        source: '/execute-power-automate-inside-powerapps',
        destination: '/blog/execute-power-automate-inside-powerapps',
        permanent: true,
      },
      {
        source: '/ghost-casper-theme-customizations',
        destination: '/blog/ghost-casper-theme-customizations',
        permanent: true,
      },
      {
        source: '/inject-dependency-in-javascript-web-resource',
        destination: '/blog/inject-dependency-in-javascript-web-resource',
        permanent: true,
      },
      {
        source: '/lets-explore-unified-interface-for-dynamics-365-or-crm',
        destination: '/blog/lets-explore-unified-interface-for-dynamics-365-or-crm',
        permanent: true,
      },
      {
        source: '/manage-multiple-office-365-domain-logins-like-a-pro',
        destination: '/blog/manage-multiple-office-365-domain-logins-like-a-pro',
        permanent: true,
      },
      {
        source: '/missing-settings-dynamics-365-unified-interface',
        destination: '/blog/missing-settings-dynamics-365-unified-interface',
        permanent: true,
      },
      {
        source: '/multi-select-option-set-for-dynamics-365',
        destination: '/blog/multi-select-option-set-for-dynamics-365',
        permanent: true,
      },
      {
        source: '/there-was-a-problem-with-your-single-sign-on-account-omnichannel',
        destination: '/blog/there-was-a-problem-with-your-single-sign-on-account-omnichannel',
        permanent: true,
      },
      {
        source: '/upcoming-dynamics-365-releases-exciting-features-worth-waiting',
        destination: '/blog/upcoming-dynamics-365-releases-exciting-features-worth-waiting',
        permanent: true,
      },
    ]
  },
})
