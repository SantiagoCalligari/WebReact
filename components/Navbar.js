import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '/styles/Navbar.module.css'
import { useEffect } from 'react';
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
function links(ruta)
{
    switch(ruta)
    {
        case "La Merendola":
            return "/";
        case "Contacto":
            return "/contacto"
    }
}

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className={styles.navbar} id="navbar">
            {RutasDeNavegacion.map((ruta) => {
                return (
                    <NavigationLink
                    key={ruta}
                    href={links(ruta)}
                    text={ruta}
                    router={router}
                    />
                )}
            )
            }
        </nav>
    );
}