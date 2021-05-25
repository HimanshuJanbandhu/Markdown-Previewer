export function setText(text){
    return {
        type: 'SET_TEXT',
        payload : text
    }
}

export function clearText(){
    return {
        type: 'CLEAR_TEXT',
        payload : ''
    }
}