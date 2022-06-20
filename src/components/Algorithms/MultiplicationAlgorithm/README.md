### Log

**20220615**

Finished the calculation and display phase of the project for multiplication.
Next steps or things to do:

- Refactor: Current architecture tidied vs new architecture
- Refactor
  - push all cells at initialization
  - add checks for zeros at left end of rows
  - add checks for highlighting at left end of rows
  - extract repeated code to helpers
- Add Typescript to the creation code
- Add tests to the creation code
- Add Typescript to the front end code
- Add tests to the front end code

Thoughts

- There should be three distinct phases: Initialization, Multiplication, Summation.
- Then these phases could be broken down further.
- Highlighting needs to be precise. Target any given cell, any row, any column.
- Explicit conditions for highlighting.
- Explicit conditions for skipping a step - if any
- Add a description for each step to help clarify and group tasks
- Working should be arrays of objects. The objects should be explicit about operation and addends, multiplicands etc.

Conclusion

- Extract functions as much as possible within current architecture
- Add Typescript to all functions
- Add one test for each function

**20220613**

- Changed the top and bottom rows to be reversed arrays and made consistent in creation and display
- Now the arrays are indexed such that the index of a digit matches its power of ten

**20220612**

Steps for multiplication digit pair cycle:

- Highlight 2 digits
- Working
- Working + carry
- Result unit
- Result carry

Steps for rows cycle

- Place value padding 0
- Set bottom row idx
- Run digit pair cycle with top row

Steps for phases

- Initialization
- Multiplication
- Summation

Run the multiplication creator on two arrays
Run the addition creator on n arrays
