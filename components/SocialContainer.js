import SocialLink from "./SocialLink";
import styles from "../styles/modules/SocialContainer.module.css";
import github from "../public/images/social/github.svg";
import dribbble from "../public/images/social/dribbble.svg";
import linkedin from "../public/images/social/linkedin.svg";
const SocialContainer = () => {
  return (
    <div className={styles.SocialContainer}>
      <SocialLink
        socialKey="github"
        href="https://github.com/maximilianhagerf"
        alt="test"
        icon={github}
      />
      <SocialLink
        socialKey="dribbble"
        href="https://dribbble.com/captain_green"
        alt="test"
        icon={dribbble}
      />
      <SocialLink
        socialKey="linkedin"
        href="https://www.linkedin.com/in/maximilianhagerf/"
        alt="test"
        icon={linkedin}
      />
    </div>
  );
};

export default SocialContainer;
