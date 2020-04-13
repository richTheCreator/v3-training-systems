import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Button } from '../components'

const key = process.env.GATSBY_STRIPE_SECRET_KEY
const skus = {
  SKU_1MONTH: process.env.GATSBY_SKU_1MONTH,
  SKU_3MONTH: process.env.GATSBY_SKU_3MONTH
}
const baseUrl = process.env.GATSBY_BASE_URL
const stripePromise = loadStripe(key)

const redirectToCheckout = async (event, sku) => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    items: [{ sku: skus[sku], quantity: 1 }],
    successUrl: `${baseUrl}training/online-training`,
    cancelUrl: baseUrl
  })

  if (error) {
    console.warn('Error:', error)
  }
}

const Checkout = ({ sku, themeColor, buttonText }) => {
  return (
    <Button
      backgroundColor={themeColor ? 'white' : 'black'}
      color={themeColor ? 'black' : 'white'}
      onClick={(e) => redirectToCheckout(e, sku)}
    >
      {buttonText}
    </Button>
  )
}

export default Checkout
