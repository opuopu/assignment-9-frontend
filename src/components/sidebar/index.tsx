const SideBar = ({ isOpen }: { isOpen: boolean }) => {
   return (
      <div
         className={`w-[250px] duration-500 transition-all    top-0 h-screen bg-white  shadow-[2px_2px_2px_2px_#ddd]  ${
            isOpen ? "  left-0 " : " absolute -left-[999px] "
         }`}
         
      ></div>
   );
};

export default SideBar;
