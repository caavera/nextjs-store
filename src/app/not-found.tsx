import Link from 'next/link';
import Image from 'next/image';
import styles from '@/sass/modules/error.module.sass';

export default function NotFound() {
  return (
    <div className={styles.errorContainer}>
      <Image 
        src="/images/404.png"
        alt="Página no encontrada"
        width={160}
        height={160}
        className={styles.errorImage}
        priority
      />
      <h1 className={styles.errorTitle}>Página no encontrada</h1>
      <p className={styles.errorMessage}>
        Lo sentimos, la página que buscas no existe o ha sido movida.
        Por favor, verifica la URL o regresa a la página principal.
      </p>
      <Link href="/">
        <button className={styles.errorButton}>
          Ir a inicio
        </button>
      </Link>
    </div>
  );
} 