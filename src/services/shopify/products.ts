import { env } from "@/config/env"
import { shopifyUrls } from "./urls"

export const getProducts = async () => {
  try {
    const response = await fetch(shopifyUrls.products.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_ACCES_TOKEN
      })
    })
    const { products } = await response.json()
    return products
  } catch (error) {
    console.error('Error fetching products')
    return []
  }
}