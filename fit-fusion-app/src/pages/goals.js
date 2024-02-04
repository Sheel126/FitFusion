// Importing React and other needed modules
import React, {useState} from'react';
import Head from 'next/head';

//Importing the CSS module (I will create later)
import styles from './goals.module.css';
import { useRouter } from 'next/router';

// Golas page component 
const Goals = () => {
    const [goals, setGoals] = useState([
        'Lose 10 pounds',
        'Run a 5K',
        'Gym 3 times a week',
        'Eat 5 servings of fruits and vegetables daily'
    ]);
    const router = useRouter();
    const { user } = router.query;
    const userObj = user ? JSON.parse(user) : null;
    return (
        <>
            <Head>
                <title>FitFusion Goals</title>
                <meta name="descriptions" content="Set and track your fitness goals" />
            </Head>
            <div className ={styles.goalsContainer}>
                <h1 className={styles.title}>Your Fitness Goals</h1>
                <u1 className={styles.goalList}>
                    {goals.map((goal, index) => (
                        <li key={index} className={styles.goalItem}>{goal}</li>
                    ))}
                </u1>
            </div>        
        </>

    );
};

export default Goals;

