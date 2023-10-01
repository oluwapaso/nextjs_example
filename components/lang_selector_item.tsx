import React from 'react'

type itemProps = {
  language: string,
  handleClick: (handleClick: string) => void
}

const LanguangeSelectorItem = ({ language, handleClick }: itemProps) => {
  return (
    <div className="py-1">
      <div className="text-gray-700 flex justify-between w-full cursor-pointer px-4 py-2 text-sm leading-5 text-left"
        onClick={() => handleClick(language)}>
        {language}
      </div>
    </div >
  )
}

export default LanguangeSelectorItem