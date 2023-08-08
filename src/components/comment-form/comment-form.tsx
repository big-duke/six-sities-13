import { useState } from 'react';
import StarsRating from './stars-rating';

type CommentData = {
  comment: string;
  rating: number;
}

const initCommentData: CommentData = { comment: '', rating: 0 };

function CommentForm(): JSX.Element {
  const [commentData, setCommentData] = useState(initCommentData);

  const setComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentData({ ...commentData, comment: event.target.value });
  };

  const setRating = (event: React.MouseEvent<HTMLInputElement>) => setCommentData({ ...commentData, rating: Number(event.currentTarget.value) });

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <StarsRating setRating={setRating} />
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={commentData.comment} onChange={setComment} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>);
}
export default CommentForm;
