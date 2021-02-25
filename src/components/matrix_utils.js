import {formatMatrixLatex} from "./utils";
import React from "react";

export function generateGridCallback (state, stateSetter) {
    return ({ fromRow, toRow, updated }) => {
        const rows = state.rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
            rows[i] = { ...rows[i], ...updated };
        }
        stateSetter({
            ...state, rows
        });
    };
}

class MatrixElementEditor extends React.Component {
    ref = React.createRef();
    constructor(props) {
        super(props);
        this.state = { value: props.value };
    }
    getValue() {
        return { [this.props.column.key]: this.state.value };
    }

    getInputNode() {
        return this.ref.current ? this.ref.current : null;
    }

    onInputChange = () => {
        let value = this.ref.current.value;
        try {
            value = parseFloat(value);
            if (isNaN(value)) {
                value = 0;
            }
        }
        catch {
            value = 0;
        }
        this.setState({ value: value });
    }

    render() {
        return(
            <input ref={this.ref} defaultValue={this.state.value} onBlur={this.onInputChange} onChange={this.onInputChange} />
        )
    }
}

const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
};

class WrapperFormatter extends React.Component {

    render() {
        return (<div style={style}>{this.props.value}</div>)
    }
}

const columnSettings = {
    editable: true,
    editor: MatrixElementEditor,
    formatter : WrapperFormatter,
};

export const createNewColumn = (numberOfColumns, customName = "") => {
    const newNum = numberOfColumns + 1;
    if (customName) {
        return { key: `col_${newNum}`, name: customName, ...columnSettings };
    }
    else {
        return { key: `col_${newNum}`, name: `C${newNum}`, ...columnSettings };
    }
}

export const createNewRow = (numberOfColumns) => {
    let newRow = {};
    for (let i = 1; i <= numberOfColumns; i++) {
        newRow[`col_${i}`] = 0;
    }
    return newRow;
}

export const gridTo2DArray = (rowsArray) => {
    let keys = Object.keys(rowsArray[0]).sort();
    let result = rowsArray.map((row) => {
        return keys.map((k) => row[k]);
    });
    return result;
}

export const cloneArray = (array) => {
    return JSON.parse(JSON.stringify(array));
}

export const isDiagonallyDominant = (matrix) => {
    // Strictly diagonal dominant
    for (let i  = 0; i < matrix.length; i++) {
        let diagonal = matrix[i][i];
        let sum = 0;
        for (let j  = 0; j < matrix.length; j++) {
            if (j !== i) {
                sum += matrix[i][j];
            }
        }
        if (Math.abs(diagonal) <= Math.abs(sum)) {
            return false;
        }
    }
    return true;
}

// First 15 factorials.
export const numberFactorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000];

export const getBinomialCoefficient = (n, k) => {
    return numberFactorials[n] / numberFactorials[k] / numberFactorials[n - k];
}

export const nextPermutation = (array) => {
    // Mutates array
    // Find non-increasing suffix
    let i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i])
        i--;
    if (i <= 0)
        return false;

    // Find successor to pivot
    let j = array.length - 1;
    while (array[j] <= array[i - 1])
        j--;
    let temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;

    // Reverse suffix
    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return true;
}

export const generatePermutationMapping = (target, original=[...Array(target.length).keys()]) => {
    let mapping = {};
    let alreadyCovered = [];
    for (let i = 0; i < original.length; i++) {
        if (!alreadyCovered.includes(target[i]) && original[i] !== target[i]) {
            mapping[i] = target[i];
            alreadyCovered.push(original[i], target[i]);
        }
    }
    return mapping;
}

