import Image from 'next/image'

export default function Business({ item }) {
  const { name, url, img, desc } = item
  return (
    <a
      // className="flex items-center px-3 py-5 rounded-md
      // shadow-lg hover:shadow-xl transition-shadow duration-300"
      className="flex items-center p-1 rounded-sm hover:scale-105 transition-all w-full
      bg-gray-50 max-w-3xl mb-3"
      href={url}
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          <Image
            className="rounded-sm"
            alt={name}
            src={img}
            width={40}
            height={40}
          />
        </div>
        <h2
          className="flex justify-center items-center w-full font-semibold 
        text-gray-700 -ml-10" //as an option ml-[-40px]
        >
          {name}
        </h2>
        {/* <p className="text-md text-gray-700">{desc}</p> */}
      </div>
    </a>
  )
}
