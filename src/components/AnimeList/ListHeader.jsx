import Link from "next/link"

const Header = ({title, linkTitle, linkHref}) => {
    return (
        <div className="p-4 flex justify-between items-end">
            <h2 className="text-xl font-bold text-a-primary">{title}</h2>

            {linkTitle && linkHref? 
                <Link 
                href={linkHref} 
                className="md:text-base text-sm underline 
                        text-a-primary hover:text-a-accent 
                        transition-all font-bold">
                    {linkTitle} &gt;&gt;
                </Link>
            :
                null
            }
        </div>
    )
}

export default Header