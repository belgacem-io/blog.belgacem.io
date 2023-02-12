import Link from "next/link"
import CONFIG from "site.config"
import { formatDate } from "@/src/libs/utils"
import Tag from "./Tag"
import { TPost } from "../types"
import Image from "next/image"

type Props = {
  post: TPost
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`/${post.slug}`}>
      <a>
        <article
          key={post.id}
          className="flex flex-col md:flex-row overflow-hidden mb-6 md:mb-8 rounded-2xl bg-white dark:bg-zinc-700 hover:shadow-lg transition-shadow "
        >
          {post.thumbnail && (
            <div className="relative md:w-120 bg-gray-200 dark:bg-zinc-700">
              <Image
                src={post.thumbnail}
                className="w-full object-fill md:h-full md:w-48"
                alt={post.title}
              />
            </div>
          )}
          <div className="p-4">
            <header className="flex flex-col justify-between md:flex-row md:items-baseline">
              <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
                {post.title}
              </h2>
            </header>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-sm text-gray-500 dark:text-gray-400 md:ml-0">
                {formatDate(
                  post?.date?.start_date || post.createdTime,
                  CONFIG.lang
                )}
              </div>
            </div>
            <main className="mb-4">
              <p className="hidden md:block leading-6 text-gray-700 dark:text-gray-300">
                {post.summary}
              </p>
            </main>
            <div className="flex gap-2">
              {post.tags &&
                post.tags.map((tag: string, idx: number) => (
                  <Tag key={idx}>{tag}</Tag>
                ))}
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default PostCard
