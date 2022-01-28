const addBtn = document.querySelector('#add-btn');

const exerciseNameInp = document.querySelector('#exercise-name');
const repsInp = document.querySelector('#reps');
const weightInp = document.querySelector('#weight');
const setsInp = document.querySelector('#sets');
const restInp = document.querySelector('#rest');
const dateInp = document.querySelector('#date');

const exercisesDiv = document.querySelector('#exercises');
const workoutsDiv = document.querySelector('#workouts');

const sortByInp = document.querySelector('#sort-by');

let sortBy = sortByInp.value;

sortByInp.addEventListener('change', (e) => {
    sortBy = sortByInp.value;
});

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const exerciseName = exerciseNameInp.value;
    const reps = repsInp.value;
    const weight = weightInp.value;
    const sets = setsInp.value;
    const rest = restInp.value;
    const date = dateInp.value;

    if(exerciseName.length < 1 || reps.length < 1 || reps.length < 1 || weight.length < 1 || sets.length < 1 || rest.length < 1 || date.length < 1) return

    const newDiv = document.createElement('div');
    const newTitle = document.createElement('h1');

    // Creates the Exercise Title
    newTitle.textContent = exerciseName;
    newDiv.appendChild(newTitle);

    // Creates the Reps Group
    newDiv.appendChild(createWorkoutGroup('Reps', reps));

    // Creates the Weight group
    newDiv.appendChild(createWorkoutGroup('Weight', weight));

    // Creates the Sets group
    newDiv.appendChild(createWorkoutGroup('Sets', sets));

    // Creates the Rest group
    newDiv.appendChild(createWorkoutGroup('Rest', rest));

    // Creates the Date group
    newDiv.appendChild(createWorkoutGroup('Date', date));

    newDiv.classList.add('workout')

    workouts.appendChild(newDiv);

    console.log(newDiv);

    if (exercisesDiv.classList.contains('hide')) {
        exercisesDiv.classList.remove('hide');
    }

    updateExercises();
    
    updateInput(exerciseNameInp, exerciseName)
    updateInput(repsInp, reps)
    updateInput(weightInp, weight)
    updateInput(setsInp, sets)
    updateInput(restInp, rest)
    updateInput(dateInp, date)
});
