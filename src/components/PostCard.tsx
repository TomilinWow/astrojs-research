import type { IPost } from "../types/posts.ts";


export default function PostCard (props: IPost) {
  const { body, title, id } = props

  return (
    <a href={'/post/' + id} id={"post" + id}>
      <div className="mt-4 flex w-100 rounded-md gap-10 bg-blue-200 p-2 border-r-4">
        <div>
          <span className="ml-auto font-bold text-gray-900">{title}</span>
        </div>
        <div>
          <span className="ml-auto font-semibold text-gray-700">{body}</span>
        </div>
      </div>
    </a>
  )
}
