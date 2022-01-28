function updateExercises() {
    switch (sortBy) {
        case 'date':
            console.log('You want to see the newest workout');
            break;
        case 'weight':
            console.log('You want to see if you are strong');
            break;
        case 'sets':
            console.log('You want to the workout wirh the most sets');
            break;
        case 'reps':
            console.log('You want to the workout wirh the most reps');
            break;
        default:
            console.log(
                'Something is wrong. Please restart the website and try again'
            );
    }
}

function createWorkoutGroup(category, data) {
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const group = document.createElement('div');
    group.classList.add('group');

    h2.textContent = category;
    group.appendChild(h2);

    p.textContent = String(data);
    group.appendChild(p);

    return group;
}
