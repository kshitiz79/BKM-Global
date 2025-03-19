"use client"

import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
      {/* Logo */}
      <div>
        <Link href="/">
          <img src="/logo.png" alt="Logo" style={{ height: '40px', cursor: 'pointer' }} />
        </Link>
      </div>

      {/* Nav links */}
      <nav style={{ marginLeft: 'auto' }}>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/service">Service</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
