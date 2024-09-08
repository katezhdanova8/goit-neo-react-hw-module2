import { useEffect, useState } from 'react';
import css from './App.module.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

const defaultFeedback = {
  good: 0,
  neutral: 0,
  bad: 0
};

const localStorageKey = 'feedback';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem(localStorageKey);
    return savedFeedback ? JSON.parse(savedFeedback) : defaultFeedback;
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercent = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(feedback));
  }, [feedback]);

  const handleReset = () => {
    setFeedback(defaultFeedback);
  }

  const handleUpdateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <div className={css.App}>
      <Description />
      <Options
        showReset={!!totalFeedback}
        onReset={handleReset}
        updateFeedback={handleUpdateFeedback}
      />
      {!!totalFeedback
        ? (
          <Feedback
            feedback={feedback}
            positivePercent={positivePercent}
          />
        )
        : (
          <Notification />
        )}
    </div>
  )
}

export default App
