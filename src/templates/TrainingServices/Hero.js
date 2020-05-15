import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import {
  space,
  borderRadius,
  display
} from 'styled-system'
import Bowser from 'bowser'
import { Body2, H4, Caption } from '../../components/Typography'
import { Checkout, Button, InfoItem, PriceItem } from '../../components'
import HomeIcon from '../../img/svg/home.svg'
import Calendar from '../../img/svg/calendar.svg'
import Skill from '../../img/svg/zap.svg'
import Select from 'react-select'

const options = [
  { value: 'SKU_3MONTH', label: <PriceItem program='3 Months' price={250} strikeout={500} /> },
  { value: 'SKU_1MONTH', label: <PriceItem program='1 Month' price={150} strikeout={200} /> }
]

const HeroContainer = styled(Row)`
  ${space}
  position: relative;
  background-position: center center;
  background-size: cover;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.greyBlue}
`
const RoundedImg = styled(Col)`
  ${borderRadius}
  background-image: url('/img/lifting-weight-nike.jpg');
  background-size:cover;
  background-position: center;
  height:100%;
  width:100%;
  min-height:250px;
  box-shadow: ${props => props.theme.shadows.md}
`
const Dots = styled.div`
  ${display}
  background-image: url('/img/dots-overlay-tall.png');
  height:100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  width: 200px;
}
`
const StyledCalendar = styled(Calendar)`
  path {
    stroke: ${props => props.theme.colors.black}
  }
`
const StyledHome = styled(HomeIcon)`
  path {
    stroke: ${props => props.theme.colors.black}
  }
`
const StyledSkill = styled(Skill)`
  path {
    stroke: ${props => props.theme.colors.black}
  }
`
const TextContainer = styled(Col)`
  ${space}
  z-index:1;
`
const ImageWrapper = styled(Col)`
  ${space}
`
const SelectWrapper = styled(Select)`
  ${space}
`
const ActionWrapper = styled(Col)`
  ${space}
`
const Hero = ({ hero }) => {
  const [discountAmount, setDiscount] = useState(options[0].label.props.strikeout - options[0].label.props.price)
  const [sku, setSku] = useState(options[0].value)

  // useEffect(() => {
  //   setDiscount()
  // }, [enabled])
  return (
    <HeroContainer>
      <Dots display={['none', 'block']} />
      <ImageWrapper padding={['0px', '0px', '0px', '20px']} lg={6} md={6} sm={12}>
        <RoundedImg borderRadius={['0px', '0px', '0px', '20px']} lg={12} />
      </ImageWrapper>
      <TextContainer p={['3', '5']} lg={6} md={6} sm={12}>
        <ActionWrapper lg={8} md={12} p={0}>
          <H4 is='H1' color={'black'} mb={1} mt={2}> {hero.title} </H4>
          <Row>
            <InfoItem copy='1-3 mo.' textColor='black'> <StyledCalendar /> </InfoItem>
            <InfoItem copy='Equipment optional.' textColor='black'> <StyledHome /> </InfoItem>
            <InfoItem copy='Any skill' textColor='black'> <StyledSkill /> </InfoItem>
          </Row>
          <Body2 color={'mdGrey'} maxWidth={['100%']} mt={0} >
                Something about how dope and strong and big and weird KG is. Something about how dope and strong and big and weird KG is.
          </Body2>
          <Row between='xs'>
            <Caption mb={2}> Select your program: </Caption>
            <Caption mb={2} color={'teal'}> You save ${discountAmount}! </Caption>
          </Row>
          <SelectWrapper
            onChange={option => {
              setDiscount(option.label.props.strikeout - option.label.props.price)
              setSku(option.value)
            }}
            mb={2}
            options={options}
            defaultValue={options[0]}
            styles={{
              control: base => ({
                ...base,
                height: 50,
                minHeight: 50,
                cursor: 'pointer'
              }),
              singleValue: (provided, state) => {
                const width = '100%'
                const paddingRight = 8
                return { ...provided, width, paddingRight }
              },
              option: (provided, state) => ({
                ...provided,
                cursor: 'pointer'
              })
            }}
            isSearchable={false}
            theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#F5F7F9',
                primary: '#DBEBF6'
              }
            })}
          />
          <Checkout themeColor={'dark'} sku={sku}>
            Start training
          </Checkout>
        </ActionWrapper>
      </TextContainer>
    </HeroContainer>
  )
}

export default Hero
