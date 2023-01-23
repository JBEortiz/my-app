import React from 'react';
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ContactPage= () => {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500">
    <div className="overflow-hidden bg-gradient-to-r from-blue-400 to-blue-500 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-xl">
        <svg
          className="absolute left-full translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 -translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h1 className="font-bold tracking-tight text-stone-700 sm:text-6xl">Contact sales</h1>
          <p className="mt-6 text-xl leading-7 text-white">
            Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
            arcu.
          </p>
        </div>
        <div className="mt-12">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first-name" className="block text-lg font-mono text-white">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-lg  py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-lg font-mono text-white">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-lg py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-lg font-mono text-white">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-lg  py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-lg font-mono text-white">
                Phone Number
              </label>
              <div className="relative mt-1 rounded-lg  shadow-sm">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-lg   py-3 px-4 pl-20  focus:border-sky-500 focus:ring-sky-500"
                  placeholder="999 223 423"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-lg font-mono text-white">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-lg  py-3 px-4 shadow-sm  focus:border-sky-500 focus:ring-sky-500"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-blue-800' : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2  focus:border-sky-500 focus:ring-sky-500 focus:ring-offset-2'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base font-mono text-white">
                    By selecting this, you agree to the{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-white to-white px-3 py-2 text-lg font-medium hover:from-blue-100 hover:to-blue-100 text-blue-600 shadow-sm"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactPage;
