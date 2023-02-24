export function frameOnField(field) {
    field.forEach(row => row[1][0] = 0)
    field.forEach(row => row[row.length - 2][0] = Math.PI)
    field[1].forEach(cell => cell[0] = -Math.PI / 2)
    field[field.length - 2].forEach(cell => cell[0] = Math.PI / 2)
}