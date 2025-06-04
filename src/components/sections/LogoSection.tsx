 import { logoIconsList } from "../../constants"

const LogoIcon = ({ icon }: { icon: { imgPath: string } }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} />
        </div>
    )
}
const LogoSection = () => {
    return (
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge"></div>
            <div className="gradient-edge"></div>
            <div className="marquee h-52">
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((item, index) => (
                        <LogoIcon key={index} icon={item} />
                    ))}
                    {logoIconsList.map((item, index) => (
                        <LogoIcon key={index} icon={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LogoSection