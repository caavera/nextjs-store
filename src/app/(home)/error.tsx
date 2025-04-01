"use client";

import { useEffect } from "react";
import styles from '@/sass/modules/error.module.sass';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log only limited error information to avoid security risks
    console.error("Application error occurred");
    
    // In a production app, you would send this to a logging service
    // Example: sendToErrorService({
    //   message: error.message,
    //   stack: error.stack,
    //   name: error.name
    // });
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>⚠️</div>
      <h1 className={styles.errorTitle}>¡Ups! Algo salió mal</h1>
      <p className={styles.errorMessage}>
        Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado y 
        estamos trabajando para solucionarlo. Por favor, intenta nuevamente o 
        regresa más tarde.
      </p>
      <button 
        onClick={reset} 
        className={styles.errorButton}
      >
        Intentar nuevamente
      </button>
    </div>
  );
}