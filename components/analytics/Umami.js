import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const UmamiScript = () => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={siteMetadata.analytics.umamiWebsiteId}
        data-domains={siteMetadata.siteUrl.replace(/^.*?:\/\//, '')}
        src="https://ipiyush-comments.herokuapp.com/umami.js" // Replace with your umami instance
      />
    </>
  )
}

export default UmamiScript
