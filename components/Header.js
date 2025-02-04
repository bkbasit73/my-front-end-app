import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

export default function Header() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={router.pathname === '/' ? styles.active : ''}>Home</Link>
      <Link href="/about" className={router.pathname === '/about' ? styles.active : ''}>About</Link>
      <Link href="/contact" className={router.pathname === '/contact' ? styles.active : ''}>Contact</Link>
    </nav>
  );
}
