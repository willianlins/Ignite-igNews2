import styles from './styles.module.scss';


interface SubscribButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribButtonProps) {
  return (
    <button
      type="button"
      className={styles.SubscribeButton}
    >
      Subscribe now
    </button>
  );
}
