import { checkIfDeployed, verifyRange, paramatiseCommand } from '../src/main'

let x = 0
let startingX = 0
let y = 0
let startingY = 0
let command = ''
let deployedFlag = false
let xBoundary = 6
let yBoundary = 6

describe('paramatiseCommand test', function () {
    const instructions = paramatiseCommand('MOVE')
    it('should return object of length 1 if command is not DEPLOY', () => {  
        expect(Object.keys(instructions).length).toBe(1);
    });
    it('should return instructon command of MOVE', () => {
        expect(instructions.command).toBe('MOVE');
    });
    const instructions2 = paramatiseCommand('DEPLOY 4 3 N')
    it('should return object of length 4 if command is DEPLOY', () => {      
        expect(Object.keys(instructions2).length).toBe(4);
    });
    it('should return instructon command of DEPLOY', () => {
        expect(instructions2.command).toBe('DEPLOY');
    });
    it('should return instructon X of 4 (number)', () => {
        expect(instructions2.x).toBe(4);
    });
    it('should return instructon Y of 3 (number)', () => {
        expect(instructions2.y).toBe(3);
    });
    it('should return instructon F of N', () => {
        expect(instructions2.f).toBe('N');
    });
    const instructions3 = paramatiseCommand('RIGHT')
    it('should return object of length 1 if command is not DEPLOY', () => {  
        expect(Object.keys(instructions3).length).toBe(1);
    });
    it('should return instructon command of RIGHT', () => {
        expect(instructions3.command).toBe('RIGHT');
    });
    const instructions4 = paramatiseCommand('LEFT')
    it('should return object of length 1 if command is not DEPLOY', () => {  
        expect(Object.keys(instructions4).length).toBe(1);
    });
    it('should return instructon command of LEFT', () => {
        expect(instructions4.command).toBe('LEFT');
    });
    const instructions5 = paramatiseCommand('REPORT')
    it('should return object of length 1 if command is not DEPLOY', () => {  
        expect(Object.keys(instructions5).length).toBe(1);
    });
    it('should return instructon command of REPORT', () => {
        expect(instructions5.command).toBe('REPORT');
    });
});

describe('checkIfDeployed test', function () {
    it('should return 0 if command is DEPLOY', () => {
        expect(checkIfDeployed('DEPLOY 4 3 N')).toBe(0);
    });
});

describe('verifyRange test', function () {
    it('should return true if postion move is within bounds', () => {
        expect(verifyRange(2, 1, xBoundary)).toBe(true);
    });
});