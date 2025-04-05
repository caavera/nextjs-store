"use server"
import { GraphQLClientSingleton } from "app/graphql"
import { createCartMutation } from "app/graphql/mutations/createCartMutation"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"
import { createAccessToken } from "app/utils/auth/createAccessToken"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  delete formDataObject["password_confirmation"]
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    input: {
      ...formDataObject,
      phone: '+57' + formDataObject.phone
    }
  }

  const response = await graphqlClient.request(createUserMutation, variables)
  const { customerCreate } = response as { 
    customerCreate: { 
      customerUserErrors: any[], 
      customer: { firstName?: string } 
    } 
  }
  
  const { customerUserErrors, customer } = customerCreate
  if(customer?.firstName){
    await createAccessToken(formDataObject.email as string, formDataObject.password as string)
    redirect('/store')
  }
  
  // Si llegamos aquí, la creación del usuario falló
  return {
    errors: customerUserErrors
  }
}

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  const loginSuccessful = await createAccessToken(formDataObject.email as string, formDataObject.password as string)
  
  if(loginSuccessful){
    redirect('/store')
  }
  
  // Si llegamos aquí, el login falló
  return {
    error: "Credenciales inválidas. Por favor verifica tu email y contraseña."
  }
}

export const handleCreateCart = async (items: CartItem[]) => {
  const cookiesStore = await cookies()
  const accesToken = cookiesStore.get('accessToken')?.value as string

  if(!accesToken) redirect('/login')

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const customer = await validateAccessToken()
  const variables = {
    input: {
      buyerIdentity: {
        customerAccessToken: accesToken,
        email: customer?.email
      },
      lines: items.map(item => ({
        merchandiseId: item.merchandiseId,
        quantity: item.quantity
      }))
    }
  }

  const { cartCreate }: {
    cartCreate?: {
      cart?: {
        checkoutUrl: string
      }
    }
  } = await graphqlClient.request(createCartMutation, variables)

  return cartCreate?.cart?.checkoutUrl
}