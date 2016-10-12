import csjs from 'csjs';
import insertCss from 'insert-css';
import colors from '../../themes/colors';

interface ContainerStyles {
  /** main content container */
  container: string;
  textCentered: string;
  /** text with fancy highlight */
  glowingText: string;
  /** dark background with border */
  darkBg: string;
  /** elevate element using box-shadow */
  effect__elevate: string;
  /** hide element on mobile screen  */
  effect__hideOnTablet: string;
  /** show element on mobile screen  */
  effect__showOnTablet: string;
}

export const containerStyles: ContainerStyles = csjs`

  .textCentered {
    text-align: center;
  }
  .glowingText {
    color: ${colors.textColor};
    text-shadow: ${colors.textColor} 0 0 10px;
    white-space: nowrap;
  }
  .darkBg {
    border-radius: 5px;
    border: 1px solid ${colors.borderColor};
    background-color: ${colors.backgroundColor};
  }

  .effect__elevate {
    box-shadow: none;
    transition: box-shadow 0.6s ease-out;
  }
  .effect__elevate:hover {
    box-shadow: 0 6px 20px 0 ${colors.shadowColor};
  }

  .effect__hideOnTablet {
    margin: 0px 30px;
    opacity: 1;
    transition:
      margin 1s 0.5s,
      opacity 1s 0.5s;
  }

  .effect__showOnTablet {
    margin: 0px 50px;
    opacity: 0;
    transition:
      margin 1s,
      opacity 1s;
  }

  @media (max-width: 740px) {
    .effect__hideOnTablet {
      margin: 0px 50px;
      opacity: 0;
      transition:
      margin 1s,
      opacity 1s,
      box-shadow 0.5s linear;
    }

    .effect__showOnTablet {
      margin: 0px 30px;
      opacity: 1;
      transition:
        margin 1s 0.5s,
        opacity 1s 0.5s,
        box-shadow 0.5s linear;
    }
  }

`;

insertCss(csjs.getCss(containerStyles));
