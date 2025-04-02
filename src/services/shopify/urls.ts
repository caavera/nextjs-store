import { env } from "@/config/env"

export const shopifyUrls = {
  products: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2025-01/products.json`
  },
  collections: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2025-01/smart_collections.json`,
    'products': (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2025-01/collections/${id}/products.json`
  }
}