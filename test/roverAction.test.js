import { changeRoverFacing, changeRoverFacingX } from '../src/roverAction'

describe('Action command test', function () {
    const newDirection = changeRoverFacing('LEFT', 'N')
    it('new direction should be W', () => {  
        expect(newDirection).toBe('W');
    });
    const newDirection2 = changeRoverFacing('RIGHT', newDirection)
    it('new direction should be N', () => {  
        expect(newDirection2).toBe('N');
    });
    const newDirection3 = changeRoverFacing('RIGHT', newDirection2)
    it('new direction should be E', () => {  
        expect(newDirection3).toBe('E');
    });
});

describe('Action command refactor test', function () {
    const newDirection = changeRoverFacingX('LEFT', 'N')
    it('new direction should be W', () => {  
        expect(newDirection).toBe('W');
    });
    const newDirection2 = changeRoverFacingX('RIGHT', newDirection)
    it('new direction should be N', () => {  
        expect(newDirection2).toBe('N');
    });
    const newDirection3 = changeRoverFacingX('RIGHT', newDirection2)
    it('new direction should be E', () => {  
        expect(newDirection3).toBe('E');
    });
});