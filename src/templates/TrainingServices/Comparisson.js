import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { H2, H6, WithDecorator } from '../../components/Typography'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import { width } from 'styled-system'
import { SectionWrapper, SectionMax } from '../../components/Containers'

const ContentContainer = styled(Col)`
  height:400px;
  background-color: ${props => props.theme.colors.blackBlue};
  min-height: 80vh;
  padding:40px;
`
const Title = styled(H2)`
 ${width}
`

const Comparison = ({ comparison }) => {
  console.log('comparison', comparison)
  return (
    <SectionWrapper pb={'0px !important'}>
      <SectionMax mb={'0px'}>
        <Row style={{ width: '100%' }}>
          <Col xs={12} md={6} style={{ padding: '0px' }}>
            <PreviewCompatibleImage
              imageInfo={comparison.workout__image}
              style={{ height: '80vh' }}
            />
          </Col>
          <ContentContainer xs={12} md={6}>
            <Title color='white' m={0} pb={5} width={['100%', '100%', '100%', '70%']}>
              {comparison.title}
            </Title>
            {comparison.items.map((item, idx) => (
              <>
              <H6 color={idx === 0 ? 'white' : 'disabled'} mt={4} mb={2}> {item.item.title} </H6>
              {
                item.item.includes.map((text) =>
                  <WithDecorator
                    bodyText={text}
                    bodyColor={ idx === 0 ? 'white' : 'disabled'}
                    decoratorColor={idx === 0 ? 'accent' : 'disabled'}/>
                )
              }
              </>
            ))}
          </ContentContainer>
        </Row>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Comparison
