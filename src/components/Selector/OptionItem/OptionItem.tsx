import { Option } from '../../../types/Option'
type Props = {
    option: Option
    handleOptionClick: (option: Option) => void
    selectedOptions: Option[]
}

const OptionItem = ({ option, handleOptionClick, selectedOptions }: Props) => {
    const isOptionSelected = (
        option: Option,
        selectedOptions: Option[]
    ): boolean => {
        return selectedOptions.some(
            (selectedOption) => selectedOption.label === option.label
        )
    }
    return (
        <div
            title={option.label}
            onClick={() => handleOptionClick(option)}
            className={`selector__option ${
                isOptionSelected(option, selectedOptions)
                    ? 'selector__option--selected'
                    : ''
            }`}
        >
            {option.icon && (
                <img
                    src={option.icon}
                    alt={option.label}
                    className="selector__option--icon"
                />
            )}
            <div className="selector__option--selected-text">
                {option.label}
            </div>
        </div>
    )
}

export default OptionItem
