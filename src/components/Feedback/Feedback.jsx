const Feedback = ({ feedback, positivePercent }) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      {positivePercent && <p>Positive: {positivePercent}%</p>}
    </div>
  )
}

export default Feedback;