import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

export const HTMLContent = ({ content, className }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <Col className={className}>{content}</Col>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
}

HTMLContent.propTypes = Content.propTypes

export default Content
