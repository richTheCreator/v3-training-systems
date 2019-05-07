import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import ReactFitText from 'react-fittext'
import { Overline, H2, Body1, H4, Body2 } from '../../components/Typography'
import { SectionWrapper, SectionMax } from '../../components/Containers'
import {
  color,
  fontSize,
  height,
  alignSelf,
  maxWidth,
  space,
  flexDirection
} from 'styled-system'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const numberStyle = {
  lineHeight: '160px',
  marignBottom: '0px',
  marginTop: '0px',
  textAlign: 'right',
  opacity: 0.1
}

const Services = ({
  services,
  hero
}) => (
  <Row style={{ justifyContent: 'center', alignItems: 'center', margin: 'auto', padding: '64px', backgroundColor: 'black', height: '100vh'}}>
    <Col style={{maxWidth: '400px'}} lg={5}>
      <H2 color={'white'} mb={0}> {services.OT.title}</H2>
      <Body1 color={'darkGrey'}> {services.OT.desc}</Body1>
      <div>
        {services.OT.includes.map((item) =>
          <Body2 color={'white'}> {item} </Body2>
      )}
      </div>
    </Col>
    <Col style={{position: 'relative'}} lg={7}>
      <PreviewCompatibleImage
        imageInfo={services.OT.service__image}
        style={{minHeight: '500px'}}
        />
      <PreviewCompatibleImage
        imageInfo={hero.dots__image}
        isFixed
        style={{position: 'absolute', bottom: '-10%', left: '-5%'}}
        />

    </Col>
  </Row>

)

export default Services

// <Col style={{backgroundColor: 'black'}}>
//   <Col className='hidden-xs hidden-sm'>
//     <GridContainer margin='auto' bg={'black'} p={7} height={0}>
//       <Title>
//         <H2 color={'white'} mb={0}> {services.OT.title}</H2>
//       </Title>
//       <Body>
//         <Body1 color={'darkGrey'}> {services.OT.desc}</Body1>
//       </Body>
//       <ListItems>
//         {services.OT.includes.map((item) =>
//           <Body2 color={'white'}> {item} </Body2>
//       )}
//       </ListItems>
//       <CTA />
//       <Number>
//         <ReactFitText maxFontSize={100} minFontSize={210}>
//           <h1 style={numberStyle} className='heroTitle'> 0 {'\n'} 1</h1>
//         </ReactFitText>
//       </Number>
//       <ServiceImage>
//         <PreviewCompatibleImage
//           imageInfo={services.OT.service__image}
//           style={{height: '100%'}}
//       />
//       </ServiceImage>
//       <OverlapImage />
//     </GridContainer>
//   </Col>
//   <Col className='hidden-xl hidden-lg hidden-md'>
//     <GridContainerM maxWidth={0} bg={'black'} p={5} height={1}>
//       <TitleM>
//         <H2 color={'white'} mb={0}> {services.OT.title}</H2>
//       </TitleM>
//       <BodyM>
//         <Body1 color={'darkGrey'}> {services.OT.desc}</Body1>
//       </BodyM>
//       <ListItemsM>
//         {services.OT.includes.map((item) =>
//           <Body2 color={'white'}> {item} </Body2>
//     )}
//       </ListItemsM>
//       <CTAM />
//       <ServiceImageM>
//         <PreviewCompatibleImage
//           imageInfo={services.OT.service__image}
//           style={{height: '100%'}}
//     />
//       </ServiceImageM>
//       <OverlapImageM />
//     </GridContainerM>
//   </Col>
// </Col>
