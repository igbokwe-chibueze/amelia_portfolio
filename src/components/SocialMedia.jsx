import { TwitterIcon, InstagramIcon } from "../constants/icons"

const SocialMedia = () => {
  return (
    <div className="social-links">
        <div className="social-links-icons">
            <TwitterIcon className={"p-0.5 wide-desktop:w-14 wide-desktop:h-14"}/>
        </div>
        <div className="social-links-icons">
            <InstagramIcon className={"p-0.5 wide-desktop:w-14 wide-desktop:h-14"}/>
        </div>
        <div className="social-links-icons">
            <InstagramIcon className={"p-0.5 wide-desktop:w-14 wide-desktop:h-14"}/>
        </div>
    </div>
  )
}

export default SocialMedia