import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Banner, Button } from '../../components'

const mailTo = (href) => {
  window.open('mailto:conquerfitness01@gmail.com?subject=V3%20Online%20Fitness%20Program%20-%20Customer%20Contact', '_blank')
}
const BannerExt = ({ banner }) => {
  return (
    <Banner banner={banner}>
      <Row between='xs'>
        <Col xs={12} md={6}>
          <Button onClick={() => mailTo()} width={['100%']} mb={2} color={'white'} bg={'black'}> Send e-mail </Button>
        </Col>
        <Col xs={12} md={6}>
          <Button onClick={() => mailTo()} width={['100%']} mb={2} color={'black'} bg={'white'}> 📱Or tap to call </Button>
        </Col>
      </Row>
    </Banner>
  )
}

export default BannerExt
