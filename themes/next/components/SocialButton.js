        <i className="fab fa-youtube transform hover:scale-125 duration-150  text-red-400" />
      </a>}
      {BLOG.CONTACT_GITHUB && <a target='_blank' rel='noreferrer' title={'github'} href={BLOG.CONTACT_GITHUB} >
        <i className='fab fa-github transform hover:scale-125 duration-150'/>
      </a>}
      {BLOG.CONTACT_TWITTER && <a target='_blank' rel='noreferrer' title={'twitter'} href={BLOG.CONTACT_TWITTER} >
        <i className='fab fa-twitter transform hover:scale-125 duration-150 text-blue-400'/>
      </a>}
      {BLOG.CONTACT_DISCORD && <a target='_blank' rel='noreferrer' title={'discord'} href={BLOG.CONTACT_DISCORD} >
        <i className='fab fa-discord transform hover:scale-125 duration-150 text-indigo-400'/>
      </a>}
      {BLOG.CONTACT_TELEGRAM && <a target='_blank' rel='noreferrer' href={BLOG.CONTACT_TELEGRAM} title={'telegram'} >
        <i className="fab fa-youtube transform hover:scale-125 duration-150  text-red-400" />
      </a>}
      {BLOG.CONTACT_GITHUB && <a target='_blank' rel='noreferrer' title={'github'} href={BLOG.CONTACT_GITHUB} >
        <i className='fab fa-github transform hover:scale-125 duration-150'/>
      </a>}
      {BLOG.CONTACT_TWITTER && <a target='_blank' rel='noreferrer' title={'twitter'} href={BLOG.CONTACT_TWITTER} >
        <i className='fab fa-twitter transform hover:scale-125 duration-150 text-blue-400'/>
      </a>}
      {BLOG.CONTACT_DISCORD && <a target='_blank' rel='noreferrer' title={'discord'} href={BLOG.CONTACT_DISCORD} >
        <i className='fab fa-discord transform hover:scale-125 duration-150 text-indigo-400'/>
      </a>}
      {BLOG.CONTACT_TELEGRAM && <a target='_blank' rel='noreferrer' href={BLOG.CONTACT_TELEGRAM} title={'telegram'} >
        <i className='fab fa-telegram transform hover:scale-125 duration-150 text-blue-500'/>
      </a>}
      {BLOG.CONTACT_WEIBO && <a target='_blank' rel='noreferrer' title={'weibo'} href={BLOG.CONTACT_WEIBO} >
        <i className='fab fa-weibo transform hover:scale-125 duration-150'/>
      </a>}
      {BLOG.CONTACT_EMAIL && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${BLOG.CONTACT_EMAIL}`} >
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
