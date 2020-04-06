import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import Button from './Button'

const key = process.env.STRIPE_SECRET_KEY
const skus = {
  SKU_1MONTH: process.env.SKU_1MONTH,
  SKU_3MONTH: process.env.SKU_3MONTH
}
const baseUrl = process.env.BASE_URL
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

const Checkout = ({ sku }) => {
  console.log('main-env', process.env.STRIPE_SECRET_KEY)
  return (
    <Button onClick={(e) => redirectToCheckout(e, sku)}>
      Buy Training
    </Button>
  )
}

export default Checkout
