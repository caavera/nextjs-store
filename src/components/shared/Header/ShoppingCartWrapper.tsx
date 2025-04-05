'use client'

import dynamic from 'next/dynamic'

const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), { ssr: false })

export const ShoppingCartWrapper = () => {
  return <NoSSRShoppingCart />
} 