import Image from "next/image"

export const EntryPreview = () => {
  return (
    <li className="break-words text-base leading-7">
        <div className="flex flex-col gap-8 md:gap-10 items-stretch justify-between">
          <div className="flex-1">
            <Image />
          </div>
          <div>

          </div>
        </div>
    </li>
  )
}