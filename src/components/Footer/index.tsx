import { FooterWrap, LinksWrapper, LinkImage, FooterText } from './styles'

const Footer = () => {
  return (
    <FooterWrap>
      <LinksWrapper>
        <a
          target="_blank"
          href="https://www.instagram.com/crossoover/"
          rel="noreferrer"
        >
          <LinkImage
            src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2016/png/iconmonstr-instagram-15.png&r=255&g=255&b=255"
            alt="instagram"
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/crossoover"
          rel="noreferrer"
        >
          <LinkImage
            src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-4.png&r=255&g=255&b=255"
            alt="github"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/viacheslav-savratskyi-1142a61bb/"
          rel="noreferrer"
        >
          <LinkImage
            src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-linkedin-4.png&r=255&g=255&b=255"
            alt="linkedin"
          />
        </a>
        <a
          target="_blank"
          href="https://t.me/react_with_crossoover"
          rel="noreferrer"
        >
          <LinkImage
            src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2018/png/iconmonstr-telegram-4.png&r=255&g=255&b=255"
            alt="telegram"
          />
        </a>
      </LinksWrapper>
      <div>
        <FooterText>@ 2022 Viacheslav Savratsky</FooterText>
      </div>
    </FooterWrap>
  )
}

export default Footer
