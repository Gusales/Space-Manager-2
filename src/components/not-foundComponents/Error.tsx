import Gif from '@/assets/images/sm-calendar.gif'
import Image from 'next/image'

export function Icon404() {
  return (
    <svg
      width="81"
      height="107"
      viewBox="0 0 81 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.84375 84.9688L13.832 6.74219H33.7969L20.6602 84.9688H0.84375ZM0.84375 84.9688L12.4961 67.082H52.7969V84.9688H0.84375ZM69.3477 84.9688V67.082H81V84.9688H69.3477ZM51.3125 106.195V0.804688H70.832V106.195H51.3125Z"
        fill="white"
      />
    </svg>
  )
}

export function Error404() {
  return (
    <div className="h-full w-full">
      <Icon404 />
      <Image src={Gif} alt="Gif de um calendário" />
      <Icon404 />
    </div>
  )
}
