


const OpinionCard = ({ testimonial }) => (
    <div className="w-[400px] p-6 border border-neutral-700 rounded-xl flex-shrink-0">
      <img src={testimonial.image} alt={testimonial.user} className="w-10 h-10 rounded-full mb-4" />
      <p className="text-sm font-semibold">{testimonial.user}</p>
      <p className="text-xs dark:text-neutral-400 text-black ">{testimonial.city}</p>
      <p className="mt-4 text-[12px]  dark:text-neutral-400text-black">{testimonial.text}</p>
    </div>
  );
  
  export default OpinionCard;
  