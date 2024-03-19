import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className='flex'>
          <p className="font-semibold text-gray text-xs">
            更多選購方式： {' '}
            <span className="underline text-blue">
            尋找當地的 Apple 直營店 {' '}
            </span>
            或 {' '}
            <span className="underline text-blue">
            其他零售商
            </span>{' '}
          </p>

          <p className="font-semibold text-gray text-xs">
            或致電 0800-020-021。
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer