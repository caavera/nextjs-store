import { ProductsWrapper } from "@/components/store/ProductsWrapper"
import { getCollectionProducts, getCollections } from "@/services/shopify/collections"
import { getProducts } from "@/services/shopify/products"

interface CategoryProps {
  searchParams: Promise<{ 
    categories: string[] 
  }>
}

// Define interface for the collection object based on what getCollections returns
interface Collection {
  id: string;
  title: string;
  handle: string;
}

export default async function Category(props: CategoryProps){
  const { categories } = await props.searchParams
  
  let products = []
  const collections = await getCollections()
  
  if (categories && categories.length > 0) {
    const selectedCollectionId = collections.find((collection: Collection) => collection.handle === categories[0])?.id
    if (selectedCollectionId) {
      products = await getCollectionProducts(selectedCollectionId)
    } else {
      products = await getProducts()
    }
  } else {
    products = await getProducts()
  }

  return (
    <ProductsWrapper products={products} />
  )
}