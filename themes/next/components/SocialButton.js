import BLOG from '@/blog.config'
import React from 'react'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='w-full justify-center flex-wrap flex'>
    <div className='space-x-3 text-xl text-gray-600 dark:text-gray-400 '>
      {BLOG.CONTACT_YOUTUBE && <a target="_blank" rel="noreferrer" title={'youtube'} href={BLOG.CONTACT_YOUTUBE} >
        <i className="fab fa-youtube transform hover:scale-125 duration-150  text-red-400" />
      </a>}
      {BLOG.CONTACT_GITHUB && <a target='_blank' rel='noreferrer' title={'github'} href={BLOG.CONTACT_GITHUB} >
        <i className='fab fa-github transform hover:scale-125 duration-150'/>
@ -31,13 +31,13 @@
        <i className='fas fa-envelope transform hover:scale-125 duration-150'/>
      </a>}
      {BLOG.CONTACT_TWITCH && <a target='_blank' rel='noreferrer' title={'twitch'} href={BLOG.CONTACT_TWITCH} >
        <i className='fab fa-twitch transform hover:scale-125 duration-150 text-indigo-400'/>
      </a>}
      <a target='_blank' rel='noreferrer' title={'RSS'} href={'/feed'} >
        <i className='fas fa-rss transform hover:scale-125 duration-150 text-orange-500'/>
      </a>
    </div>
  </div>
}
export default SocialButton
