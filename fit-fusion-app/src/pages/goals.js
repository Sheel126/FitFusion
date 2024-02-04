// Importing React and other needed modules
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
// Importing the CSS module
import styles from './goals.module.css';
import { useRouter } from 'next/router';


// Placeholder function for fetching user data, replace this with your actual data fetching mechanism


const fetchUserData = () => {
  // This should be an API call or context/consumer from React context for user data

  return {
    weight: 150, // in pounds
    height: 68, // in inches
    age: 25,
    gender: 'male'
  };
};

// Function to calculate recommended water intake in ounces
const calculateWaterIntake = (weight) => {
  // A common recommendation is to drink half your body weight in ounces
  return Math.round(weight / 2);
};

// Function to calculate recommended calorie intake using US units
const calculateCalorieIntake = (weight, height, age, gender) => {
  // Converts to kg and cm for BMR calculation
  const weightInKg = weight / 2.205;
  const heightInCm = height * 2.54;
  let BMR;
  if (gender === 'male') {
    BMR = 88.362 + (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * age);
  } else {
    BMR = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * age);
  }
  // Adjust based on user's activity level
  const activityLevel = 1.2;
  return Math.round(BMR * activityLevel);
};

// Function to calculate recommended sleep hours
const calculateSleepRecommendation = () => {
  // Simplified to a static value; adjust based on user's age if necessary
  return 8;
};

const Goals = () => {

    const router = useRouter();
    const { user } = router.query;
    let userObj = user ? JSON.parse(user) : null;
    userObj = {
        ...userObj,
        goals: {
            totalCalories: 0,
            totalWater: 0,
            waterIntake: 0,
            calories: 0,
            sleep: 0
        }
    };
    console.log(userObj);

  const userData = fetchUserData();
  const [goals, setGoals] = useState({
    waterIntake: calculateWaterIntake(userData.weight),
    sleepHours: calculateSleepRecommendation(),
    calorieIntake: calculateCalorieIntake(userData.weight, userData.height, userData.age, userData.gender),
  });

  // Update the slider state when a slider is moved
  const handleSliderChange = (field, value) => {
    setGoals(prevGoals => ({ ...prevGoals, [field]: Number(value) }));
  };

  // Submit the goals
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle saving the goals to a database or state management system
    console.log('Submitted Goals:', goals);
  };

  return (
    <>
      <Head>
        <title>Set Your Goals</title>
      </Head>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.goalsForm}>
          <label htmlFor="waterIntake" className={styles.formLabel}>Water Intake Goal (ounces): {goals.waterIntake}</label>
          <input
            id="waterIntake"
            type="range"
            min="0"
            max="200"
            value={goals.waterIntake}
            className={styles.rangeInput}
            onChange={(e) => handleSliderChange('waterIntake', e.target.value)}
          />
          <label htmlFor="sleepHours" className={styles.formLabel}>Sleep Hours Goal: {goals.sleepHours}</label>
          <input
            id="sleepHours"
            type="range"
            min="4"
            max="12"
            value={goals.sleepHours}
            className={styles.rangeInput}
            onChange={(e) => handleSliderChange('sleepHours', e.target.value)}
          />
          <label htmlFor="calorieIntake" className={styles.formLabel}>Calorie Intake Goal: {goals.calorieIntake}</label>
          <input
            id="calorieIntake"
            type="range"
            min="1200"
            max="4000"
            value={goals.calorieIntake}
            className={styles.rangeInput}
            onChange={(e) => handleSliderChange('calorieIntake', e.target.value)}
          />
          <button type="submit" className={styles.submitButton}>Save Goals</button>
        </form>
      </div>
    </>
  );
};

export default Goals;