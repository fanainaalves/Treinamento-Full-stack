import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required/>
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
        
        <label className="radio-container">
          <input type="radio" value="neutral" name="review" checked={DataTransfer.review === "neutral"} onChange={}/>
          <BsFillEmojiNeutralFill/>
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" checked={DataTransfer.review === "satisfied"} onChange={}/>
          <BsFillEmojiSmileFill/>
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="very-satisfied" name="review" checked={DataTransfer.review === "very-satisfied"} onChange={}/>
          <BsFillEmojiHeartEyesFill/>
          <p>Muito Satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="cooment" id="comment" placeholder="Conte como foi a sua experiência com o produto.." value={data.comment || ""}></textarea>
      </div>
    </div>
  )
}

export default ReviewForm