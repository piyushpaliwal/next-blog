import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const UmamiScript = () => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={siteMetadata.analytics.umamiWebsiteId}
        data-host-url="https://ipiyush-analytics.vercel.app/websiteFunctions.js" // Replace with your umami instance
      />
    </>
  )
}

export default UmamiScript
