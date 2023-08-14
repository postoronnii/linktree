import Business from '@/components/Business'
import {
  FacebookIcon,
  InstaIcon,
  TwitterIcon,
  VerifiedIcon,
} from '@/components/Icons'
import Image from 'next/image'
import data from '../data.json'

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col mt-20 mx-auto w-full px-8">
      <Image
        className="rounded-full"
        src={data.img}
        alt={data.name}
        width={100}
        height={100}
      />
      <div className="flex items-center gap-2 pb-7 mt-5">
        <p className="font-semibold text-xl text-gray-100">{data.name}</p>
        <VerifiedIcon />
      </div>

      {data.links.map((item, idx) => (
        <Business key={idx} item={item} />
      ))}
      <div className="flex gap-5 items-center mt-4">
        {data.social.map((i) => {
          if (i.name.includes('Insta'))
            return (
              <a className="hover:scale-110" href={i.url} key={i.name}>
                <InstaIcon />
              </a>
            )
          // if (i.name.includes('Twit'))
          //   return (
          //     <a className="hover:scale-110" href={i.url} key={i.name}>
          //       <TwitterIcon />
          //     </a>
          //   )
          if (i.name.includes('Face'))
            return (
              <a className="hover:scale-110" href={i.url} key={i.name}>
                <FacebookIcon />
              </a>
            )
        })}
      </div>
    </div>
  )
}
