const exerciseSelector = () => {
  let exerciseOfDay = "";

  const setExerciseOfDay = (exerciseName) => {
    if (exerciseName) {
      exerciseOfDay = exerciseName;
      console.log("Exercise of the day set to:", exerciseOfDay);
    } else {
      console.log("Today's exercise:", exerciseOfDay);
    }
  };

  return setExerciseOfDay;
};

const exercise = exerciseSelector();

exercise("Running");
console.log(exercise());
exercise("Swimming");
console.log(exercise());
exercise("Dancing");
console.log(exercise());

exercise("Fencing");
console.log(exercise());
