import { FC } from 'react'
import Link from 'next/link'

export const Header: FC = () => {
  return (
    <h2 className="text-2xl md:text-4xl tracking-tight md:tracking-tighter leading-tight py-8 mx-2 md:mx-0">
      <Link href="/blog">
        <a className="hover:underline">Beau Butner - Blog</a>
      </Link>
    </h2>
  )
}