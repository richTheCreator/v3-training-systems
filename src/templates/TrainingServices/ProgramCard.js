import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { H2, Body1 } from '../../components/Typography'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const Container = styled(Row)`
  justify-content:center;
  align-items:center;
  position:relative;
  background-color: ${props => props.theme.colors.greyBlue};
  height:170px;
  margin-bottom:24px;
  padding-left:24px;
`

const Title = styled(H2)`
  color : ${props => props.theme.colors.black};
  text-align : center;
  margin-bottom: 0px;
  text-align:left;
  font-size: ${props => props.theme.fontSizes[9]}!important;
  line-height: ${props => props.theme.fontSizes[9]}!important;
  max-width:60%;
  font-style: italic;
`

const ProgramCard = ({ service }) => {
  console.log('service', service)
  return (
    <Col style={{ marginBottom: '40px' }}>
      <Container>
        <Col xs={12}>
          <Title>
            {service.title}
          </Title>
          <PreviewCompatibleImage
            imageInfo={service.service__image}
            imgStyle={{ objectFit: 'contain', objectPosition: 'right' }}
            style={{ maxHeight: '100%', position: 'absolute', right: '0px', top: '0px', width: '200px' }}
          />
        </Col>
      </Container>
      <Body1 color={'mdGrey'}> {service.desc}</Body1>
    </Col>
  )
}

export default ProgramCard
