import { useState } from "react"

const useSectionRef = initialValue => {
    const [ value, setValue ] = useState(initialValue);

    return {
        value,
        setValue,
        appendElement:  (sectionRef) => {
            setValue([sectionRef, ...value]);
        }
    }
}

export default useSectionRef;