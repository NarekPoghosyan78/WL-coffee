import { useTranslation } from "react-i18next";

const AboutBadge = ({badge})=>{

    const {t} = useTranslation();

    return(
        <div className="w-[350px] h-[200px] bg-[var(--color5)] border-2 text-[var(--color1)] rounded-[30px] flex flex-col items-start justify-start gap-[5px] !p-[30px_15px]">
            <h2 className="text-[20px] font-bold">{t(badge.title)}</h2>
            <p className="text-[15px]">{t(badge.text)}</p>
        </div>
    )
}

export default AboutBadge;