import { env } from "@/config/env"
import { shopifyUrls } from "./urls"

// Función para transformar productos de la API a nuestro formato
const transformProducts = (products: any[]): ProductType[] => {
  return products.map((product: any) => ({
    id: product.id,
    title: product.title,
    description: product.body_html,
    price: parseFloat(product.variants[0].price),
    image: product.images[0].src,
    quantity: product.variants[0].inventory_quantity,
    handle: product.handle,
    tags: product.tags,
    gql_id: product.variants[0].admin_graphql_api_id
  }))
}

// Servicio para obtener todos los productos
export const getProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await fetch(shopifyUrls.products.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_ACCES_TOKEN
      })
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const { products } = await response.json()
    return transformProducts(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

// Servicio para obtener un solo producto por ID
export const getProduct = async (id: string): Promise<ProductType | null> => {
  try {
    const response = await fetch(`${shopifyUrls.products.all}?ids=${id}`, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_ACCES_TOKEN
      })
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const { products } = await response.json()

    if (products.length === 0) {
      return null
    }

    // Transformamos y devolvemos el primer producto (debería ser el único)
    const transformedProducts = transformProducts(products)
    return transformedProducts[0]
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error)
    return null
  }
}

export const getMainProducts = async () => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: new Headers({
      'X-Shopify-Access-Token': env.SHOPIFY_ACCES_TOKEN
    }),
    cache: 'no-cache'
  })

  const { products } = await response.json()

  return products
}