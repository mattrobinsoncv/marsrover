import {initaliseRoverState, updateRoverDeploy, readRoverState, updateRoverState} from '../src/roverState';

const initialRoverState = {"deployed": false, "f": "N", "x": 0, "y": 0}

describe('roverState tests', function () {
    let roverState = initaliseRoverState()
    it('initaliseRoverState should return rover state {"deployed": false, "f": "N", "x": 0, "y": 0}', () => {
        expect(roverState).toStrictEqual(initialRoverState);
    });
    it('updateRoverDeploy should return true', () => {
        const update = updateRoverDeploy()
        expect(update).toBe(true);
    });
    it('readRoverState(x) should return 0', () => {
        const update = readRoverState('x')
        expect(update).toBe(0);
    });
    it('updateRoverState(x, 2) should return false', () => {
        const update = updateRoverState('x', 2)
        expect(update).toBe(2);
    });
    it('readRoverState should return false', () => {
        const update= readRoverState('x')
        expect(update).toBe(2);
    });
    it('updateRoverDeploy should return false', () => {
        const update = updateRoverDeploy()
        expect(update).toBe(false);
    });
    it('updateRoverDeploy should return false', () => {
        const update = readRoverState('deployed')
        expect(update).toBe(false);
    });   
});
