import React from 'react'
import Text from './fieldsComponent/Text';
import Select from './fieldsComponent/Select';
import TrueOrFalse from './fieldsComponent/TrueOrFalse';

function GenericFields({ type }) {
    switch (type) {
        case "text":
            return <Text />

        case "select":
            return <Select />

        case "boolean":
            return <TrueOrFalse />

        default:
            <span>Type not mapped</span>
    }
}

export default GenericFields