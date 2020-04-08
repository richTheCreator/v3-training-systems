import React, { useRef } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Overline, H2, Body2 } from '../../components/Typography'
import Masonry from 'react-masonry-css'
import { SectionWrapper, SectionMax } from '../../components/Containers'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import './masonry.css'
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 3,
  500: 2
}

const Clients = ({ clientImages }) => {
  return (
    <SectionWrapper>
      <SectionMax>
        <Col xs={12}>
          <Row>
            <Col xs={12} lg={4}>
              <Overline> TRANSFORMATIONS </Overline>
              <H2 mt={0} mb={3}>
                Real Clients, Real Results
              </H2>
              <Body2>
              Something about kevins clients and how they were able to transform.
              Something about kevins clients and how they were able to transform.
              </Body2>
            </Col>
            <Col xs={12} lg={8}>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'>
                {clientImages.map(({ node }) => {
                  return (
                    <PreviewCompatibleImage
                      imageInfo={node}
                    />

                  )
                })

                }
              </Masonry>
            </Col>
          </Row>
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Clients
