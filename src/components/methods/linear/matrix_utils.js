import {formatMatrixLatex} from "../../utils";
import React from "react";

export class MatrixElementEditor extends React.Component {
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
            value = parseInt(value);
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

export default class WrapperFormatter extends React.Component {

    render() {
        return (<div style={style}>{this.props.value}</div>)
    }
}

const columnSettings = {
    editable: true,
    editor: MatrixElementEditor,
    formatter : WrapperFormatter,
};

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

export const createNewColumn = (numberOfColumns) => {
    const newNum = numberOfColumns + 1;
    return { key: `col_${newNum}`, name: `C${newNum}`, ...columnSettings };
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

export const matrixToLatex = (matrix, {leftBracketOnly=false, rightBracketOnly=false, boldRows=[], transpose=false}) => {
    let latex;
    if (rightBracketOnly) {
        latex = String.raw`\left|\matrix{`;
    }
    else {
        latex = String.raw`\left[\matrix{`
    }
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    if (rowLength === 1) {
        // 1D array
        for (let i = 0; i < colLength; i++){
            let isBold = false;
            for (let b = 0; b < boldRows.length; b++) {
                if (boldRows[b] === i + 1) {
                    isBold = true;
                    break;
                }
            }
            const content = String.raw` ${formatMatrixLatex(matrix[0][i])} `;
            if (isBold) {
                latex += String.raw` \bf{${content}} `;
            }
            else {
                latex += String.raw`${content}`;
            }
            latex += String.raw`\cr`;
        }
    }
    else {
        for (let i = 0; i < rowLength; i++){
            let isBold = false;
            for (let b = 0; b < boldRows.length; b++) {
                if (boldRows[b] === i + 1) {
                    isBold = true;
                    break;
                }
            }
            for (let j = 0; j < colLength; j++){
                let content = String.raw` ${formatMatrixLatex(matrix[i][j])} `;
                if (isBold) {
                    latex += String.raw` \bf{${content}} `;
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
        latex += String.raw`}\right|`;
    }
    else {
        latex += String.raw`}\right]`;
    }
    return latex;
}