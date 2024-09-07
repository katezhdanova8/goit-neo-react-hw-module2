import css from './Options.module.css';

const Options = ({ updateFeedback, showReset, onReset }) => {
  return (
    <div className={css.Options}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {showReset && 
        <button onClick={onReset}>Reset</button>
        }
    </div>
  )
}

export default Options;