import Head from 'next/head'

interface TitleProps {
  name?: string
}

export function Title({ name }: TitleProps) {
  return (
    <Head>
      <title>{name ? `${name} - EducaMente` : 'EducaMente'}</title>
    </Head>
  )
}
