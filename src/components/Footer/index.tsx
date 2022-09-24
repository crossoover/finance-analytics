import { memo } from 'react'
import { FooterWrap, LinksWrapper, LinkImage, FooterText } from './styles'

const SOCIAL_LINKS_MAP = [
  {
    alt: 'instagram',
    href: 'https://www.instagram.com/crossoover/',
    src: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2016/png/iconmonstr-instagram-15.png&r=255&g=255&b=255',
  },
  {
    alt: 'github',
    href: 'https://github.com/crossoover',
    src: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-4.png&r=255&g=255&b=255',
  },

  {
    alt: 'linkedin',
    href: 'https://www.linkedin.com/in/viacheslav-savratskyi-1142a61bb/',
    src: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-linkedin-4.png&r=255&g=255&b=255',
  },

  {
    alt: 'telegram',
    href: 'https://t.me/react_with_crossoover',
    src: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2018/png/iconmonstr-telegram-4.png&r=255&g=255&b=255"',
  },
]

const Footer = () => {
  return (
    <FooterWrap>
      <LinksWrapper>
        {SOCIAL_LINKS_MAP.map(({ alt, href, src }) => (
          <a key={src} target="_blank" href={href} rel="noreferrer">
            <LinkImage src={src} alt={alt} />
          </a>
        ))}
      </LinksWrapper>
      <div>
        <FooterText>@ 2022 Viacheslav Savratsky</FooterText>
      </div>
    </FooterWrap>
  )
}

export default memo(Footer)
