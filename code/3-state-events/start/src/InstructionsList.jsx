import './InstructionsList.css'
import React from 'react';

function InstructionsList(props) {
    // Create the list items using map
    const instructionListItems = props.instructions.map((instruction, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index} className={ instruction.complete ? 'complete' : '' }>
                { instruction.name }
            </li>
        );
    });
    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <ul>
            { instructionListItems }
        </ul>
    );
}

export default InstructionsList;