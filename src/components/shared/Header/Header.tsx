import Link from 'next/link'
import { validateAccessToken } from 'app/utils/auth/validateAccessToken'
import styles from './Header.module.sass'
import { ShoppingCartWrapper } from './ShoppingCartWrapper'

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (<Link href="/my-account">Hola! {customer.firstName}</Link>) : (<Link href="/login">Login</Link>)}
        <ShoppingCartWrapper />
      </div>
    </header>)
}