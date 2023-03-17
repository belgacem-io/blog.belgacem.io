import { useState } from 'react'

import * as Cards from './components/cards'
import * as Lists from './components/lists'

import { TPosts, TTags } from '@custeomTypes/index'
import SearchInput from './components/SearchInput'
import PostHeader from './components/Header'
import Footer from './components/Footer'

type Props = {
  tags: TTags
  posts: TPosts
}

const Feed: React.FC<Props> = ({ tags, posts }) => {
  const [q, setQ] = useState('')

  return (
    <div className="block md:grid grid-cols-12 gap-6">
      <div className="hidden lg:block col-span-3">
        <Lists.TagList data={tags} />
        <Cards.ContactCard />
        <Footer className="pt-4" />
      </div>
      <div className="col-span-6 lg:col-span-9">
        <Cards.MobileProfileCard />
        <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
        <Lists.TagList className="block lg:hidden" data={tags} />
        <PostHeader tags={tags} />
        <Lists.PostList q={q} posts={posts} tags={tags} />
        <Footer className="block lg:hidden flex justify-center pb-8" />
      </div>
    </div>
  )
}

export default Feed
