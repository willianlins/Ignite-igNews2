import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';


import styles from './styles.module.scss';


interface SubscribButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribButtonProps) {
  const { data: session } = useSession();

  async function hamdleSubscribe() {
    if (!session) {
      signIn('github')
      return;
    }

    try {
      const response = await api.post('/subscribe');
      const { sessionId } = response.data;

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message);
    }

  }

  return (
    <button
      type="button"
      className={styles.SubscribeButton}
      onClick={hamdleSubscribe}
    >
      Subscribe now
    </button>
  );
}
