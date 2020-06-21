import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { H5, Body2 } from '../../components/Typography'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const Container = styled(Row)`
  justify-content:center;
  align-items:center;
  position:relative;
  box-shadow: ${props => props.theme.shadows.md};
  border: 1px solid ${props => props.theme.colors.lightGrey};
  height:110px;
  margin-bottom:16px;
  padding-left:16px;
`

const Title = styled(H5)`
  color : ${props => props.theme.colors.black};
  line-height:100%;
  text-align : center;
  margin-bottom: 0px;
  text-align:left;
  font-weight:800;
  max-width:50%;
  letter-spacing:0px;
  font-style: italic;
`

const ProgramCard = ({ service }) => {
  console.log('service', service)
  return (
    <Col style={{ marginBottom: '40px', whiteSpace: 'nowrap' }}>
      <Container>
        <Col xs={12}>
          <Title mt={'0px'} style={{ whiteSpace: 'normal' }}>
            {service.title}
          </Title>
          <PreviewCompatibleImage
            imageInfo={service.service__image}
            imgStyle={{ objectFit: 'contain', objectPosition: 'right' }}
            style={{ maxHeight: '100%', position: 'absolute', right: '0px', top: '0px', width: '200px' }}
          />
        </Col>
      </Container>
      <Col xs>
        <Body2 color={'mdGrey'} style={{ whiteSpace: 'normal' }}> {service.desc}</Body2>
      </Col>
    </Col>
  )
}

export default ProgramCard
