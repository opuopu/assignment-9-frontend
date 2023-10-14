import { ActionButtonProps } from "@/types";

const ActionButton = ({
   containerStyles,
   children,
   handleAction,
}: ActionButtonProps) => {
   return (
      <button
         className={`px-5 py-1  ${containerStyles}`}
         onClick={handleAction}
      >
         {children}
      </button>
   );
};

export default ActionButton;
