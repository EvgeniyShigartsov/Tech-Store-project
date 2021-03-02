import React from 'react'
import { FacebookFilled, InstagramFilled } from '@ant-design/icons'
import styled from 'styled-components'

const FooterSocialNetwork = () => (
  <Wrapper>
    <SocialNetwotkLink href="https://www.facebook.com/jv.russia/">
      <FacebookFilled />
    </SocialNetwotkLink>
    <SocialNetwotkLink href="https://www.instagram.com/?hl=ru">
      <InstagramFilled />
    </SocialNetwotkLink>
  </Wrapper>
)

export default FooterSocialNetwork

const Wrapper = styled.div`
display: flex;
font-size: 22px;
justify-content: space-between;
padding: 10px, 20px, 10px, 0;
`

const SocialNetwotkLink = styled.a`
font-size: 22px;
color: rgba(255, 255, 255, 0.5);
margin-right: 10px;
`