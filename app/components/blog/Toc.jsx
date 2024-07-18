import React from 'react'

const TOC = () => {
  return (
    <details
      className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
      open
    >
      <summary className="text-lg font-semibold capitalize cursor-pointer">
        Table Of Content
      </summary>
      <ul className="mt-4 font-in text-base">
        <li className="py-1">
          <a
            href="#what-to-expect-from-here-on-out"
            data-level="two"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="hover:underline">
              What to expect from here on out
            </span>
          </a>
        </li>
        <li className="py-1">
          <a
            href="#typography-should-be-easy"
            data-level="three"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
              &nbsp;
            </span>
            <span className="hover:underline">Typography should be easy</span>
          </a>
        </li>
        <li className="py-1">
          <a
            href="#what-if-we-stack-headings"
            data-level="two"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="hover:underline">What if we stack headings?</span>
          </a>
        </li>
        <li className="py-1">
          <a
            href="#we-should-make-sure-that-looks-good-too"
            data-level="three"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
              &nbsp;
            </span>
            <span className="hover:underline">
              We should make sure that looks good, too.
            </span>
          </a>
        </li>
        <li className="py-1">
          <a
            href="#when-a-heading-comes-after-a-paragraph-"
            data-level="three"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
              &nbsp;
            </span>
            <span className="hover:underline">
              When a heading comes after a paragraph …
            </span>
          </a>
        </li>
        <li className="py-1">
          <a
            href="#code-should-look-okay-by-default"
            data-level="two"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="hover:underline">
              Code should look okay by default.
            </span>
          </a>
        </li>
        <li className="py-1">
          <a
            href="#what-about-nested-lists"
            data-level="three"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
              &nbsp;
            </span>
            <span className="hover:underline">What about nested lists?</span>
          </a>
        </li>
        <li className="py-1">
          <a
            href="#there-are-other-elements-we-need-to-style"
            data-level="two"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="hover:underline">
              There are other elements we need to style
            </span>
          </a>
        </li>
        <li className="py-1">
          <a
            href="#sometimes-i-even-use-code-in-headings"
            data-level="three"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
              &nbsp;
            </span>
            <span className="hover:underline">
              Sometimes I even use `code` in headings
            </span>
          </a>
        </li>
        <li className="py-1">
          <a
            href="#we-havent-used-an-h4-yet"
            data-level="three"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
              &nbsp;
            </span>
            <span className="hover:underline">We haven t used an `h4` yet</span>
          </a>
        </li>
        <li className="py-1">
          <a
            href="#we-still-need-to-think-about-stacked-headings-though"
            data-level="three"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
              &nbsp;
            </span>
            <span className="hover:underline">
              We still need to think about stacked headings though.
            </span>
          </a>
        </li>
        <li className="py-1">
          <a
            href="#lets-make-sure-we-dont-screw-that-up-with-h4-elements-either"
            data-level="three"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
              &nbsp;
            </span>
            <span className="hover:underline">
              Let s make sure we don t screw that up with `h4` elements, either.
            </span>
          </a>
        </li>
        <li className="py-1">
          <a
            href="#github-flavored-markdown"
            data-level="two"
            className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
          >
            <span className="hover:underline">GitHub Flavored Markdown</span>
          </a>
        </li>
      </ul>
    </details>
  )
}

export default TOC