export const matrixToLatex = (matrix, {single=false, leftBracketOnly=false, rightBracketOnly=false, boldRows=[], boldColumns=[], transpose=false}={}) => {
    let latex;
    if (rightBracketOnly) {
        latex = String.raw`\left|\begin{matrix}`;
    }
    else {
        latex = String.raw`\left[\begin{matrix}`
    }
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    if (single) {
        // 1D array
        for (let i = 0; i < rowLength; i++){
            let isBold = false;
            for (let b = 0; b < boldRows.length; b++) {
                if (boldRows[b] === i + 1) {
                    isBold = true;
                    break;
                }
            }
            const content = String.raw` ${formatMatrixLatex(matrix[i])} `;
            if (isBold) {
                latex += String.raw` \colorbox{aqua}{\bf{${content}}} `;
            }
            else {
                latex += String.raw`${content}`;
            }
            latex += String.raw`\cr`;
        }
    }
    else {
        for (let i = 0; i < rowLength; i++){
            let isBoldRow = false;
            for (let b = 0; b < boldRows.length; b++) {
                if (boldRows[b] === i + 1) {
                    isBoldRow = true;
                    break;
                }
            }
            for (let j = 0; j < colLength; j++){
                let isBoldRowColumn = false;
                for (let c = 0; c < boldColumns.length; c++) {
                    if (boldColumns[c] === j + 1) {
                        isBoldRowColumn = true;
                        break;
                    }
                }
                let content = String.raw` ${formatMatrixLatex(matrix[i][j])} `;
                if (isBoldRow || isBoldRowColumn) {
                    latex += String.raw` \colorbox{aqua}{\bf{${content}}} `;
                }
                else {
                    latex += String.raw`${content}`;
                }
                if (j !== colLength - 1) {
                    latex += String.raw`&`;
                }
            }
            latex += String.raw`\cr`;
        }
    }
    if (leftBracketOnly) {
        latex += String.raw`\end{matrix}\right|`;
    }
    else {
        latex += String.raw`\end{matrix}\right]`;
    }
    return latex;
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Matrix initial values
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
export const initialMatrix = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
        { key: "col_4", name: "C4", ...columnSettings },
    ],
    rows: [
        { col_1: 0, col_2: 1, col_3: -3, col_4: 4 },
        { col_1: 2, col_2: -2, col_3: 1, col_4: 0 },
        { col_1: 2, col_2: -1, col_3: -2, col_4: 4 },
        { col_1: -6, col_2: 4, col_3: 3, col_4: -8 },
    ]
}
export const initialInputColumn = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
        { key: "col_4", name: "C4", ...columnSettings },
    ],
    rows: [
        { col_1: 0, col_2: 0, col_3: 0, col_4: 0},
    ]
}
export const initialOutputColumn = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
        { key: "col_4", name: "C4", ...columnSettings },
    ],
    rows: [
        { col_1: 1, col_2: -1, col_3: 0, col_4: 1},
    ]
}

export const initialMatrix2 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
    ],
    rows: [
        { col_1: 1, col_2: -10, col_3: 1 },
        { col_1: 20, col_2: 1, col_3: -1 },
        { col_1: -1, col_2: 1, col_3: 10 },
    ]
}
export const initialInputColumn2 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
    ],
    rows: [
        { col_1: 0, col_2: 0, col_3: 0 },
    ]
}
export const initialOutputColumn2 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
    ],
    rows: [
        { col_1: 13, col_2: 17, col_3: 18 },
    ]
}

export const initialMatrix3 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
        { key: "col_4", name: "C4", ...columnSettings },
    ],
    rows: [
        { col_1: -1, col_2: 11, col_3: -1, col_4: 3 },
        { col_1: 10, col_2: -1, col_3: 2, col_4: 0 },
        { col_1: 0, col_2: 3, col_3: -1, col_4: 8 },
        { col_1: 2, col_2: -1, col_3: 10, col_4: -1 },
    ]
}
export const initialInputColumn3 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
        { key: "col_4", name: "C4", ...columnSettings },
    ],
    rows: [
        { col_1: 0, col_2: 0, col_3: 0, col_4: 0 },
    ]
}
export const initialOutputColumn3 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
        { key: "col_4", name: "C4", ...columnSettings },
    ],
    rows: [
        { col_1: 25, col_2: 6, col_3: 15, col_4: -11, },
    ]
}

