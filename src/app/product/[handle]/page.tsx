import { ProductView } from "app/components/product/ProductView"
import { getProduct } from "app/services/shopify/products"
import { redirect } from "next/navigation"

interface ProductPageProps {
  searchParams: {
    id: string
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