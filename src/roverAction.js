const orientation = ['N', 'E', 'S', 'W']
const L = -1
const R = 1
const orientationLimit = orientation.length -1

export const changeRoverFacing = (turn, currentFacing) => { // refactor after post
    const currentFacingIdx = orientation.indexOf(currentFacing)
    let newFacingIdx = 0
    if(turn === 'LEFT'){
        newFacingIdx = currentFacingIdx - 1
        if(currentFacingIdx - 1 < 0){
            newFacingIdx = orientationLimit
        }
    }else{
        newFacingIdx = currentFacingIdx + 1
        if(currentFacingIdx + 1 > orientationLimit){
            newFacingIdx = 0
        }
    }
    return orientation[newFacingIdx]
}

export const changeRoverFacingX = (turn, currentFacing) => { // refactor after post
    const currentFacingIdx = orientation.indexOf(currentFacing)
    let newFacingIdx = 0
    if(turn === 'LEFT'){
        newFacingIdx = currentFacingIdx - 1
        if(currentFacingIdx - 1 < 0){
            newFacingIdx = orientationLimit
        }
    }else{
        newFacingIdx = currentFacingIdx + 1
        if(currentFacingIdx + 1 > orientationLimit){
            newFacingIdx = 0
        }
    }
    return orientation[newFacingIdx]
}