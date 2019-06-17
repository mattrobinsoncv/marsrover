# marsrover
Test Driven Development
The application is a simulation of a Mars rover moving on a square plateau, of dimensions 5 units x 5 units. There are no other obstructions on the plateau surface. The Mars rover is free to roam around the surface of the plateau, but must be prevented from falling to destruction.  Any movement that would result in the Mars rover falling from the plateau must be prevented, however further valid movement commands must still be allowed.

Create a console application that can read in commands of the following form -
   DEPLOY X,Y,F
   MOVE
   LEFT
   RIGHT
   REPORT

DEPLOY will put the Mars rover on the plateau in position X,Y and facing NORTH, SOUTH, EAST or WEST.  The origin (0,0) can be considered to be the NORTH WEST most corner. It is required that the first command to the Mars rover is a DEPLOY command, after that, any sequence of commands may be issued, in any order, including another DEPLOY command.  The application should discard all commands in the sequence until a valid DEPLOY command has been executed.

MOVE will move the Mars rover one unit forward in the direction it is currently facing.

LEFT and RIGHT will rotate the Mars rover 90 degrees in the specified direction without changing the position of the Mars rover.

REPORT will announce the X,Y and F of the Mars rover.  This can be in any form, but standard output is sufficient.

A Mars rover that is not on the plateau can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.

Input can be from a file, or from standard input, as the developer chooses.

Provide test data to exercise the application.

It is not required to provide any graphical output showing the movement of the Mars rover.

Constraints:

The Mars rover must not fall off the plateau during movement.  This also includes the initial placement of the Mars rover. Any move that would cause the Mars rover to fall must be ignored.
