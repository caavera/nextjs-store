"use client";

import { useEffect } from "react";
import styles from '@/sass/modules/error.module.sass';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log only limited error information to avoid security risks
    console.error("Global application error occurred");
    
    // In a production app, you would send this to a secure error logging service
    // but never log the full error details to the browser console
  }, [error]);

  return (
    <html>
      <body>
        <div className={styles.errorContainer}>
          <div className={styles.errorIcon}>🔥</div>
          <h1 className={styles.errorTitle}>Error crítico</h1>
          <p className={styles.errorMessage}>
            Lo sentimos, ha ocurrido un error grave en la aplicación. 
            Nuestro equipo técnico ha sido notificado y estamos trabajando 
            para resolverlo lo antes posible.
          </p>
          <button 
            onClick={reset} 
            className={styles.errorButton}
          >
            Reiniciar aplicación
          </button>
        </div>
      </body>
    </html>
  );
} 