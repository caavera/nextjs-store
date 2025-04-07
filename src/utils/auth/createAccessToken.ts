import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate"
import { cookies } from 'next/headers'

export const createAccessToken = async (email: string, password: string): Promise<boolean> => {
  try {
    const cookiesStore = await cookies()
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const response = await graphqlClient.request(customerAccessTokenCreateMutation, {
      "email": email,
      "password": password
    })

    const { customerAccessTokenCreate } = response as { 
      customerAccessTokenCreate: { 
        customerAccessToken?: { accessToken: string, expiresAt: string },
        customerUserErrors: Array<{ message: string }> 
      } 
    }

    // Verificar si hay errores
    if (customerAccessTokenCreate.customerUserErrors.length > 0) {
      console.error("Login error:", customerAccessTokenCreate.customerUserErrors)
      return false
    }

    // Verificar si el token existe
    if (customerAccessTokenCreate.customerAccessToken?.accessToken) {
      const { accessToken, expiresAt } = customerAccessTokenCreate.customerAccessToken
      
      cookiesStore.set("accessToken", accessToken, {
        path: "/",
        expires: new Date(expiresAt),
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production"
      })
      
      return true
    }
    
    return false
  } catch (error) {
    console.error("Error creating access token:", error)
    return false
  }
}