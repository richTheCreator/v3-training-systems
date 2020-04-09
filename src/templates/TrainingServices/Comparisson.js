import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { H3, H6, WithDecorator } from '../../components/Typography'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import { width, height, space } from 'styled-system'
import { SectionWrapper, SectionMax } from '../../components/Containers'

const ContentContainer = styled(Col)`
  ${space}
  background-color: ${props => props.theme.colors.blackBlue};
`
const Title = styled(H3)`
 ${width}
`
const ImageContainer = styled(Col)`
  ${height}
  padding: 0px;
  background-image: url('/img/workout-stairs-v3.jpg');
  background-size: cover
`
const Comparison = ({ comparison }) => {
  console.log('comparison', comparison)
  return (
    <SectionWrapper pl={['0px', 'inherit']} pr={['0px', 'inherit']}>
      <SectionMax>
        <Row style={{ width: '100%' }}>
          <ImageContainer xs={12} md={6} height={['300px', '300px', 'auto']}/>
          <ContentContainer xs={12} md={6} p={['24px', '40px']}>
            <Title color='white' m={0} pb={5} width={['100%', '100%', '100%', '70%']}>
              {comparison.title}
            </Title>
            {comparison.items.map((item, idx) => (
              <>
                <H6
                  color={idx === 0 ? 'accent' : 'disabled'}
                  mt={ idx % 2 ? 4 : 0}
                  mb={2}>
                  {item.item.title}
                </H6>
                <Row>
                  {
                    item.item.includes.map((text) =>
                      <Col sm={6}>
                        <WithDecorator
                          bodyText={text}
                          bodyColor={ idx === 0 ? 'white' : 'disabled'}
                          decoratorColor={idx === 0 ? 'accent' : 'disabled'}/>
                      </Col>
                    )
                  }
                </Row>
              </>
            ))}
          </ContentContainer>
        </Row>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Comparison
