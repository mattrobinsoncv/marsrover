import {initaliseRoverState, updateRoverDeploy, readRoverState, updateRoverState} from '../src/roverState';

let x = 0
let startingX = 0
let y = 0
let startingY = 0
let deployedFlag = false
let xBoundary = 6
let yBoundary = 6
let dist = 1
let roverState = initaliseRoverState()

export const paramatiseCommand = command => {
    const splitCommand = command.split(' ')
    if(splitCommand.length === 1){
        return {command: splitCommand[0]}
    }else{
        return {command: splitCommand[0], x: +splitCommand[1], y: +splitCommand[2], f: splitCommand[3]}
    }
}

export const executeInstructions = instructions => {
    switch(instructions.command){
        case 'DEPLOY' :
            updateRoverDeploy()
            updateRoverState('x', x) 
            updateRoverState('y', y) 
            updateRoverState('f', f)
            break
        case 'MOVE' :
            moveRover()
            break
        case 'RIGHT' :
            turnRover('R')
            break
        case 'LEFT' :
            turnRover('L')
            break
        case 'REPORT' :
            reportRoverPosition()
            break
        default : invalidCommand()
    }
}

export const reportRoverPosition = () => {
    return `X: ${readRoverState('x')} Y: ${readRoverState('y')} F: ${readRoverState('f')}`
}

export const checkIfDeployed = command => command.indexOf('DEPLOY')

export const verifyRange = (pos, dist, boundary) => {
    const newPosition = pos + dist
    return newPosition > -1 && newPosition < boundary
}
