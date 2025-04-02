import { ProductView } from "app/components/product/ProductView"
import { getProduct } from "app/services/shopify/products"
import { redirect } from "next/navigation"

interface ProductPageProps {
  searchParams: {
    id: string
  }
}

export async function generateMetadata({ searchParams }: ProductPageProps) { 
  const id = searchParams.id
  const product = await getProduct(id)

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
  const id = searchParams.id
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