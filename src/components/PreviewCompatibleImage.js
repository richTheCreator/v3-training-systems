import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo, style, imgStyle, isFixed }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  const imageType = isFixed ? 'fixed' : 'fluid'
  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        style={style}
        imgStyle={imgStyle}
        fixed={isFixed ? image.childImageSharp[`${imageType}`] : null}
        fluid={!isFixed ? image.childImageSharp[`${imageType}`] : null}
        alt={alt}
      />
    )
  }

  if (childImageSharp) {
    return (
      <Img
        fixed={isFixed ? childImageSharp[`${imageType}`] : null}
        fluid={!isFixed ? childImageSharp[`${imageType}`] : null}
        style={style}
        imgStyle={imgStyle}
        alt={alt}
      />
    )
  }

  if (!!image && typeof image === 'string') {
    return <img style={imgStyle} src={image} alt={alt} />
  }

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object
  }).isRequired
}

export default PreviewCompatibleImage