export const initialMatrix4 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
    ],
    rows: [
        { col_1: 3, col_2: -0.1, col_3: -0.2 },
        { col_1: 0.1, col_2: 7, col_3: -0.3 },
        { col_1: 0.3, col_2: -0.2, col_3: 10 },
    ]
}

export const initialMatrix5 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
    ],
    rows: [
        { col_1: 5, col_2: 5 },
        { col_1: -1, col_2: 7 },
    ]
}

export const initialMatrix6 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
    ],
    rows: [
        { col_1: 3, col_2: 2, col_3: 2 },
        { col_1: 2, col_2: 3, col_3: -2 },
    ]
}
export const initialMatrix7 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
    ],
    rows: [
        { col_1: 2, col_2: 4 },
        { col_1: 1, col_2: 3 },
        { col_1: 0, col_2: 0 },
        { col_1: 0, col_2: 0 },
    ]
}
export const initialMatrix8 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
    ],
    rows: [
        { col_1: 1, col_2: -2, col_3: 3 },
        { col_1: 5, col_2: 8, col_3: -1 },
        { col_1: 2, col_2: 1, col_3: 1 },
        { col_1: -1, col_2: 4, col_3: -3 },
    ]
}
export const initialMatrix9 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
    ],
    rows: [
        { col_1: 1, col_2: 2, col_3: 3 },
        { col_1: 3, col_2: 4, col_3: 5 },
        { col_1: 5, col_2: 6, col_3: 7},
        { col_1: 7, col_2: 8, col_3: 9 },
    ]
}
export const initialMatrix10 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
    ],
    rows: [
        { col_1: 6, col_2: -7, col_3: 2 },
        { col_1: 4, col_2: -5, col_3: 2 },
        { col_1: 1, col_2: -1, col_3: 1 },
    ]
}
export const initialMatrix11 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
    ],
    rows: [
        { col_1: 2, col_2: 1, col_3: 2 },
        { col_1: 1, col_2: 0, col_3: 1 },
        { col_1: 4, col_2: 1, col_3: 4 },
    ]
}
export const initialMatrix12 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
    ],
    rows: [
        { col_1: 4, col_2: -2 },
        { col_1: 3, col_2: -1 },
    ]
}
export const initialInputColumn12 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
    ],
    rows: [
        { col_1: 1, col_2: 0},
    ]
}
export const initialMatrix13 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
    ],
    rows: [
        { col_1: 2, col_2: 3 },
        { col_1: 4, col_2: 1 },
    ]
}
export const initialInputColumn13 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
    ],
    rows: [
        { col_1: -0.7, col_2: 1},
    ]
}
export const initialMatrix14 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
    ],
    rows: [
        { col_1: 7, col_2: -2 },
        { col_1: 3, col_2: -1 },
    ]
}
export const initialInputColumn14 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
    ],
    rows: [
        { col_1: 1, col_2: 0},
    ]
}
export const initialMatrix15 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
        { key: "col_3", name: "C3", ...columnSettings },
        { key: "col_4", name: "C4", ...columnSettings },
    ],
    rows: [
        { col_1: 5, col_2: 0, col_3: 0, col_4: -1, },
        { col_1: 1, col_2: 0, col_3: -1, col_4: 1, },
        { col_1: -1.5, col_2: 1, col_3: -2, col_4: 1, },
        { col_1: -1, col_2: 1, col_3: 3, col_4: -3, },
    ]
}
export const initialMatrix16 = {
    columns: [
        { key: "col_1", name: "C1", ...columnSettings },
        { key: "col_2", name: "C2", ...columnSettings },
    ],
    rows: [
        { col_1: 1, col_2: -1},
        { col_1: 2, col_2: -1},
    ]
}
export const initialMatrix17 = {
    columns: [
        { key: "col_1", name: "x", ...columnSettings },
        { key: "col_2", name: "y", ...columnSettings },
    ],
    rows: [
        { col_1: 0, col_2: 0},
    ]
}