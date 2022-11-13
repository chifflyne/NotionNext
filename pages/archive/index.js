import { getGlobalNotionData } from '@/lib/notion/getNotionData'
import React from 'react'
import { useGlobal } from '@/lib/global'
import * as ThemeMap from '@/themes'

const ArchiveIndex = props => {
  const { theme, locale } = useGlobal()
  const ThemeComponents = ThemeMap[theme]
  const { siteInfo } = props
  const meta = {
    title: `${locale.NAV.ARCHIVE} | ${siteInfo?.title}`,
    description: siteInfo?.description,
    image: siteInfo?.pageCover,
    slug: 'archive',
    type: 'website'
  }

  return <ThemeComponents.LayoutArchive {...props} meta={meta} />
}

export async function getStaticProps() {
  const props = await getGlobalNotionData({ from: 'archive-index' })
  // 处理分页
  props.posts = props.allPages.filter(page => page.type === 'Post' && page.status === 'Published')
  delete props.allPages

  return {
    props,
    revalidate: 1
  }
}

export default ArchiveIndex
