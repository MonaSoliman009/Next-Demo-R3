"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Products', path: '/products' },
    { name: 'Login', path: '/login' },
    { name: 'CSR', path: '/csr' },
    { name: 'SSR', path: '/ssr' },
    { name: 'SSG', path: '/ssg' },
    { name: 'ISR', path: '/isr' },
     { name: 'Todos', path: '/todos' },
     { name: 'Add Todo', path: '/todos/add' },

]
export default function Navbar() {
    const pathname = usePathname()
    console.log(pathname);

    return (
        <div className="bg-neutral-400 py-4">
            {links.map((link) => <Link href={link.path} key={link.name} className={`mr-4 font-bold ${(pathname == link.path) ? 'text-green-900' : ''}`}>{link.name}</Link>)}
        </div>
    )
}
