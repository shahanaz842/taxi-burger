import Image from "next/image";
import { useState } from "react";

const ReviewCard = ({ rev, currentUserEmail }) => {
  const {
    user,
    email,
    photo,
    rating,
    review,
    likes,
    date,
  } = rev;

  const [liked, setLiked] = useState(likes.includes(currentUserEmail));
  const [likeCount, setLikeCount] = useState(likes.length);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-4">

      {/* Header */}
      <div className="flex items-center gap-4">
        {/* <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover border border-neutral-700"
        /> */}
        <Image
          width={56}
          height={56}
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover border border-neutral-700"></Image>

        <div className="flex-1">
          <h4 className="text-white font-semibold">{user}</h4>
          <p className="text-xs text-neutral-400">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>

        {/* Rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-sm ${i < rating ? "text-amber-400" : "text-neutral-600"
                }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="text-neutral-300 leading-relaxed">
        {review}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 text-sm font-medium transition ${liked
              ? "text-amber-400"
              : "text-neutral-400 hover:text-white"
            }`}
        >
          ❤️ Like
        </button>

        <span className="text-xs text-neutral-500">
          {likeCount} {likeCount === 1 ? "like" : "likes"}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
