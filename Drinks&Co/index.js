function getName(person) {
    if (JSON.stringify(person) ===  JSON.stringify({ name: 'Maria' }) ) {
        return 'hey Maria'
    } else {
        return 'hey Raynold'
    }
}

    console.log(getName({ name: 'Maria' }))