import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { WithDecorator } from '../components/Typography'
import Button from '../components/Button'

const Container = styled(Row)`
  border: ${props => `1px solid ${props.theme.colors.disabled}`};
  margin-top:32px;
  padding:24px;
`

const Guarantee = ({ guarantee }) => {
  return (
    <Container>
      {guarantee.includes.map((item) => (
        <Col md={6}>
          <WithDecorator
            bodyText={item}
            bodyColor={'mdGrey'}
            decoratorColor={'accent'} />
        </Col>
      ))

      }
    </Container>
  )
}

export default Guarantee
