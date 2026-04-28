
import { cn } from '../../lib/utils';   

const SliderDots = ({ 
  totalSteps = 4, 
  currentStep = 0, 
  onDotClick, 
  className 
}) => {
  return (
    <div className={cn("flex items-center mt-4 justify-center gap-2", className)}>
      {[...Array(totalSteps)].map((_, index) => {
        const isActive = index === currentStep;
        
        return (
            
          <button
            key={index}
            onClick={() => onDotClick?.(index)}
            className={cn(
              // Umumiy stillar
              "h-3 transition-all duration-300 ease-in-out rounded-full focus:outline-none",
              
              // Faol holat: uzunroq va yashil
              isActive 
                ? "w-10 bg-[#009688]" 
                : "w-3 bg-slate-200 hover:bg-slate-300"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        );
      })}
    </div>
  );
};

export default SliderDots;






