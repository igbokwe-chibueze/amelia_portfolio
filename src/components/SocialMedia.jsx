import { TwitterIcon, InstagramIcon } from "../constants/icons"

const SocialMedia = () => {
  
  return (
    <div className="social-links">
      <a href="https://twitter.com/Amelia_olu" target="_blank" rel="noreferrer">
        <div className="social-links-icons">
          <TwitterIcon className={"py-0.5 wide-desktop:w-14 wide-desktop:h-14"}/>
        </div>
      </a>

      <a href="https://www.instagram.com/amelia_olufowobi/" target="_blank" rel="noreferrer">
        <div className="social-links-icons">
          <InstagramIcon className={"py-0.5 wide-desktop:w-14 wide-desktop:h-14"}/>
        </div>
      </a>

      <a href="https://www.instagram.com/amelia_olufowobi/" target="_blank" rel="noreferrer">
        <div className="social-links-icons">
          <InstagramIcon className={"py-0.5 wide-desktop:w-14 wide-desktop:h-14"}/>
        </div>
      </a>  
    </div>
  )
}

export default SocialMedia