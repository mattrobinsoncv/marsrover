let roverState = {
    deployed: false,
    x: 0,
    y: 0,
    f: 'N'
}

export const initaliseRoverState = () => roverState

export const updateRoverDeploy = () => roverState.deployed = !roverState.deployed

export const readRoverState = item => {
    return roverState[item]
}

export const updateRoverState = (item, value) => roverState[item] = value