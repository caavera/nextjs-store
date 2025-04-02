import { ProductView } from "app/components/product/ProductView"
import { getProduct } from "app/services/shopify/products"

interface ProductPageProps {
  searchParams: {
    id: string
  }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id
  const product = await getProduct(id)

  return <ProductView product={product} />
}