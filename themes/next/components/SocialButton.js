import BLOG from '@/blog.config'
import React from 'react'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='w-52 justify-center flex-wrap flex'>
    <div className='space-x-3 text-xl text-gray-600 dark:text-gray-200 '>
      {BLOG.CONTACT_YOUTUBE && <a target="_blank" rel="noreferrer" title={'youtube'} href={BLOG.CONTACT_YOUTUBE} >
        <i className='fab fa-youtube transform hover:scale-125 duration-150' />
      </a>}
      {BLOG.CONTACT_TWITTER && <a target='_blank' rel='noreferrer' title={'twitter'} href={BLOG.CONTACT_TWITTER} >
        <i className='fab fa-twitter transform hover:scale-125 duration-150'/>
      </a>}
       {BLOG.CONTACT_TWITCH && <a target='_blank' rel='noreferrer' title={'twitch'} href={BLOG.CONTACT_TWITCH} >
        <i className='fab fa-twitch transform hover:scale-125 duration-150'/>
      </a>}
      <a target='_blank' rel='noreferrer' title={'RSS'} href={'/feed'} >
        <i className='fas fa-rss transform hover:scale-125 duration-150'/>
      </a>
    </div>
  </div>
}
export default SocialButton
