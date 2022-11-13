import BLOG from '@/blog.config'
import BlogAround from './BlogAround'
import Comment from '@/components/Comment'
import RecommendPosts from './RecommendPosts'
import ShareBar from './ShareBar'
import TagItem from './TagItem'
import formatDate from '@/lib/formatDate'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ArticleCopyright from './ArticleCopyright'
import WordCount from './WordCount'
import NotionPage from '@/components/NotionPage'
import { YouTubePlayer } from '@/components/YouTubePlayer'

@ -75,50 +74,46 @@
          <div className='mr-2'>
            <i className='far fa-clock mr-2' />{locale.COMMON.LAST_EDITED_TIME} {post.lastEditedTime}
          </div>

          <div className='flex flex-nowrap whitespace-nowrap items-center font-light text-md'>
            <WordCount />
          </div>
        </section>

      </header>}

      {/* Notion内容主体 */}
      <article id='notion-article' className='px-1'>
      <YouTubePlayer {...props} />
        {post && (<NotionPage post={post} />)}
      </article>

      <section className="px-1 py-2 my-1 text-sm font-light overflow-auto text-gray-600  dark:text-gray-400">
        {/* 文章内嵌广告 */}
        <ins className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' }}
          data-adtest="on"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-2708419466378217"
          data-ad-slot="3806269138" />
      </section>

      {showArticleInfo && <>
        {/* 版权声明 */}
        <ArticleCopyright author={BLOG.AUTHOR} url={url} />

        {/* 推荐文章 */}
        <RecommendPosts currentPost={post} recommendPosts={recommendPosts} />

        {/* 标签列表 */}
        <section className="md:flex md:justify-between">
          {post.tagItems && (
            <div className="flex flex-nowrap leading-8 p-1 py-4 overflow-x-auto">
              <div className="hidden md:block dark:text-gray-300 whitespace-nowrap">
                {locale.COMMON.TAGS}：
              </div>
              {post.tagItems.map(tag => (
                <TagItem key={tag.name} tag={tag} />
              ))}
            </div>
          )}
          <div>
            <ShareBar post={post} />
          </div>
