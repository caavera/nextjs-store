import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate"
import { cookies } from 'next/headers'

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = await cookies()
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const response = await graphqlClient.request(customerAccessTokenCreateMutation, {
    "email": email,
    "password": password
  })

  const { customerAccessTokenCreate } = response as { customerAccessTokenCreate: { customerAccessToken: { accessToken: string, expiresAt: string } } }
  const { accessToken, expiresAt } = customerAccessTokenCreate?.customerAccessToken

  if(accessToken){
    cookiesStore.set("accessToken", accessToken, {
      path: "/",
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: "strict"
    })
  }
}