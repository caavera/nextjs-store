import { ProductsWrapper } from "@/components/store/ProductsWrapper"
import { getProducts } from "@/services/shopify"

interface CategoryProps {
  params: Promise<{
    categories: string[],
  }>
  searchParams?: Promise<Record<string, string>>
}

export default async function Category(props: CategoryProps){
  const products = await getProducts()
  const { categories } = await props.params
  // throw new Error('Error: boom')
  return(
    <ProductsWrapper products={products}/>
  )
}