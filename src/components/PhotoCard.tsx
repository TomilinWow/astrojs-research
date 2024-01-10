import type { IPhoto } from "../types/photos.ts";

export default function PhotoCard(props: IPhoto) {
  const { url, title, id } = props

  return (
    <a href={'/photo/' + id} id={"photo" + id}>
      <div className="mt-2 flex justify-between w-80 rounded-md bg-blue-200 p-2 gap-2">
        <img width={120} height={120} src={url} alt={'post'}/>
        <p className="font-semibold text-gray-900">{title}</p>
      </div>
    </a>
  )
}
