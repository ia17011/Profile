import Head from 'next/head'

interface Props {
  title: string
  description: string
  keyword: string
  image: string
  url: string
}

export const Header: React.FC<Props> = ({
  title,
  description,
  keyword,
  image,
  url,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta
        name="twitter:url"
        content={
          'https://og-image.now.sh/kirohi.now.sh.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&images=https%3A%2F%2Fuser-images.githubusercontent.com%2F38400669%2F80910334-c6866380-8d69-11ea-99ea-4d4fd9e6e97d.png'
        }
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={
          'https://og-image.now.sh/kirohi.now.sh.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&images=https%3A%2F%2Fuser-images.githubusercontent.com%2F38400669%2F80910334-c6866380-8d69-11ea-99ea-4d4fd9e6e97d.png'
        }
      />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href={'/eyecatch.png'} />
      <link rel="apple-touch-icon" href={'/eyecatch.png'} />
    </Head>
  )
}
