import { use } from "react"

interface CategoryProps {
  params: Promise<{
    categories: string[],
  }>
  searchParams?: Promise<Record<string, string>>
}

export default function Category(props: CategoryProps) {
  //console.log(props)
  const params = use(props.params)
  const { categories } = params
  //console.log(categories)
  return(
    <h1>Categoria dinámica: {categories}</h1>
  )
}