import Link from "next/link";

const SideLink = ({
   path,
   containersStyle,
   icon,
}: {
   path: string;
   containersStyle?: string;
   icon?: React.ReactNode;
}) => {
   return (
      <Link
         href={`/${path}`}
         className={`flex items-center gap-3s text-sm text-primary font-medium capitalize ${containersStyle}`}
      >
         {icon && icon}
         {path}
      </Link>
   );
};

export default SideLink;
