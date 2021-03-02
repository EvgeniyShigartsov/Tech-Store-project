import styled from 'styled-components'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const Content = styled.div`
padding: 10px 10px;
background: #000000;
display: none;

@media(min-width: ${forDesktop.minWidth}px){
display: block;
}
`

export default Content