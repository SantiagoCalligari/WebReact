import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '/styles/Navbar.module.css'
const RutasDeNavegacion = ["La Merendola", "Contacto"];

function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === (href === "/La Merendola" ? "/" : href);
    return (
        <Link href={href === "/La Merendola" ? "/" : href} passHref>
            <a
                href={href === "/La Merendola" ? "/" : href}
                className={`${isActive && "nav_item_active"} nav_item`}>
                {text}
            </a>
        </Link>
    );
}

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className={styles.navbar} id="navbar">
            {RutasDeNavegacion.map((ruta) => {
                return (
                    <NavigationLink
                    key={ruta}
                    href={'/${ruta.toLowerCase()}'}
                    text={ruta}
                    router={router}
                    />
                )}
            )
            }
        </nav>
    );
}