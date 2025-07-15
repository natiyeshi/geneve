import Link from 'next/link';
import logo from '@/../public/assets/logo/log.svg';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <Image src={logo} alt="Geneve Logo" width={100} height={100} style={{ marginBottom: '2rem' }} />
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#d32f2f' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem', color: '#555' }}>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <span style={{ color: '#1976d2', textDecoration: 'underline', cursor: 'pointer', fontWeight: 'bold' }}>Go back home</span>
      </Link>
    </div>
  );
}
