// Immediately Invoked Function Expression(IIFE)

// problem occured to pollution of global scope to remove that we used iife

// (function chai(){ // named iife
//     console.log(`DB CONNECTED`);
    
// }) ();  // stopped the fist code 

// ()()  correct format

// ( (name) =>{
//     console.log(`DB CONNECTED TO ${NAME}`);
// }) ('HITESH');


// Execution context and call stack //

/*
                    JAVASCRIPT EXECUTION CONTEXT
            
       {} -> GLOBAL EC -> THIS(PRESENT IN IT FOR USE)
        1-> Global Execution Context
        2-> Function Execution Contect
        -> Eval Execution Context

        {} -> Memeory creation phase
           -> Execution Phase


    Global Exwction->this
  
    let val1 = 10
    let val2 = 5
    function addNum(num1,num2){
    let total = num1+num2
    return total
    }
    let result1 = addNum(val1,val2)
    let result2 = addNum(10,2)

    Memeory Phase: 
                  val1 -> undefined
                  val2 -> undefined
                  addnum -> definition
                  result1 -> undefined
                  result2 -> undefine

    Ececution Phase:
                   val1 <- 10
                   val2 <- 5

                   addNum - another executional context ->[new variable enviroment + execution thread]

                   after work this block deleted
                 
                   memory phase (addNum):      Execution context:
                   val1 -> undefined           num1->10
                   val2 -> undefined           num2->5
                   total -> undefined          [total->15] return to global execution context

                   same as above block addNum similar to above complete repetition
                   
 */