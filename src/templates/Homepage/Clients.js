import React, { useRef } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Overline, H3, Body2 } from '../../components/Typography'
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
              <H3 mt={0} mb={3}>
                Game changing results
              </H3>
              <Body2>
              I've been blessed to work with great people over the years, who've put their faith in me and my programs.  It is really each client who achieves their own results, I just provide the map and compass.  Results are made through dedication, consistency, and hard work regardless of the plan provided.  V3 programs will be tailored to each individual and a number of variables e.g. injuries, gym limitations, and experience levels. The truth is though, that you make your own results happen.
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
