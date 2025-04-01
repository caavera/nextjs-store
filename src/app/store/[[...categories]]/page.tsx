import { use } from "react"

interface CategoryProps {
  params: Promise<{
    categories: string[],
  }>
  searchParams?: Promise<Record<string, string>>
}

export default function Category(props: CategoryProps) {
  const params = use(props.params)
  const { categories } = params
  
  //throw new Error("Error de prueba para GlobalError")
  
  return(
    <h1>Categoria dinámica: {categories}</h1>
  )
}