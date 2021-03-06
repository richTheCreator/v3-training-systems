import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { H4, H6, WithDecorator } from '../../components/Typography'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import { width, height, space } from 'styled-system'
import { SectionWrapper, SectionMax } from '../../components/Containers'

const ListWrapper = styled(Col)`
  ${space}
`
const ContentContainer = styled(Col)`
  ${space}
  background-color: ${props => props.theme.colors.blackBlue};
`
const Title = styled(H4)`
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
    <SectionWrapper p={0}>
      <SectionMax maxWidth="100%" m='auto!important' >
        <Row style={{ width: '100%' }}>
          <ImageContainer xs={12} md={7} lg={8} height={['300px', '300px', 'auto']}/>
          <ContentContainer xs={12} md={5} lg={4} p={['24px', '40px']}>
            <Title color='white' m={0} pb={5}>
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
                      <Col sm={12}>
                        <ListWrapper>
                          <WithDecorator
                            bodyText={text}
                            bodyColor={ idx === 0 ? 'white' : 'disabled'}
                            decoratorColor={idx === 0 ? 'accent' : 'disabled'}/>
                        </ListWrapper>
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
