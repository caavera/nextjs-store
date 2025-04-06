import { getCollections } from "@/services/shopify/collections"
import Link from "next/link"
import styles from './StoreLayout.module.sass'

// Define interface for the collection object
interface Collection {
  id: string;
  title: string;
  handle: string;
}

export const runtime = "edge"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()

  return (
    <main className={styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {
            collections.map((collection: Collection) => (
              <Link key={collection.id} href={'/store/' + collection.handle} className={styles.StoreLayout__chip}>
                {collection.title}
              </Link>
            ))
          }
        </ul>
      </nav>
      {children}
    </main>
  )
}