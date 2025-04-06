import { ProductView } from "app/components/product/ProductView"
import { getProduct } from "app/services/shopify/products"
import { redirect } from "next/navigation"

interface ProductPageProps {
  searchParams: {
    id?: string
  }
}

export async function generateMetadata({ searchParams }: ProductPageProps) { 
  const { id = '' } = await searchParams
  if (!id) return { title: 'Product not found' }
  
  const product = await getProduct(id)
  if (!product) return { title: 'Product not found' }

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image]
    }
  }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const params = await searchParams;
  const { id = '' } = params
  if (!id) {
    redirect('/store')
  }
  const product = await getProduct(id)
  
  // Redirect to store if product is not found
  if (!product) {
    redirect('/store')
  }

  return <ProductView product={product} />
}