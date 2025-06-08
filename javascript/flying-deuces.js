// The Flying Deuces
// Scenario:

// In the French Foreign Legion, as depicted in "The Flying Deuces," soldiers attempt to march in formation, but Stan and Ollie consistently disrupt the order. Each soldier's marching cadence affects those around them.

// Rules:

// Each soldier maintains a specific marching cadence.
// At each time step, all soldiers make decisions simultaneously based on the cadence values at the beginning of that step.
// A soldier's cadence is influenced by their immediate neighbors.
// If both neighbors have identical cadences, the soldier adopts that cadence.
// If neighbors have different cadences:
// a. The soldier's cadence shifts one step towards the average (rounded down) of the neighbors.
// b. If the rounded-down average matches the soldier's current cadence, their cadence moves one step towards the neighbor with the higher cadence.
// Soldiers at the ends of the line are influenced only by their single neighbor and adopt that neigbor's cadence.
// Stan and Ollie, the protagonists, maintain their original cadence throughout the simulation.
// Task:

// Given an initial lineup of soldiers, simulate how their marching cadence evolves over time based on their neighbors' influence.

// Input Parameters:

// initial: A list of non-negative integers representing the initial cadence of each soldier.
// steps: An integer representing the number of time steps to simulate.
// stan: An integer representing Stan's position in the line (0-based index).
// ollie: An integer representing Ollie's position in the line (0-based index).
// Output:

// Return a list of integers representing the cadence of each soldier after all simulation steps.
// Constraints:

// 0 ≤ cadence ≤ 10
// 2 ≤ number of soldiers ≤ 40
// 0 ≤ steps ≤ 100
// Example:

// initial = [0,1,0,2,5,4,8,0,3,4,2]
// steps = 5
// stan = 1
// ollie = 5

// # Step 1: [1,1,1,3,4,4,7,1,2,3,4]
// # Step 2: [1,1,2,2,3,4,6,2,3,4,3]
// # Step 3: [1,1,1,3,4,4,5,3,4,3,4]
// # Step 4: [1,1,2,2,3,4,4,4,3,4,3]
// # Step 5: [1,1,1,3,4,4,4,3,4,3,4]

// return [1,1,1,3,4,4,4,3,4,3,4]

//initial = [0,1,0,2,5,4,8,0,3,4,2]
initial = [10,7,10,1]
steps = 2
stan = 0
ollie = 2
salida = []



for (i=1;i<=steps;i++){
    for(j=0;j<initial.length;j++){

        if(j===stan || j===ollie){
            salida[j] = initial[j]
        }else if(initial[j-1]!==undefined && initial[j+1]!==undefined){
            initial[j-1]===initial[j+1] ? salida[j]= initial[j-1]: 
            initial[j] === (initial[j-1]+initial[j+1])/2 | 0 ? 
            initial[j] === Math.max(initial[j-1],initial[j+1]) ? salida[j] = initial[j] : 
            initial[j] < Math.max(initial[j-1],initial[j+1]) ? salida[j]=initial[j]+1 : salida[j]=initial[j]-1 :
            initial[j] < (initial[j-1]+initial[j+1])/2 | 0 ? salida[j]=initial[j]+1 : salida[j]=initial[j]-1
        }else{
            salida[j]=initial[j-1]??initial[j+1]
        }
    }

    initial=[...salida]

    console.log(initial)
}

