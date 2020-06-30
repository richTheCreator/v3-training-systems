import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import {
  space,
  borderRadius,
  display,
  height
} from 'styled-system'
import { Body2, H4, Caption } from '../../components/Typography'
import { Checkout, InfoItem, PriceItem } from '../../components'
import Select from 'react-select'
import { SectionMax } from '../../components/Containers'
import HomeIcon from '../../img/svg/home.svg'
import Calendar from '../../img/svg/calendar.svg'
import Skill from '../../img/svg/zap.svg'

const options = [
  { value: 'SKU_3MONTH', label: <PriceItem program='3 Months' price={550} strikeout={825} /> },
  { value: 'SKU_1MONTH', label: <PriceItem program='1 Month' price={225} strikeout={275} /> }
]

const HeroContainer = styled(Row)`
  ${space}
  position: relative;
  background-position: center center;
  background-size: cover;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.black}
`
const RoundedImg = styled(Col)`
  ${borderRadius}
  ${height}
  background-image: url('/img/kg_deadlift.jpg');
  background-size:cover;
  width:100%;
  box-shadow: ${props => props.theme.shadows.md}
  overflow: hidden
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
    stroke: ${props => props.theme.colors.lightGrey}
  }
`
const StyledHome = styled(HomeIcon)`
  path {
    stroke: ${props => props.theme.colors.lightGrey}
  }
`
const StyledSkill = styled(Skill)`
  path {
    stroke: ${props => props.theme.colors.lightGrey}
  }
`
const TextContainer = styled(Col)`
  ${space}
  align-self: center;
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
      <SectionMax m='auto!important' p={[2, 4]} pb={[6, 4]}>
        <ImageWrapper padding={['0px', '0px', '0px', '20px']} lg={7} md={6} sm={12}>
          <RoundedImg height={['250px', '460px']} borderRadius={['20px']} lg={12} />
        </ImageWrapper>
        <TextContainer lg={5} md={6} sm={12} >
          <H4 is='H1' fontSize={['24px', '32px']} color={'white'} mb={1} mt={2}> {hero.title} </H4>
          <Row>
            <InfoItem size='24px' textColor='mdGrey' copy='1-3 mo.'> <StyledCalendar /> </InfoItem>
            <InfoItem size='24px' textColor='mdGrey' copy='Home or gym'> <StyledHome /> </InfoItem>
            <InfoItem size='24px' textColor='mdGrey'copy='Any skill'> <StyledSkill /> </InfoItem>
          </Row>
          <Body2 color={'lightGrey'} maxWidth={['100%']} mt={2} mb={3}>
             A best in class online-fitness program. Thoughtfully crafted around your unique body type, goals, injuries, and more.
          </Body2>
          <Row between='xs'>
            <Caption color='lightGrey' mb={2}> Select your program: </Caption>
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
          <Checkout bg='accent' color='white' width='100%' mb={0} sku={sku}>
            Start training
          </Checkout>
        </TextContainer>
      </SectionMax>
    </HeroContainer>
  )
}

export default Hero
