import { ProductsWrapper } from "@/components/store/ProductsWrapper"
import { getCollectionProducts, getCollections } from "@/services/shopify/collections"
import { getProducts } from "@/services/shopify/products"

interface CategoryProps {
  params: Promise<{
    categories: string[],
  }>
  searchParams?: Promise<Record<string, string>>
}

export default async function Category(props: CategoryProps){
  const { categories } = props.params
  let products = []
  const collections = await getCollections()
  
  if (categories?.length > 0) {
    const selectedCollectionId = collections.find((collection) => collection.handle === categories[0]).id
    products = await getCollectionProducts(selectedCollectionId)
  }else {
    products = await getProducts()
  }

  console.log('products', products)

  return (
    <ProductsWrapper products={products} />
  )
}