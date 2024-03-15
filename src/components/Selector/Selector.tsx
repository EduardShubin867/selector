import { useState, useRef } from 'react'
import { Options } from '../../types/Options'
import './selectorStyles.scss'

import useOnFocusLost from '../../hooks/onFocusLost'
import SelectorButton from './SelectorButton'
import SearchInput from './SearchInput'
import OptionList from './OptionsList'

type Props = {
    options: Options[]
    onChange: (option: Options[]) => void
    theme?: string
    size?: string
}

const Selector = ({ options, onChange, theme, size }: Props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedOptions, setSelectedOptions] = useState<Options[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useOnFocusLost(dropdownRef, () => {
        setIsOpen(false)
    })

    return (
        <div
            className={`selector ${theme ? theme : 'light'}-theme ${
                size ? size : 'md'
            }`}
            ref={dropdownRef}
        >
            <SelectorButton
                selectedOptions={selectedOptions}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
            />
            {isOpen && (
                <div className="selector__dropdown">
                    <SearchInput
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    <OptionList
                        options={options}
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                        searchTerm={searchTerm}
                        onChange={onChange}
                    />
                </div>
            )}
        </div>
    )
}

export default Selector
