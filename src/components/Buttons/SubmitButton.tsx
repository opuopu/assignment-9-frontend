/* eslint-disable react/prop-types */

import { SubmitButtonProps } from "@/types";

const SubmitButton = ({
   text,
   containerStyles,
   disabled,
}: SubmitButtonProps) => {
   return (
      <button
         className={` px-3 rounded-full text-base py-1 bg-primary  ${
            disabled ? "cursor-not-allowed bg-red-500" : "cursor-pointer"
         } ${containerStyles}`}
         disabled={disabled}
      >
         {text}
      </button>
   );
};

export default SubmitButton;
