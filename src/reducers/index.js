const reducer = (state, action) => {
    switch(action.type){
        case "BacteriaRequest":
            return {
                ...state,
                bacteria: action.payload
            }
    } 
}