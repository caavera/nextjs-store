import Link from 'next/link'
import styles from './Header.module.sass'
import { cookies } from 'next/headers'

export const Header = async () => {
    const cookiesStore = await cookies()
    const token = cookiesStore.get('accessToken')?.value

    return (
        <header>
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
                    <li>
                        {token ? (
                            <Link href="#">Hola!</Link>
                        ) : (
                            <Link href="/login">Login</Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>)
}