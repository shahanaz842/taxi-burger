import { formatDistanceToNow } from "date-fns";

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  const { message, date } = feedback;

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-4">
      
      {/* Message */}
      <p className="text-neutral-200 leading-relaxed">
        {message}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Date */}
        <span className="text-xs text-neutral-500">
          {formatDistanceToNow(new Date(date), { addSuffix: true })}
        </span>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            // onClick={() => onUpdate(feedback)}
            className="px-4 py-1.5 text-sm rounded-md border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black transition"
          >
            Update
          </button>

          <button
            // onClick={() => onDelete(feedback)}
            className="px-4 py-1.5 text-sm rounded-md border border-red-600 text-red-400 hover:bg-red-600 hover:text-white transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
